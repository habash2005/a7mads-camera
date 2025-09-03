// src/pages/Booking.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { checkAvailability, submitBooking } from "../lib/api";

/* ----------------------------- Content data ----------------------------- */
const SERVICES = [
  {
    id: "portraits",
    name: "Portraits",
    duration: "45–60 min",
    desc: "Clean, modern portraits for seniors and creatives.",
    image: "/home/portrait.jpg",
  },
  {
    id: "couples",
    name: "Couples",
    duration: "60 min",
    desc: "Celebrate your story with a relaxed session.",
    image: "/home/couples.jpg",
  },
  {
    id: "events",
    name: "Events",
    duration: "2 hours",
    desc: "Gatherings and concerts captured with clarity.",
    image: "/home/events.jpg",
  },
  {
    id: "branding",
    name: "Branding",
    duration: "60–90 min",
    desc: "Images for websites, products, and launches.",
    image: "/home/branding.jpg",
  },
];

/* ------------------------------- Utilities ------------------------------ */
const cls = (...xs) => xs.filter(Boolean).join(" ");
const OPEN_MIN = 9 * 60 + 30;
const CLOSE_MIN = 21 * 60 + 30;
const SLOTS = (() => {
  const out = [];
  for (let m = OPEN_MIN; m <= CLOSE_MIN; m += 30) {
    const h = Math.floor(m / 60);
    const mm = String(m % 60).padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    const hr12 = ((h + 11) % 12) + 1;
    out.push({ v: `${String(h).padStart(2, "0")}:${mm}`, label: `${hr12}:${mm} ${ampm}` });
  }
  return out;
})();
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/* ----------------------------- Small widgets ---------------------------- */
function StepBullet({ n, label, active, done }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={cls(
          "mt-0.5 grid h-7 w-7 place-items-center rounded-full text-[12px] font-bold",
          done
            ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
            : active
            ? "bg-[hsl(var(--accent))]/80 text-[hsl(var(--accent-foreground))]"
            : "bg-[hsl(var(--surface))] text-[hsl(var(--muted))] border border-[hsl(var(--border))]"
        )}
      >
        {n}
      </div>
      <div>
        <div className={cls("text-sm font-semibold", active ? "text-[hsl(var(--text))]" : "text-[hsl(var(--muted))]")}>
          {label}
        </div>
      </div>
    </div>
  );
}

function PrimaryBtn({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cls(
        "rounded-full px-5 py-3 text-sm font-semibold shadow-sm",
        "bg-[hsl(var(--accent))] text-[#0b0e11] ring-1 ring-[hsl(var(--accent-600))]",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-md transition"
      )}
    >
      {children}
    </button>
  );
}
function GhostBtn({ children, onClick, disabled, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cls(
        "rounded-full px-4 py-2 text-sm font-semibold border",
        "border-[hsl(var(--border))] bg-[hsl(var(--card))]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <div className="text-sm font-medium">{label}</div>
      <div className="mt-2">{children}</div>
      {hint && <div className="mt-1 text-[11px] text-[hsl(var(--muted))]">{hint}</div>}
    </label>
  );
}

/* --------------------------------- Page ---------------------------------- */
export default function Booking() {
  const [step, setStep] = useState(0);

  // selection
  const [service, setService] = useState({ ...SERVICES[0], price: 0 });

  // time
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState(null);
  const [avErr, setAvErr] = useState("");

  // details
  const [d, setD] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Studio",
    instagram: "",
    notes: "",
  });

  // submit
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  // smooth scroll to top on step change
  useEffect(() => {
    if (typeof window !== "undefined" && document) {
      const top = document.getElementById("booking-top");
      top?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const canStep1 = !!service?.id;
  const canStep2 = !!date && !!time && available === true;
  const canStep3 = d.name.trim() && d.email.trim() && d.phone.trim() && d.location.trim();

  /* ----------------------------- Availability ---------------------------- */
  async function runCheck() {
    setAvErr("");
    setAvailable(null);
    if (!date || !time) return;
    const sel = new Date(`${date}T${time}:00`);
    if (Number.isNaN(sel.getTime())) {
      setAvErr("Choose a valid date & time.");
      return;
    }
    if (sel.getTime() < Date.now()) {
      setAvErr("Please pick a future time.");
      return;
    }
    setChecking(true);
    try {
      const res = await checkAvailability({
        date,
        time,
        pkg: { id: service.id, name: service.name, price: 0, duration: service.duration },
      });
      setAvailable(!!res?.available);
      if (!res?.available && res?.reason) setAvErr(res.reason);
    } catch (e) {
      setAvailable(null);
      setAvErr("We couldn’t check that slot. Try again.");
    } finally {
      setChecking(false);
    }
  }

  /* -------------------------------- Submit ------------------------------- */
  async function confirm() {
    if (submitting) return;
    setSubmitting(true);
    try {
      const send = {
        pkg: { id: service.id, name: service.name, price: 0, duration: service.duration },
        date,
        time,
        details: {
          name: d.name,
          email: d.email,
          phone: d.phone,
          location: d.location,
          shootFor: service.name,
          notes: ["Instagram: " + (d.instagram || "—"), d.notes].filter(Boolean).join("\n"),
        },
      };
      const res = await submitBooking(send);
      if (!res?.ok) throw new Error(res?.error || "Failed to submit booking.");
      if (res.reference) localStorage.setItem("clientRef", res.reference);
      setResult(res);
    } catch (e) {
      alert(e.message || "Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStep(0);
    setService({ ...SERVICES[0], price: 0 });
    setDate("");
    setTime("");
    setAvailable(null);
    setAvErr("");
    setD({ name: "", email: "", phone: "", location: "Studio", instagram: "", notes: "" });
    setSubmitting(false);
    setResult(null);
  }

  /* ------------------------------ UI Layout ------------------------------ */
  return (
    <>
      <Helmet>
        <title>Book a Session — A7mads Camera</title>
        <meta
          name="description"
          content="Choose a service, pick a time, and share a few details. Clean light, honest moments, consistent results."
        />
      </Helmet>

      <div id="booking-top" />
      <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--bg))]">
        {/* header */}
        <div className="container-pro py-10 md:py-14">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight">Book a Session</h1>
              <p className="mt-2 text-[hsl(var(--muted))]">
                Sessions are relaxed and intentional—most dates confirm within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="container-pro pb-16">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* sidebar */}
            <aside className="lg:col-span-3">
              <div className="sticky top-20 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
                <nav className="space-y-4">
                  <StepBullet n={1} label="Service" active={step === 0} done={step > 0} />
                  <StepBullet n={2} label="Date & time" active={step === 1} done={step > 1} />
                  <StepBullet n={3} label="Details" active={step === 2} done={step > 2} />
                  <StepBullet n={4} label="Review" active={step === 3} done={step > 3} />
                </nav>

                {/* mini summary */}
                <div className="mt-6 text-xs rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3">
                  <div className="font-semibold">Summary</div>
                  <ul className="mt-1 space-y-1 text-[hsl(var(--muted))]">
                    <li>
                      Service: <span className="text-[hsl(var(--text))]">{service.name}</span>
                    </li>
                    <li>
                      When:{" "}
                      <span className="text-[hsl(var(--text))]">
                        {date || "—"} {time || ""}
                      </span>
                    </li>
                    <li>Location: {d.location || "—"}</li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* content */}
            <div className="lg:col-span-9">
              <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 md:p-6">
                {/* Step 0: Service */}
                {step === 0 && (
                  <div>
                    <h3 className="text-xl font-semibold">Choose a service</h3>
                    <div className="mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {SERVICES.map((s) => {
                        const active = service.id === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setService({ ...s, price: 0 })}
                            className={cls(
                              "group text-left overflow-hidden rounded-2xl border transition shadow-[0_10px_30px_rgba(0,0,0,0.05)]",
                              active
                                ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent-soft))]"
                                : "border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--accent))]"
                            )}
                          >
                            <div className="aspect-[4/3] overflow-hidden">
                              <img
                                src={s.image}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                              />
                            </div>
                            <div className="p-4">
                              <div className="flex items-center justify-between">
                                <h4 className="text-lg font-semibold">{s.name}</h4>
                                <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2.5 py-0.5 text-[11px] font-semibold">
                                  {s.duration}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-[hsl(var(--muted))]">{s.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                      <PrimaryBtn onClick={() => setStep(1)} disabled={!canStep1}>
                        Continue →
                      </PrimaryBtn>
                    </div>
                  </div>
                )}

                {/* Step 1: Date & time */}
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-semibold">Pick a date & time</h3>
                    <p className="mt-1 text-sm text-[hsl(var(--muted))]">
                      Availability runs from 9:30 AM to 9:30 PM.
                    </p>

                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                      <Field label="Date">
                        <input
                          type="date"
                          className="input w-full"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                            setAvailable(null);
                            setAvErr("");
                          }}
                          min={todayISO()}
                        />
                      </Field>

                      <Field label="Time">
                        <div className="grid grid-cols-2 gap-2">
                          <select
                            className="input col-span-2 sm:col-span-1"
                            value={time}
                            onChange={(e) => {
                              setTime(e.target.value);
                              setAvailable(null);
                              setAvErr("");
                            }}
                          >
                            <option value="">— Select —</option>
                            {SLOTS.map((s) => (
                              <option key={s.v} value={s.v}>
                                {s.label}
                              </option>
                            ))}
                          </select>

                          {/* quick chips */}
                          <div className="hidden sm:flex flex-wrap gap-2">
                            {["10:00", "13:30", "16:00", "18:30"].map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => {
                                  setTime(t);
                                  setAvailable(null);
                                  setAvErr("");
                                }}
                                className={cls(
                                  "rounded-full border px-2.5 py-1 text-[12px] font-semibold",
                                  time === t
                                    ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent-soft))]"
                                    : "border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent-soft))]"
                                )}
                              >
                                {(() => {
                                  const [h, m] = t.split(":").map(Number);
                                  const ampm = h >= 12 ? "PM" : "AM";
                                  const hour = ((h + 11) % 12) + 1;
                                  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
                                })()}
                              </button>
                            ))}
                          </div>
                        </div>
                      </Field>

                      <Field label=" " hint="">
                        <GhostBtn onClick={runCheck} disabled={!date || !time || checking} className="w-full">
                          {checking ? "Checking…" : "Check availability"}
                        </GhostBtn>
                      </Field>
                    </div>

                    {available === true && (
                      <div className="mt-3 text-sm text-emerald-700">✓ Slot available. You can continue.</div>
                    )}
                    {available === false && (
                      <div className="mt-3 text-sm text-rose-700">✕ That time conflicts. Try another.</div>
                    )}
                    {avErr && available === null && <div className="mt-3 text-sm text-rose-700">{avErr}</div>}

                    <div className="mt-6 flex justify-between">
                      <GhostBtn onClick={() => setStep(0)}>← Back</GhostBtn>
                      <PrimaryBtn onClick={() => setStep(2)} disabled={!canStep2}>
                        Continue →
                      </PrimaryBtn>
                    </div>
                  </div>
                )}

                {/* Step 2: Details */}
                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-semibold">Your details</h3>

                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <Field label="Full name">
                        <input
                          className="input w-full"
                          value={d.name}
                          onChange={(e) => setD({ ...d, name: e.target.value })}
                          placeholder="Your name"
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          className="input w-full"
                          value={d.email}
                          onChange={(e) => setD({ ...d, email: e.target.value })}
                          placeholder="you@example.com"
                        />
                      </Field>
                      <Field label="Phone">
                        <input
                          className="input w-full"
                          value={d.phone}
                          onChange={(e) => setD({ ...d, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                        />
                      </Field>
                      <Field label="Location">
                        <select
                          className="input w-full"
                          value={d.location}
                          onChange={(e) => setD({ ...d, location: e.target.value })}
                        >
                          <option>Studio</option>
                          <option>Client Location</option>
                          <option>Outdoors</option>
                        </select>
                      </Field>

                      <Field label="Instagram (optional)">
                        <input
                          className="input w-full"
                          value={d.instagram}
                          onChange={(e) => setD({ ...d, instagram: e.target.value })}
                          placeholder="@yourhandle"
                        />
                      </Field>
                      <div className="md:col-span-2">
                        <Field label="Notes (optional)">
                          <textarea
                            rows={4}
                            className="input w-full h-auto py-2"
                            value={d.notes}
                            onChange={(e) => setD({ ...d, notes: e.target.value })}
                            placeholder="Wardrobe ideas, access needs, references, etc."
                          />
                        </Field>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <GhostBtn onClick={() => setStep(1)}>← Back</GhostBtn>
                      <PrimaryBtn onClick={() => setStep(3)} disabled={!canStep3}>
                        Continue →
                      </PrimaryBtn>
                    </div>
                  </div>
                )}

                {/* Step 3: Review */}
                {step === 3 && (
                  <div>
                    <h3 className="text-xl font-semibold">Review & confirm</h3>

                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4">
                        <div className="text-sm text-[hsl(var(--muted))]">Service</div>
                        <div className="mt-1 text-lg font-semibold">{service.name}</div>
                        <div className="text-sm text-[hsl(var(--muted))]">{service.duration}</div>
                        <div className="mt-4 text-sm">
                          <span className="text-[hsl(var(--muted))]">Date & time: </span>
                          <span className="font-semibold">
                            {date} • {time}
                          </span>
                        </div>
                        <div className="mt-1 text-sm">
                          <span className="text-[hsl(var(--muted))]">Location: </span>
                          <span className="font-semibold">{d.location}</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4">
                        <div className="text-sm text-[hsl(var(--muted))]">Contact</div>
                        <ul className="mt-2 text-sm space-y-1">
                          <li>Name: {d.name || "—"}</li>
                          <li>Email: {d.email || "—"}</li>
                          <li>Phone: {d.phone || "—"}</li>
                          {d.instagram && <li>Instagram: {d.instagram}</li>}
                        </ul>
                        {d.notes && (
                          <>
                            <div className="mt-4 text-sm text-[hsl(var(--muted))]">Notes</div>
                            <p className="mt-1 text-sm whitespace-pre-wrap">{d.notes}</p>
                          </>
                        )}
                      </div>
                    </div>

                    {!result ? (
                      <div className="mt-6 flex justify-between">
                        <GhostBtn onClick={() => setStep(2)}>← Back</GhostBtn>
                        <PrimaryBtn onClick={confirm} disabled={submitting}>
                          {submitting ? "Submitting…" : "Confirm booking"}
                        </PrimaryBtn>
                      </div>
                    ) : (
                      <div className="mt-6 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4">
                        <p className="font-semibold">🎉 Booking requested!</p>
                        <p className="text-sm text-[hsl(var(--muted))] mt-1">
                          Your reference:{" "}
                          <span className="font-mono text-[hsl(var(--text))]">{result.reference}</span>
                        </p>
                        <div className="mt-4 flex gap-3">
                          <GhostBtn onClick={() => navigator.clipboard?.writeText(result.reference)}>
                            Copy reference
                          </GhostBtn>
                          <PrimaryBtn onClick={reset}>Book another</PrimaryBtn>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* accent strip */}
        <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
      </section>
    </>
  );
}
