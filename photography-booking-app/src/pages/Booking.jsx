// src/pages/Booking.jsx
import React, { useState } from "react";
import Stepper from "../components/Stepper";
import PackageCard from "../components/PackageCard";
import { checkAvailability, submitBooking } from "../lib/api";

const PACKAGES = [
  { id: "portrait", name: "Portrait", price: 250, duration: "60–90 min", desc: "Clean, crisp portraits in studio or on location.", includes: ["Up to 2 outfits", "15 edited photos", "Online gallery"] },
  { id: "event",    name: "Event",    price: 700, duration: "3 hours",   desc: "Coverage for birthdays, engagements, and more.", includes: ["Candid + posed", "Next-day sneak peek", "Highlight reel add-on"] },
  { id: "wedding",  name: "Wedding",  price: 2200, duration: "8 hours",  desc: "Story-driven wedding coverage for your day.",    includes: ["Timeline planning", "Second shooter (optional)", "Album-ready edits"] },
];

/* ---------- Time helpers (30-minute slots only) ---------- */
const OPEN_MIN  = 9 * 60 + 30;   // 09:30
const CLOSE_MIN = 21 * 60 + 30;  // 21:30

function buildTimes() {
  const out = [];
  for (let m = OPEN_MIN; m <= CLOSE_MIN; m += 30) {
    const hh = String(Math.floor(m / 60)).padStart(2, "0");
    const mm = String(m % 60).padStart(2, "0");
    out.push(`${hh}:${mm}`); // "HH:mm"
  }
  return out;
}
function to12h(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = ((h + 11) % 12) + 1;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}
const TIME_OPTS = buildTimes();

/* ---------- Page ---------- */
export default function Booking() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(PACKAGES[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [checking, setChecking] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [err, setErr] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", location: "Studio" });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const canNext0 = !!selected;
  const canNext1 = !!date && !!time && availability === true;
  const canNext2 = details.name && details.email && details.phone;

  const doCheck = async () => {
    setErr("");
    setAvailability(null);
    if (!date || !time) return;

    setChecking(true);
    const res = await checkAvailability({ date, time });
    setAvailability(res.available);
    if (!res.available && res.reason) setErr(res.reason);
    setChecking(false);
  };

  const confirm = async () => {
    setSubmitting(true);
    const res = await submitBooking({ package: selected, date, time, details });
    setResult(res);
    setSubmitting(false);
  };

  const reset = () => {
    setStep(0);
    setSelected(PACKAGES[0]);
    setDate("");
    setTime("");
    setAvailability(null);
    setDetails({ name: "", email: "", phone: "", location: "Studio" });
    setSubmitting(false);
    setResult(null);
    setErr("");
  };

  return (
    <section id="booking" className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Book a Session</h2>
            <p className="text-charcoal/70 mt-1">
              Complete the steps to request your slot. <span className="text-rose/80">(Demo only—no emails are sent.)</span>
            </p>
          </div>
          <Stepper step={step} />
        </div>

        {/* Card */}
        <div className="glass p-5 md:p-6 rounded-2xl border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white/80">
          {step === 0 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">Choose a package</h3>
              <p className="text-charcoal/70 text-sm mt-1">
                You’ve selected <span className="font-semibold text-rose">{selected.name}</span>.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {PACKAGES.map((p) => (
                  <PackageCard key={p.id} p={p} selected={p.id === selected.id} onSelect={() => setSelected(p)} />
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setStep(1)}
                  disabled={!canNext0}
                  className={`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
                    canNext0 ? "bg-rose text-ivory hover:bg-gold hover:text-charcoal" : "bg-blush text-charcoal/50 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">Pick date &amp; time</h3>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="text-sm font-medium text-charcoal">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"
                  />
                </div>

                <div className="col-span-1">
                  <label className="text-sm font-medium text-charcoal">Time</label>
                  {/* Custom select enforces 30-min increments everywhere */}
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"
                  >
                    <option value="">— Select time —</option>
                    {TIME_OPTS.map((t) => (
                      <option key={t} value={t}>
                        {to12h(t)}
                      </option>
                    ))}
                  </select>
                  {err && availability === false && (
                    <div className="text-xs text-rose mt-1">{err}</div>
                  )}
                </div>

                <div className="col-span-1 flex items-end">
                  <button
                    onClick={doCheck}
                    disabled={!date || !time || checking}
                    className={`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
                      !date || !time || checking
                        ? "bg-blush text-charcoal/50 cursor-not-allowed"
                        : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
                    }`}
                  >
                    {checking ? "Checking..." : "Check Availability"}
                  </button>
                </div>
              </div>

              {availability === true && <p className="mt-3 text-sm text-green-700">✅ Slot available. You can proceed.</p>}
              {availability === false && (
                <p className="mt-3 text-sm text-red-700">❌ Sorry, that time is taken. {err ? `(${err})` : "Try a different time."}</p>
              )}

              <div className="mt-6 flex justify-between">
                <button className="text-sm underline text-charcoal/70 hover:text-rose" onClick={() => setStep(0)}>
                  ← Back
                </button>
                <button
                  onClick={() => setStep(2)}
                  disabled={!canNext1}
                  className={`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
                    canNext1 ? "bg-rose text-ivory hover:bg-gold hover:text-charcoal" : "bg-blush text-charcoal/50 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">Your details</h3>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-charcoal">Full name</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    placeholder="e.g., Lama NC"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Email</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"
                    value={details.email}
                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Phone</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"
                    value={details.phone}
                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Location</label>
                  <select
                    className="mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"
                    value={details.location}
                    onChange={(e) => setDetails({ ...details, location: e.target.value })}
                  >
                    <option>Studio</option>
                    <option>Client Location</option>
                    <option>Outdoors</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button className="text-sm underline text-charcoal/70 hover:text-rose" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!canNext2}
                  className={`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
                    canNext2 ? "bg-rose text-ivory hover:bg-gold hover:text-charcoal" : "bg-blush text-charcoal/50 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal">Review &amp; confirm</h3>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border border-rose/30 bg-blush/20">
                  <h4 className="font-semibold text-charcoal">Summary</h4>
                  <ul className="mt-2 text-sm text-charcoal/80 space-y-1">
                    <li>
                      Package: <span className="font-medium text-rose">{selected.name}</span> — ${selected.price}
                    </li>
                    <li>
                      Date &amp; Time: <span className="font-medium">{date || "—"} {time ? to12h(time) : ""}</span>
                    </li>
                    <li>Duration: {selected.duration}</li>
                    <li>Location: {details.location}</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-rose/30 bg-blush/20">
                  <h4 className="font-semibold text-charcoal">Contact</h4>
                  <ul className="mt-2 text-sm text-charcoal/80 space-y-1">
                    <li>Name: {details.name || "—"}</li>
                    <li>Email: {details.email || "—"}</li>
                    <li>Phone: {details.phone || "—"}</li>
                  </ul>
                </div>
              </div>

              {!result ? (
                <div className="mt-6 flex justify-between">
                  <button className="text-sm underline text-charcoal/70 hover:text-rose" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button
                    onClick={confirm}
                    disabled={submitting}
                    className="rounded-full px-5 py-3 text-sm font-semibold shadow-md bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all"
                  >
                    {submitting ? "Submitting..." : "Confirm Booking"}
                  </button>
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-rose/30 p-4 bg-blush/20">
                  <p className="font-semibold text-charcoal">🎉 Booking requested!</p>
                  <p className="text-sm text-charcoal/80 mt-1">
                    Your reference: <span className="font-mono text-rose">{result.reference}</span>.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={reset}
                      className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md"
                    >
                      Book Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
