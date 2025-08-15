// src/lib/api.js
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  serverTimestamp,
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

/** --- Public API --- */

/**
 * Check if a slot is free with a safety buffer.
 * Unavailable if ANY booking starts within the buffer window and is not canceled.
 * NOTE: If you don't keep a "status" field, remove the `where("status","in",...)` line.
 */
export async function checkAvailability({ date, time }) {
  if (!date || !time) {
    return { available: false, reason: "Missing date/time" };
  }

  // Hard guard: 30-minute grid only
  if (!isThirtyMinuteIncrement(time)) {
    return { available: false, reason: "Please choose a :00 or :30 time." };
  }

  // Hard guard: within business hours
  if (!isWithinBusinessHours(time)) {
    return { available: false, reason: "Outside hours (09:30–21:30)" };
  }

  // Requested start (local)
  const start = toLocalDate(date, time);

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
  const conflict = snap.docs.length > 0;

  return {
    available: !conflict,
    reason: conflict ? "Conflicts with another session" : null,
  };
}

/**
 * Submit a booking after re-validating increments, hours, and conflicts.
 */
export async function submitBooking({ package: pkg, date, time, details }) {
  const { available, reason } = await checkAvailability({ date, time });
  if (!available) {
    return { ok: false, error: reason || "Not available" };
  }

  const start = toLocalDate(date, time);

  const docRef = await addDoc(collection(db, "bookings"), {
    package: pkg,
    date,
    time,
    startAt: Timestamp.fromDate(start),
    details,
    status: "pending",       // you can confirm/cancel in admin
    createdAt: serverTimestamp(),
    reference: Math.random().toString(36).slice(2, 8).toUpperCase(),
  });

  return { ok: true, id: docRef.id, reference: docRef.id.slice(-6).toUpperCase() };
}
