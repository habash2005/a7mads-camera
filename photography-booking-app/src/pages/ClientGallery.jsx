import React, { useEffect, useRef, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, query, where, limit } from "firebase/firestore";

const CLOUD_NAME = "lamaphoto"; // e.g., "ahmadsport"

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
}

export default function ClientGallery() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [error, setError] = useState("");
  const containerRef = useRef(null);
  const [widgetReady, setWidgetReady] = useState(false);

  // ensure Cloudinary gallery script is present
  useEffect(() => {
    if (window.cloudinary) { setWidgetReady(true); return; }
    const s = document.querySelector('script[src="https://product-gallery.cloudinary.com/all.js"]');
    if (s) s.addEventListener("load", () => setWidgetReady(true));
  }, []);

  const handleOpen = async () => {
    setLoading(true);
    setError("");
    setGallery(null);
    try {
      const hash = await sha256(code.trim());
      const q = query(collection(db, "galleries"), where("codeHash","==",hash), limit(1));
      const snap = await getDocs(q);
      if (snap.empty) {
        setError("Code not found. Double-check and try again.");
      } else {
        const doc = snap.docs[0].data(); // { name, tag, slug, ... }
        setGallery(doc);
      }
    } catch (e) {
      console.error(e);
      setError("Error checking code.");
    } finally {
      setLoading(false);
    }
  };

  // render Cloudinary gallery when gallery found
  useEffect(() => {
    if (!gallery || !widgetReady || !containerRef.current || !window.cloudinary) return;
    try {
      const g = window.cloudinary.galleryWidget({
        container: containerRef.current,
        cloudName: CLOUD_NAME,
        mediaAssets: [{ tag: gallery.tag, resourceType: "image" }],
        carouselStyle: "none",
        thumbnailProps: { shape: "square" },
        zoom: false,
      });
      g.render();
    } catch (e) {
      console.error("Gallery render error:", e);
      setError("Could not render gallery.");
    }
  }, [gallery, widgetReady]);

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Client Gallery</h2>
        <p className="text-charcoal/70 mt-1">Enter your access code to view your photos.</p>

        <div className="mt-6 flex gap-3">
          <input
            className="flex-1 rounded-xl border border-rose/30 px-3 py-2 bg-white"
            value={code}
            onChange={e=>setCode(e.target.value)}
            placeholder="Enter access code"
          />
          <button
            onClick={handleOpen}
            disabled={loading || !code.trim()}
            className={`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
              loading || !code.trim() ? "bg-blush text-charcoal/50 cursor-not-allowed" : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
            }`}
          >
            {loading ? "Checking…" : "Open Gallery"}
          </button>
        </div>

        {error && <div className="mt-3 text-sm text-red-700">{error}</div>}

        {gallery && (
          <div className="mt-8">
            <h3 className="font-serif text-xl text-charcoal mb-3">{gallery.name}</h3>
            <div ref={containerRef} />
          </div>
        )}
      </div>
    </section>
  );
}
