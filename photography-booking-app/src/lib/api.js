// src/lib/api.js
import {
  addDoc,
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
const OPEN_MIN  = 9 * 60 + 30;   // 09:30   -> 570
const CLOSE_MIN = 21 * 60 + 30;  // 21:30   -> 1290

// Safety window around requested start (in minutes)
const BUFFER_BEFORE_MIN = 90;    // block anything starting within 90 min before
const BUFFER_AFTER_MIN  = 90;    // and within 90 min after

/** --- Helpers --- */

/** Build a local Date from "YYYY-MM-DD" + "HH:mm" (24h) in the user's local TZ */
function toLocalDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm]  = timeStr.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

/** Minutes since midnight from "HH:mm" */
function minutesFromHHMM(hhmm) {
  const [hh, mm] = hhmm.split(":").map(Number);
  return hh * 60 + mm;
}

/** Is the time within 09:30–21:30 inclusive? */
function isWithinBusinessHours(timeStr) {
  const minutes = minutesFromHHMM(timeStr);
  return minutes >= OPEN_MIN && minutes <= CLOSE_MIN;
}

/** Exactly on :00 or :30 ? */
function isThirtyMinuteIncrement(timeStr) {
  const mm = Number(timeStr.split(":")[1] || 0);
  return mm % 30 === 0;
}

/** Add minutes to a Date */
function addMinutes(date, min) {
  return new Date(date.getTime() + min * 60 * 1000);
}

/** --- Public API --- */

/**
 * Check if a slot is free with a safety buffer.
 * Unavailable if ANY booking starts within the buffer window and is not canceled.
 * NOTE: If you don't keep a "status" field, remove the `where("status","in",...)` line.
 */
export async function checkAvailability({ date, time, durationMin = 60 }) {
  try {
    if (!date || !time) {
      return { available: false, reason: "Missing date/time" };
    }

    // Hard guard: 30-minute grid only
    if (!isThirtyMinuteIncrement(time)) {
      return { available: false, reason: "Please choose a :00 or :30 time." };
    }

    // Hard guard: within business hours (start AND end)
    if (!isWithinBusinessHours(time)) {
      return { available: false, reason: "Outside hours (09:30–21:30)" };
    }
    const start = toLocalDate(date, time);
    const end = addMinutes(start, durationMin);
    const endHH = String(end.getHours()).padStart(2, "0");
    const endMM = String(end.getMinutes()).padStart(2, "0");
    const endHHMM = `${endHH}:${endMM}`;
    if (!isWithinBusinessHours(endHHMM)) {
      return { available: false, reason: "Outside hours (09:30–21:30)" };
    }

    // Buffer window around requested start
    const windowStart = new Date(start.getTime() - BUFFER_BEFORE_MIN * 60 * 1000);
    const windowEnd   = new Date(start.getTime() + BUFFER_AFTER_MIN  * 60 * 1000);

    const bookingsCol = collection(db, "bookings");
    const qy = query(
      bookingsCol,
      where("startAt", ">=", Timestamp.fromDate(windowStart)),
      where("startAt", "<=", Timestamp.fromDate(windowEnd)),
      // Remove this line if you don't store a status field
      where("status", "in", ["pending", "confirmed"])
    );

    const snap = await getDocs(qy);
    const conflict = !snap.empty;

    return {
      available: !conflict,
      reason: conflict ? "Conflicts with another session" : null,
    };
  } catch (err) {
    console.error("checkAvailability error:", err);
    return { available: false, reason: "Availability check failed" };
  }
}

/**
 * Submit a booking after re-validating increments, hours, and conflicts.
 * Uses a transaction to prevent race conditions (two users booking the same slot).
 */
export async function submitBooking({ package: pkg, date, time, details, durationMin = 60 }) {
  try {
    // Re-validate fast
    const { available, reason } = await checkAvailability({ date, time, durationMin });
    if (!available) {
      return { ok: false, error: reason || "Not available" };
    }

    const start = toLocalDate(date, time);
    const reference = Math.random().toString(36).slice(2, 8).toUpperCase();
    const bookingsCol = collection(db, "bookings");
    const newDocRef = doc(bookingsCol); // create id now so we can return it deterministically

    await runTransaction(db, async (tx) => {
      // Re-check conflict INSIDE the transaction window
      const windowStart = new Date(start.getTime() - BUFFER_BEFORE_MIN * 60 * 1000);
      const windowEnd   = new Date(start.getTime() + BUFFER_AFTER_MIN  * 60 * 1000);

      const qy = query(
        bookingsCol,
        where("startAt", ">=", Timestamp.fromDate(windowStart)),
        where("startAt", "<=", Timestamp.fromDate(windowEnd)),
        // Remove this line if you don't store a status field
        where("status", "in", ["pending", "confirmed"])
      );

      const snap = await getDocs(qy);
      if (!snap.empty) {
        throw new Error("Conflicts with another session");
      }

      // Still clear: write the booking
      tx.set(newDocRef, {
        package: pkg,
        date,
        time,
        startAt: Timestamp.fromDate(start),
        durationMin,
        details,
        status: "pending",        // you can confirm/cancel in admin
        createdAt: serverTimestamp(),
        reference,                 // single source of truth
      });
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
