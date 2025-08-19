// src/pages/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import SmartImg from "../components/SmartImg";

function cls(...xs) { return xs.filter(Boolean).join(" "); }
const STEP = 48;

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");
  const [vis, setVis] = useState(STEP);

  useEffect(() => {
    (async () => {
      try {
        const galSnap = await getDocs(
          query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1))
        );
        if (galSnap.empty) {
          setImages([]);
          return;
        }
        const galId = galSnap.docs[0].id;

        const imgsSnap = await getDocs(collection(db, `galleries/${galId}/images`));
        const rows = imgsSnap.docs.map(d => d.data());
        rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        setImages(rows);
        setVis(STEP);
      } catch (e) {
        console.error(e);
        setErr("Could not load portfolio images.");
      }
    })();
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Portfolio</h2>

        {err && <div className="mt-4 text-red-700 text-sm">{err}</div>}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, vis).map((img, i) => (
            <div
              key={img.public_id || `${img.secure_url}-${i}`}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <SmartImg
                src={img.secure_url}
                alt={img.original_filename || img.public_id || "Portfolio image"}
                width={img.width}
                height={img.height}
                className="w-full aspect-square"
                imgClassName="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.01]"
              />
            </div>
          ))}
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

        {!err && images.length === 0 && (
          <div className="mt-6 text-charcoal/60">
            No images yet. Upload in <code>/admin</code>.
          </div>
        )}
      </div>
    </section>
  );
}
