// src/pages/AdminUpload.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const CLOUD_NAME = "lamaphoto";              // ← your Cloudinary cloud name
const UPLOAD_PRESET = "lamaphoto_unsigned";  // ← your UNSIGNED upload preset

export default function AdminUpload() {
  const [mode, setMode] = useState("portfolio"); // "portfolio" | "client"
  const [galleries, setGalleries] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  // Load client galleries for dropdown
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const snap = await getDocs(collection(db, "galleries"));
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        setGalleries(list);
        if (list.length) setSelectedId(list[0].id);
        else if (mode === "client") setMsg("No galleries yet — create one at /admin/gallery.");
      } catch (e) {
        console.error(e);
        setMsg("Failed to load galleries. Check Firestore.");
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
    if (!window.cloudinary) return setMsg("Upload widget not loaded yet. Try again in a second.");

    // Decide target based on mode
    const isPortfolio = mode === "portfolio";
    const tag = isPortfolio ? "portfolio" : selected?.tag;
    const folder = isPortfolio ? "portfolio" : "client-galleries";
    if (!tag) return setMsg("Pick a client gallery first.");

    setMsg("");

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET, // must be UNSIGNED
        folder,
        tags: [tag],
        multiple: true,
        sources: ["local", "camera", "google_drive", "dropbox", "url"],
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
          setMsg(`✅ Uploaded to ${isPortfolio ? "Portfolio" : selected?.name}: ${result.info.original_filename}`);
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
            <input
              type="radio"
              name="mode"
              value="portfolio"
              checked={mode === "portfolio"}
              onChange={() => setMode("portfolio")}
            />
            <span>Portfolio</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              value="client"
              checked={mode === "client"}
              onChange={() => setMode("client")}
            />
            <span>Client Gallery</span>
          </label>
        </div>

        {/* Client gallery picker */}
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
            {galleries.length === 0 && (
              <div className="text-xs text-charcoal/70 mt-2">No galleries yet — create one at <code>/admin/gallery</code>.</div>
            )}
          </div>
        )}

        {/* Upload button */}
        <div className="mt-6">
          <button
            onClick={openWidget}
            className="rounded-full px-5 py-3 text-sm font-semibold shadow-md bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all"
          >
            {mode === "portfolio" ? "Upload to Portfolio" : "Upload to Selected Gallery"}
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
