import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl md:text-5xl">Let’s work together</h1>
      <p className="text-black/60 mt-2">Share your date, location, and what you’re dreaming up.</p>

      {!sent ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-8 grid gap-4"
        >
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Your name" required />
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Email" type="email" required />
          <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Date (optional)" />
          <textarea className="rounded-xl border border-black/10 px-4 py-3 min-h-32" placeholder="Tell me about your project" />
          <button className="rounded-full bg-charcoal text-ivory px-5 py-3 font-semibold hover:-translate-y-0.5 transition self-start">
            Send inquiry
          </button>
        </form>
      ) : (
        <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-6">
          <div className="font-semibold">Thanks! I’ll get back to you shortly.</div>
          <p className="text-sm text-black/60 mt-1">You can also email hello@a7madscamera.com.</p>
        </div>
      )}
    </section>
  );
}
