// src/pages/Home.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchPortfolioImages } from "../lib/storage";

export default function Home() {
  const [images, setImages] = useState([]);
  const [state, setState] = useState({ loading: true, error: "" });

  // simple in-view fade helper (CSS-based; see classNames below)
  const inViewRef = useRef(null);
  useEffect(() => {
    const el = inViewRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view"));
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const urls = await fetchPortfolioImages({ path: "portfolio", includeSubfolders: true });
        if (on) setImages(urls);
      } catch (e) {
        if (on) setState((s) => ({ ...s, error: "Failed to load portfolio." }));
      } finally {
        if (on) setState((s) => ({ ...s, loading: false }));
      }
    })();
    return () => {
      on = false;
    };
  }, []);

  const gridCols = useMemo(
    () => ({ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }),
    []
  );

  return (
    <>
      <Helmet>
        <title>A7mad’s Camera | Studio-grade photography for people & brands</title>
        <meta
          name="description"
          content="Crisp, contemporary imagery with consistent craft—portraits, branding, and events across North Carolina."
        />
        <link rel="canonical" href="https://a7madscamera.com/" />
      </Helmet>

      <main ref={inViewRef}>
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-burgundy via-maroon to-charcoal/95" />
          <div className="container-site py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div data-reveal className="reveal">
                <h1 className="h1 text-4xl md:text-5xl text-ivory">
                  Studio-grade photography for people &amp; brands.
                </h1>
                <p className="mt-4 text-lg text-[color:var(--muted-contrast)] max-w-xl">
                  Crisp, contemporary imagery with consistent craft—portraits, branding, and events
                  across North Carolina.
                </p>
                <div className="mt-8 flex gap-3">
                  <Link to="/booking" className="btn btn-primary">
                    Book a Session
                  </Link>
                  <a href="#portfolio" className="btn btn-ghost">
                    View Recent Work
                  </a>
                </div>
                <dl className="mt-10 grid grid-cols-3 gap-6 text-sm text-[color:var(--muted-contrast)]">
                  <Stat k="300+" v="Sessions" />
                  <Stat k="4.9★" v="Avg. rating" />
                  <Stat k="72 hr" v="Turn-around" />
                </dl>
              </div>

              <div data-reveal className="reveal md:justify-self-end">
                <figure className="img-tile aspect-[4/3] ring-1 ring-white/10 shadow-xl">
                  <img
                    src="/hero-placeholder.jpg"
                    alt="Portrait lighting setup with dramatic color gel accents"
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="container-site pb-14 md:pb-20">
          <h2 data-reveal className="reveal h2 text-2xl md:text-3xl mb-6">
            Services
          </h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {[
              {
                t: "Portraits",
                d: "Clean, confident portraits for profiles, teams, and talent.",
                i: "/icons/user.svg",
              },
              {
                t: "Branding",
                d: "On-brand lifestyle & product sets for web and social.",
                i: "/icons/briefcase.svg",
              },
              {
                t: "Events",
                d: "Polished coverage focused on people, moments, and atmosphere.",
                i: "/icons/camera.svg",
              },
            ].map((s) => (
              <article key={s.t} data-reveal className="reveal card p-6 hover:lift">
                <div className="flex items-start gap-3">
                  {s.i && (
                    <img
                      src={s.i}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 opacity-70"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <h3 className="h3 text-xl">{s.t}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{s.d}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="container-site pb-16 md:pb-24">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="h2 text-2xl md:text-3xl">Selected Work</h2>
            <Link to="/portfolio" className="btn btn-text">
              See full portfolio →
            </Link>
          </div>

          {state.loading && (
            <div className="grid gap-4" style={gridCols} aria-busy="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="card h-56 md:h-64 animate-pulse bg-[color:var(--surface-muted)]"
                />
              ))}
            </div>
          )}

          {!state.loading && state.error && (
            <div
              role="alert"
              className="card p-4 border border-red-500/30 bg-red-500/10 text-sm text-red-700"
            >
              {state.error}
            </div>
          )}

          {!state.loading && !state.error && (
            <div className="grid gap-4" style={gridCols}>
              {images.slice(0, 12).map((img) => (
                <figure key={img.id} className="img-tile group overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.path || "Portfolio image"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          )}

          <div className="mt-10 card p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[color:var(--muted)]">
              Want a tailored preview for your project? I’ll curate a set to your brief.
            </p>
            <Link to="/booking" className="btn btn-primary">
              Request a Curated Set
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function Stat({ k, v }) {
  return (
    <div className="stat">
      <dt className="text-xl font-extrabold">{k}</dt>
      <dd className="text-[color:var(--muted)]">{v}</dd>
    </div>
  );
}
