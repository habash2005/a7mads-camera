// src/pages/ClientPortal.jsx
import React, { useMemo, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

function fileNameFrom(img) {
  const base = img.original_filename || img.public_id?.split("/").pop() || "image";
  const ext = (img.format || "jpg").toLowerCase();
  return `${base}.${ext}`;
}

async function fetchBookingByRef(refCode) {
  const qy = query(
    collection(db, "bookings"),
    where("reference", "==", refCode),
    limit(1)
  );
  const snap = await getDocs(qy);
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
}

async function fetchImagesForBooking(id) {
  const snap = await getDocs(collection(db, `bookings/${id}/images`));
  const rows = snap.docs.map((d) => d.data());
  rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
  return rows;
}

export default function ClientPortal() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [booking, setBooking] = useState(null); // {id, reference, status, package, date, time, startAt, details}
  const [images, setImages] = useState([]);

  const [zipping, setZipping] = useState(false);
  const [selected, setSelected] = useState({});

  const statusChip = useMemo(() => {
    if (!booking) return null;
    const s = String(booking.status || "").toLowerCase();
    const map = {
      pending: "bg-amber-100 text-amber-900 border-amber-300",
      confirmed: "bg-emerald-100 text-emerald-900 border-emerald-300",
      canceled: "bg-rose-100 text-rose-900 border-rose-300",
    };
    return map[s] || "bg-slate-100 text-slate-900 border-slate-300";
  }, [booking]);

  const someChecked = images.some((img) => !!selected[img.public_id]);
  const allChecked = images.length > 0 && images.every((img) => !!selected[img.public_id]);

  function toggleOne(pid) {
    setSelected((s) => ({ ...s, [pid]: !s[pid] }));
  }
  function toggleAll(checked) {
    const next = {};
    images.forEach((img) => (next[img.public_id] = checked));
    setSelected(next);
  }

  async function openPortal() {
    setErr("");
    setBooking(null);
    setImages([]);
    setSelected({});
    const ref = (code || "").trim().toUpperCase();
    if (!ref) { setErr("Enter your reference."); return; }

    setLoading(true);
    try {
      const bk = await fetchBookingByRef(ref);
      if (!bk) { setErr("No booking found for that reference."); setLoading(false); return; }
      setBooking(bk);

      const imgs = await fetchImagesForBooking(bk.id);
      setImages(imgs);

      const pre = {};
      imgs.forEach((img) => (pre[img.public_id] = true));
      setSelected(pre);
    } catch (e) {
      console.error(e);
      setErr("Could not load your portal. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function downloadZip(files, outName) {
    if (!files.length) return;
    setZipping(true);
    try {
      const resp = await fetch("/.netlify/functions/storage-zip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files, filename: outName || "photos.zip" }),
      });
      if (!resp.ok) {
        const text = await resp.text();
        console.error("ZIP error:", resp.status, text);
        throw new Error("Preparing ZIP failed.");
      }
      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = outName || "photos.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
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

  function reset() {
    setCode("");
    setBooking(null);
    setImages([]);
    setSelected({});
    setZipping(false);
    setErr("");
  }

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Client Portal</h2>

        {!booking && (
          <div className="mt-6 max-w-md space-y-3">
            <p className="text-charcoal/70">
              Enter the reference code we sent you to view your appointment and photos.
            </p>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="e.g., AB12CD"
              className="w-full rounded-2xl border border-rose/30 px-3 py-2 bg-white tracking-widest"
              onKeyDown={(e) => { if (e.key === "Enter" && !loading && code.trim()) openPortal(); }}
            />
            <button
              onClick={openPortal}
              disabled={loading || !code.trim()}
              className={cls(
                "rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all",
                loading || !code.trim()
                  ? "bg-blush text-charcoal/50 cursor-not-allowed"
                  : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
              )}
            >
              {loading ? "Checking…" : "Open Portal"}
            </button>
            {err && <div className="text-sm text-red-700">{err}</div>}
          </div>
        )}

        {booking && (
          <div className="mt-8 space-y-6">
            {/* Booking card */}
            <div className="rounded-2xl border border-rose/30 bg-white/80 shadow-sm p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl text-charcoal">
                    {booking.package?.name || "Session"}
                  </h3>
                  <div className="mt-1 text-sm text-charcoal/70">
                    {booking.date} • {booking.time}
                    {booking.details?.location ? ` • ${booking.details.location}` : ""}
                  </div>
                  <div className="mt-1 text-xs text-charcoal/60">
                    Ref: <span className="font-mono text-charcoal">{booking.reference}</span>
                  </div>
                </div>
                <span className={cls("rounded-full border px-3 py-1 text-xs font-semibold", statusChip)}>
                  {String(booking.status || "pending").toUpperCase()}
                </span>
              </div>
              {typeof booking.package?.price === "number" && (
                <div className="mt-2 text-sm text-charcoal/80">
                  ${booking.package.price} • {booking.package.duration}
                </div>
              )}
            </div>

            {/* Photos */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="text-sm text-charcoal/70">
                {images.length
                  ? `${images.length} photo${images.length > 1 ? "s" : ""} available`
                  : "No photos uploaded yet."}
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

                <button onClick={reset} className="text-sm underline text-charcoal/70 hover:text-rose">
                  Use a different code
                </button>
              </div>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => {
                  const previewSrc = img.secure_url;
                  return (
                    <figure key={img.public_id} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow">
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
                          <span className="truncate max-w-[10rem]">
                            {fileNameFrom(img)}
                          </span>
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
            )}
          </div>
        )}
      </div>
    </section>
  );
}
