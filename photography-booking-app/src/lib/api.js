import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  serverTimestamp,
  runTransaction,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

/** --- Config --- */
const OPEN_MIN  = 9 * 60 + 30;   // 09:30 -> 570
const CLOSE_MIN = 21 * 60 + 30;  // 21:30 -> 1290

// Safety window: block bookings that START within this window around requested start
const BUFFER_BEFORE_MIN = 90;
const BUFFER_AFTER_MIN  = 90;

/** --- Helpers --- */
function toLocalDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm]  = timeStr.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}
function minutesFromHHMM(hhmm) {
  const [hh, mm] = hhmm.split(":").map(Number);
  return hh * 60 + mm;
}
function isWithinBusinessHours(timeStr) {
  const m = minutesFromHHMM(timeStr);
  return m >= OPEN_MIN && m <= CLOSE_MIN;
}
function isThirtyMinuteIncrement(timeStr) {
  const mm = Number(timeStr.split(":")[1] || 0);
  return mm % 30 === 0;
}
function addMinutes(date, min) {
  return new Date(date.getTime() + min * 60 * 1000);
}
/** Parse pkg.duration like "60–90 min", "3 hours", "60 min" → minutes (first number) */
function parseDurationMinutes(pkg) {
  if (!pkg || typeof pkg.duration !== "string") return 60;
  const s = pkg.duration.toLowerCase().trim().replace(/\s+/g, " ");
  const nums = s.match(/\d+/g);
  if (!nums || nums.length === 0) return 60;
  const n = Number(nums[0]);
  return s.includes("hour") ? n * 60 : n;
}

/** Call Netlify function to send emails (non-blocking) */
async function fireConfirmationEmail(bookingPayload) {
  try {
    await fetch("/.netlify/functions/send-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booking: bookingPayload }),
    });
  } catch {
    // don't block UI on email failures; check Netlify logs if needed
  }
}

/** --- Public API --- */

/**
 * Check if a slot is free with a safety buffer.
 * NOTE: This checks for conflicting *starts* within buffer window.
 * Pass the selected package so we can validate end time vs hours.
 */
export async function checkAvailability({ date, time, pkg }) {
  try {
    if (!date || !time) return { available: false, reason: "Missing date/time" };

    // 30-min grid only
    if (!isThirtyMinuteIncrement(time)) {
      return { available: false, reason: "Please choose a :00 or :30 time." };
    }

    // start within business hours
    if (!isWithinBusinessHours(time)) {
      return { available: false, reason: "Outside hours (09:30–21:30)" };
    }

    // end within business hours (derived from package duration)
    const start = toLocalDate(date, time);
    const durationMin = parseDurationMinutes(pkg);
    const end = addMinutes(start, durationMin);
    const endHHMM = `${String(end.getHours()).padStart(2, "0")}:${String(end.getMinutes()).padStart(2, "0")}`;
    if (!isWithinBusinessHours(endHHMM)) {
      return { available: false, reason: "Outside hours (09:30–21:30)" };
    }

    // buffer around requested start
    const windowStart = new Date(start.getTime() - BUFFER_BEFORE_MIN * 60 * 1000);
    const windowEnd   = new Date(start.getTime() + BUFFER_AFTER_MIN  * 60 * 1000);

    const qy = query(
      collection(db, "bookings"),
      where("startAt", ">=", Timestamp.fromDate(windowStart)),
      where("startAt", "<=", Timestamp.fromDate(windowEnd)),
      where("status", "in", ["pending", "confirmed"])
    );

    const snap = await getDocs(qy);
    const conflict = !snap.empty;

    return { available: !conflict, reason: conflict ? "Conflicts with another session" : null };
  } catch (err) {
    console.error("checkAvailability error:", err);
    return { available: false, reason: "Availability check failed" };
  }
}

/**
 * Submit a booking that matches Firestore rules (top-level keys are fixed)
 * and includes optional creative-brief fields inside `details`.
 */
export async function submitBooking({ pkg, date, time, details }) {
  try {
    // Availability + hours validation
    const avail = await checkAvailability({ date, time, pkg });
    if (!avail.available) return { ok: false, error: avail.reason || "Not available" };

    // Validate required shapes
    if (!pkg || typeof pkg.id !== "string" || typeof pkg.name !== "string" ||
        typeof pkg.price !== "number" || typeof pkg.duration !== "string") {
      return { ok: false, error: "Invalid package format" };
    }
    if (!details || typeof details.name !== "string" || typeof details.email !== "string" ||
        typeof details.phone !== "string" || typeof details.location !== "string") {
      return { ok: false, error: "Missing contact details" };
    }

    const start = toLocalDate(date, time);
    const reference = Math.random().toString(36).slice(2, 8).toUpperCase();
    const bookingsCol = collection(db, "bookings");
    const newDocRef = doc(bookingsCol);

    await runTransaction(db, async (tx) => {
      // re-check conflict inside transaction
      const windowStart = new Date(start.getTime() - BUFFER_BEFORE_MIN * 60 * 1000);
      const windowEnd   = new Date(start.getTime() + BUFFER_AFTER_MIN  * 60 * 1000);
      const qy = query(
        bookingsCol,
        where("startAt", ">=", Timestamp.fromDate(windowStart)),
        where("startAt", "<=", Timestamp.fromDate(windowEnd)),
        where("status", "in", ["pending", "confirmed"])
      );
      const snap = await getDocs(qy);
      if (!snap.empty) throw new Error("Conflicts with another session");

      // Build details with optional creative-brief fields
      const fullDetails = {
        name: details.name,
        email: details.email,
        phone: details.phone,
        location: details.location,
      };
      // Attach optional fields if present (rules allow extra keys inside `details`)
      if (details.shootFor) fullDetails.shootFor = String(details.shootFor);
      if (details.style) fullDetails.style = String(details.style);
      if (details.locationNotes) fullDetails.locationNotes = String(details.locationNotes);
      if (details.notes) fullDetails.notes = String(details.notes);

      tx.set(newDocRef, {
        reference,
        status: "pending",
        package: {
          id: pkg.id,
          name: pkg.name,
          price: pkg.price,
          duration: pkg.duration,
        },
        date,                     // "YYYY-MM-DD"
        time,                     // "HH:mm"
        startAt: Timestamp.fromDate(start),
        details: fullDetails,
        createdAt: serverTimestamp(),
      });
    });

    // Fire-and-forget email
    fireConfirmationEmail({
      id: newDocRef.id,
      reference,
      status: "pending",
      package: { ...pkg },
      details: { ...details },
      date,
      time,
    });

    return { ok: true, id: newDocRef.id, reference };
  } catch (err) {
    console.error("submitBooking error:", err);
    const msg = err?.message || "Failed to submit booking";
    if (msg.includes("Conflicts with another session")) {
      return { ok: false, error: "Conflicts with another session" };
    }
    return { ok: false, error: msg };
  }
}
