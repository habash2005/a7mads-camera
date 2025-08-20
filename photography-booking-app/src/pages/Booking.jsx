// src/pages/Booking.jsx
import React, { useMemo, useState } from "react";
import { checkAvailability, submitBooking } from "../lib/api";
import { Helmet } from "react-helmet-async"
/* -------------------------------- Services -------------------------------- */
const SERVICES = [
  {
    id: "events",
    name: "Events",
    duration: "2 hours",
    desc: "Concerts, celebrations, and gatherings",
  },
  {
    id: "branding",
    name: "Branding",
    duration: "60 min",
    desc:
      "For business owners and creatives who want photos that showcase their personality and work",
  },
  {
    id: "portraits",
    name: "Portraits + Milestones",
    duration: "45–60 min",
    desc:
      "Seniors, milestone, and personal portraits (casual or styled)",
  },
  {
    id: "couples",
    name: "Couples",
    duration: "60 min",
    desc:
      "For partners wanting to celebrate love and shared moments",
  },
];

/* ----------------------------- Time utilities ----------------------------- */
const OPEN_MIN = 9 * 60 + 30;   // 09:30
const CLOSE_MIN = 21 * 60 + 30; // 21:30
function buildTimes() {
  const out = [];
  for (let m = OPEN_MIN; m <= CLOSE_MIN; m += 30) {
    const hh = String(Math.floor(m / 60)).padStart(2, "0");
    const mm = String(m % 60).padStart(2, "0");
    out.push(`${hh}:${mm}`);
  }
  return out;
}
const TIME_OPTS = buildTimes();
function to12h(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = ((h + 11) % 12) + 1;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}
function cls(...xs) { return xs.filter(Boolean).join(" "); }

/* ----------------------------- Small UI helpers --------------------------- */
function ChipBtn({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-burgundy/30 px-3 py-1 text-xs font-medium text-charcoal/80 hover:bg-gold/20 hover:border-gold/60 transition-colors"
    >
      {children}
    </button>
  );
}
function SectionTitle({ children, sub }) {
  return (
    <div className="mb-2">
      <h4 className="font-semibold text-burgundy">{children}</h4>
      {sub && <p className="text-xs text-charcoal/70 mt-0.5">{sub}</p>}
    </div>
  );
}

/* --------------------------------- Page ----------------------------------- */
export default function Booking() {

  <Helmet>
        <title>Lama Wafa | Raleigh, NC Photographer</title>
        <meta
          name="description"
          content="Lama is a Palestinian photographer based in Raleigh, NC, specializing in events, milestones, and personal portraits." />
        <link rel="canonical" href="https://lamawafa.com/" />
      </Helmet>

  const [step, setStep] = useState(0);

  // Selected service (price hidden in UI; 0 passed to API to satisfy validator)
  const [selected, setSelected] = useState({ ...SERVICES[0], price: 0 });

  // Date & time + availability
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [checking, setChecking] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [err, setErr] = useState("");

  // Core + extras
  const [details, setDetails] = useState({
    name: "", email: "", phone: "", location: "Studio",
    shootFor: "", locationNotes: "", notes: "",
    contactPref: "", bestContactTime: "", instagram: "", howHeard: "",
    peopleCount: "", organization: "", venueName: "", venueAddress: "",
    city: "", state: "", zip: "", indoorOutdoor: "", rainPlan: "",
    accessibility: "", shotList: "", moodboard: "", deadline: "",
    deliverables: "", usage: "", serviceOccasion: "",
  });

  // Submit
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const canNext0 = !!selected?.id;
  const canNext1 = !!date && !!time && availability === true;
  const canNext2 =
    details.name.trim() &&
    details.email.trim() &&
    details.phone.trim() &&
    details.location.trim();

  // (Kept for future use if you add chips later; currently unused in UI)
  const shootForSuggestions = useMemo(() => {
    switch (selected.id) {
      case "branding":
        return ["Website refresh", "Social content", "Team headshots", "Product launch"];
      case "events":
        return ["Birthday", "Engagement party", "Corporate mixer", "Baby shower"];
      case "couples":
        return ["Anniversary", "Proposal", "Save-the-date", "Casual session"];
      default:
        return ["Senior portraits", "Personal portraits", "Creative concept", "Portfolio update"];
    }
  }, [selected.id]);

  /* ------------------------- Availability check -------------------------- */
  async function doCheck() {
    setErr("");
    setAvailability(null);
    if (!date || !time) return;
    setChecking(true);
    const res = await checkAvailability({
      date,
      time,
      pkg: { id: selected.id, name: selected.name, price: 0, duration: selected.duration },
    });
    setAvailability(res.available);
    if (!res.available && res.reason) setErr(res.reason);
    setChecking(false);
  }

  /* ----------------------------- Submit flow ----------------------------- */
  function mergedNotesPayload(d) {
    const lines = [];
    if (d.contactPref)     lines.push(`Preferred contact: ${d.contactPref}`);
    if (d.bestContactTime) lines.push(`Best time to reach: ${d.bestContactTime}`);
    if (d.instagram)       lines.push(`Instagram: ${d.instagram}`);
    if (d.howHeard)        lines.push(`How they heard: ${d.howHeard}`);
    if (d.serviceOccasion) lines.push(`Occasion: ${d.serviceOccasion}`);
    if (d.organization)    lines.push(`Organization/School: ${d.organization}`);
    if (d.peopleCount)     lines.push(`People/Guests: ${d.peopleCount}`);
    const locBits = [];
    if (d.venueName)    locBits.push(`Venue: ${d.venueName}`);
    if (d.venueAddress) locBits.push(`Address: ${d.venueAddress}`);
    const cityStateZip = [d.city, d.state, d.zip].filter(Boolean).join(", ");
    if (cityStateZip)   locBits.push(`City/State/Zip: ${cityStateZip}`);
    if (d.indoorOutdoor)locBits.push(`Indoor/Outdoor: ${d.indoorOutdoor}`);
    if (d.rainPlan)     locBits.push(`Rain backup: ${d.rainPlan}`);
    if (d.accessibility)locBits.push(`Accessibility: ${d.accessibility}`);
    if (locBits.length) lines.push(locBits.join(" | "));
    if (d.shotList)  lines.push(`Shot list: ${d.shotList}`);
    if (d.moodboard) lines.push(`Mood board: ${d.moodboard}`);
    if (d.deadline)  lines.push(`Deadline/Needed by: ${d.deadline}`);
    if (d.deliverables) lines.push(`Deliverables: ${d.deliverables}`);
    if (d.usage)       lines.push(`Usage (branding): ${d.usage}`);
    if (d.notes) lines.push(`Notes: ${d.notes}`);
    return lines.join("\n");
  }

  async function confirm() {
    if (submitting) return;
    setSubmitting(true);
    try {
      const { name, email, phone, location, shootFor } = details;

      const locNoteLines = [];
      if (details.venueName)    locNoteLines.push(`Venue: ${details.venueName}`);
      if (details.venueAddress) locNoteLines.push(`Address: ${details.venueAddress}`);
      if (details.city || details.state || details.zip) {
        locNoteLines.push(`City/State/Zip: ${[details.city, details.state, details.zip].filter(Boolean).join(", ")}`);
      }
      if (details.indoorOutdoor) locNoteLines.push(`Indoor/Outdoor: ${details.indoorOutdoor}`);
      if (details.rainPlan)      locNoteLines.push(`Rain backup: ${details.rainPlan}`);
      if (details.accessibility) locNoteLines.push(`Accessibility: ${details.accessibility}`);

      const sendDetails = {
        name, email, phone, location,
        shootFor: shootFor || selected.name,
        locationNotes: [details.locationNotes || "", ...locNoteLines].filter(Boolean).join("\n"),
        notes: mergedNotesPayload(details),
      };

      const res = await submitBooking({
        pkg: { id: selected.id, name: selected.name, price: 0, duration: selected.duration },
        date, time, details: sendDetails,
      });

      if (!res?.ok) throw new Error(res?.error || "Failed to submit booking");

      if (res.reference) localStorage.setItem("clientRef", res.reference);
      setResult(res);
    } catch (e) {
      console.error(e);
      alert(e.message || "We couldn’t submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStep(0);
    setSelected({ ...SERVICES[0], price: 0 });
    setDate("");
    setTime("");
    setAvailability(null);
    setDetails({
      name: "", email: "", phone: "", location: "Studio",
      shootFor: "", locationNotes: "", notes: "",
      contactPref: "", bestContactTime: "", instagram: "", howHeard: "",
      peopleCount: "", organization: "", venueName: "", venueAddress: "",
      city: "", state: "", zip: "", indoorOutdoor: "", rainPlan: "",
      accessibility: "", shotList: "", moodboard: "", deadline: "",
      deliverables: "", usage: "", serviceOccasion: "",
    });
    setSubmitting(false);
    setResult(null);
    setErr("");
  }

  /* -------------------------------- Render -------------------------------- */
  return (
    <section id="booking" className="w-full py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">
              Book a Session
            </h2>
          </div>
          <SimpleStepper step={step} />
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-burgundy/20 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 md:p-6 backdrop-blur-sm">
          {/* Step 0: Service selection */}
          {step === 0 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-burgundy">Choose a service</h3>
              <p className="text-sm text-charcoal/70 mt-1">
                We’ll tailor the session to your goals. You can add notes later.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((s) => {
                  const active = s.id === selected.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelected({ ...s, price: 0 })}
                      className={cls(
                        "text-left rounded-2xl border p-4 transition-all focus:outline-none focus:ring-2 focus:ring-gold",
                        active
                          ? "border-burgundy bg-burgundy/5 shadow"
                          : "border-burgundy/20 hover:border-gold/60 hover:shadow"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-charcoal">{s.name}</div>
                        <span
                          className={cls(
                            "text-[11px] font-semibold rounded-full px-2 py-0.5 ring-1",
                            active
                              ? "bg-wine text-white ring-wine"
                              : "bg-gold/15 text-charcoal ring-gold/40"
                          )}
                        >
                          {s.duration}
                        </span>
                      </div>

                      {s.desc && (
                        <p className="mt-2 text-sm text-charcoal/70">
                          {s.desc}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setStep(1)}
                  disabled={!canNext0}
                  className={cls(
                    "rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                    canNext0 ? "bg-wine text-white hover:bg-maroon" : "bg-burgundy/10 text-charcoal/50 cursor-not-allowed"
                  )}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-burgundy">Pick date &amp; time</h3>
              <p className="text-sm text-charcoal/70 mt-1">Sessions run between 9:30 AM and 9:30 PM.</p>

              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-charcoal">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-burgundy/20 focus:border-burgundy focus:ring-gold/40 px-3 py-2 bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal">Time</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-burgundy/20 focus:border-burgundy focus:ring-gold/40 px-3 py-2 bg-white"
                  >
                    <option value="">— Select time —</option>
                    {TIME_OPTS.map((t) => (
                      <option key={t} value={t}>{to12h(t)}</option>
                    ))}
                  </select>
                  {err && availability === false && <div className="text-xs text-wine mt-1">{err}</div>}
                </div>

                <div className="flex items-end">
                  <button
                    onClick={doCheck}
                    disabled={!date || !time || checking}
                    className={cls(
                      "w-full rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                      !date || !time || checking ? "bg-burgundy/10 text-charcoal/50 cursor-not-allowed" : "bg-wine text-white hover:bg-maroon"
                    )}
                  >
                    {checking ? "Checking..." : "Check Availability"}
                  </button>
                </div>
              </div>

              {availability === true && <p className="mt-3 text-sm text-emerald-700">✅ Slot available. You can proceed.</p>}
              {availability === false && <p className="mt-3 text-sm text-wine">❌ That time conflicts. Try a different one.</p>}

              <div className="mt-6 flex justify-between">
                <button className="text-sm underline text-charcoal/70 hover:text-burgundy" onClick={() => setStep(0)}>← Back</button>
                <button
                  onClick={() => setStep(2)}
                  disabled={!canNext1}
                  className={cls(
                    "rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                    canNext1 ? "bg-wine text-white hover:bg-maroon" : "bg-burgundy/10 text-charcoal/50 cursor-not-allowed"
                  )}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Details (Simplified) */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-burgundy">Your details</h3>

              {/* Contact basics */}
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-charcoal">Full name</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Email</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.email}
                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Phone</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.phone}
                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Preferred contact</label>
                  <select
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.contactPref}
                    onChange={(e) => setDetails({ ...details, contactPref: e.target.value })}
                  >
                    <option value="">— Select —</option>
                    <option>Email</option>
                    <option>Text</option>
                    <option>Call</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Best time to reach you</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.bestContactTime}
                    onChange={(e) => setDetails({ ...details, bestContactTime: e.target.value })}
                    placeholder="e.g., Weekdays after 5pm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal">Instagram (optional)</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.instagram}
                    onChange={(e) => setDetails({ ...details, instagram: e.target.value })}
                    placeholder="@yourhandle"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-charcoal">How did you hear about me?</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Instagram", "TikTok", "Google", "Friend/Family", "Other"].map((opt) => (
                      <ChipBtn key={opt} onClick={() => setDetails((d) => ({ ...d, howHeard: opt }))}>
                        {opt}
                      </ChipBtn>
                    ))}
                  </div>
                  <input
                    className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                    value={details.howHeard}
                    onChange={(e) => setDetails({ ...details, howHeard: e.target.value })}
                    placeholder="Tell me more (optional)"
                  />
                </div>
              </div>

              {/* Location & logistics */}
              <div className="mt-8">
                <SectionTitle sub="If unsure, you can leave these blank for now.">Location & logistics</SectionTitle>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal">Location</label>
                    <select
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.location}
                      onChange={(e) => setDetails({ ...details, location: e.target.value })}
                    >
                      <option>Studio</option>
                      <option>Client Location</option>
                      <option>Outdoors</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">Venue name (optional)</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.venueName}
                      onChange={(e) => setDetails({ ...details, venueName: e.target.value })}
                      placeholder="Venue, campus, park, etc."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-charcoal">Address (optional)</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.venueAddress}
                      onChange={(e) => setDetails({ ...details, venueAddress: e.target.value })}
                      placeholder="Street address"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">City</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.city}
                      onChange={(e) => setDetails({ ...details, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">State</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.state}
                      onChange={(e) => setDetails({ ...details, state: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">Zip</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.zip}
                      onChange={(e) => setDetails({ ...details, zip: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal">Indoor or Outdoor?</label>
                    <select
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.indoorOutdoor}
                      onChange={(e) => setDetails({ ...details, indoorOutdoor: e.target.value })}
                    >
                      <option value="">— Select —</option>
                      <option>Indoor</option>
                      <option>Outdoor</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-charcoal">Rain/weather plan (optional)</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.rainPlan}
                      onChange={(e) => setDetails({ ...details, rainPlan: e.target.value })}
                      placeholder="Backup date, alternate indoor space, etc."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-charcoal">Accessibility needs (optional)</label>
                    <textarea
                      rows={2}
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.accessibility}
                      onChange={(e) => setDetails({ ...details, accessibility: e.target.value })}
                      placeholder="Parking, mobility access, sensory considerations, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Creative inputs */}
              <div className="mt-8">
                <SectionTitle>Creative preferences</SectionTitle>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-charcoal">Must-have shots (optional)</label>
                    <textarea
                      rows={3}
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.shotList}
                      onChange={(e) => setDetails({ ...details, shotList: e.target.value })}
                      placeholder="List key people/moments, product angles, groupings, etc."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-charcoal">Mood board / inspiration link</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.moodboard}
                      onChange={(e) => setDetails({ ...details, moodboard: e.target.value })}
                      placeholder="Pinterest/Drive/Notion link"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-charcoal">Anything else to share?</label>
                    <textarea
                      rows={3}
                      className="mt-2 w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
                      value={details.notes}
                      onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                      placeholder="Wardrobe ideas, sensitivities, specific requests, etc."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button className="text-sm underline text-charcoal/70 hover:text-burgundy" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!canNext2}
                  className={cls(
                    "rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                    canNext2 ? "bg-wine text-white hover:bg-maroon" : "bg-burgundy/10 text-charcoal/50 cursor-not-allowed"
                  )}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-burgundy">Review &amp; confirm</h3>

              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border border-burgundy/20 bg-burgundy/5">
                  <h4 className="font-semibold text-charcoal">Summary</h4>
                  <ul className="mt-2 text-sm text-charcoal/80 space-y-1">
                    <li>Service: <span className="font-medium text-burgundy">{selected.name}</span></li>
                    <li>Date &amp; Time: <span className="font-medium">{date || "—"} {time ? to12h(time) : ""}</span></li>
                    <li>Estimated duration: {selected.duration}</li>
                    <li>Location: {details.location}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-burgundy/20 bg-burgundy/5">
                  <h4 className="font-semibold text-charcoal">Contact &amp; brief</h4>
                  <ul className="mt-2 text-sm text-charcoal/80 space-y-1">
                    <li>Name: {details.name || "—"}</li>
                    <li>Email: {details.email || "—"}</li>
                    <li>Phone: {details.phone || "—"}</li>
                    {details.shootFor && <li>Shoot: {details.shootFor}</li>}
                    {(details.locationNotes || details.venueName || details.venueAddress || details.city || details.state || details.zip) && (
                      <li>Location notes will be included.</li>
                    )}
                    {(details.notes || details.shotList || details.moodboard || details.deadline || details.deliverables) && (
                      <li>Creative preferences will be included.</li>
                    )}
                  </ul>
                </div>
              </div>

              {!result ? (
                <div className="mt-6 flex justify-between">
                  <button className="text-sm underline text-charcoal/70 hover:text-burgundy" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button
                    onClick={confirm}
                    disabled={submitting}
                    className="rounded-full px-5 py-3 text-sm font-semibold shadow-soft bg-gold text-charcoal hover:bg-wine hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    {submitting ? "Submitting..." : "Confirm Booking"}
                  </button>
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-burgundy/20 p-4 bg-burgundy/5">
                  <p className="font-semibold text-charcoal">🎉 Booking requested!</p>
                  <p className="text-sm text-charcoal/80 mt-1">
                    Your reference: <span className="font-mono text-burgundy">{result.reference}</span>.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => navigator.clipboard?.writeText(result.reference)}
                      className="rounded-full px-4 py-2 text-xs font-semibold border border-burgundy/30 text-charcoal hover:bg-gold/20 hover:border-gold/60 transition-colors"
                    >
                      Copy reference
                    </button>
                    <button
                      onClick={reset}
                      className="rounded-full px-5 py-3 text-sm font-semibold bg-wine text-white hover:bg-maroon transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
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

/* -------------------------------- Stepper --------------------------------- */
function SimpleStepper({ step }) {
  const items = ["Service", "Date & Time", "Details", "Review"];
  return (
    <div className="hidden md:flex items-center gap-2 text-xs">
      {items.map((label, i) => {
        const done = step > i;
        const active = step === i;
        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={cls(
                "w-6 h-6 rounded-full grid place-items-center font-semibold",
                done ? "bg-gold text-charcoal"
                     : active ? "bg-wine text-white"
                              : "bg-burgundy/10 text-charcoal/60"
              )}
              title={label}
            >
              {i + 1}
            </div>
            <span className={cls("uppercase tracking-wide", active ? "text-burgundy font-semibold" : "text-charcoal/60")}>
              {label}
            </span>
            {i < items.length - 1 && <span className="w-8 h-px bg-burgundy/15 mx-1" />}
          </div>
        );
      })}
    </div>
  );
}
