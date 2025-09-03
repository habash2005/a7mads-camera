import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { db } from "../lib/firebase";
import { collection, getDocs, limit as fbLimit, orderBy, query, where } from "firebase/firestore";

const cls = (...xs) => xs.filter(Boolean).join(" ");

export default function Home() {
  const [thumbs, setThumbs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const galSnap = await getDocs(
          query(collection(db, "galleries"), where("tag", "==", "portfolio"), fbLimit(1))
        );
        if (galSnap.empty) { setThumbs([]); return; }
        const gid = galSnap.docs[0].id;
        const imgsSnap = await getDocs(
          query(collection(db, `galleries/${gid}/images`), orderBy("createdAt", "desc"), fbLimit(8))
        );
        const rows = imgsSnap.docs.map((d) => d.data());
        if (alive) setThumbs(rows.map((r) => ({ id: r.public_id, src: r.secure_url, alt: r.original_filename || r.public_id })));
      } finally { if (alive) setLoading(false); }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <>
      <Helmet>
        <title>A7mads Camera — Modern, story-driven photography</title>
        <meta name="description" content="Editorial images with clean light and honest emotion. Portraits, couples, events, and brand work across North Carolina." />
        <link rel="canonical" href="https://a7madscamera.com/" />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-[hsl(var(--bg))]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:radial-gradient(900px_500px_at_70%_-10%,#000_0%,transparent_60%)]" />
        <div className="container-pro relative pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <header>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1 text-[11px] text-[hsl(var(--muted))]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" /> now booking
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl font-serif tracking-tight leading-[1.05]">
                Clean light. Honest moments. <span className="text-[hsl(var(--accent))]">Consistent</span> results.
              </h1>
              <p className="mt-3 text-[hsl(var(--muted))] max-w-prose">
                Modern, editorial images for people and brands. Sessions are relaxed and intentional—
                you’ll look and feel like yourself.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/booking" className="no-underline"><Primary>Book a session</Primary></Link>
                <Link to="/portfolio" className="no-underline"><Ghost>See portfolio</Ghost></Link>
              </div>
            </header>

            {/* Cinematic collage */}
            <div className="relative">
              <div className="hero-stack2">
                <img src="/hero/one.jpg" alt="" className="hero2 hero2--a" />
                <img src="/hero/two.jpg" alt="" className="hero2 hero2--b" />
                <img src="/hero/three.jpg" alt="" className="hero2 hero2--c" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16">
          <div className="mb-6 md:mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif tracking-tight">What I shoot</h2>
              <p className="mt-2 text-[hsl(var(--muted))]">Flexible sets for people, events, and small brands.</p>
            </div>
            <Link to="/booking" className="no-underline"><Ghost>Start a request</Ghost></Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                className={cls(
                  "group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))]",
                  "bg-[hsl(var(--card))] transition shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_38px_rgba(0,0,0,0.10)]"
                )}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted))]">{s.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2.5 py-0.5 text-[11px] font-semibold">
                      {s.duration}
                    </span>
                    <Link to="/booking" className="no-underline text-[13px] font-semibold hover:underline">Book →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[hsl(var(--bg))]">
        <div className="container-pro py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4 md:gap-6">
            {STEPS.map((st, i) => (
              <div key={st.title} className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5">
                <span className="absolute -right-6 -top-6 inline-grid h-16 w-16 place-items-center rounded-full bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-600))] font-extrabold">{i + 1}</span>
                <h3 className="text-lg font-semibold">{st.title}</h3>
                <p className="mt-2 text-sm text-[hsl(var(--muted))]">{st.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif tracking-tight">Recent work</h2>
              <p className="mt-2 text-[hsl(var(--muted))]">A few fresh frames from the portfolio.</p>
            </div>
            <Link to="/portfolio" className="no-underline"><Ghost>See all</Ghost></Link>
          </div>

          {loading ? (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] rounded-xl bg-[hsl(var(--card))] animate-pulse border border-[hsl(var(--border))]" />
              ))}
            </div>
          ) : thumbs.length ? (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {thumbs.map((t) => (
                <a key={t.id} href={t.src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]" title={t.alt}>
                  <img src={t.src} alt={t.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-6 text-sm text-[hsl(var(--muted))]">No images yet — add some in <code className="font-mono">/admin</code>.</div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-[hsl(var(--bg))]">
        <div className="container-pro py-12 md:py-16 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))]">
              <img src="/about.jpg" alt="Ahmad at work with camera" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-4xl font-serif tracking-tight">Hi, I’m Ahmad.</h2>
            <p className="mt-3 text-[hsl(var(--muted))] leading-relaxed">
              I create intimate, editorial imagery with a focus on honest moments and thoughtful detail.
              My approach blends documentary sensitivity with gentle direction—so you look and feel like yourself.
            </p>
            <p className="mt-3 text-[hsl(var(--muted))]">Based in North Carolina. Available statewide and for select travel.</p>
            <div className="mt-5 flex gap-3">
              <Link to="/booking" className="no-underline"><Primary>Check availability</Primary></Link>
              <a href="mailto:hello@a7mads.com" className="no-underline"><Ghost>Email me</Ghost></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight">Ready when you are.</h2>
          <p className="mt-2 text-[hsl(var(--muted))]">Tell me what you’re planning and I’ll follow up with times and simple next steps.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/booking" className="no-underline"><Primary>Start your booking</Primary></Link>
            <Link to="/faq" className="no-underline"><Ghost>FAQs</Ghost></Link>
          </div>
        </div>
      </section>

      {/* small styles for collage motion */}
      <style>{`
        .hero-stack2 { position: relative; height: 440px; }
        .hero2 {
          position: absolute; inset: 0; width: 64%; height: 74%;
          object-fit: cover; border-radius: 18px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.18);
          border: 1px solid hsl(var(--border));
          transition: transform 600ms ease, filter 600ms ease;
        }
        .hero2--a { left: -4%; top: 6%; transform: rotate(-4deg); }
        .hero2--b { right: -10%; top: 0%; transform: rotate(6deg); }
        .hero2--c { left: 18%; bottom: -4%; transform: rotate(1.5deg); width: 66%; height: 68%; }
        @media (hover:hover) {
          .hero-stack2:hover .hero2 { filter: brightness(0.96); }
          .hero-stack2:hover .hero2--a { transform: translateY(-4px) rotate(-5deg) scale(1.015); }
          .hero-stack2:hover .hero2--b { transform: translateY(-6px) rotate(8deg) scale(1.02); }
          .hero-stack2:hover .hero2--c { transform: translateY(-6px) rotate(2deg) scale(1.02); }
        }
        @media (prefers-reduced-motion: reduce) { .hero2 { transition: none; } }
      `}</style>
    </>
  );
}

/* Buttons */
function Primary({ children }) {
  return (
    <span
      className={cls(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        "bg-[hsl(var(--accent))] text-[#0b0e11] ring-1 ring-[hsl(var(--accent-600))]",
        "shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition"
      )}
    >
      {children} <span className="ml-2" aria-hidden>→</span>
    </span>
  );
}
function Ghost({ children }) {
  return (
    <span
      className={cls(
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold",
        "border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--accent-600))] hover:bg-[hsl(var(--accent-soft))] transition"
      )}
    >
      {children}
    </span>
  );
}

/* Data */
const SERVICES = [
  { id: "portraits", name: "Portraits", desc: "Clean, modern portraits for seniors, creatives, and milestones.", duration: "45–60 min", image: "/home/portrait.jpg" },
  { id: "couples", name: "Couples", desc: "Celebrate your story with a relaxed session and editorial finish.", duration: "60 min", image: "/home/couples.jpg" },
  { id: "events", name: "Events", desc: "Gatherings, concerts, and celebrations captured with energy and clarity.", duration: "2 hours", image: "/home/events.jpg" },
  { id: "branding", name: "Branding", desc: "Content for websites and launches—products, people, and spaces.", duration: "60–90 min", image: "/home/branding.jpg" },
];
const STEPS = [
  { title: "Tell me your plan", body: "Share your date, location ideas, and must-have moments." },
  { title: "Lock the details", body: "We’ll confirm timing, a small prep list, and a simple plan." },
  { title: "Shoot & deliver", body: "Relaxed session; selects delivered in a clean online gallery." },
];
