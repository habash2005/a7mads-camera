import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  limit as fbLimit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import MasonryGrid from "../components/MasonryGrid";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  const [images, setImages] = useState([]); // [{id, src, alt, width, height, filename}]
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        // Find the "portfolio" gallery
        const galSnap = await getDocs(
          query(
            collection(db, "galleries"),
            where("tag", "==", "portfolio"),
            fbLimit(1)
          )
        );
        if (galSnap.empty) {
          setImages([]);
          setLoading(false);
          return;
        }
        const galId = galSnap.docs[0].id;

        // Pull images, newest first (server-ordered)
        const imgsSnap = await getDocs(
          query(
            collection(db, `galleries/${galId}/images`),
            orderBy("createdAt", "desc")
          )
        );

        const rows = imgsSnap.docs.map((d) => d.data());

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
      } finally {
        setLoading(false);
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

      {/* Page shell (single-theme tokens) */}
      <section className="w-full bg-[hsl(var(--bg))]">
        {/* Header band */}
        <div className="border-b border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
          <div className="container-pro py-12 md:py-16">
            <div className="badge mb-4">Curated work</div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Portfolio
            </h1>
            <p className="mt-3 text-[hsl(var(--muted))] max-w-prose">
              A consistent, editorial finish — across people and brands.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="container-pro px-2 sm:px-4 md:px-6 py-8 md:py-12">
          {err && (
            <div className="mb-6 rounded-xl2 border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 text-sm">
              <span className="font-medium">Heads up:</span> {err}
            </div>
          )}

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-60 rounded-xl2 border border-[hsl(var(--border))] overflow-hidden animate-pulse bg-[hsl(var(--surface))]"
                />
              ))}
            </div>
          ) : images.length > 0 ? (
            <MasonryGrid items={images} className="mx-auto" />
          ) : !err ? (
            <div className="text-[hsl(var(--muted))]">
              No images yet. Upload in <code className="font-mono">/admin</code>.
            </div>
          ) : null}
        </div>

        {/* Accent strip */}
        <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
      </section>
    </>
  );
}
