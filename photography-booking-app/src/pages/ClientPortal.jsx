import React, { useEffect, useMemo, useRef, useState } from "react";
import { db, storage } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ref as sref, getBlob } from "firebase/storage";

import { Helmet } from "react-helmet-async";

/* ---------- helpers ---------- */
const cls = (...xs) => xs.filter(Boolean).join(" ");
const upRef = (s = "") => String(s).trim().toUpperCase();

function fileNameFrom(img) {
  const rawBase =
    img.original_filename ||
    (img.public_id && img.public_id.split("/").pop()) ||
    (img.secure_url &&
      (decodeURIComponent((img.secure_url.match(/\/o\/([^?]+)/)?.[1] || "")).split("/").pop())) ||
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
  return m ? decodeURIComponent(m[1]) : img.public_id || null;
}

function parseRefFromUrl() {
  try {
    const search = window.location.search || "";
    const hash = window.location.hash || "";
    const params = new URLSearchParams(search || (hash.includes("?") ? hash.split("?")[1] : ""));
    return params.get("ref") || "";
  } catch {
    return "";
  }
}

/** CORS-safe blob fetch: always prefer your configured bucket. */
async function getImageBlob(storageInst, img) {
  const bucket = storageInst?.app?.options?.storageBucket; // e.g., "ahmad-port.appspot.com"
  const path = storagePathOf(img);
  const https = img.secure_url;

  // 1) gs://<configured-bucket>/<path>
  if (bucket && path) {
    try {
      const gsRef = sref(storageInst, `gs://${bucket}/${path}`);
      return await getBlob(gsRef);
    } catch (e) {
      // continue
    }
  }

  // 2) <path> in default bucket
  if (path) {
    try {
      const pRef = sref(storageInst, path);
      return await getBlob(pRef);
    } catch (e) {
      // continue
    }
  }

  // 3) LAST RESORT: direct fetch (may CORS-fail, but we tried SDK paths)
  if (https) {
    const res = await fetch(https, { credentials: "omit" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.blob();
  }

  throw new Error("No readable source for image");
}

/* ---------- small UI bits (themed) ---------- */
function StatusPill({ status }) {
  const s = (status || "").toLowerCase();
  const base = "inline-flex items-center rounded-pill px-2.5 py-0.5 text-[11px] font-semibold ring-1";
  if (s === "confirmed") return <span className={cls(base, "bg-[hsl(var(--surface))] text-green-700 ring-green-200")}>Confirmed</span>;
  if (s === "finished")  return <span className={cls(base, "bg-[hsl(var(--accent))]/15 text-[hsl(var(--text))] ring-[hsl(var(--accent))]/30")}>Finished</span>;
  if (s === "canceled")  return <span className={cls(base, "bg-red-50 text-red-700 ring-red-200")}>Canceled</span>;
  return <span className={cls(base, "bg-[hsl(var(--surface))] text-[hsl(var(--text))] ring-[hsl(var(--border))]")}>Pending</span>;
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
              <input type="checkbox" checked={!!selected[img.public_id]} onChange={() => onToggle(img.public_id)} className="sr-only" />
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
            <a
              className="absolute top-2 right-2 text-[11px] underline decoration-1 text-white/95 hover:text-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity"
              href={img.secure_url}
              target="_blank"
              rel="noreferrer"
            >
              Original
            </a>
          </figure>
        ))}
      </div>
    );
  }

  // fallback grid
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
            <input type="checkbox" checked={!!selected[img.public_id]} onChange={() => onToggle(img.public_id)} className="sr-only" />
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
          <a
            className="absolute top-2 right-2 text-[11px] underline decoration-1 text-white/95 hover:text-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity"
            href={img.secure_url}
            target="_blank"
            rel="noreferrer"
          >
            Original
          </a>
        </figure>
      ))}
    </div>
  );
}

/* ---------- component ---------- */
export default function ClientPortal() {
  const [refInput, setRefInput] = useState("");
  const [booking, setBooking] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
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

  // ensure indeterminate state
  const allRef = useRef(null);
  useEffect(() => {
    if (!allRef.current) return;
    allRef.current.indeterminate = !allChecked && someChecked;
  }, [allChecked, someChecked]);

  useEffect(() => {
    const urlRef = parseRefFromUrl();
    const saved = localStorage.getItem("clientRef") || "";
    const initial = upRef(urlRef || saved);
    if (initial) loginWithRef(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loginWithRef(rawRef) {
    const ref = upRef(rawRef || refInput);
    if (!ref) return;
    setErr("");
    setLoading(true);
    setImages([]);
    setSelected({});
    setBooking(null);

    try {
      const qy = query(collection(db, "bookings"), where("reference", "==", ref), limit(1));
      const bsnap = await getDocs(qy);
      if (bsnap.empty) {
        setErr("Invalid reference code. Double-check and try again.");
        setLoading(false);
        return;
      }
      const bdoc = bsnap.docs[0];
      const bdata = { id: bdoc.id, ...bdoc.data() };
      setBooking(bdata);

      localStorage.setItem("clientRef", ref);

      const imgsSnap = await getDocs(collection(db, `bookings/${bdoc.id}/images`));
      const imgs = imgsSnap.docs.map((d) => d.data());
      imgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setImages(imgs);

      const pre = {};
      imgs.forEach((img) => (pre[img.public_id] = true));
      setSelected(pre);
    } catch (e) {
      console.error(e);
      setErr("There was a problem opening your portal. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.removeItem("clientRef");
    setRefInput("");
    setBooking(null);
    setImages([]);
    setSelected({});
    setErr("");
    setZipping(false);
    setZipProgress(0);
  }

  // ZIP via Firebase Storage SDK (CORS-safe)
  async function zipAndDownload(files, outName) {
    if (!files.length) {
      alert("No files selected");
      return;
    }
    const TOTAL_LIMIT_MB = 500;
    let approx = 0;
    for (const f of files) approx += f.bytes || f.size || 5_000_000;
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
        try {
          const blob = await getImageBlob(storage, img);
          zip.file(fileNameFrom(img), blob, { compression: "STORE" });
        } catch (e) {
          console.warn("Skipping file due to read error:", img.public_id || img.secure_url, e);
        }
        setZipProgress(Math.round(((i + 1) / files.length) * 80));
      }
      const zipBlob = await zip.generateAsync(
        { type: "blob", compression: "DEFLATE", compressionOptions: { level: 3 } },
        (meta) => setZipProgress(80 + Math.round(meta.percent * 0.2))
      );
      saveAs(zipBlob, outName || "photos.zip");
    } catch (e) {
      console.error(e);
      alert(e?.message || "Preparing ZIP failed.");
    } finally {
      setZipping(false);
      setZipProgress(0);
    }
  }

  async function downloadSelectedZip() {
    const files = images.filter((i) => !!selected[i.public_id]);
    try {
      await zipAndDownload(files, "selected-photos.zip");
    } catch (e) {
      console.error(e);
      alert(e?.message || "Download failed.");
    }
  }
  async function downloadAllZip() {
    try {
      await zipAndDownload(images, "all-photos.zip");
    } catch (e) {
      console.error(e);
      alert(e?.message || "Download failed.");
    }
  }

  const clientName = useMemo(() => booking?.details?.name || "Client", [booking]);
  const whenText = useMemo(() => {
    if (!booking) return "";
    const dt = booking.startAt?.toDate?.();
    return dt
      ? dt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
      : `${booking.date || ""} ${booking.time || ""}`.trim();
  }, [booking]);

  return (
    <section className="w-full border-y border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
      <Helmet>
        <title>Client Portal | A7mad’s Camera</title>
        <meta name="description" content="Access your gallery using your reference code. Download selected photos or your full set." />
        <link rel="canonical" href="https://a7madscamera.com/client" />
      </Helmet>

      <div className="container-pro py-16 md:py-24">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Client Portal</h2>
          {booking && <button onClick={signOut} className="btn btn-ghost">Sign out</button>}
        </div>

        {!booking && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-[hsl(var(--muted))]">
              Enter your <span className="font-semibold text-[hsl(var(--text))]">reference code</span> to open your portal.
            </p>
            <input
              type="text"
              value={refInput}
              onChange={(e) => setRefInput(e.target.value)}
              placeholder="e.g., 8F2KQX"
              className="input"
              onKeyDown={(e) => { if (e.key === "Enter" && !loading && refInput.trim()) loginWithRef(); }}
            />
            <button
              onClick={() => loginWithRef()}
              disabled={loading || !refInput.trim()}
              className={cls("btn", loading || !refInput.trim() ? "btn-ghost opacity-60 cursor-not-allowed" : "btn-primary")}
            >
              {loading ? "Opening…" : "Open Portal"}
            </button>
            {err && <div className="text-sm text-red-600">{err}</div>}
          </div>
        )}

        {booking && (
          <div className="mt-8">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <h3 className="text-xl font-semibold">Welcome, {clientName}</h3>
                <div className="mt-1 text-xs text-[hsl(var(--muted))]">
                  Ref: <code className="font-mono">{booking.reference}</code> • {booking.package?.name || "Package"} {booking.package?.duration ? `• ${booking.package.duration}` : ""} {whenText ? `• ${whenText}` : ""}
                </div>
                <div className="mt-2"><StatusPill status={booking.status} /></div>
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
                  className={cls("btn", !someChecked || zipping ? "btn-ghost opacity-60 cursor-not-allowed" : "btn-ghost")}
                >
                  {zipping ? `Preparing… ${zipProgress}%` : "Download Selected"}
                </button>

                <button
                  onClick={downloadAllZip}
                  disabled={!images.length || zipping}
                  className={cls("btn", !images.length || zipping ? "btn-ghost opacity-60 cursor-not-allowed" : "btn-primary")}
                >
                  {zipping ? `Please wait… ${zipProgress}%` : "Download All"}
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
                <SelectableGallery layout="masonry" items={images} selected={selected} onToggle={toggleOne} />
              </div>
            ) : (
              <div className="mt-6 text-[hsl(var(--muted))]">No images yet for this booking.</div>
            )}
          </div>
        )}
      </div>

      <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
    </section>
  );
}
