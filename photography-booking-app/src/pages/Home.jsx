import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Replace the image URLs with your own (Cloudinary/Storage/local).   */
/* Add/remove categories as needed: "Portraits" | "Branding" | "Events" */
/* ------------------------------------------------------------------ */
const IMAGES = [
  // Portraits
  { id: "p1", src: "/portfolio/portraits/p1.jpg", w: 1200, h: 1600, category: "Portraits", alt: "Portrait 1" },
  { id: "p2", src: "/portfolio/portraits/p2.jpg", w: 1600, h: 1200, category: "Portraits", alt: "Portrait 2" },
  // Branding
  { id: "b1", src: "/portfolio/branding/b1.jpg", w: 1600, h: 1067, category: "Branding", alt: "Branding 1" },
  { id: "b2", src: "/portfolio/branding/b2.jpg", w: 1200, h: 1600, category: "Branding", alt: "Branding 2" },
  // Events
  { id: "e1", src: "/portfolio/events/e1.jpg", w: 1600, h: 1067, category: "Events", alt: "Event 1" },
  { id: "e2", src: "/portfolio/events/e2.jpg", w: 1200, h: 1600, category: "Events", alt: "Event 2" },
  // Add more...
];

const CATEGORIES = ["All", "Portraits", "Branding", "Events"];

export default function Home() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    let list = active === "All" ? IMAGES : IMAGES.filter(i => i.category === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(i => i.alt.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));
    }
    return list;
  }, [active, query]);

  return (
    <main>
      {/* HERO */}
      <section className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Confident, modern photography—built around you.
              </h1>
              <p className="mt-4 text-lg text-muted max-w-xl">
                Portraits, branding, and events across North Carolina. Clean light. Sharp detail. Consistent results.
              </p>
              <div className="mt-8 flex gap-3">
                <Link to="/booking" className="btn btn-primary">Book a Session</Link>
                {/* Keep a Portfolio route if you still want a full-page gallery */}
                {/* <Link to="/portfolio" className="btn btn-ghost">Full Portfolio</Link> */}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-xl2 overflow-hidden border border-[color:var(--border)] shadow-soft">
                <img
                  src="/hero-placeholder.jpg"
                  alt="A7mads Camera hero"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl2 ring-1 ring-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* INLINE PORTFOLIO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Portfolio</h2>

          <div className="flex items-center gap-2">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1.5 rounded-xl2 text-sm transition-colors border border-[color:var(--border)]
                    ${active === cat ? "bg-electric text-white" : "text-paper/80 hover:text-white hover:bg-white/5"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search (e.g., portraits)"
                className="h-10 w-56 rounded-xl2 border border-[color:var(--border)] bg-[color:var(--surface)] px-3 text-sm outline-none focus:ring-2 focus:ring-electric"
              />
            </div>
          </div>
        </div>

        {/* Masonry-ish responsive grid */}
        <div className="grid gap-3 sm:gap-4"
             style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          {items.map(img => (
            <figure key={img.id} className="group relative overflow-hidden rounded-xl2 border border-[color:var(--border)] shadow-soft">
              {/* Use sizes for responsive loading; replace src with <img srcSet> if you have variants */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                width={img.w}
                height={img.h}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{img.category}</span>
                  <span className="text-xs text-paper/70">{img.alt}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-10 flex items-center justify-between gap-4 rounded-xl2 border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
          <p className="text-sm text-muted">
            Want to see a tailored set for your shoot type? I’ll send a curated selection based on your vibe.
          </p>
          <Link to="/booking" className="btn btn-primary">Request a Curated Set</Link>
        </div>
      </section>
    </main>
  );
}
