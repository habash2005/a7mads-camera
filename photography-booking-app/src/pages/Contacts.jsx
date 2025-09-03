// src/pages/Contact.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // keep current behavior (no backend): just show success
    setSent(true);
  }

  return (
    <>
      <Helmet>
        <title>Contact | A7mad’s Camera</title>
        <meta
          name="description"
          content="Tell me about your project—date, location, and the look you’re after."
        />
        <link rel="canonical" href="https://a7madscamera.com/contact" />
      </Helmet>

      <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-16 md:py-24">
          <div className="badge mb-4">Let’s work together</div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Share your date, location, and vision.
          </h1>
          <p className="mt-2 text-[hsl(var(--muted))] max-w-prose">
            I’ll reply with availability and next steps. Typical response time: under 24 hours.
          </p>

          {!sent ? (
            <form onSubmit={onSubmit} className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:col-span-2">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="label" htmlFor="name">Your name</label>
                    <input id="name" name="name" className="input" placeholder="Jane Doe" required />
                  </div>
                  <div>
                    <label className="label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="input" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label className="label" htmlFor="date">Date (optional)</label>
                    <input id="date" name="date" type="date" className="input" />
                  </div>
                  <div>
                    <label className="label" htmlFor="location">Location (optional)</label>
                    <input id="location" name="location" className="input" placeholder="City or venue" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="label" htmlFor="message">Tell me about your project</label>
                    <textarea
                      id="message"
                      name="message"
                      className="textarea min-h-[140px]"
                      placeholder="What are you dreaming up? Style, vibe, must-have shots, budget, etc."
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button className="btn btn-primary">Send inquiry</button>
                  <a href="mailto:hello@a7mads.com" className="btn btn-ghost">Or email hello@a7mads.com</a>
                </div>
              </div>

              <aside className="md:col-span-2 grid gap-6 md:grid-cols-3">
                {[
                  ["Response time", "Usually within 24 hours"],
                  ["Availability", "Evenings & weekends fill fast"],
                  ["Travel", "NC statewide • simple travel fees"]
                ].map(([t, d]) => (
                  <div key={t} className="card p-6">
                    <h3 className="text-sm font-semibold">{t}</h3>
                    <p className="mt-2 text-sm text-[hsl(var(--muted))]">{d}</p>
                  </div>
                ))}
              </aside>
            </form>
          ) : (
            <div className="mt-10 card p-6">
              <div className="font-semibold">Thanks! I’ll get back to you shortly.</div>
              <p className="text-sm text-[hsl(var(--muted))] mt-1">
                Prefer email? Reach me at <a className="no-underline" href="mailto:hello@a7mads.com">hello@a7mads.com</a>.
              </p>
            </div>
          )}
        </div>

        {/* subtle accent strip */}
        <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
      </section>
    </>
  );
}
