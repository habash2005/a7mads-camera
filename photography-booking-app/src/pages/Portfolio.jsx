// src/pages/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection, collectionGroup, doc, getDocs, limit, query, where
} from "firebase/firestore";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Option A: simplest (no special index): find the "portfolio" gallery, then read its subcollection
        const galSnap = await getDocs(
          query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1))
        );
        if (galSnap.empty) {
          setImages([]);
          return; // Nothing yet; AdminUpload will auto-create once you upload there
        }
        const galId = galSnap.docs[0].id;

        const imgsSnap = await getDocs(collection(db, `galleries/${galId}/images`));
        const rows = imgsSnap.docs.map(d => d.data());

        // Newest first if createdAt exists; otherwise leave as-is
        rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

        setImages(rows);
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
        <p className="mt-2 text-charcoal/70">
          Images uploaded to the <code>portfolio</code> gallery appear here automatically.
        </p>

        {err && <div className="mt-4 text-red-700 text-sm">{err}</div>}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(img => (
            <div
              key={img.public_id}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={img.secure_url}   // This is the Firebase Storage download URL you saved
                alt={img.public_id}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"
              />
            </div>
          ))}
        </div>

        {!err && images.length === 0 && (
          <div className="mt-6 text-charcoal/60">
            No images yet. Upload in <code>/admin</code>.
          </div>
        )}
      </div>
    </section>
  );
}
