import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
}

export default function AdminGallery() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  const createGallery = async () => {
    if (!name || !slug || !code) { setMsg("Fill all fields"); return; }
    setMsg("Saving…");
    try {
      const codeHash = await sha256(code.trim());
      // Tag you will use in Cloudinary uploads, e.g. gal-<slug>
      const tag = `gal-${slug.trim().toLowerCase()}`;

      await addDoc(collection(db, "galleries"), {
        name,
        slug: slug.trim().toLowerCase(),
        tag,
        codeHash,
        createdAt: serverTimestamp(),
      });

      setMsg("✅ Gallery saved. Upload photos to Cloudinary with tag: " + tag);
      setName(""); setSlug(""); setCode("");
    } catch (e) {
      console.error(e);
      setMsg("❌ Error saving gallery");
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Create Client Gallery</h2>
        <div className="mt-6 grid gap-4">
          <div>
            <label className="text-sm font-medium text-charcoal">Gallery name</label>
            <input className="mt-1 w-full rounded-xl border border-rose/30 px-3 py-2 bg-white"
              value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., Aliyah + Sam – Engagement" />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal">Slug (letters/numbers only)</label>
            <input className="mt-1 w-full rounded-xl border border-rose/30 px-3 py-2 bg-white"
              value={slug} onChange={e=>setSlug(e.target.value.replace(/[^a-z0-9-]/gi,""))} placeholder="e.g., aliyah-sam" />
            <div className="text-xs text-charcoal/60 mt-1">Uploads will use Cloudinary tag: <code>gal-{slug || "your-slug"}</code></div>
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal">Access code (what you send to client)</label>
            <input className="mt-1 w-full rounded-xl border border-rose/30 px-3 py-2 bg-white"
              value={code} onChange={e=>setCode(e.target.value)} placeholder="e.g., 842615" />
          </div>
          <div className="flex justify-end">
            <button onClick={createGallery}
              className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md">
              Save Gallery
            </button>
          </div>
          {msg && <div className="text-sm text-charcoal mt-2">{msg}</div>}
        </div>
      </div>
    </section>
  );
}
