// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import heroImg from "../img_4942.jpg";
import MasonryGrid from "../components/MasonryGrid"; // masonry preview like lensofher
import { Helmet } from "react-helmet-async"




function cls(...xs) { return xs.filter(Boolean).join(" "); }





export default function Home() {
  return (
    <><Helmet>
      <title>Lama Wafa | Raleigh, NC Photographer</title>
      <meta
        name="description"
        content="Lama is a Palestinian photographer based in Raleigh, NC, specializing in events, milestones, and personal portraits." />
      <link rel="canonical" href="https://lamawafa.com/" />
    </Helmet>
    <section className="w-full bg-cream">
        {/* ======= HERO (burgundy band) ======= */}
        <div className="bg-gradient-to-b from-burgundy to-maroon">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight text-white">
                Welcome, I’m Lama, a photographer based in Raleigh, NC
              </h1>
              <p className="mt-4 text-white/80 text-base md:text-lg max-w-prose">
                I’m excited to learn your story and capture it in a way that feels real and meaningful.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/booking"
                  className="rounded-full px-5 py-3 text-sm font-semibold bg-wine text-white shadow-soft hover:bg-maroon focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                >
                  Start Booking
                </Link>
                <Link
                  to="/portfolio"
                  className="px-5 py-3 rounded-full border border-gold/50 text-sm font-semibold text-white/95 hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Image / Hero Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/80 shadow-soft p-4 md:p-6 ring-1 ring-white/30">
              <div className="relative w-full overflow-hidden rounded-xl">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={heroImg}
                    alt="Lama holding a camera on a wooden bridge"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    draggable="false"
                    className="absolute inset-0 h-full w-full object-cover [object-position:50%_12%] md:[object-position:50%_18%]" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold/30" />
            </div>
          </div>
        </div>

        {/* ======= MY STORY ======= */}
        <div className="py-12 md:py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">My Story</h2>
            <div className="mt-4 space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                My love for photography started with my big brother. He’d take pictures at family gatherings and
                let me experiment with his camera, always telling me I had an eye for it. What began as a hobby
                with just the family’s camera grew into a real passion.
              </p>
              <p>
                I love photographing people and events because I want you to enjoy the moment while still having
                memories to look back on. Growing up, I loved flipping through family albums, learning about
                our stories, and feeling connected through those memories.
              </p>
              <p>
                That’s what I aim to create for my clients: vibrant, warm, and candid images that tell your story
                and preserve your memories for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* ======= WHAT TO EXPECT ======= */}
        <div className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">What to Expect</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              I’m organized, detail-oriented, and thoughtful in my approach. My goal is to make every session or
              event run smoothly so you can feel comfortable and natural, enjoy the experience, and walk away
              with images you’ll treasure forever.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/booking"
                className="rounded-full px-5 py-3 text-sm font-semibold bg-gold text-charcoal shadow-soft hover:bg-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
              >
                Check Availability
              </Link>
              <Link
                to="/faq"
                className="px-5 py-3 rounded-full border border-burgundy/30 text-sm font-semibold text-burgundy hover:bg-gold/10 transition-colors"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* ======= LATEST PORTFOLIO (lazy masonry preview) ======= */}
        <PortfolioOnScroll />
      </section></>
  );
}

/* ----------------- Portfolio On-Scroll ----------------- */
function PortfolioOnScroll() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [err, setErr] = useState("");
  const sentryRef = useRef(null);

  useEffect(() => {
    const el = sentryRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && setReady(true),
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!ready) return;
    (async () => {
      setLoading(true);
      setErr("");
      try {
        // 1) portfolio gallery
        const galQ = query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1));
        const galSnap = await getDocs(galQ);
        if (galSnap.empty) { setErr("Portfolio is not configured yet."); setImgs([]); return; }
        const galId = galSnap.docs[0].id;

        // 2) latest images
        let imgsSnap;
        try {
          imgsSnap = await getDocs(
            query(collection(db, `galleries/${galId}/images`), orderBy("createdAt", "desc"), limit(12))
          );
        } catch {
          imgsSnap = await getDocs(query(collection(db, `galleries/${galId}/images`), limit(12)));
        }
        const rows = imgsSnap.docs.map((d) => d.data());
        rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

        setImgs(rows.map(r => ({
          id: r.public_id,
          src: r.secure_url,
          alt: r.original_filename || r.public_id,
          width: r.width,
          height: r.height,
          filename: r.original_filename
        })));
      } catch (e) {
        console.error("[Home portfolio] load failed:", e);
        const msg = String(e.code || e.message).toLowerCase();
        setErr(msg.includes("permission")
          ? "We couldn't load the portfolio (permission denied)."
          : "We couldn't load the portfolio right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    })();
  }, [ready]);

  return (
    <div ref={sentryRef} className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <header className={cls(
          "transition-all duration-700",
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        )}>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">Portfolio</h2>
          <p className="text-charcoal/70 mt-1"></p>
        </header>

        <div className="mt-6">
          {err && <div className="text-sm text-rose mb-4">{err}</div>}
          {loading ? (
            <SkeletonGrid />
          ) : imgs.length === 0 ? (
            <div className="text-sm text-charcoal/60">No portfolio images yet.</div>
          ) : (
            // Natural-aspect masonry preview (like lensofher)
            <MasonryGrid items={imgs} />
          )}
        </div>

        <div className={cls(
          "mt-8 flex",
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          "transition-all duration-700"
        )}>
          <Link
            to="/portfolio"
            className="rounded-full px-5 py-3 text-sm font-semibold bg-wine text-white shadow-soft hover:bg-maroon focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
          >
            See Full Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

function SkeletonGrid() {
  // Styled to echo the masonry look (taller rectangles here and there)
  return (
    <div className="columns-1 sm:columns-2 xl:columns-3 2xl:columns-4 gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="mb-3 rounded-xl bg-neutral-200/60 animate-pulse"
          style={{ height: i % 3 === 0 ? 280 : i % 3 === 1 ? 360 : 220 }}
        />
      ))}
    </div>
  );
}
