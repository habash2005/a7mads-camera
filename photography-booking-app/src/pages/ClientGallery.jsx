import React, { useEffect, useMemo, useRef, useState } from "react";
import { db, storage } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ref as sref, getBlob } from "firebase/storage";

import { Helmet } from "react-helmet-async";

/* ---------- utils ---------- */
const cls = (...xs) => xs.filter(Boolean).join(" ");

function fileNameFrom(img) {
  const rawBase =
    img.original_filename ||
    (img.public_id && img.public_id.split("/").pop()) ||
    "image";
  const base = rawBase.replace(/\.(jpe?g|png|webp|heic|heif|gif|tiff?)$/i, "");
  const ext =
    (img.format && String(img.format).toLowerCase()) ||
    (img.secure_url && (img.secure_url.split("?")[0].split(".").pop() || "").toLowerCase()) ||
    "jpg";
  return `${base}.${ext.replace(/[^a-z0-9]/gi, "") || "jpg"}`;
}

function storagePathOf(img) {
  if (img.path || img.storagePath || img.fullPath) return img.path || img.storagePath || img.fullPath;
  const m = String(img.secure_url || "").match(/\/o\/([^?]+)/);
  return m ? decodeURIComponent(m[1]) : (img.public_id || null);
}

/* ----------------- SelectableGallery ----------------- */
function SelectableGallery({ items, selected, onToggle, layout = "masonry" }) {
  if (layout === "masonry") {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
        {items.map((img) => (
          <figure
            key={img.public_id}
            className="group relative mb-5 break-inside-avoid overflow-hidden rounded-xl2 bg-[hsl(var(--card))] shadow-soft border border-[hsl(var(--border))] transition-shadow hover:shadow-lg"
            title={img.original_filename || img.public_id}
          >
            <img
              src={img.secure_url}
              alt={img.original_filename || img.public_id}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <label className="absolute top-2 left-2 inline-flex items-center">
              <input
                type="checkbox"
                checked={!!selected[img.public_id]}
                onChange={() => onToggle(img.public_id)}
                className="sr-only"
              />
              <span
                className={cls(
                  "grid place-items-center w-8 h-8 rounded-full text-[12px] font-bold shadow-soft ring-1 transition-colors",
                  selected[img.public_id]
                    ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] ring-[hsl(var(--accent))]"
                    : "bg-[hsl(var(--card))] text-[hsl(var(--text))] ring-[hsl(var(--border))] hover:bg-[hsl(var(--accent))]/15"
                )}
                aria-hidden
              >
                {selected[img.public_id] ? "✓" : "+"}
              </span>
            </label>
            {img.secure_url && (
              <a
                className="absolute top-2 right-2 text-[11px] underline decoration-1 text-white/95 hover:text-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity"
                href={img.secure_url}
                target="_blank"
                rel="noreferrer"
              >
                Original
              </a>
            )}
          </figure>
        ))}
      </div>
    );
  }

  // fallback: uniform grid
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((img) => (
        <figure
          key={img.public_id}
          className="group relative overflow-hidden rounded-xl2 bg-[hsl(var(--card))] shadow-soft border border-[hsl(var(--border))] transition-shadow hover:shadow-lg"
          title={img.original_filename || img.public_id}
        >
          <div className="aspect-square w-full">
            <img
              src={img.secure_url}
              alt={img.original_filename || img.public_id}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <label className="absolute top-2 left-2 inline-flex items-center">
            <input
              type="checkbox"
              checked={!!selected[img.public_id]}
              onChange={() => onToggle(img.public_id)}
              className="sr-only"
            />
            <span
              className={cls(
                "grid place-items-center w-8 h-8 rounded-full text-[12px] font-bold shadow-soft ring-1 transition-colors",
                selected[img.public_id]
                  ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] ring-[hsl(var(--accent))]"
                  : "bg-[hsl(var(--card))] text-[hsl(var(--text))] ring-[hsl(var(--border))] hover:bg-[hsl(var(--accent))]/15"
              )}
            >
              {selected[img.public_id] ? "✓" : "+"}
            </span>
          </label>
          {img.secure_url && (
            <a
              className="absolute top-2 right-2 text-[11px] underline decoration-1 text-white/95 hover:text-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity"
              href={img.secure_url}
              target="_blank"
              rel="noreferrer"
            >
              Original
            </a>
          )}
        </figure>
      ))}
    </div>
  );
}

/* ----------------- Page ----------------- */
export default function ClientGallery() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [booking, setBooking] = useState(null);
  const [images, setImages] = useState([]);

  const [selected, setSelected] = useState({});
  const [zipping, setZipping] = useState(false);
  const [zipProgress, setZipProgress] = useState(0);

  const someChecked = images.some((img) => !!selected[img.public_id]);
  const allChecked = images.length > 0 && images.every((img) => !!selected[img.public_id]);

  const allRef = useRef(null);
  useEffect(() => {
    if (!allRef.current) return;
    allRef.current.indeterminate = !allChecked && someChecked;
  }, [allChecked, someChecked]);

  const headerTitle = useMemo(() => {
    if (!booking) return "Client Gallery";
    const name = booking?.details?.name || "Client";
    return `${name} — ${booking.reference}`;
  }, [booking]);

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

      const qy = query(collection(db, "bookings"), where("reference", "==", refCode), limit(1));
      const snap = await getDocs(qy);
      if (snap.empty) {
        setErr("Invalid access code. Double-check and try again.");
        setLoading(false);
        return;
      }

      const docRef = snap.docs[0];
      const data = docRef.data();
      setBooking({ id: docRef.id, ...data });

      // load images
      const imgsSnap = await getDocs(collection(db, `bookings/${docRef.id}/images`));
      const imgs = imgsSnap.docs.map((d) => d.data());
      imgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setImages(imgs);

      // pre-select all
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

  // Robust ZIP: try Storage SDK first, then fetch URL as fallback
  async function zipAndDownload(files, outName) {
    if (!files.length) {
      alert("No files selected");
      return;
    }

    const TOTAL_LIMIT_MB = 500;
    const approxBytes = files.reduce((sum, f) => sum + (f.bytes || 5_000_000), 0);
    if (approxBytes / (1024 * 1024) > TOTAL_LIMIT_MB) {
      alert(`Too many or too large files (>${TOTAL_LIMIT_MB}MB). Try fewer at once.`);
      return;
    }

    setZipping(true);
    setZipProgress(0);
    try {
      const zip = new JSZip();

      for (let i = 0; i < files.length; i++) {
        const img = files[i];
        let added = false;

        const path = storagePathOf(img);
        if (path) {
          try {
            const blob = await getBlob(sref(storage, path));
            zip.file(fileNameFrom(img), blob, { compression: "STORE" });
            added = true;
          } catch (e) {
            console.warn("Storage getBlob failed, will try fetch()", path, e);
          }
        }

        if (!added && img.secure_url) {
          try {
            const res = await fetch(img.secure_url, { credentials: "omit" });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const blob = await res.blob();
            zip.file(fileNameFrom(img), blob, { compression: "STORE" });
            added = true;
          } catch (e) {
            console.warn("Fetch fallback failed, skipping:", img.secure_url, e);
          }
        }

        setZipProgress(Math.round(((i + 1) / files.length) * 80));
      }

      const zipBlob = await zip.generateAsync(
        { type: "blob", compression: "DEFLATE", compressionOptions: { level: 3 } },
        (meta) => setZipProgress(80 + Math.round(meta.percent * 0.2))
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

  const downloadSelectedZip = () =>
    zipAndDownload(images.filter((i) => !!selected[i.public_id]), "selected-images.zip");
  const downloadAllZip = () => zipAndDownload(images, "all-images.zip");

  return (
    <section className="w-full border-y border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
      <Helmet>
        <title>Client Gallery | A7mad’s Camera</title>
        <meta
          name="description"
          content="Enter your access code to view and download your photos."
        />
        <link rel="canonical" href="https://a7madscamera.com/client-gallery" />
      </Helmet>

      <div className="container-pro py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {headerTitle}
        </h2>

        {/* Step 1: Access form */}
        {!booking && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-[hsl(var(--muted))]">Enter your access code to view your photos.</p>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              className="input"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading && code.trim()) checkCode();
              }}
              aria-label="Access code"
              autoComplete="one-time-code"
            />
            <button
              onClick={checkCode}
              disabled={loading || !code.trim()}
              className={cls(
                "btn",
                loading || !code.trim() ? "btn-ghost opacity-60 cursor-not-allowed" : "btn-primary"
              )}
            >
              {loading ? "Checking…" : "Open Gallery"}
            </button>
            {err && <div className="text-sm text-red-600">{err}</div>}
          </div>
        )}

        {/* Step 2: Grid + actions */}
        {booking && (
          <div className="mt-8">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 className="text-xl font-semibold">
                  {booking?.details?.name || "Client"} ({booking.reference})
                </h3>
                <div className="text-xs text-[hsl(var(--muted))]">
                  {[booking.date, booking.time, booking.package?.name].filter(Boolean).join(" • ")}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    ref={allRef}
                    type="checkbox"
                    checked={!!allChecked}
                    onChange={(e) => toggleAll(e.target.checked)}
                    aria-checked={allChecked ? "true" : someChecked ? "mixed" : "false"}
                  />
                  Select all
                </label>

                <button
                  onClick={downloadSelectedZip}
                  disabled={!someChecked || zipping}
                  className={cls(
                    "btn",
                    !someChecked || zipping ? "btn-ghost opacity-60 cursor-not-allowed" : "btn-ghost"
                  )}
                >
                  {zipping ? `Preparing… ${zipProgress}%` : "Download Selected"}
                </button>

                <button
                  onClick={downloadAllZip}
                  disabled={!images.length || zipping}
                  className={cls(
                    "btn",
                    !images.length || zipping ? "btn-ghost opacity-60 cursor-not-allowed" : "btn-primary"
                  )}
                >
                  {zipping ? `Please wait… ${zipProgress}%` : "Download All"}
                </button>

                <button onClick={reset} className="btn btn-ghost">
                  Use a different code
                </button>
              </div>
            </div>

            {zipping && (
              <div className="mt-3 h-2 w-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-full overflow-hidden">
                <div className="h-full bg-[hsl(var(--accent))] transition-all" style={{ width: `${zipProgress}%` }} />
              </div>
            )}

            {images.length > 0 ? (
              <div className="mt-6">
                <SelectableGallery
                  layout="masonry"
                  items={images}
                  selected={selected}
                  onToggle={toggleOne}
                />
              </div>
            ) : (
              <div className="mt-6 text-[hsl(var(--muted))]">No images yet for this gallery.</div>
            )}
          </div>
        )}
      </div>

      <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
    </section>
  );
}
