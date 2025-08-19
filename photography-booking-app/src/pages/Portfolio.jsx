// src/pages/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import GalleryGrid from "../components/GalleryGrid";

function cls(...xs) { return xs.filter(Boolean).join(" "); }
const STEP = 48;

export default function Portfolio() {
  const [images, setImages] = useState([]); // [{id, src, alt, width, height, filename}]
  const [err, setErr] = useState("");
  const [vis, setVis] = useState(STEP);

  useEffect(() => {
    (async () => {
      try {
        const galSnap = await getDocs(
          query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1))
        );
        if (galSnap.empty) { setImages([]); return; }
        const galId = galSnap.docs[0].id;

        const imgsSnap = await getDocs(collection(db, `galleries/${galId}/images`));
        const rows = imgsSnap.docs.map(d => d.data());
        rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

        setImages(rows.map(r => ({
          id: r.public_id,
          src: r.secure_url,
          alt: r.original_filename || r.public_id,
          width: r.width,
          height: r.height,
          filename: r.original_filename
        })));
        setVis(STEP);
      } catch (e) {
        console.error(e);
        setErr("Could not load portfolio images.");
      }
    })();
  }, []);

  const visible = images.slice(0, vis);

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Portfolio</h2>

        {err && <div className="mt-4 text-red-700 text-sm">{err}</div>}

        <div className="mt-6">
          {visible.length > 0 ? (
            <GalleryGrid
              items={visible}
              wrapperAspect="1/1"             // <- uniform, sleek squares
              firstNPriority={8}
              sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
            />
          ) : !err ? (
            <div className="text-charcoal/60">No images yet. Upload in <code>/admin</code>.</div>
          ) : null}
        </div>

        {images.length > vis && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setVis(n => n + STEP)}
              className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md"
            >
              Load more ({Math.min(images.length - vis, STEP)}+)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
