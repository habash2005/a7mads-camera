// src/pages/Home.jsx
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

/* -------- Local images (import from /src using relative paths) -------- */
import eventsImg from "../Muhtade.jpg";
import brandingImg from "../ameir.jpg";
import ahmadHero from "../Ahmad.jpg";   // hero image
import ahmadAbout from "../ahmad2.jpg"; // about section image
import portraitImg from "../moe.jpg";
import couplesImg from "../couple.png";

const cls = (...xs) => xs.filter(Boolean).join(" ");

export default function Home() {
  const [thumbs, setThumbs] = useState([]);
  const [loading, setLoading] = useState(true);

  // recent work thumbnails
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
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
          content="Editorial images with clean light and honest emotion. Portraits, couples, events, and brand work across North Carolina."
        />
        <link rel="canonical" href="https://a7madscamera.com/" />
      </Helmet>

      {/* ————————————————— Hero ————————————————— */}
      <section className="relative overflow-hidden bg-[hsl(var(--bg))]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(1000px_600px_at_20%_-20%,#000_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[hsl(var(--accent))/0.18] blur-3xl" />

        <div className="container-pro relative py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1 text-[11px] text-[hsl(var(--muted))]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                now booking
              </span>

              <h1 className="mt-4 text-4xl md:text-6xl font-serif tracking-tight leading-[1.05]">
                Clean light. Honest moments.{" "}
                <span className="hero-underline relative inline-block">
                  Consistent results.
                </span>
              </h1>

              <p className="mt-4 text-[hsl(var(--muted))] max-w-prose">
                Modern, editorial images for people and brands. Sessions are
                relaxed and intentional—so you look and feel like yourself.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/booking" className="no-underline">
                  <Primary>Book a session</Primary>
                </Link>
                <Link to="/portfolio" className="no-underline">
                  <Ghost>See portfolio</Ghost>
                </Link>
              </div>
            </div>

            {/* Feature image */}
            <div className="lg:col-span-6">
              <figure className="relative">
                <div className="hero-frame">
                  <img
                    src={ahmadHero}
                    alt="Featured photograph"
                    className="h-full w-full object-cover object-[center_35%]"
                    loading="eager"
                  />
                </div>
                <figcaption className="absolute -bottom-3 left-4 select-none rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1 text-[11px] text-[hsl(var(--muted))] shadow-soft">
                  North Carolina • on location
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <style>{`
          .hero-frame {
            position: relative;
            border-radius: 22px;
            overflow: hidden;
            border: 1px solid hsl(var(--border));
            box-shadow: 0 20px 60px rgba(0,0,0,.16), inset 0 1px 0 rgba(255,255,255,.2);
            height: clamp(340px, 48vw, 520px);
          }
          .hero-underline::after{
            content:"";
            position:absolute; left:0; right:0; bottom:6px; height:10px;
            border-radius:8px;
            background: linear-gradient(90deg,
              hsl(var(--accent))/0.25, hsl(var(--accent))/0.65 35%, hsl(var(--accent))/0.25 70%);
            transform: translateY(6px) scaleX(.96);
            filter: blur(6px);
          }
        `}</style>
      </section>

      {/* ————————————————— About Ahmad ————————————————— */}
      <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
              <img
                src={ahmadAbout}
                alt="Ahmad, photographer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-4xl font-serif tracking-tight">
              Hi, I’m Ahmad.
            </h2>
            <p className="mt-3 text-[hsl(var(--muted))] leading-relaxed">
              I create intimate, editorial imagery with a focus on honest
              moments and thoughtful detail. My approach blends documentary
              sensitivity with gentle direction—so you look and feel like
              yourself.
            </p>
            <p className="mt-3 text-[hsl(var(--muted))]">
              Based in North Carolina. Available statewide and for select travel.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/booking" className="no-underline">
                <Primary>Check availability</Primary>
              </Link>
              <a href="mailto:hello@a7mads.com" className="no-underline">
                <Ghost>Email me</Ghost>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————— Process ————————————————— */}
      <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight text-center mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {PROCESS.map((step, i) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent))] font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-[hsl(var(--muted))]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————— Services ————————————————— */}
      <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16">
          <div className="mb-6 md:mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif tracking-tight">
                What I shoot
              </h2>
              <p className="mt-2 text-[hsl(var(--muted))]">
                Flexible sets for people, events, and small brands.
              </p>
            </div>
            <Link to="/booking" className="no-underline">
              <Ghost>Start a request</Ghost>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className={cls(
                      "w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",
                      IMAGE_POS[s.id] || ""
                    )}
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

      {/* ————————————————— Recent work ————————————————— */}
      <section className="bg-[hsl(var(--bg))]">
        <div className="container-pro py-12 md:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif tracking-tight">Recent work</h2>
              <p className="mt-2 text-[hsl(var(--muted))]">
                A few fresh frames from the portfolio.
              </p>
            </div>
            <Link to="/portfolio" className="no-underline">
              <Ghost>See all</Ghost>
            </Link>
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

      {/* ————————————————— CTA ————————————————— */}
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
              <Primary>Start your booking</Primary>
            </Link>
            <Link to="/faq" className="no-underline">
              <Ghost>FAQs</Ghost>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ——— Buttons ——— */
function Primary({ children }) {
  return (
    <span
      className={cls(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        "bg-[hsl(var(--accent))] text-[#0b0e11] ring-1 ring-[hsl(var(--accent-600))]",
        "shadow-sm hover:shadow-md transition"
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

/* ——— Process steps ——— */
const PROCESS = [
  {
    title: "Inquiry",
    body: "Reach out with your vision and preferred dates. I’ll respond quickly with availability.",
  },
  {
    title: "Session",
    body: "Relaxed direction and natural light to create authentic, editorial-quality photos.",
  },
  {
    title: "Delivery",
    body: "Curated online gallery delivered fast, ready to share or print.",
  },
];

/* ——— Services ——— */
const IMAGE_POS = {
  portraits: "object-center",
  couples: "object-[center_40%]",
  events: "object-[center_35%]",
  branding: "object-[center_45%]",
};

const SERVICES = [
  {
    id: "portraits",
    name: "Portraits",
    desc: "Clean, modern portraits for seniors, creatives, and milestones.",
    duration: "45–60 min",
    image: portraitImg,
  },
  {
    id: "couples",
    name: "Couples",
    desc: "Celebrate your story with a relaxed session and editorial finish.",
    duration: "60 min",
    image: couplesImg,
  },
  {
    id: "events",
    name: "Events",
    desc: "Gatherings, concerts, and celebrations captured with energy and clarity.",
    duration: "2 hours",
    image: eventsImg,
  },
  {
    id: "branding",
    name: "Branding",
    desc: "Content for websites and launches—products, people, and spaces.",
    duration: "60–90 min",
    image: brandingImg,
  },
];
