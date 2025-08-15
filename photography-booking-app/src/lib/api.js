import { db } from "./firebase";
import {
  addDoc, collection, serverTimestamp,
  query, where, getDocs, Timestamp, orderBy
} from "firebase/firestore";

// Convert date + time → Firestore Timestamp
function toTimestamp(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  return Timestamp.fromDate(new Date(y, m - 1, d, hh, mm, 0));
}

// Check if time slot is available
export async function checkAvailability({ date, time }) {
  if (!date || !time) return { available: false };
  const startAt = toTimestamp(date, time);
  const windowMs = 90 * 60 * 1000; // 90 min
  const start = Timestamp.fromMillis(startAt.toMillis() - windowMs);
  const end   = Timestamp.fromMillis(startAt.toMillis() + windowMs);

  const q = query(
    collection(db, "bookings"),
    where("startAt", ">=", start),
    where("startAt", "<=", end),
    where("status", "in", ["pending","confirmed"])
  );
  const snap = await getDocs(q);
  return { available: snap.empty };
}

// Create booking
export async function submitBooking({ package: pkg, date, time, details }) {
  const startAt = toTimestamp(date, time);
  const doc = {
    reference: `BK-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    status: "pending",
    package: pkg,
    date, time, startAt,
    details,
    createdAt: serverTimestamp()
  };
  const ref = await addDoc(collection(db, "bookings"), doc);
  return { id: ref.id, reference: doc.reference };
}
