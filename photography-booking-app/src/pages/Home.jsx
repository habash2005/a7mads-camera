import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  limit as fbLimit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

/** small util */
const cls = (...xs) => xs.filter(Boolean).join(" ");

/**
 * Home — redesigned
 * - No ratings or stat counters
 * - Cinematic hero with understated motion (pure CSS / prefers-reduced-motion safe)
 * - Service tiles
 * - Approach / process
 * - Recent Work (reads first 8 portfolio images from Firestore)
 * - About strip
 * - Primary CTA
 */
export default function Home() {
  const [thumbs, setThumbs] = useState([]); // [{id, src, alt}]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      try {
        // find the "portfolio" gallery
        const galSnap = await getDocs(
          query(collection(db, "galleries"), where("tag", "==", "portfolio"), fbLimit(1))
        );
        if (galSnap.empty) {
          if (alive) setThumbs([]);
          return;
        }
        const gid = galSnap.docs[0].id;
        const imgsSnap = await getDocs(
          query(collection(db, `galleries/${gid}/images`), orderBy("createdAt", "desc"), fbLimit(8))
        );
        const rows = imgsSnap.docs.map((d) => d.data());
        if (alive) {
          setThumbs(
            rows.map((r) => ({
              id: r.public_id,
              src: r.secure_url,
              alt: r.original_filename || r.public_id,
            }))
          );
        }
      } catch {
        if (alive) setThumbs([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>A7mads Camera — Modern, story-driven photography</title>
        <meta
          name="description"
          content="Editorial images with honest emotion and clean light. Portraits, couples, events, and brand work across North Carolina."
        />
        <link rel="canonical" href="https://a7madscamera.com/" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[hsl(var(--bg))]">
        {/* soft vignette + grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background:radial-gradient(1200px_600px_at_60%_-10%,#000_0%,transparent_60%)]" />
        <div className="container-pro relative pt-14 md:pt-24 pb-10 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1 text-[11px] text-[hsl(var(--muted))]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                booking now open
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-[1.08] tracking-tight text-[hsl(var(--text))]">
                Clean light. <span className="text-[hsl(var(--accent))]">Honest</span> moments.
                Consistent results.
              </h1>
              <p className="mt-4 text-[hsl(var(--muted))] max-w-prose">
                I make modern, editorial images for people and brands. Sessions are relaxed and
                intentional so you look and feel like yourself.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/booking" className="no-underline">
                  <HeroButton>Book a session</HeroButton>
                </Link>
                <Link
                  to="/portfolio"
                  className="no-underline inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-4 py-2 text-sm font-semibold text-[hsl(var(--text))] hover:border-[hsl(var(--accent-600))] hover:bg-[hsl(var(--accent-soft))] transition"
                >
                  View portfolio <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Cinematic image collage */}
            <div className="relative">
              <div className="hero-stack">
                <img src="/hero/one.jpg" alt="" className="hero-card hero-card--a" />
                <img src="/hero/two.jpg" alt="" className="hero-card hero-card--b" />
                <img src="/hero/three.jpg" alt="" className="hero-card hero-card--c" />
              </div>
              <p className="sr-only">
                A layered collage of photos demonstrating clean, editorial lighting and candid moments.
              </p>
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
              <p className="mt-2 text-[hsl(var(--muted))]">
                Flexible sets for people, events, and small brands.
              </p>
            </div>
            <Link to="/booking" className="no-underline">
              <GhostButton>Start a request</GhostButton>
            </Link>
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
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted))]">{s.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2.5 py-0.5 text-[11px] font-semibold">
                      {s.duration}
                    </span>
                    <Link to="/booking" className="no-underline text-[13px] font-semibold hover:underline">
                      Book →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH / PROCESS */}
      <section className="bg-[hsl(var(--bg))]">
        <div className="container-pro py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4 md:gap-6">
            {STEPS.map((st, i) => (
              <div
                key={st.title}
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5"
              >
                <span className="absolute -right-6 -top-6 inline-grid h-16 w-16 place-items-center rounded-full bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-600))] font-extrabold">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{st.title}</h3>
                <p className="mt-2 text-sm text-[hsl(var(--muted))]">{st.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/faq" className="no-underline text-sm font-semibold hover:underline">
              Read FAQs →
            </Link>
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
            <Link to="/portfolio" className="no-underline">
              <GhostButton>See all</GhostButton>
            </Link>
          </div>

          {loading ? (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/5] rounded-xl bg-[hsl(var(--card))] animate-pulse border border-[hsl(var(--border))]"
                />
              ))}
            </div>
          ) : thumbs.length ? (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {thumbs.map((t) => (
                <a
                  key={t.id}
                  href={t.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
                  title={t.alt}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-6 text-sm text-[hsl(var(--muted))]">
              No images yet — add some in <code className="font-mono">/admin</code>.
            </div>
          )}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="relative bg-[hsl(var(--bg))]">
        <div className="container-pro py-12 md:py-16 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))]">
              <img
                src="/about.jpg"
                alt="Ahmad at work with camera"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-4xl font-serif tracking-tight">Hi, I’m Ahmad.</h2>
            <p className="mt-3 text-[hsl(var(--muted))] leading-relaxed">
              I create intimate, editorial imagery with a focus on honest moments and thoughtful
              detail. My approach blends documentary sensitivity with gentle direction—so you look
              and feel like yourself.
            </p>
            <p className="mt-3 text-[hsl(var(--muted))]">
              Based in North Carolina. Available statewide and for select travel.
            </p>
            <div className="mt-5 flex gap-3">
              <Link to="/booking" className="no-underline">
                <HeroButton>Check availability</HeroButton>
              </Link>
              <a href="mailto:hello@a7mads.com" className="no-underline">
                <GhostButton>Email me</GhostButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight">
            Ready when you are.
          </h2>
          <p className="mt-2 text-[hsl(var(--muted))]">
            Tell me what you’re planning and I’ll follow up with times and simple next steps.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/booking" className="no-underline">
              <HeroButton>Start your booking</HeroButton>
            </Link>
            <Link to="/faq" className="no-underline">
              <GhostButton>FAQs</GhostButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Local styles for subtle motion & collage (no external deps) */}
      <style>{`
        .hero-stack { position: relative; height: 420px; }
        .hero-card {
          position: absolute; inset: 0; width: 62%; height: 72%;
          object-fit: cover; border-radius: 18px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.18);
          border: 1px solid hsl(var(--border));
          transition: transform 600ms ease, box-shadow 300ms ease, filter 600ms ease;
          will-change: transform;
        }
        .hero-card--a { left: -4%; top: 6%; transform: rotate(-4deg); }
        .hero-card--b { right: -10%; top: 0%; transform: rotate(6deg); }
        .hero-card--c { left: 18%; bottom: -4%; transform: rotate(1.5deg); width: 64%; height: 68%; }

        @media (hover:hover) {
          .hero-stack:hover .hero-card { filter: brightness(0.96); }
          .hero-stack:hover .hero-card--a { transform: translateY(-4px) rotate(-5deg) scale(1.015); }
          .hero-stack:hover .hero-card--b { transform: translateY(-6px) rotate(8deg) scale(1.02); }
          .hero-stack:hover .hero-card--c { transform: translateY(-6px) rotate(2deg) scale(1.02); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-card { transition: none; }
          .hero-stack:hover .hero-card { transform: none; }
        }
      `}</style>
    </>
  );
}

/* —————————— UI bits —————————— */

function HeroButton({ children }) {
  return (
    <span
      className={cls(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        "bg-[hsl(var(--accent))] text-[#0b0e11] ring-1 ring-[hsl(var(--accent-600))]",
        "shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition"
      )}
    >
      {children} <span className="ml-2" aria-hidden>→</span>
    </span>
  );
}

function GhostButton({ children }) {
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

/* Data for service tiles & process (adjust freely; no ratings anywhere) */
const SERVICES = [
  {
    id: "portraits",
    name: "Portraits",
    desc: "Clean, modern portraits for seniors, creatives, and personal milestones.",
    duration: "45–60 min",
    image: "/home/portrait.jpg",
  },
  {
    id: "couples",
    name: "Couples",
    desc: "Celebrate your story with a relaxed session and editorial finish.",
    duration: "60 min",
    image: "/home/couples.jpg",
  },
  {
    id: "events",
    name: "Events",
    desc: "Gatherings, concerts, and celebrations captured with energy and clarity.",
    duration: "2 hours",
    image: "/home/events.jpg",
  },
  {
    id: "branding",
    name: "Branding",
    desc: "Content for websites and launches—products, people, and spaces.",
    duration: "60–90 min",
    image: "/home/branding.jpg",
  },
];

const STEPS = [
  {
    title: "Tell me your plan",
    body: "Share your date, location ideas, and any must-have moments.",
  },
  {
    title: "Lock the details",
    body: "We’ll confirm a time, prep list, and a simple plan that fits you.",
  },
  {
    title: "Shoot & deliver",
    body: "A relaxed session; selects delivered in a clean online gallery.",
  },
];
