// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import heroImg from "../_DSC0154.jpg";
import GalleryGrid from "../components/GalleryGrid";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

export default function Home() {
  return (
    <section className="w-full bg-ivory">
      {/* Hero */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal">
              Hey, I’m Lama, a photographer based in Raleigh, NC.
            </h1>
            <p className="mt-4 text-charcoal/70 text-base md:text-lg">
              I’m also excited to learn your story and capture it in a way that feels real and meaningful.
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
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={heroImg}
                  alt="Lama holding a camera on a wooden bridge"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover [object-position:50%_12%] md:[object-position:50%_18%]"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-rose/20" />
          </div>
        </div>
      </div>

      {/* My Story */}
      <div className="py-10 md:py-14 bg-ivory/60">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">My Story</h2>
          <div className="mt-4 space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              My love for photography started with my big brother. He’d take pictures at family gatherings and
              let me experiment with his camera, always telling me I had an eye for it. What began as a hobby
              with just the family’s camera grew into a real passion.
            </p>
            <p>
              I love photographing people and events because I want you to enjoy the moment while still having
              a record of it to look back on. Growing up, I loved flipping through family albums, learning about
              our stories, and feeling connected through those memories.
            </p>
            <p>
              That’s what I aim to create for my clients: vibrant, warm, and candid images that tell your story
              and preserve your memories for years to come.
            </p>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">What to Expect</h2>
          <p className="mt-4 text-charcoal/80 leading-relaxed">
            I’m organized, detail-oriented, and thoughtful in my approach. My goal is to make every session or
            event run smoothly so you can feel comfortable and natural, enjoy the experience, and walk away
            with images you’ll treasure forever.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/booking"
              className="rounded-full px-5 py-3 text-sm font-semibold bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all shadow-md"
            >
              Check Availability
            </Link>
            <Link
              to="/faq"
              className="px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Lazy Portfolio Section — keep at the bottom */}
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
        // Map to GalleryGrid shape
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
    <div ref={sentryRef} className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className={cls("transition-all duration-700", ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Latest Portfolio</h2>
          <p className="text-charcoal/70 mt-1">A few favorites—more inside the full portfolio.</p>
        </header>

        <div className="mt-6">
          {err && <div className="text-sm text-rose mb-4">{err}</div>}
          {loading ? (
            <SkeletonGrid />
          ) : imgs.length === 0 ? (
            <div className="text-sm text-charcoal/60">No portfolio images yet.</div>
          ) : (
            <GalleryGrid
              items={imgs}
              wrapperAspect="1/1"             // <- force uniform squares
              firstNPriority={4}
              sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            />
          )}
        </div>

        <div className={cls("mt-8 flex", ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3", "transition-all duration-700")}>
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

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-square rounded-xl bg-slate-200/60 animate-pulse" />
      ))}
    </div>
  );
}
