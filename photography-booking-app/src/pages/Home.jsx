// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase";
import {
  collectionGroup,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import heroImg from "../_DSC0154.jpg"; // place the image at: src/_DSC0154.jpg

function cls(...xs) {
  return xs.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <section className="w-full bg-ivory">
      {/* Hero */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal">
              Book stunning, story-driven photography.
            </h1>
            <p className="mt-4 text-charcoal/70 text-base md:text-lg">
              Portraits, events, and weddings—crafted with care and delivered
              fast. Pick a package, choose a time, and lock it in.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/booking"
                className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md"
              >
                Start Booking
              </Link>
              <Link
                to="/portfolio"
                className="px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-charcoal/70">
              <span>★★★★★</span>
              <span>100+ happy clients</span>
            </div>
          </div>

          {/* Image / Hero Card */}
          <div className="relative overflow-hidden rounded-2xl border border-rose/30 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 md:p-6">
            <div className="relative w-full overflow-hidden rounded-xl">
              {/* Lock layout; image fills and focuses on the top */}
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={heroImg}
                  alt="Lama holding a camera on a wooden bridge"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  draggable="false"
                  className="
                    absolute inset-0 h-full w-full
                    object-cover
                    [object-position:50%_12%] md:[object-position:50%_18%]
                    will-change-transform
                  "
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-rose/20" />
          </div>
        </div>
      </div>

      {/* Lazy Portfolio Section (reveals on scroll) */}
      <PortfolioOnScroll />
    </section>
  );
}

/* ----------------- Portfolio On-Scroll ----------------- */
function PortfolioOnScroll() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [err, setErr] = useState("");
  const sentryRef = useRef(null);

  // Reveal + fetch once when scrolled near the section
  useEffect(() => {
    const el = sentryRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && !ready) {
          setReady(true);
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  // Fetch portfolio images only once when "ready"
  useEffect(() => {
    if (!ready) return;

    (async () => {
      setLoading(true);
      setErr("");
      try {
        // Try ordered query first (may require an index)
        let snap;
        try {
          const qy = query(
            collectionGroup(db, "images"),
            where("tag", "==", "portfolio"),
            orderBy("createdAt", "desc"),
            limit(12)
          );
          snap = await getDocs(qy);
        } catch (e) {
          // Fallback without orderBy if index is missing
          const qy = query(
            collectionGroup(db, "images"),
            where("tag", "==", "portfolio"),
            limit(12)
          );
          snap = await getDocs(qy);
        }

        const rows = snap.docs.map((d) => d.data());
        // Sort client-side by createdAt if needed
        rows.sort(
          (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
        );
        setImgs(rows);
      } catch (e) {
        console.error(e);
        setErr("Couldn’t load portfolio right now.");
      } finally {
        setLoading(false);
      }
    })();
  }, [ready]);

  return (
    <div ref={sentryRef} className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <header
          className={cls(
            "transition-all duration-700",
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">
            Latest Portfolio
          </h2>
          <p className="text-charcoal/70 mt-1">
            A few favorites—more inside the full portfolio.
          </p>
        </header>

        {/* Grid */}
        <div className="mt-6">
          {err && (
            <div className="text-sm text-rose mb-4">{err}</div>
          )}

          {loading ? (
            <SkeletonGrid />
          ) : imgs.length === 0 ? (
            <div className="text-sm text-charcoal/60">
              No portfolio images yet.
            </div>
          ) : (
            <div
              className={cls(
                "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                "transition-opacity duration-700",
                ready ? "opacity-100" : "opacity-0"
              )}
            >
              {imgs.map((img, i) => {
                const src = img.secure_url; // saved at upload
                const key = img.public_id || `${src}-${i}`;
                return (
                  <figure
                    key={key}
                    className={cls(
                      "group overflow-hidden rounded-xl shadow-sm bg-white",
                      "transition-transform duration-300 hover:scale-[1.01]"
                    )}
                  >
                    <img
                      src={src}
                      alt={img.original_filename || img.public_id || "Portfolio image"}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-square object-cover"
                    />
                  </figure>
                );
              })}
            </div>
          )}
        </div>

        <div
          className={cls(
            "mt-8 flex",
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            "transition-all duration-700"
          )}
        >
          <Link
            to="/portfolio"
            className="rounded-full px-5 py-3 text-sm font-semibold bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all shadow-md"
          >
            See Full Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

/* --------------- Small skeleton while loading --------------- */
function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl bg-slate-200/70 animate-pulse"
        />
      ))}
    </div>
  );
}
