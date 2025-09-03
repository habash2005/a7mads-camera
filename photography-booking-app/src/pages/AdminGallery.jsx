// src/pages/AdminGallery.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

/* --------------------------- small utils --------------------------- */
const ADMIN_EMAILS = new Set(["ahmadhijaz325@gmail.com"].map(s => s.toLowerCase()));
const cls = (...xs) => xs.filter(Boolean).join(" ");
const toSlug = (s="") =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function randomCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

/* ------------------------------ page ------------------------------- */
export default function AdminGallery() {
  const [me, setMe] = useState(null);
  const isAdmin = !!me && ADMIN_EMAILS.has((me.email || "").toLowerCase());

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => onAuthStateChanged(auth, (u) => setMe(u || null)), []);

  // auto-suggest slug from name (but allow manual edit)
  useEffect(() => {
    if (!name) return;
    const s = toSlug(name);
    if (!slug) setSlug(s);
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  const tag = useMemo(() => (slug ? `gal-${slug}` : "gal-your-slug"), [slug]);

  async function createOrUpdateGallery() {
    if (!isAdmin) { setMsg("You must be signed in as admin."); return; }
    if (!name.trim() || !slug.trim() || !code.trim()) {
      setMsg("Fill all fields.");
      return;
    }

    setBusy(true);
    setMsg("Saving…");
    try {
      const cleanSlug = toSlug(slug);
      const codeHash = await sha256(code.trim());

      // Use slug as document ID for idempotency & uniqueness
      const dref = doc(collection(db, "galleries"), cleanSlug);
      const snap = await getDoc(dref);
      const now = serverTimestamp();

      // Only the allowed fields per your rules:
      const payload = {
        name: name.trim(),
        slug: cleanSlug,
        tag: `gal-${cleanSlug}`,
        codeHash,
        // createdAt allowed on create; updatedAt allowed on update
        ...(snap.exists() ? { updatedAt: now } : { createdAt: now }),
      };

      await setDoc(dref, payload, { merge: false });

      setMsg(
        `${snap.exists() ? "✅ Updated" : "✅ Created"} “${name.trim()}”. ` +
        `Upload photos with tag: ${`gal-${cleanSlug}`}`
      );
      // keep fields so you can copy after save
    } catch (e) {
      console.error(e);
      setMsg(e?.message || "❌ Error saving gallery.");
    } finally {
      setBusy(false);
    }
  }

  function genCode() {
    setCode(randomCode(6));
  }

  function copy(text) {
    navigator.clipboard?.writeText(text).then(
      () => setMsg("Copied!"),
      () => setMsg("Couldn’t copy.")
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin · Create Client Gallery</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <section className="w-full py-16 md:py-24 bg-ivory">
        <div className="container-site">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">
              Create / Update Client Gallery
            </h2>
            <div
              className={cls(
                "text-xs rounded-lg px-3 py-2",
                isAdmin ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-800"
              )}
            >
              {isAdmin ? `Signed in as ${me?.email}` : "Not signed in as admin"}
            </div>
          </div>

          <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-rose/20 shadow-soft">
            <div className="grid gap-4">
              {/* Name */}
              <label className="block">
                <div className="text-sm font-medium text-charcoal">Gallery name</div>
                <input
                  className="mt-1 input w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Aliyah + Sam — Engagement"
                />
              </label>

              {/* Slug */}
              <label className="block">
                <div className="text-sm font-medium text-charcoal">
                  Slug <span className="text-[color:var(--muted)]">(letters & numbers)</span>
                </div>
                <input
                  className="mt-1 input w-full font-mono"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.replace(/[^a-z0-9-]/gi, "").toLowerCase())}
                  placeholder="aliyah-sam"
                />
                <div className="text-xs text-charcoal/60 mt-1">
                  Uploads should use Cloudinary/Firebase tag: <code>{tag}</code>{" "}
                  <button
                    type="button"
                    onClick={() => copy(tag)}
                    className="ml-2 text-[11px] underline text-burgundy hover:text-rose"
                  >
                    Copy
                  </button>
                </div>
              </label>

              {/* Access code */}
              <label className="block">
                <div className="text-sm font-medium text-charcoal">
                  Access code <span className="text-[color:var(--muted)]">(send this to client)</span>
                </div>
                <div className="mt-1 flex gap-2">
                  <input
                    className="input w-full font-mono"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="e.g., 842615 or ABC789"
                  />
                  <button
                    type="button"
                    onClick={genCode}
                    className="btn btn-ghost shrink-0"
                    title="Generate random code"
                  >
                    Generate
                  </button>
                </div>
                <div className="text-[11px] text-charcoal/60 mt-1">
                  We store only a SHA-256 hash of this code.
                </div>
              </label>

              {/* Quick client link (if you use a route like /#/client-gallery?code=XXXX) */}
              <div className="text-xs text-charcoal/70">
                Client URL (example):{" "}
                <code>
                  {`${window.location.origin}${window.location.pathname}#/client-gallery?code=${encodeURIComponent(code || "YOURCODE")}`}
                </code>
                <button
                  type="button"
                  onClick={() =>
                    copy(
                      `${window.location.origin}${window.location.pathname}#/client-gallery?code=${encodeURIComponent(code || "")}`
                    )
                  }
                  className="ml-2 text-[11px] underline text-burgundy hover:text-rose"
                >
                  Copy link
                </button>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setName("");
                    setSlug("");
                    setCode("");
                    setMsg("");
                  }}
                  className="btn btn-ghost"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={createOrUpdateGallery}
                  disabled={busy || !name.trim() || !slug.trim() || !code.trim() || !isAdmin}
                  className={cls(
                    "btn btn-primary",
                    (busy || !name.trim() || !slug.trim() || !code.trim() || !isAdmin) &&
                      "opacity-60 cursor-not-allowed"
                  )}
                >
                  {busy ? "Saving…" : "Save Gallery"}
                </button>
              </div>

              {msg && (
                <div className="text-sm mt-1">
                  {msg}
                </div>
              )}
            </div>
          </div>

          {/* Notes card */}
          <div className="max-w-2xl mt-6 text-[11px] text-[color:var(--muted)]">
            <ul className="list-disc pl-4 space-y-1">
              <li>
                Firestore rules already allow these fields on <code>galleries/&lt;id&gt;</code>:
                <code> name, slug, tag, codeHash, createdAt, updatedAt</code>.
              </li>
              <li>
                This page uses the <code>slug</code> as the document ID, so re-saving the same slug will update the gallery (idempotent).
              </li>
              <li>
                Only admins can save from this UI. Ensure your Auth domain is authorized and that your account email matches:
                <code> {Array.from(ADMIN_EMAILS).join(", ")} </code>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
