// src/pages/ClientGallery.jsx
import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// 🔽 NEW: zip + storage imports
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { getStorage, ref as sref, getBlob } from "firebase/storage";

const storage = getStorage(); // uses the bucket from your firebase config

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2,"0")).join("");
}

// Try to keep filename; fall back to last path segment
function fileNameFrom(img) {
  const base =
    img.original_filename ||
    (img.public_id && img.public_id.split("/").pop()) ||
    (img.secure_url && (decodeURIComponent((img.secure_url.match(/\/o\/([^?]+)/)?.[1] || "")).split("/").pop())) ||
    "image";
  // try extension from metadata, else from URL, else jpg
  const ext =
    (img.format && String(img.format).toLowerCase()) ||
    (img.secure_url && (img.secure_url.split("?")[0].split(".").pop() || "").toLowerCase()) ||
    "jpg";
  return `${base}.${ext.replace(/[^a-z0-9]/gi, "") || "jpg"}`;
}

// Get Storage object path from our doc
function storagePathOf(img) {
  // Prefer an explicit field if you saved it on upload
  if (img.path || img.storagePath || img.fullPath) return img.path || img.storagePath || img.fullPath;
  // Derive from a Firebase download URL (works with *.firebasestorage.app or googleapis)
  // Looks for ".../o/<ENCODED_PATH>?..."
  const m = String(img.secure_url || "").match(/\/o\/([^?]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function cls(...xs) { return xs.filter(Boolean).join(" "); }

export default function ClientGallery() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");

  const [selected, setSelected] = useState({});
  const [zipping, setZipping] = useState(false);
  const [zipProgress, setZipProgress] = useState(0);

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

      const imgsSnap = await getDocs(collection(db, `galleries/${match.id}/images`));
      const imgs = imgsSnap.docs.map((d) => d.data());
      imgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setImages(imgs);

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
    setZipProgress(0);
    setErr("");
  };

  // 🔽 NEW: pure client-side zipping using Firebase Storage + JSZip
  async function zipAndDownload(files, outName) {
    if (!files.length) {
      alert("No files selected");
      return;
    }

    // Soft safety: very large batches can crash the browser
    const TOTAL_LIMIT_MB = 500; // adjust if you like
    let approx = 0;
    for (const f of files) approx += (f.size || 5_000_000); // rough guess if size unknown
    if (approx / (1024 * 1024) > TOTAL_LIMIT_MB) {
      alert(`Too many or too large files (>${TOTAL_LIMIT_MB}MB). Try fewer at once.`);
      return;
    }

    setZipping(true);
    setZipProgress(0);
    try {
      const zip = new JSZip();

      // Fetch each blob directly from Storage (no CORS issues)
      for (let i = 0; i < files.length; i++) {
        const img = files[i];
        const path = storagePathOf(img);
        if (!path) {
          console.warn("Cannot derive storage path for", img);
          continue;
        }
        const blob = await getBlob(sref(storage, path)); // Firebase SDK call
        zip.file(fileNameFrom(img), blob, { compression: "STORE" }); // JPEG/PNG already compressed

        setZipProgress(Math.round(((i + 1) / files.length) * 80)); // 0–80% during fetch loop
      }

      // Generate zip blob
      const zipBlob = await zip.generateAsync(
        { type: "blob", compression: "DEFLATE", compressionOptions: { level: 3 } },
        (meta) => setZipProgress(80 + Math.round(meta.percent * 0.2)) // 80–100% while packaging
      );

      saveAs(zipBlob, outName || "gallery.zip");
    } catch (e) {
      console.error(e);
      alert(e.message || "Preparing ZIP failed.");
    } finally {
      setZipping(false);
      setZipProgress(0);
    }
  }

  async function downloadSelectedZip() {
    const files = images.filter((i) => !!selected[i.public_id]);
    await zipAndDownload(files, "selected-images.zip");
  }

  async function downloadAllZip() {
    await zipAndDownload(images, "all-images.zip");
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
                  {zipping ? `Preparing… ${zipProgress}%` : "Download Selected"}
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
                  {zipping ? `Please wait… ${zipProgress}%` : "Download All"}
                </button>

                <button onClick={reset} className="text-sm underline text-charcoal/70 hover:text-rose">
                  Use a different code
                </button>
              </div>
            </div>

            {images.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => {
                  const previewSrc = img.secure_url; // keep your existing preview URL
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
