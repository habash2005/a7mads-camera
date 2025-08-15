// src/pages/ClientGallery.jsx
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const CLOUD_NAME = "lamaphoto"; // <-- your Cloudinary cloud name

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function ClientGallery() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState(null); // { name, slug, tag, ... }
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");

  const checkCode = async () => {
    setErr("");
    setLoading(true);
    setGallery(null);
    setImages([]);

    try {
      // 1) load galleries
      const snap = await getDocs(collection(db, "galleries"));
      const galleries = snap.docs.map((d) => d.data());

      // 2) hash once, then compare (no await in .find callback)
      const hash = await sha256(code.trim());
      const match = galleries.find((g) => g.codeHash === hash);

      if (!match) {
        setErr("Invalid access code. Double-check and try again.");
        setLoading(false);
        return;
      }

      setGallery(match);

      // 3) fetch images by tag from Cloudinary
      try {
        const res = await fetch(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${match.tag}.json`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setImages(data.resources || []);
      } catch (imgErr) {
        console.error(imgErr);
        setErr(
          "Could not load images. Make sure Cloudinary ‘Asset lists’ are enabled and your photos are tagged with the gallery tag."
        );
      }
    } catch (e) {
      console.error(e);
      setErr("There was a problem checking your code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setCode("");
    setGallery(null);
    setImages([]);
    setErr("");
  };

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">
          Client Gallery
        </h2>

        {/* Step 1: Access form */}
        {!gallery && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-charcoal/70">
              Enter your access code to view your photos.
            </p>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              className="w-full rounded-xl border border-rose/30 px-3 py-2 bg-white"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading && code.trim()) checkCode();
              }}
            />
            <button
              onClick={checkCode}
              disabled={loading || !code.trim()}
              className={`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
                loading || !code.trim()
                  ? "bg-blush text-charcoal/50 cursor-not-allowed"
                  : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
              }`}
            >
              {loading ? "Checking…" : "Open Gallery"}
            </button>
            {err && <div className="text-sm text-red-700">{err}</div>}
          </div>
        )}

        {/* Step 2: Gallery grid */}
        {gallery && (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl text-charcoal">
                  {gallery.name}
                </h3>
                <div className="text-xs text-charcoal/60">
                  Tag: <code>{gallery.tag}</code>
                </div>
              </div>
              <button
                onClick={reset}
                className="text-sm underline text-charcoal/70 hover:text-rose"
              >
                Use a different code
              </button>
            </div>

            {/* Grid */}
            {images.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => {
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
            ) : (
              <div className="mt-6 text-charcoal/60">
                No images yet for this gallery.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
