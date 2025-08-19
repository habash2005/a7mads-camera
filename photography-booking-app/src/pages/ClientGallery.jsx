// src/pages/ClientGallery.jsx
import React, { useEffect, useMemo, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

import JSZip from "jszip";
import { saveAs } from "file-saver";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

function fileNameFrom(img) {
  const base =
    img.original_filename ||
    (img.public_id && img.public_id.split("/").pop()) ||
    "image";
  const ext =
    (img.format && String(img.format).toLowerCase()) ||
    (img.secure_url && (img.secure_url.split("?")[0].split(".").pop() || "").toLowerCase()) ||
    "jpg";
  return `${base}.${ext.replace(/[^a-z0-9]/gi, "") || "jpg"}`;
}

export default function ClientGallery() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // booking + images (new schema)
  const [booking, setBooking] = useState(null); // { id, reference, details, ... }
  const [images, setImages] = useState([]);

  // selection + zip state
  const [selected, setSelected] = useState({});
  const someChecked = images.some((img) => !!selected[img.public_id]);
  const allChecked  = images.length > 0 && images.every((img) => !!selected[img.public_id]);
  const [zipping, setZipping] = useState(false);
  const [zipProgress, setZipProgress] = useState(0);

  const toggleOne = (pid) => setSelected((s) => ({ ...s, [pid]: !s[pid] }));
  const toggleAll = (checked) => {
    const next = {};
    images.forEach((img) => (next[img.public_id] = checked));
    setSelected(next);
  };

  async function checkCode() {
    setErr("");
    setLoading(true);
    setBooking(null);
    setImages([]);
    setSelected({});

    try {
      const refCode = code.trim().toUpperCase();
      if (!refCode) {
        setErr("Enter your access code.");
        setLoading(false);
        return;
      }

      // 🔎 Find the booking by reference
      const qy = query(collection(db, "bookings"), where("reference", "==", refCode), limit(1));
      const snap = await getDocs(qy);
      if (snap.empty) {
        setErr("Invalid access code. Double-check and try again.");
        setLoading(false);
        return;
      }
      const doc = snap.docs[0];
      const data = doc.data();
      const bookingObj = { id: doc.id, ...data };
      setBooking(bookingObj);

      // 📸 Load the images from bookings/{id}/images
      const imgsSnap = await getDocs(collection(db, `bookings/${doc.id}/images`));
      const imgs = imgsSnap.docs.map((d) => d.data());
      imgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setImages(imgs);

      // default: pre-select all
      const pre = {};
      imgs.forEach((img) => (pre[img.public_id] = true));
      setSelected(pre);
    } catch (e) {
      console.error(e);
      setErr("There was a problem checking your code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setCode("");
    setBooking(null);
    setImages([]);
    setSelected({});
    setZipping(false);
    setZipProgress(0);
    setErr("");
  }

  // ⚡ Zip using the saved signed URLs (no Storage SDK reads)
  async function zipAndDownload(files, outName) {
    if (!files.length) {
      alert("No files selected");
      return;
    }

    const TOTAL_LIMIT_MB = 500;
    let approx = 0;
    for (const f of files) approx += (f.bytes || 5_000_000);
    if (approx / (1024 * 1024) > TOTAL_LIMIT_MB) {
      alert(`Too many or too large files (>${TOTAL_LIMIT_MB}MB). Try fewer at once.`);
      return;
    }

    setZipping(true);
    setZipProgress(0);
    try {
      const zip = new JSZip();

      for (let i = 0; i < files.length; i++) {
        const img = files[i];
        const url = img.secure_url;
        if (!url) continue;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Download failed: ${res.status}`);
        const blob = await res.blob();

        zip.file(fileNameFrom(img), blob, { compression: "STORE" });
        setZipProgress(Math.round(((i + 1) / files.length) * 80)); // 0–80% while fetching
      }

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

  const headerTitle = useMemo(() => {
    if (!booking) return "Client Gallery";
    const name = booking?.details?.name || "Client";
    return `${name} — ${booking.reference}`;
  }, [booking]);

  return (
    <section className="w-full py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">
          {headerTitle}
        </h2>

        {/* Step 1: Access form */}
        {!booking && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-charcoal/70">Enter your access code to view your photos.</p>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              className="w-full rounded-xl border border-burgundy/20 px-3 py-2 bg-white focus:border-burgundy focus:ring-gold/40"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading && code.trim()) checkCode();
              }}
            />
            <button
              onClick={checkCode}
              disabled={loading || !code.trim()}
              className={cls(
                "rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                loading || !code.trim()
                  ? "bg-burgundy/10 text-charcoal/50 cursor-not-allowed"
                  : "bg-wine text-white hover:bg-maroon"
              )}
            >
              {loading ? "Checking…" : "Open Gallery"}
            </button>
            {err && <div className="text-sm text-wine">{err}</div>}
          </div>
        )}

        {/* Step 2: Grid + actions */}
        {booking && (
          <div className="mt-8">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 className="font-serif text-xl text-charcoal">
                  {booking?.details?.name || "Client"} ({booking.reference})
                </h3>
                <div className="text-xs text-charcoal/60">
                  {booking.date} {booking.time} • {booking.package?.name}
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
                    "rounded-full px-4 py-2 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                    !someChecked || zipping
                      ? "bg-burgundy/10 text-charcoal/50"
                      : "bg-wine text-white hover:bg-maroon"
                  )}
                >
                  {zipping ? `Preparing… ${zipProgress}%` : "Download Selected"}
                </button>

                <button
                  onClick={downloadAllZip}
                  disabled={!images.length || zipping}
                  className={cls(
                    "rounded-full px-4 py-2 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                    !images.length || zipping
                      ? "bg-burgundy/10 text-charcoal/50"
                      : "bg-gold text-charcoal hover:bg-wine hover:text-white"
                  )}
                >
                  {zipping ? `Please wait… ${zipProgress}%` : "Download All"}
                </button>

                <button onClick={reset} className="text-sm underline text-charcoal/70 hover:text-burgundy">
                  Use a different code
                </button>
              </div>
            </div>

            {/* Optional progress bar while zipping */}
            {zipping && (
              <div className="mt-3 h-2 w-full bg-burgundy/10 rounded-full overflow-hidden">
                <div className="h-full bg-gold transition-all" style={{ width: `${zipProgress}%` }} />
              </div>
            )}

            {images.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => {
                  const previewSrc = img.secure_url;
                  return (
                    <figure
                      key={img.public_id}
                      className="relative overflow-hidden rounded-xl border border-burgundy/15 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={previewSrc}
                        alt={img.original_filename || img.public_id}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"
                      />

                      {/* Bottom bar — matches portfolio card chrome */}
                      <figcaption className="flex items-center justify-between px-3 py-2 text-xs bg-cream/80">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={!!selected[img.public_id]}
                            onChange={() => toggleOne(img.public_id)}
                          />
                          <span className="truncate max-w-[10rem]">{fileNameFrom(img)}</span>
                        </label>
                        <a
                          className="underline text-burgundy hover:text-gold transition-colors"
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
