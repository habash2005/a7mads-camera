// src/pages/AdminUpload.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const CLOUD_NAME = "lamaphoto";              // your Cloudinary cloud
const UPLOAD_PRESET = "lamaphoto_unsigned";  // UNSIGNED preset name

export default function AdminUpload() {
  const [mode, setMode] = useState("portfolio"); // "portfolio" | "client"
  const [galleries, setGalleries] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [ready, setReady] = useState(!!window.cloudinary); // ← NEW

  // Ensure Cloudinary widget script is present & loaded (mobile-safe)
  useEffect(() => {
    if (window.cloudinary) { setReady(true); return; }

    const src = "https://upload-widget.cloudinary.com/global/all.js";
    let script = document.querySelector(`script[src="${src}"]`);
    const onload = () => setReady(true);
    const onerror = () => setMsg("Failed to load upload widget. Try turning off content blockers or reload.");

    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = onload;
      script.onerror = onerror;
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", onload, { once: true });
    }

    const t = setTimeout(() => {
      if (!window.cloudinary) setMsg("Still loading… if on iPhone, open in Safari and disable content blockers for this site.");
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  // Load client galleries for dropdown
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const snap = await getDocs(collection(db, "galleries"));
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
                              .sort((a,b)=>(a.name||"").localeCompare(b.name||""));
        setGalleries(list);
        if (list.length) setSelectedId(list[0].id);
        else if (mode === "client") setMsg("No galleries yet — create one at /admin (New Gallery).");
      } catch (e) {
        console.error(e);
        setMsg("Failed to load galleries. Check Firestore rules/connection.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const selected = useMemo(
    () => galleries.find(g => g.id === selectedId) || null,
    [galleries, selectedId]
  );

  const openWidget = useCallback(() => {
    if (!window.cloudinary) { setMsg("Widget not ready yet…"); return; }

    const isPortfolio = mode === "portfolio";
    const tag = isPortfolio ? "portfolio" : selected?.tag;
    const folder = isPortfolio ? "portfolio" : "client-galleries";
    if (!tag) return setMsg("Pick a client gallery first.");

    setMsg("");

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,    // must be UNSIGNED in Cloudinary console
        folder,
        tags: [tag],
        multiple: true,
        sources: ["local", "camera", "url", "google_drive", "dropbox"], // iOS camera supported over HTTPS
        clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
        maxFileSize: 20_000_000,
        styles: {
          palette: {
            window: "#FFF8F0",
            sourceBg: "#ffffff",
            windowBorder: "#F4A6A6",
            tabIcon: "#F4A6A6",
            menuIcons: "#333333",
            textDark: "#333333",
            link: "#F4A6A6",
            action: "#D4AF37",
            inProgress: "#F4A6A6",
            complete: "#D4AF37",
            error: "#ff4b4b",
          },
        },
      },
      (error, result) => {
        if (error) {
          console.error(error);
          setMsg("Upload error — see console.");
          return;
        }
        if (result?.event === "success") {
          setMsg(`✅ Uploaded: ${result.info.original_filename}`);
        }
      }
    );

    widget.open();
  }, [mode, selected]);

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Admin Upload</h2>
        <p className="text-charcoal/70 mt-1">
          Upload to the public <strong>Portfolio</strong> or pick a <strong>Client Gallery</strong>.
        </p>

        {/* Mode toggle */}
        <div className="mt-6 flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input type="radio" name="mode" value="portfolio"
              checked={mode === "portfolio"} onChange={() => setMode("portfolio")} />
            <span>Portfolio</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="mode" value="client"
              checked={mode === "client"} onChange={() => setMode("client")} />
            <span>Client Gallery</span>
          </label>
        </div>

        {/* Client picker */}
        {mode === "client" && (
          <div className="mt-4">
            <label className="text-sm font-medium text-charcoal">Select gallery</label>
            <select
              className="mt-2 w-full rounded-xl border border-rose/30 px-3 py-2 bg-white"
              disabled={loading || galleries.length === 0}
              value={selectedId}
              onChange={e => setSelectedId(e.target.value)}
            >
              {galleries.map(g => (
                <option key={g.id} value={g.id}>
                  {g.name} — {g.slug} ({g.tag})
                </option>
              ))}
            </select>
            {galleries.length === 0 &&
              <div className="text-xs text-charcoal/70 mt-2">No galleries yet — create one in the Admin dashboard.</div>}
          </div>
        )}

        {/* Upload button */}
        <div className="mt-6">
          <button
            onClick={openWidget}
            disabled={!ready}
            className={`rounded-full px-5 py-3 text-sm font-semibold shadow-md ${
              ready ? "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
                    : "bg-blush text-charcoal/50 cursor-not-allowed"
            }`}
          >
            {ready
              ? (mode === "portfolio" ? "Upload to Portfolio" : "Upload to Selected Gallery")
              : "Loading…"}
          </button>
        </div>

        {msg && <div className="mt-3 text-sm text-charcoal">{msg}</div>}

        <div className="mt-4 text-xs text-charcoal/70">
          Portfolio uploads use tag <code>portfolio</code>. Client uploads use the gallery’s tag
          (<code>{mode === "client" ? (galleries.find(g=>g.id===selectedId)?.tag || "gal-&lt;slug&gt;") : "portfolio"}</code>).
        </div>
      </div>
    </section>
  );
}
