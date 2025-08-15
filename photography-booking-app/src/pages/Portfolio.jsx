import React, { useEffect, useState } from "react";

const CLOUD_NAME = "lamaphoto";         // your cloud name
const TAG = "portfolio";                // tag you apply in uploads

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${TAG}.json`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setImages(data.resources || []);
      } catch (e) {
        console.error(e);
        setErr(
          "Could not load images. Check Cloudinary ‘Asset lists’ setting and that photos are tagged ‘portfolio’."
        );
      }
    })();
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Portfolio</h2>
        <p className="mt-2 text-charcoal/70">Uploads with the <code>portfolio</code> tag appear here automatically.</p>

        {err && <div className="mt-4 text-red-700 text-sm">{err}</div>}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(img => {
            // Cloudinary transformed URL: square crop, auto format/quality, rounded corners via Tailwind
            const src = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${img.public_id}.${img.format}`;
            return (
              <div
                key={img.public_id}
                className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={src}
                  alt={img.public_id}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"
                />
              </div>
            );
          })}
        </div>

        {!err && images.length === 0 && (
          <div className="mt-6 text-charcoal/60">No images yet. Upload in <code>/admin</code>.</div>
        )}
      </div>
    </section>
  );
}
