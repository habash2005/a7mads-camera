// src/pages/AdminUpload.jsx
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../lib/firebase";
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

const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const ADMIN_EMAIL = "lamawafa13@gmail.com"; // matches your Firestore rule

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
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [tag, setTag] = useState("");
  const [name, setName] = useState(""); // optional display name
  const [busy, setBusy] = useState(false);
  const [me, setMe] = useState(null);

  // Check auth so we don't hit rules errors blindly
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setMe(u));
    return () => unsub();
  }, []);

  const notAdmin = !me || me.email !== ADMIN_EMAIL;

  const onPick = (e) => setFiles(Array.from(e.target.files || []));
  const onBrowse = () => inputRef.current?.click();

  const onDrop = (e) => {
    e.preventDefault();
    const f = Array.from(e.dataTransfer.files || []).filter((x) =>
      x.type.startsWith("image/")
    );
    if (f.length) setFiles(f);
  };

  // ---- Cloudinary unsigned upload (FormData) ----
  async function uploadToCloudinary(file, galleryTag) {
    if (!CLOUD || !PRESET) {
      throw new Error("Cloudinary env missing (VITE_CLOUDINARY_*).");
    }
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", PRESET);
    if (galleryTag) {
      fd.append("tags", galleryTag);
      fd.append("folder", `clients/${galleryTag}`);
    }
    const r = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, {
      method: "POST",
      body: fd,
    });
    const text = await r.text();
    if (!r.ok) {
      let msg = "Upload failed";
      try {
        msg = JSON.parse(text)?.error?.message || msg;
      } catch {}
      console.error("Cloudinary upload error:", text);
      throw new Error(msg);
    }
    const j = JSON.parse(text);
    return {
      public_id: j.public_id,
      format: String(j.format || ""),
      bytes: Number(j.bytes || 0),
      width: Number(j.width || 0),
      height: Number(j.height || 0),
      secure_url: j.secure_url,
      original_filename: String(j.original_filename || ""),
      version: Number(j.version || 0),
    };
  }

  // Find or create a gallery doc that matches the tag (rules-compliant shape)
  async function getOrCreateGalleryDoc(gTag, displayName) {
    const galleries = collection(db, "galleries");
    const qy = query(galleries, where("tag", "==", gTag), limit(1));
    const snap = await getDocs(qy);

    if (!snap.empty) {
      // Already exists; nothing else needed here for create
      return snap.docs[0].ref;
    }

    const galleryName = displayName?.trim() || gTag;
    const ref = await addDoc(galleries, {
      name: galleryName,
      slug: toSlug(galleryName),
      tag: gTag,
      codeHash: randomHash(), // you can later replace via your AdminGallery flow
      createdAt: serverTimestamp(),
    });
    return ref;
  }

  async function onCreate() {
    if (notAdmin) {
      alert("You must be signed in as the admin to create/upload (check Admin sign-in).");
      return;
    }
    if (!tag.trim()) {
      alert("Enter a client tag (e.g., client_amierissa_2025_08).");
      return;
    }
    if (files.length === 0) {
      alert("Pick some image files to upload.");
      return;
    }

    setBusy(true);
    try {
      const cleanTag = tag.trim();
      const galRef = await getOrCreateGalleryDoc(cleanTag, name);

      // Upload concurrently, but not too many at once to avoid rate spikes
      const chunks = chunk(files, 5);
      let uploaded = [];
      for (const batch of chunks) {
        const res = await Promise.allSettled(
          batch.map((f) => uploadToCloudinary(f, cleanTag))
        );
        uploaded.push(...res.filter((r) => r.status === "fulfilled").map((r) => r.value));
      }
      if (uploaded.length === 0) {
        throw new Error("All uploads failed.");
      }

      // Write subcollection docs with EXACT fields your rules require
      const imagesColPath = `galleries/${galRef.id}/images`;
      for (const img of uploaded) {
        const id = img.public_id.replace(/\//g, "__"); // doc id cannot contain slashes
        await setDoc(doc(collection(db, imagesColPath), id), {
          public_id: img.public_id,
          format: img.format,
          bytes: img.bytes,
          width: img.width,
          height: img.height,
          secure_url: img.secure_url,
          original_filename: img.original_filename,
          version: img.version, // number
          tag: cleanTag,
          createdAt: serverTimestamp(),
        });
      }

      alert(`Gallery ready. Uploaded ${uploaded.length} image(s).`);
      setFiles([]);
      // keep tag/name so you can add more later
    } catch (e) {
      console.error("[AdminUpload] Error:", e);
      alert(e.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="p-4 md:p-5">
      {/* Admin status */}
      <div
        className={cls(
          "mb-3 text-xs rounded-lg px-3 py-2",
          notAdmin ? "bg-rose-50 text-rose-800" : "bg-emerald-50 text-emerald-700"
        )}
      >
        {notAdmin
          ? "Not signed in as admin (lamawafa13@gmail.com). Uploads/writes will be blocked by Firestore rules."
          : `Signed in as ${me?.email}.`}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-end">
        <div>
          <label className="block text-sm font-medium text-charcoal/80 mb-1">Client tag</label>
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="e.g. client_amierissa_2025_08"
            className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <p className="mt-1 text-xs text-charcoal/50">
            We’ll apply this tag to every image and use it to group the ZIP download.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal/80 mb-1">Gallery name (optional)</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Amierissa — Aug 2025"
            className="w-full rounded-2xl border border-rose/30 bg-white px-4 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <p className="mt-1 text-xs text-charcoal/50">Used for the gallery’s display name/slug on first create.</p>
        </div>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className="rounded-2xl border-2 border-dashed border-rose/30 bg-ivory/60 px-4 py-4 text-center hover:border-rose/50"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
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
            <span className="text-xs text-charcoal/50">JPG, PNG, HEIC • up to ~50MB each</span>
          </div>
        </div>
      </div>

      {/* File list + action */}
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex-1">
          {files.length > 0 ? (
            <div className="rounded-xl bg-white ring-1 ring-rose/10 p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-charcoal/80">
                  {files.length} file{files.length > 1 ? "s" : ""} selected
                </p>
                <p className="text-xs text-charcoal/50">
                  Total ~ {formatBytes(files.reduce((s, f) => s + (f.size || 0), 0))}
                </p>
              </div>
              <ul className="mt-2 max-h-40 overflow-auto space-y-1 text-sm">
                {files.map((f) => (
                  <li
                    key={f.name + f.size}
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
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFiles([])}
            disabled={files.length === 0 || busy}
            className="rounded-full px-4 py-2 text-sm font-semibold text-charcoal/70 hover:text-rose underline disabled:text-charcoal/30"
          >
            Clear
          </button>
          <button
            onClick={onCreate}
            disabled={busy || !tag.trim() || files.length === 0 || notAdmin}
            className={cls(
              "rounded-full px-5 py-3 text-sm font-semibold shadow-md transition",
              busy || !tag.trim() || files.length === 0 || notAdmin
                ? "bg-blush text-charcoal/50 cursor-not-allowed"
                : "bg-gold text-charcoal hover:bg-rose hover:text-ivory"
            )}
            title={notAdmin ? "Sign in as the admin first" : "Create/Update gallery & upload"}
          >
            {busy ? "Uploading…" : "Create Gallery"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
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
