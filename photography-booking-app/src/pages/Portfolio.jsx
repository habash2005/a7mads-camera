import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import MasonryGrid from "../components/MasonryGrid";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  const [images, setImages] = useState([]); // [{id, src, alt, width, height, filename}]
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Find the portfolio gallery
        const galSnap = await getDocs(
          query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1))
        );
        if (galSnap.empty) {
          setImages([]);
          return;
        }
        const galId = galSnap.docs[0].id;

        // Pull images, newest first
        const imgsSnap = await getDocs(collection(db, `galleries/${galId}/images`));
        const rows = imgsSnap.docs.map((d) => d.data());
        rows.sort(
          (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
        );

        setImages(
          rows.map((r) => ({
            id: r.public_id,
            src: r.secure_url,
            alt: r.original_filename || r.public_id,
            width: r.width,
            height: r.height,
            filename: r.original_filename,
          }))
        );
      } catch (e) {
        console.error(e);
        setErr("Could not load portfolio images.");
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>A7mad’s Camera | Portfolio</title>
        <meta
          name="description"
          content="Selected photography work by A7mad’s Camera — weddings, portraits, and brands."
        />
        <link rel="canonical" href="https://a7madscamera.com/portfolio" />
      </Helmet>

      <section className="w-full bg-cream">
        {/* Header band */}
        <div className="bg-gradient-to-b from-burgundy to-maroon">
          <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
            <h1 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white">
              Portfolio
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-12">
          {err && (
            <div className="mb-6 rounded-md border border-rose/30 bg-rose/5 px-4 py-3 text-rose">
              {err}
            </div>
          )}

          {/* Masonry grid */}
          {images.length > 0 ? (
            <MasonryGrid items={images} className="mx-auto" />
          ) : !err ? (
            <div className="text-burgundy/60">
              No images yet. Upload in{" "}
              <code className="font-mono">/admin</code>.
            </div>
          ) : null}
        </div>

        {/* Accent strip */}
        <div className="h-2 bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
      </section>
    </>
  );
}
