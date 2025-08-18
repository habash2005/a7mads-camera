// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../_DSC0154.jpg"; // ← one level up from pages/

export default function Home() {
  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Copy */}
        <div>
          <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal">
            Book stunning, story-driven photography.
          </h1>
          <p className="mt-4 text-charcoal/70 text-base md:text-lg">
            Portraits, events, and weddings—crafted with care and delivered fast. Pick a package, choose a time, and lock it in.
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
            {/* Lock layout; image fills and focuses on the top (face + camera) */}
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
                  [object-position:50%_12%]  md:[object-position:50%_18%]
                  will-change-transform
                "
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-rose/20" />
        </div>
      </div>
    </section>
  );
}
