import React, { useEffect, useMemo, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";

// Zip + Storage for downloads
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { getStorage, ref as sref, getBlob } from "firebase/storage";

const storage = getStorage();

// ---------- helpers ----------
function cls(...xs) {
  return xs.filter(Boolean).join(" ");
}
function upRef(s = "") {
  return String(s).trim().toUpperCase();
}
function fileNameFrom(img) {
  const base =
    img.original_filename ||
    (img.public_id && img.public_id.split("/").pop()) ||
    (img.secure_url &&
      (decodeURIComponent((img.secure_url.match(/\/o\/([^?]+)/)?.[1] || "")).split("/").pop())) ||
    "image";
  const ext =
    (img.format && String(img.format).toLowerCase()) ||
    (img.secure_url && (img.secure_url.split("?")[0].split(".").pop() || "").toLowerCase()) ||
    "jpg";
  return `${base}.${ext.replace(/[^a-z0-9]/gi, "") || "jpg"}`;
}
function storagePathOf(img) {
  if (img.path || img.storagePath || img.fullPath) return img.path || img.storagePath || img.fullPath;
  const m = String(img.secure_url || "").match(/\/o\/([^?]+)/);
  return m ? decodeURIComponent(m[1]) : (img.public_id || null); // our uploader saves public_id == storage path
}

function parseRefFromUrl() {
  try {
    // supports both hash and normal routers
    const search = window.location.search || "";
    const hash = window.location.hash || "";
    const params = new URLSearchParams(search || (hash.includes("?") ? hash.split("?")[1] : ""));
    return params.get("ref") || "";
  } catch {
    return "";
  }
}

// ---------- component ----------
export default function ClientPortal() {
  const [refInput, setRefInput] = useState("");
  const [booking, setBooking] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // selection + zipping
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

  // Auto-login via ?ref=CODE or remembered session
  useEffect(() => {
    const urlRef = parseRefFromUrl();
    const saved = localStorage.getItem("clientRef") || "";
    const initial = upRef(urlRef || saved);
    if (initial) {
      loginWithRef(initial);
    }
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
      // 1) find booking by reference
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

      // remember session
      localStorage.setItem("clientRef", ref);

      // 2) load images from bookings/{bookingId}/images
      const imgsSnap = await getDocs(collection(db, `bookings/${bdoc.id}/images`));
      const imgs = imgsSnap.docs.map((d) => d.data());
      // sort newest first
      imgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setImages(imgs);

      // pre-select all
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

  // Client-side zipping via Firebase Storage + JSZip
  async function zipAndDownload(files, outName) {
    if (!files.length) {
      alert("No files selected");
      return;
    }

    const TOTAL_LIMIT_MB = 500; // soft cap
    let approx = 0;
    for (const f of files) approx += f.size || 5_000_000;
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
        const path = storagePathOf(img);
        if (!path) {
          console.warn("Cannot derive storage path for", img);
          continue;
        }
        const blob = await getBlob(sref(storage, path));
        zip.file(fileNameFrom(img), blob, { compression: "STORE" });

        setZipProgress(Math.round(((i + 1) / files.length) * 80));
      }

      const zipBlob = await zip.generateAsync(
        { type: "blob", compression: "DEFLATE", compressionOptions: { level: 3 } },
        (meta) => setZipProgress(80 + Math.round(meta.percent * 0.2))
      );

      saveAs(zipBlob, outName || "photos.zip");
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
    await zipAndDownload(files, "selected-photos.zip");
  }
  async function downloadAllZip() {
    await zipAndDownload(images, "all-photos.zip");
  }

  const clientName = useMemo(() => booking?.details?.name || "Client", [booking]);

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">
            Client Portal
          </h2>
          {booking && (
            <button
              onClick={signOut}
              className="rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition"
            >
              Sign out
            </button>
          )}
        </div>

        {/* Step 1: Login with reference */}
        {!booking && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-charcoal/70">
              Enter your <span className="font-semibold">reference code</span> to open your portal.
            </p>
            <input
              type="text"
              value={refInput}
              onChange={(e) => setRefInput(e.target.value)}
              placeholder="e.g., 8F2KQX"
              className="w-full rounded-xl border border-rose/30 px-3 py-2 bg-white"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading && refInput.trim()) loginWithRef();
              }}
            />
            <button
              onClick={() => loginWithRef()}
              disabled={loading || !refInput.trim()}
              className={cls(
                "rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all",
                loading || !refInput.trim()
                  ? "bg-blush text-charcoal/50 cursor-not-allowed"
                  : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
              )}
            >
              {loading ? "Opening…" : "Open Portal"}
            </button>
            {err && <div className="text-sm text-red-700">{err}</div>}
          </div>
        )}

        {/* Step 2: Portal */}
        {booking && (
          <div className="mt-8">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 className="font-serif text-xl text-charcoal">
                  Welcome, {clientName}
                </h3>
                <div className="text-xs text-charcoal/60">
                  Ref: <code className="font-mono">{booking.reference}</code> •{" "}
                  {booking.package?.name} •{" "}
                  {booking.startAt?.toDate?.()
                    ? booking.startAt.toDate().toLocaleString([], {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : `${booking.date} ${booking.time}`}
                </div>

                {/* Optional: show creative brief */}
                {(booking.details?.shootFor ||
                  booking.details?.style ||
                  booking.details?.locationNotes ||
                  booking.details?.notes) && (
                  <div className="mt-2 text-xs text-charcoal/70 space-y-1">
                    {booking.details?.shootFor && (
                      <div>
                        <span className="font-medium">Shoot:</span>{" "}
                        {booking.details.shootFor}
                      </div>
                    )}
                    {booking.details?.style && (
                      <div>
                        <span className="font-medium">Style:</span>{" "}
                        {booking.details.style}
                      </div>
                    )}
                    {booking.details?.locationNotes && (
                      <div>
                        <span className="font-medium">Location notes:</span>{" "}
                        {booking.details.locationNotes}
                      </div>
                    )}
                    {booking.details?.notes && (
                      <div>
                        <span className="font-medium">Notes:</span>{" "}
                        {booking.details.notes}
                      </div>
                    )}
                  </div>
                )}
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
              <div className="mt-6 text-charcoal/60">No images yet for this booking.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
