// src/pages/Booking.jsx
import React, { useMemo, useState } from "react";
import { checkAvailability, submitBooking } from "../lib/api";
import { Helmet } from "react-helmet-async";

/* -------------------------------- Services -------------------------------- */
const SERVICES = [
  { id: "events",    name: "Events",                  duration: "2 hours",   desc: "Concerts, celebrations, and gatherings" },
  { id: "branding",  name: "Branding",                duration: "60 min",    desc: "Photo sets for websites, social, and launches" },
  { id: "portraits", name: "Portraits + Milestones",  duration: "45–60 min", desc: "Seniors, milestones, personal portraits" },
  { id: "couples",   name: "Couples",                 duration: "60 min",    desc: "Celebrate your story with a modern look" },
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
function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function cls(...xs) { return xs.filter(Boolean).join(" "); }

/* ----------------------------- Small UI helpers --------------------------- */
function ChipBtn({ children, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cls(
        "rounded-pill px-3 py-1 text-xs font-semibold transition-all border",
        active
          ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/15 text-[hsl(var(--text))]"
          : "border-[hsl(var(--border))] text-[hsl(var(--muted))] hover:bg-[hsl(var(--accent))]/12"
      )}
    >
      {children}
    </button>
  );
}
function SectionTitle({ children, sub }) {
  return (
    <div className="mb-2">
      <h4 className="text-lg font-semibold text-[hsl(var(--text))]">{children}</h4>
      {sub && <p className="text-xs text-[hsl(var(--muted))] mt-1">{sub}</p>}
    </div>
  );
}

/* --------------------------------- Page ----------------------------------- */
export default function Booking() {
  const [step, setStep] = useState(0);

  // Selected service (price hidden in UI; 0 passed to API to satisfy validator)
  const [selected, setSelected] = useState({ ...SERVICES[0], price: 0 });

  // Date & time + availability
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [checking, setChecking] = useState(false);
  const [availability, setAvailability] = useState(null); // true | false | null
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

    // Prevent checking a past datetime (simple guard)
    const now = new Date();
    const sel = new Date(`${date}T${time}:00`);
    if (isNaN(sel.getTime())) {
      setErr("Choose a valid date & time.");
      return;
    }
    if (sel < now) {
      setErr("Please pick a future date & time.");
      return;
    }

    setChecking(true);
    try {
      const res = await checkAvailability({
        date,
        time,
        pkg: { id: selected.id, name: selected.name, price: 0, duration: selected.duration },
      });
      setAvailability(!!res.available);
      if (!res.available && res.reason) setErr(res.reason);
    } catch (e) {
      console.error(e);
      setErr("We couldn’t check that slot right now. Please try again.");
      setAvailability(null);
    } finally {
      setChecking(false);
    }
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
    <>
      <Helmet>
        <title>A7mads Camera — Book a Session</title>
        <meta
          name="description"
          content="Book portraits, branding, or event photography with A7mads Camera. Clean light. Sharp detail. Consistent results."
        />
        <link rel="canonical" href="https://a7madscamera.com/#/booking" />
      </Helmet>

      <section id="booking" className="w-full border-y border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-16 md:py-24">
          {/* Header */}
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Book a Session</h2>
              <p className="text-sm text-[hsl(var(--muted))] mt-1">
                Choose a service, pick a time, and share a few details. I’ll confirm by email.
              </p>
            </div>
            <SimpleStepper step={step} />
          </div>

          {/* Card */}
          <div className="card p-5 md:p-6">
            {/* Step 0: Service selection */}
            {step === 0 && (
              <div>
                <h3 className="text-xl font-semibold">Choose a service</h3>

                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SERVICES.map((s) => {
                    const active = s.id === selected.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelected({ ...s, price: 0 })}
                        className={cls(
                          "text-left rounded-xl2 border p-4 transition-all focus:outline-none",
                          active
                            ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/15 shadow-soft"
                            : "border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/10"
                        )}
                        aria-pressed={active}
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">{s.name}</div>
                          <span
                            className={cls(
                              "text-[11px] font-semibold rounded-pill px-2 py-0.5 ring-1",
                              active
                                ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] ring-[hsl(var(--accent))]"
                                : "bg-[hsl(var(--surface))] text-[hsl(var(--text))] ring-[hsl(var(--border))]"
                            )}
                          >
                            {s.duration}
                          </span>
                        </div>

                        {s.desc && (
                          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
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
                      "btn btn-primary rounded-pill",
                      !canNext0 && "opacity-50 cursor-not-allowed"
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
                <h3 className="text-xl font-semibold">Pick date &amp; time</h3>
                <p className="text-sm text-[hsl(var(--muted))] mt-1">Sessions run between 9:30 AM and 9:30 PM.</p>

                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => { setDate(e.target.value); setAvailability(null); setErr(""); }}
                      className="input mt-2 w-full"
                      min={todayISO()}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Time</label>
                    <select
                      value={time}
                      onChange={(e) => { setTime(e.target.value); setAvailability(null); setErr(""); }}
                      className="input mt-2 w-full"
                    >
                      <option value="">— Select time —</option>
                      {TIME_OPTS.map((t) => (
                        <option key={t} value={t}>{to12h(t)}</option>
                      ))}
                    </select>
                    {err && availability === false && <div className="text-xs text-red-600 mt-1">{err}</div>}
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={doCheck}
                      disabled={!date || !time || checking}
                      className={cls(
                        "btn btn-ghost w-full",
                        (!date || !time || checking) && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {checking ? "Checking..." : "Check Availability"}
                    </button>
                  </div>
                </div>

                {availability === true && <p className="mt-3 text-sm text-green-600">✅ Slot available. You can proceed.</p>}
                {availability === false && <p className="mt-3 text-sm text-red-600">❌ That time conflicts. Try a different one.</p>}
                {!!err && availability === null && <p className="mt-3 text-sm text-red-600">{err}</p>}

                <div className="mt-6 flex justify-between">
                  <button className="text-sm underline text-[hsl(var(--muted))] hover:text-[hsl(var(--text))]" onClick={() => setStep(0)}>← Back</button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canNext1}
                    className={cls(
                      "btn btn-primary rounded-pill",
                      !canNext1 && "opacity-50 cursor-not-allowed"
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
                <h3 className="text-xl font-semibold">Your details</h3>

                {/* Contact basics */}
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <FormInput label="Full name" value={details.name} onChange={(v)=>setDetails({...details, name:v})} placeholder="Your name" />
                  <FormInput label="Email" value={details.email} onChange={(v)=>setDetails({...details, email:v})} placeholder="you@example.com" />
                  <FormInput label="Phone" value={details.phone} onChange={(v)=>setDetails({...details, phone:v})} placeholder="(555) 123-4567" />
                  <FormSelect label="Preferred contact" value={details.contactPref} onChange={(v)=>setDetails({...details, contactPref:v})} options={["Email","Text","Call"]} />
                  <FormInput label="Best time to reach you" value={details.bestContactTime} onChange={(v)=>setDetails({...details, bestContactTime:v})} placeholder="e.g., Weekdays after 5pm" />
                  <FormInput label="Instagram (optional)" value={details.instagram} onChange={(v)=>setDetails({...details, instagram:v})} placeholder="@yourhandle" />

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">How did you hear about me?</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Instagram", "TikTok", "Google", "Friend/Family", "Other"].map((opt) => (
                        <ChipBtn
                          key={opt}
                          active={details.howHeard === opt}
                          onClick={() => setDetails((d) => ({ ...d, howHeard: opt }))}
                        >
                          {opt}
                        </ChipBtn>
                      ))}
                    </div>
                    <input
                      className="input mt-2 w-full"
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
                    <FormSelect label="Location" value={details.location} onChange={(v)=>setDetails({...details, location:v})} options={["Studio","Client Location","Outdoors"]} />
                    <FormInput label="Venue name (optional)" value={details.venueName} onChange={(v)=>setDetails({...details, venueName:v})} placeholder="Venue, campus, park, etc." />
                    <div className="md:col-span-2">
                      <FormInput label="Address (optional)" value={details.venueAddress} onChange={(v)=>setDetails({...details, venueAddress:v})} placeholder="Street address" />
                    </div>
                    <FormInput label="City" value={details.city} onChange={(v)=>setDetails({...details, city:v})}/>
                    <FormInput label="State" value={details.state} onChange={(v)=>setDetails({...details, state:v})}/>
                    <FormInput label="Zip" value={details.zip} onChange={(v)=>setDetails({...details, zip:v})}/>
                    <FormSelect label="Indoor or Outdoor?" value={details.indoorOutdoor} onChange={(v)=>setDetails({...details, indoorOutdoor:v})} options={["Indoor","Outdoor","Both"]} />
                    <div className="md:col-span-2">
                      <FormInput label="Rain/weather plan (optional)" value={details.rainPlan} onChange={(v)=>setDetails({...details, rainPlan:v})} placeholder="Backup date, alternate indoor space, etc." />
                    </div>
                    <div className="md:col-span-2">
                      <FormText label="Accessibility needs (optional)" rows={2} value={details.accessibility} onChange={(v)=>setDetails({...details, accessibility:v})} placeholder="Parking, mobility access, sensory considerations, etc." />
                    </div>
                  </div>
                </div>

                {/* Creative inputs */}
                <div className="mt-8">
                  <SectionTitle>Creative preferences</SectionTitle>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <FormText label="Must-have shots (optional)" rows={3} value={details.shotList} onChange={(v)=>setDetails({...details, shotList:v})} placeholder="List key people/moments, product angles, groupings, etc." />
                    </div>
                    <div className="md:col-span-2">
                      <FormInput label="Mood board / inspiration link" value={details.moodboard} onChange={(v)=>setDetails({...details, moodboard:v})} placeholder="Pinterest/Drive/Notion link" />
                    </div>
                    <div className="md:col-span-2">
                      <FormText label="Anything else to share?" rows={3} value={details.notes} onChange={(v)=>setDetails({...details, notes:v})} placeholder="Wardrobe ideas, sensitivities, specific requests, etc." />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button className="text-sm underline text-[hsl(var(--muted))] hover:text-[hsl(var(--text))]" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canNext2}
                    className={cls(
                      "btn btn-primary rounded-pill",
                      !canNext2 && "opacity-50 cursor-not-allowed"
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
                <h3 className="text-xl font-semibold">Review &amp; confirm</h3>

                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div className="card p-4">
                    <h4 className="font-semibold">Summary</h4>
                    <ul className="mt-2 text-sm text-[hsl(var(--muted))] space-y-1">
                      <li>Service: <span className="font-medium text-[hsl(var(--text))]">{selected.name}</span></li>
                      <li>Date &amp; Time: <span className="font-medium text-[hsl(var(--text))]">{date || "—"} {time ? to12h(time) : ""}</span></li>
                      <li>Estimated duration: {selected.duration}</li>
                      <li>Location: {details.location}</li>
                    </ul>
                  </div>

                  <div className="card p-4">
                    <h4 className="font-semibold">Contact &amp; brief</h4>
                    <ul className="mt-2 text-sm text-[hsl(var(--muted))] space-y-1">
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
                    <button className="text-sm underline text-[hsl(var(--muted))] hover:text-[hsl(var(--text))]" onClick={() => setStep(2)}>
                      ← Back
                    </button>
                    <button
                      onClick={confirm}
                      disabled={submitting}
                      className={cls(
                        "btn btn-primary rounded-pill",
                        submitting && "opacity-70"
                      )}
                    >
                      {submitting ? "Submitting..." : "Confirm Booking"}
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 card p-4">
                    <p className="font-semibold">🎉 Booking requested!</p>
                    <p className="text-sm text-[hsl(var(--muted))] mt-1">
                      Your reference: <span className="font-mono text-[hsl(var(--text))]">{result.reference}</span>.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => navigator.clipboard?.writeText(result.reference)}
                        className="btn btn-ghost text-xs"
                      >
                        Copy reference
                      </button>
                      <button
                        onClick={reset}
                        className="btn btn-primary"
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

        {/* subtle accent strip */}
        <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
      </section>
    </>
  );
}

/* ---------------------------- Reusable fields ----------------------------- */
function FormInput({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        className="input mt-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
function FormText({ label, value, onChange, placeholder, rows = 3 }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        rows={rows}
        className="input mt-2 w-full h-auto py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
function FormSelect({ label, value, onChange, options = [] }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        className="input mt-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">— Select —</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
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
                done   ? "bg-[hsl(var(--accent))]  text-[hsl(var(--accent-foreground))]"
              : active ? "bg-[hsl(var(--accent))]/80 text-[hsl(var(--accent-foreground))]"
              : "bg-[hsl(var(--surface))] text-[hsl(var(--muted))] border border-[hsl(var(--border))]"
              )}
              title={label}
            >
              {i + 1}
            </div>
            <span className={cls("uppercase tracking-wide",
              active ? "text-[hsl(var(--text))] font-semibold" : "text-[hsl(var(--muted))]"
            )}>
              {label}
            </span>
            {i < items.length - 1 && <span className="w-8 h-px bg-[hsl(var(--border))] mx-1" />}
          </div>
        );
      })}
    </div>
  );
}
