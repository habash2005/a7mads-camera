// src/pages/ClientGallery.jsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Zip } from "fflate";

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fileNameFrom(img) {
  // try to preserve original name, fallback to last segment of public_id
  const base = img.original_filename || img.public_id.split("/").pop() || "image";
  const ext = (img.format || "jpg").toLowerCase();
  return `${base}.${ext}`;
}

function cls(...xs) {
  return xs.filter(Boolean).join(" ");
}

// fetch a file as Uint8Array (works with Firebase Storage signed URLs)
async function fetchAsU8(url) {
  const res = await fetch(url, { mode: "cors", cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  return new Uint8Array(buf);
}

export default function ClientGallery() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState(null); // { id, name, slug, tag, ... }
  const [images, setImages] = useState([]); // docs from Firestore subcollection
  const [err, setErr] = useState("");

  const [selected, setSelected] = useState({});
  const [zipping, setZipping] = useState(false);

  const someChecked = images.some((img) => !!selected[img.public_id]);
  const allChecked = images.length > 0 && images.every((img) => !!selected[img.public_id]);

  const toggleOne = (pid) => setSelected((s) => ({ ...s, [pid]: !s[pid] }));
  const toggleAll = (checked) => {
    const next = {};
    images.forEach((img) => (next[img.public_id] = checked));
    setSelected(next);
  };

  const checkCode = async () => {
    setErr("");
    setLoading(true);
    setGallery(null);
    setImages([]);
    setSelected({});

    try {
      // 1) fetch galleries and find by codeHash
      const snap = await getDocs(collection(db, "galleries"));
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

      const hash = await sha256(code.trim());
      const match = rows.find((g) => g.codeHash === hash);
      if (!match) {
        setErr("Invalid access code. Double-check and try again.");
        setLoading(false);
        return;
      }
      setGallery(match);

      // 2) fetch images from subcollection
      const imgsSnap = await getDocs(collection(db, `galleries/${match.id}/images`));
      const imgs = imgsSnap.docs.map((d) => d.data());
      // newest first (optional)
      imgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setImages(imgs);

      // preselect all
      const pre = {};
      imgs.forEach((img) => (pre[img.public_id] = true));
      setSelected(pre);
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
    setSelected({});
    setZipping(false);
    setErr("");
  };

  // Client-side zipping with fflate (no Netlify Function; avoids 6MB response cap)
  async function downloadZip(files, outName) {
    if (!files.length) return;
    setZipping(true);
    try {
      // Ensure unique names inside the zip
      const seen = new Set();
      const uniqueFiles = files.map(({ url, name }) => {
        if (!seen.has(name)) {
          seen.add(name);
          return { url, name };
        }
        const dot = name.lastIndexOf(".");
        const base = dot > -1 ? name.slice(0, dot) : name;
        const ext = dot > -1 ? name.slice(dot) : "";
        let i = 2;
        let next = `${base} (${i})${ext}`;
        while (seen.has(next)) {
          i += 1;
          next = `${base} (${i})${ext}`;
        }
        seen.add(next);
        return { url, name: next };
      });

      const chunks = [];
      const zip = new Zip((err, chunk, final) => {
        if (err) {
          console.error("Zip error:", err);
          alert("Preparing ZIP failed.");
          return;
        }
        chunks.push(chunk);
        if (final) {
          const blob = new Blob(chunks, { type: "application/zip" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = outName || "gallery.zip";
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        }
      });

      // Add each file (sequential keeps memory reasonable)
      for (const f of uniqueFiles) {
        const data = await fetchAsU8(f.url);
        zip.add(f.name, data);
      }
      zip.end();
    } catch (e) {
      console.error(e);
      alert(e.message || "Download failed. Please try again.");
    } finally {
      setZipping(false);
    }
  }

  async function downloadSelectedZip() {
    const files = images
      .filter((i) => !!selected[i.public_id])
      .map((i) => ({ url: i.secure_url, name: fileNameFrom(i) }));
    await downloadZip(files, "selected-images.zip");
  }

  async function downloadAllZip() {
    const files = images.map((i) => ({ url: i.secure_url, name: fileNameFrom(i) }));
    await downloadZip(files, "all-images.zip");
  }

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">
          Client Gallery
        </h2>

        {/* Step 1: Access form */}
        {!gallery && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-charcoal/70">Enter your access code to view your photos.</p>
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
              className={cls(
                "rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all",
                loading || !code.trim()
                  ? "bg-blush text-charcoal/50 cursor-not-allowed"
                  : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
              )}
            >
              {loading ? "Checking…" : "Open Gallery"}
            </button>
            {err && <div className="text-sm text-red-700">{err}</div>}
          </div>
        )}

        {/* Step 2: Gallery grid + download controls */}
        {gallery && (
          <div className="mt-8">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 className="font-serif text-xl text-charcoal">{gallery.name}</h3>
                <div className="text-xs text-charcoal/60">
                  Tag: <code>{gallery.tag}</code>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!allChecked}
                    ref={(el) => el && (el.indeterminate = !allChecked && someChecked)}
                    onChange={(e) => toggleAll(e.target.checked)}
                  />
                  Select all
                </label>

                <button
                  onClick={downloadSelectedZip}
                  disabled={!someChecked || zipping}
                  className={cls(
                    "rounded-full px-4 py-2 text-sm font-semibold shadow-md",
                    !someChecked || zipping
                      ? "bg-blush text-charcoal/50"
                      : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
                  )}
                >
                  {zipping ? "Preparing…" : "Download Selected"}
                </button>

                <button
                  onClick={downloadAllZip}
                  disabled={!images.length || zipping}
                  className={cls(
                    "rounded-full px-4 py-2 text-sm font-semibold shadow-md",
                    !images.length || zipping
                      ? "bg-blush text-charcoal/50"
                      : "bg-gold text-charcoal hover:bg-rose hover:text-ivory"
                  )}
                >
                  {zipping ? "Please wait…" : "Download All"}
                </button>

                <button
                  onClick={reset}
                  className="text-sm underline text-charcoal/70 hover:text-rose"
                >
                  Use a different code
                </button>
              </div>
            </div>

            {images.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => {
                  const previewSrc = img.secure_url;
                  return (
                    <figure
                      key={img.public_id}
                      className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={previewSrc}
                        alt={img.public_id}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"
                      />
                      <figcaption className="flex items-center justify-between px-3 py-2 text-xs bg-white/70">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={!!selected[img.public_id]}
                            onChange={() => toggleOne(img.public_id)}
                          />
                          <span className="truncate max-w-[10rem]">{fileNameFrom(img)}</span>
                        </label>
                        <a
                          className="underline text-charcoal/70 hover:text-rose"
                          href={img.secure_url}
                          title="Download original"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Original
                        </a>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            ) : (
              <div className="mt-6 text-charcoal/60">No images yet for this gallery.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
