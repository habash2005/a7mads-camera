import React, { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const ADMIN_EMAIL = "lamawafa13@gmail.com";
const MAX_SIZE = 25 * 1024 * 1024; // 25MB
const BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || ""; // e.g. limlim-32e6a.appspot.com

const cls = (...xs) => xs.filter(Boolean).join(" ");
const toSlug = (s) =>
  String(s || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
const randomHash = () =>
  Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

export default function AdminUpload() {
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  // auth/admin
  const [me, setMe] = useState(null);
  const notAdmin = !me || me.email !== ADMIN_EMAIL;

  // destination
  const [mode, setMode] = useState("portfolio"); // 'portfolio' | 'gallery'
  const [galleries, setGalleries] = useState([]); // [{id,name,slug,tag}]
  const [loadingGals, setLoadingGals] = useState(true);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null); // {id,name,slug,tag}

  // files
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]); // [{name, size, reason}]
  const [busy, setBusy] = useState(false);

  // ---------- auth ----------
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setMe(u || null);
      if (import.meta.env.DEV) {
        console.log("[auth]", u?.email || "signed out");
      }
    });
    return () => unsub();
  }, []);

  // ---------- galleries load ----------
  useEffect(() => {
    (async () => {
      try {
        setLoadingGals(true);
        const snap = await getDocs(collection(db, "galleries"));
        const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        const norm = rows
          .map((g) => ({
            id: g.id,
            name: g.name || g.tag || g.slug || g.id,
            slug: g.slug || toSlug(g.name || g.tag || ""),
            tag: g.tag,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setGalleries(norm);
      } catch (e) {
        console.error("Load galleries failed:", e);
        setGalleries([]);
      } finally {
        setLoadingGals(false);
      }
    })();
  }, []);

  // close dropdown if clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const filtered = useMemo(() => {
    if (!search.trim()) return galleries;
    const q = search.trim().toLowerCase();
    return galleries.filter(
      (g) =>
        g.name?.toLowerCase().includes(q) ||
        g.tag?.toLowerCase().includes(q) ||
        g.slug?.toLowerCase().includes(q)
    );
  }, [search, galleries]);

  // ---------- file pick/drop ----------
  const acceptFiles = (list) => {
    const ok = [];
    const bad = [];
    for (const f of list) {
      if (!f.type?.startsWith("image/")) {
        bad.push({ name: f.name, size: f.size, reason: "Not an image" });
        continue;
      }
      if (f.size > MAX_SIZE) {
        bad.push({ name: f.name, size: f.size, reason: "Over 25MB" });
        continue;
      }
      ok.push(f);
    }
    setRejected((prev) => [...prev, ...bad]);
    setFiles((prev) => [...prev, ...ok]);
  };

  const onPick = (e) => acceptFiles(Array.from(e.target.files || []));
  const onDrop = (e) => {
    e.preventDefault();
    acceptFiles(Array.from(e.dataTransfer.files || []));
  };
  const onBrowse = () => fileInputRef.current?.click();

  // ---------- helpers ----------
  function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }
  function formatBytes(n = 0) {
    if (n < 1024) return `${n} B`;
    const kb = n / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    if (mb < 1024) return `${mb.toFixed(1)} MB`;
    const gb = mb / 1024;
    return `${gb.toFixed(1)} GB`;
  }
  function extOf(name = "") {
    const p = name.split(".").pop();
    return (p || "jpg").toLowerCase();
  }
  async function getImageDims(file) {
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
        URL.revokeObjectURL(url);
      };
      img.onerror = () => {
        resolve({ width: 0, height: 0 });
        URL.revokeObjectURL(url);
      };
      img.src = url;
    });
  }

  // ---------- storage preflight (pinpoint App Check / CORS / Rules issues) ----------
  async function storagePreflight() {
    try {
      const blob = new Blob(["ok"], { type: "text/plain" });
      const testRef = sRef(storage, `__preflight/__${Date.now()}.txt`);
      const task = uploadBytesResumable(testRef, blob, {
        contentType: "text/plain",
        cacheControl: "public,max-age=60",
      });
      await new Promise((resolve, reject) => {
        task.on("state_changed", null, reject, resolve);
      });
      await getDownloadURL(testRef);
      return true;
    } catch (e) {
      // Provide actionable messages
      let hint = "";
      const msg = String(e?.message || e);
      if (msg.includes("appCheck")) {
        hint =
          "App Check is enforced. Make sure initializeAppCheck(...) with your reCAPTCHA v3 SITE KEY is in src/lib/firebase.js, and the key allows your domain.";
      } else if (msg.includes("unauthorized")) {
        hint =
          "Storage rules blocked the write. Confirm you're signed in as the admin email and rules allow admin writes.";
      } else if (msg.includes("Failed to fetch") || msg.includes("preflight")) {
        hint =
          "Browser preflight failed. Ensure your domain is in Firebase Auth Authorized domains and (only if needed) set bucket CORS to allow your origin.";
      }
      throw new Error(hint ? `${msg}\n\n${hint}` : msg);
    }
  }

  // ---------- one file upload ----------
  async function uploadToStorage(file, tag) {
    const { width, height } = await getImageDims(file);
    const base = tag === "portfolio" ? "portfolio" : `clients/${tag}`;
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const path = `${base}/${id}.${extOf(file.name)}`;

    const objRef = sRef(storage, path);
    const task = uploadBytesResumable(objRef, file, {
      contentType: file.type || "image/jpeg",
      cacheControl: "public,max-age=31536000,immutable",
    });

    await new Promise((resolve, reject) => {
      task.on("state_changed", null, reject, resolve);
    });

    const url = await getDownloadURL(objRef);

    // match Firestore rules fields exactly
    return {
      public_id: path,
      format: extOf(file.name),
      bytes: file.size,
      width,
      height,
      secure_url: url,
      original_filename: file.name,
      version: 1,
    };
  }

  // ---------- gallery doc helpers ----------
  async function getOrCreateGalleryByTag(tag, displayNameIfNew) {
    const qy = query(collection(db, "galleries"), where("tag", "==", tag), limit(1));
    const snap = await getDocs(qy);
    if (!snap.empty) return snap.docs[0].ref;

    const name = displayNameIfNew || (tag === "portfolio" ? "Portfolio" : tag);
    const ref = await addDoc(collection(db, "galleries"), {
      name,
      slug: toSlug(name),
      tag,
      codeHash: randomHash(),
      createdAt: serverTimestamp(),
    });
    return ref;
  }

  // ---------- submit ----------
  async function onUpload() {
    if (notAdmin) {
      alert("You must be signed in as the admin to upload.");
      return;
    }
    if (files.length === 0) {
      alert("Pick some image files first.");
      return;
    }
    const tag = mode === "portfolio" ? "portfolio" : selected?.tag;
    if (mode === "gallery" && !selected) {
      alert("Choose a gallery to upload to.");
      return;
    }

    // Preflight: fail fast with helpful reason
    try {
      await storagePreflight();
    } catch (e) {
      console.error("[Storage preflight]", e);
      alert(e.message || "Storage preflight failed.");
      return;
    }

    setBusy(true);
    try {
      let galRef;
      if (mode === "portfolio") {
        galRef = await getOrCreateGalleryByTag("portfolio", "Portfolio");
      } else if (selected?.id) {
        galRef = doc(db, "galleries", selected.id);
      } else {
        galRef = await getOrCreateGalleryByTag(tag, selected?.name);
      }

      // upload in small batches; collect detailed failures
      const batches = chunk(files, 5);
      let uploaded = [];
      let failures = [];

      for (const group of batches) {
        const res = await Promise.allSettled(group.map((f) => uploadToStorage(f, tag)));
        uploaded.push(...res.filter((r) => r.status === "fulfilled").map((r) => r.value));
        failures.push(
          ...res
            .map((r, i) => ({ r, file: group[i] }))
            .filter(({ r }) => r.status === "rejected")
            .map(({ r, file }) => ({
              name: file.name,
              reason: r.reason?.message || String(r.reason),
            }))
        );
      }

      if (uploaded.length === 0) {
        const list = failures.slice(0, 4).map((f) => `${f.name}: ${f.reason}`).join("\n");
        throw new Error(list || "All uploads failed.");
      }

      // write subcollection docs (match Firestore rules exactly)
      const imagesCol = collection(db, `galleries/${galRef.id}/images`);
      for (const img of uploaded) {
        const id = img.public_id.replace(/\//g, "__");
        await setDoc(doc(imagesCol, id), {
          public_id: img.public_id,
          format: img.format,
          bytes: img.bytes,
          width: img.width,
          height: img.height,
          secure_url: img.secure_url,
          original_filename: img.original_filename,
          version: img.version,
          tag,
          createdAt: serverTimestamp(),
        });
      }

      let msg = `Uploaded ${uploaded.length} image(s) to ${
        mode === "portfolio" ? "Portfolio" : selected.name
      }.`;
      if (failures.length) {
        msg +=
          `\n${failures.length} failed:\n` +
          failures
            .slice(0, 4)
            .map((f) => `• ${f.name}: ${f.reason}`)
            .join("\n");
      }
      alert(msg);

      setFiles([]);
      setRejected([]);
    } catch (e) {
      console.error("[AdminUpload] Error:", e);
      alert(e.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  // ---------- totals ----------
  const totalSize = useMemo(
    () => files.reduce((s, f) => s + (f.size || 0), 0),
    [files]
  );

  return (
    <section className="p-4 md:p-5">
      {/* Status banners */}
      <div className="mb-3 grid grid-cols-1 gap-2">
        <div
          className={cls(
            "text-xs rounded-lg px-3 py-2",
            notAdmin ? "bg-rose-50 text-rose-800" : "bg-emerald-50 text-emerald-700"
          )}
        >
          {notAdmin
            ? "Not signed in as admin (lamawafa13@gmail.com). Uploads will be blocked by rules."
            : `Signed in as ${me?.email}.`}
        </div>
        <div className="text-[11px] rounded-lg px-3 py-2 bg-slate-50 text-slate-600">
          Bucket: <code>{BUCKET || "(not set)"}</code>
        </div>
      </div>

      {/* Destination selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:items-end">
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-charcoal/80 mb-1">Destination</label>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="dest"
                value="portfolio"
                checked={mode === "portfolio"}
                onChange={() => setMode("portfolio")}
              />
              Portfolio
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="dest"
                value="gallery"
                checked={mode === "gallery"}
                onChange={() => setMode("gallery")}
              />
              Client Gallery
            </label>
          </div>
          <p className="mt-1 text-xs text-charcoal/50">
            Upload to your public portfolio or to a specific client gallery.
          </p>
        </div>

        {/* Searchable gallery dropdown */}
        <div className="lg:col-span-5" ref={dropdownRef}>
          <label className="block text-sm font-medium text-charcoal/80 mb-1">
            {mode === "portfolio" ? "Gallery (disabled in Portfolio mode)" : "Choose a gallery"}
          </label>
          <div className="relative">
            <button
              type="button"
              disabled={mode !== "gallery" || loadingGals}
              onClick={() => setOpen((o) => !o)}
              className={cls(
                "w-full rounded-2xl border border-rose/30 bg-white px-4 py-2.5 text-left",
                mode !== "gallery" || loadingGals ? "text-charcoal/40" : "text-charcoal"
              )}
            >
              {loadingGals
                ? "Loading galleries…"
                : mode !== "gallery"
                ? "Portfolio selected"
                : selected
                ? `${selected.name}  •  ${selected.tag}`
                : "Select a gallery"}
            </button>

            {open && mode === "gallery" && (
              <div className="absolute z-10 mt-2 w-full rounded-2xl border border-rose/30 bg-white shadow-lg">
                <div className="p-2">
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or tag…"
                    className="w-full rounded-xl border border-rose/30 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div className="max-h-64 overflow-auto p-1">
                  {filtered.length === 0 ? (
                    <div className="px-3 py-2 text-sm text-charcoal/60">No matches.</div>
                  ) : (
                    filtered.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        className={cls(
                          "w-full text-left px-3 py-2 text-sm hover:bg-ivory/70",
                          selected?.id === g.id && "bg-ivory/70"
                        )}
                        onClick={() => {
                          setSelected(g);
                          setOpen(false);
                        }}
                      >
                        <div className="font-medium">{g.name}</div>
                        <div className="text-xs text-charcoal/60">{g.tag}</div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
          {mode === "gallery" && (
            <p className="mt-1 text-xs text-charcoal/50">
              Can’t find it? Create a gallery in the “Galleries” section first, then come back.
            </p>
          )}
        </div>

        {/* Dropzone */}
        <div
          className="lg:col-span-4 rounded-2xl border-2 border-dashed border-rose/30 bg-ivory/60 px-4 py-4 text-center hover:border-rose/50"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,image/heic,image/heif"
            multiple
            onChange={onPick}
            className="sr-only"
          />
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={onBrowse}
              className="rounded-full bg-rose px-4 py-2 text-ivory hover:bg-gold hover:text-charcoal transition shadow"
            >
              Browse files
            </button>
            <span className="text-sm text-charcoal/60">…or drag & drop images here</span>
            <span className="text-xs text-charcoal/50">Max 25MB each · JPG, PNG, HEIC</span>
          </div>
        </div>
      </div>

      {/* Lists + actions */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          {files.length > 0 ? (
            <div className="rounded-xl bg-white ring-1 ring-rose/10 p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-charcoal/80">
                  {files.length} file{files.length > 1 ? "s" : ""} selected
                </p>
                <p className="text-xs text-charcoal/50">Total ~ {formatBytes(totalSize)}</p>
              </div>
              <ul className="mt-2 max-h-40 overflow-auto space-y-1 text-sm">
                {files.map((f, i) => (
                  <li
                    key={f.name + f.size + i}
                    className="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-ivory/60"
                    title={f.name}
                  >
                    <span className="truncate">{f.name}</span>
                    <span className="ml-3 shrink-0 text-xs text-charcoal/50">
                      {formatBytes(f.size)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-charcoal/50">No files selected yet.</p>
          )}

          {rejected.length > 0 && (
            <div className="mt-3 rounded-xl bg-rose-50 ring-1 ring-rose/20 p-3">
              <div className="text-sm font-medium text-rose-800">
                {rejected.length} file{rejected.length > 1 ? "s" : ""} were skipped:
              </div>
              <ul className="mt-1 text-xs text-rose-800/90 space-y-1">
                {rejected.map((r, i) => (
                  <li key={r.name + r.size + i}>
                    {r.name} — {r.reason} ({formatBytes(r.size)})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="md:col-span-4 flex flex-col md:items-end gap-2">
          <button
            type="button"
            onClick={() => {
              setFiles([]);
              setRejected([]);
            }}
            disabled={(files.length === 0 && rejected.length === 0) || busy}
            className="rounded-full px-4 py-2 text-sm font-semibold text-charcoal/70 hover:text-rose underline disabled:text-charcoal/30"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onUpload}
            disabled={
              busy ||
              files.length === 0 ||
              notAdmin ||
              (mode === "gallery" && !selected)
            }
            className={cls(
              "rounded-full px-5 py-3 text-sm font-semibold shadow-md transition",
              busy ||
                files.length === 0 ||
                notAdmin ||
                (mode === "gallery" && !selected)
                ? "bg-blush text-charcoal/50 cursor-not-allowed"
                : "bg-gold text-charcoal hover:bg-rose hover:text-ivory"
            )}
            title={
              notAdmin
                ? "Sign in as the admin first"
                : mode === "gallery" && !selected
                ? "Choose a gallery"
                : "Upload"
            }
          >
            {busy ? "Uploading…" : "Upload"}
          </button>
        </div>
      </div>
    </section>
  );
}
