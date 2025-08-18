export async function submitBooking({ pkg, date, time, details }) {
  try {
    const avail = await checkAvailability({ date, time, pkg });
    if (!avail.available) return { ok: false, error: avail.reason || "Not available" };

    // Validate shapes
    if (!pkg || typeof pkg.id !== "string" || typeof pkg.name !== "string" ||
        typeof pkg.price !== "number" || typeof pkg.duration !== "string") {
      return { ok: false, error: "Invalid package format" };
    }
    if (!details || typeof details.name !== "string" || typeof details.email !== "string" ||
        typeof details.phone !== "string" || typeof details.location !== "string") {
      return { ok: false, error: "Missing contact details" };
    }

    const start = toLocalDate(date, time);
    const reference = Math.random().toString(36).slice(2, 10).toUpperCase();

    // (Optional) re-check conflicts here if you want:
    const windowStart = new Date(start.getTime() - BUFFER_BEFORE_MIN * 60 * 1000);
    const windowEnd   = new Date(start.getTime() + BUFFER_AFTER_MIN  * 60 * 1000);
    const qy = query(
      collection(db, "bookings"),
      where("startAt", ">=", Timestamp.fromDate(windowStart)),
      where("startAt", "<=", Timestamp.fromDate(windowEnd)),
      where("status", "in", ["pending", "confirmed"])
    );
    const snap = await getDocs(qy);
    if (!snap.empty) return { ok: false, error: "Conflicts with another session" };

    // Write booking
    const bookingsCol = collection(db, "bookings");
    const newDocRef = doc(bookingsCol);

    const fullDetails = {
      name: details.name,
      email: details.email,
      phone: details.phone,
      location: details.location,
    };
    if (details.shootFor)      fullDetails.shootFor = String(details.shootFor);
    if (details.style)         fullDetails.style = String(details.style);
    if (details.locationNotes) fullDetails.locationNotes = String(details.locationNotes);
    if (details.notes)         fullDetails.notes = String(details.notes);

    await import("firebase/firestore").then(({ setDoc }) =>
      setDoc(newDocRef, {
        reference,
        status: "pending",
        package: { id: pkg.id, name: pkg.name, price: pkg.price, duration: pkg.duration },
        date,
        time,
        startAt: Timestamp.fromDate(start),
        details: fullDetails,
        createdAt: serverTimestamp(),
      })
    );

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
