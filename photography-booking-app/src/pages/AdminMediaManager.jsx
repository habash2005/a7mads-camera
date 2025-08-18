import React, { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref as sRef, deleteObject } from "firebase/storage";

const ADMIN_EMAIL = "lamawafa13@gmail.com";
const CONCURRENCY = 5;

const cls = (...xs) => xs.filter(Boolean).join(" ");

function storagePathOf(img) {
  // Prefer our explicit field saved on upload
  if (img.public_id || img.path || img.storagePath || img.fullPath) {
    return img.public_id || img.path || img.storagePath || img.fullPath;
  }
  // Derive from Firebase download URL if needed
  const m = String(img.secure_url || "").match(/\/o\/([^?]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export default function AdminMediaManager() {
  const [me, setMe] = useState(null);
  const notAdmin = !me || me.email !== ADMIN_EMAIL;

  const [tab, setTab] = useState("portfolio"); // 'portfolio' | 'client'

  // ---- Portfolio state ----
  const [portfolioId, setPortfolioId] = useState("");
  const [pImgs, setPImgs] = useState([]);
  const [pSel, setPSel] = useState({});
  const [pLoading, setPLoading] = useState(false);
  const [pMsg, setPMsg] = useState("");

  // ---- Client state ----
  const [refCode, setRefCode] = useState("");
  const [client, setClient] = useState(null); // {id, reference, details...}
  const [cImgs, setCImgs] = useState([]);
  const [cSel, setCSel] = useState({});
  const [cLoading, setCLoading] = useState(false);
  const [cMsg, setCMsg] = useState("");

  /* auth */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setMe(u || null));
    return () => unsub();
  }, []);

  /* load portfolio gallery + images */
  async function loadPortfolio() {
    setPMsg("");
    setPLoading(true);
    setPImgs([]);
    setPSel({});
    try {
      // find portfolio gallery
      const galSnap = await getDocs(
        query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1))
      );
      if (galSnap.empty) {
        setPMsg("No portfolio gallery found. Create one first.");
        setPortfolioId("");
        return;
      }
      const gid = galSnap.docs[0].id;
      setPortfolioId(gid);

      // get its images
      let imgsSnap;
      try {
        imgsSnap = await getDocs(
          query(
            collection(db, `galleries/${gid}/images`),
            orderBy("createdAt", "desc"),
            limit(500)
          )
        );
      } catch {
        imgsSnap = await getDocs(collection(db, `galleries/${gid}/images`));
      }

      const rows = imgsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setPImgs(rows);

      const s = {};
      rows.forEach((r) => (s[r.id] = false));
      setPSel(s);
    } catch (e) {
      console.error("[AdminMediaManager] portfolio load", e);
      setPMsg("Failed to load portfolio images (rules/App Check?).");
    } finally {
      setPLoading(false);
    }
  }

  /* load client gallery by ref code */
  async function loadClientByRef() {
    const code = refCode.trim().toUpperCase();
    if (!code) return;

    setCMsg("");
    setCLoading(true);
    setClient(null);
    setCImgs([]);
    setCSel({});
    try {
      // find booking by reference
      const bSnap = await getDocs(
        query(collection(db, "bookings"), where("reference", "==", code), limit(1))
      );
      if (bSnap.empty) {
        setCMsg("No booking found for that reference.");
        return;
      }
      const b = { id: bSnap.docs[0].id, ...bSnap.docs[0].data() };
      setClient(b);

      // load its images subcollection
      let imgsSnap;
      try {
        imgsSnap = await getDocs(
          query(
            collection(db, `bookings/${b.id}/images`),
            orderBy("createdAt", "desc"),
            limit(500)
          )
        );
      } catch {
        imgsSnap = await getDocs(collection(db, `bookings/${b.id}/images`));
      }

      const rows = imgsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setCImgs(rows);

      const s = {};
      rows.forEach((r) => (s[r.id] = false));
      setCSel(s);
    } catch (e) {
      console.error("[AdminMediaManager] client load", e);
      setCMsg("Failed to load client images (rules/App Check?).");
    } finally {
      setCLoading(false);
    }
  }

  /* selection helpers */
  const pCount = useMemo(() => Object.values(pSel).filter(Boolean).length, [pSel]);
  const cCount = useMemo(() => Object.values(cSel).filter(Boolean).length, [cSel]);

  function toggleAll(which, checked) {
    if (which === "p") {
      const s = {};
      pImgs.forEach((r) => (s[r.id] = !!checked));
      setPSel(s);
    } else {
      const s = {};
      cImgs.forEach((r) => (s[r.id] = !!checked));
      setCSel(s);
    }
  }

  /* delete selected (Firestore doc + Storage object) */
  async function deleteSelected({ type }) {
    if (notAdmin) return alert("Sign in as admin first.");
    const imgs = type === "p" ? pImgs : cImgs;
    const sel = type === "p" ? pSel : cSel;

    const list = imgs.filter((i) => sel[i.id]);
    if (list.length === 0) return alert("No images selected.");

    const ok = window.confirm(
      `Delete ${list.length} image${list.length > 1 ? "s" : ""} from ${
        type === "p" ? "Portfolio" : `Client ${client?.reference || ""}`
      }?\nThis deletes files from Storage AND their Firestore docs.`
    );
    if (!ok) return;

    // figure collection path segments for doc deletion
    const docPath = (imgId) => {
      if (type === "p") {
        return doc(db, "galleries", portfolioId, "images", imgId);
      }
      return doc(db, "bookings", client.id, "images", imgId);
    };

    // chunk + delete with concurrency cap
    const chunks = [];
    for (let i = 0; i < list.length; i += CONCURRENCY) chunks.push(list.slice(i, i + CONCURRENCY));

    let deleted = 0;
    let failed = 0;

    for (const group of chunks) {
      await Promise.all(
        group.map(async (img) => {
          try {
            const path = storagePathOf(img);
            if (path) {
              try {
                await deleteObject(sRef(storage, path));
              } catch (e) {
                // If the file is missing, still delete the doc
                console.warn("Storage delete warning:", e);
              }
            } else {
              console.warn("No storage path for", img);
            }

            await deleteDoc(docPath(img.id));
            deleted += 1;
          } catch (e) {
            console.error("Delete failed:", e);
            failed += 1;
          }
        })
      );
    }

    alert(`Deleted ${deleted} — ${failed ? `${failed} failed` : "done!"}`);

    // refresh the list
    if (type === "p") await loadPortfolio();
    else await loadClientByRef();
  }

  return (
    <section className="w-full">
      {/* Top bar */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            className={cls(
              "px-3 py-1.5 rounded-full text-sm font-semibold",
              tab === "portfolio" ? "bg-rose text-ivory" : "bg-white border border-rose/30 text-charcoal"
            )}
            onClick={() => setTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={cls(
              "px-3 py-1.5 rounded-full text-sm font-semibold",
              tab === "client" ? "bg-rose text-ivory" : "bg-white border border-rose/30 text-charcoal"
            )}
            onClick={() => setTab("client")}
          >
            Client
          </button>
        </div>

        <div className={cls("text-xs rounded-lg px-3 py-2",
          notAdmin ? "bg-rose-50 text-rose-800" : "bg-emerald-50 text-emerald-700")}>
          {notAdmin ? "Not signed in as admin — deletes will fail." : `Signed in as ${me?.email}`}
        </div>
      </div>

      {/* Portfolio tab */}
      {tab === "portfolio" && (
        <div className="rounded-2xl border border-rose/30 bg-white p-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="text-sm text-charcoal/70">
              {portfolioId ? <>Gallery ID: <code>{portfolioId}</code></> : "Load portfolio images"}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={loadPortfolio}
                disabled={pLoading}
                className={cls(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  pLoading ? "bg-blush text-charcoal/50" : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
                )}
              >
                {pLoading ? "Loading…" : "Refresh"}
              </button>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={pImgs.length > 0 && pCount === pImgs.length}
                  ref={(el) => el && (el.indeterminate = pCount > 0 && pCount < pImgs.length)}
                  onChange={(e) => toggleAll("p", e.target.checked)}
                />
                Select all
              </label>
              <button
                onClick={() => deleteSelected({ type: "p" })}
                disabled={pCount === 0 || pLoading || notAdmin}
                className={cls(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  pCount === 0 || pLoading || notAdmin
                    ? "bg-blush text-charcoal/50"
                    : "bg-red-600 text-white hover:bg-red-700"
                )}
              >
                Delete selected ({pCount})
              </button>
            </div>
          </div>

          {pMsg && <div className="mt-3 text-sm text-rose-700">{pMsg}</div>}

          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {pImgs.map((img) => (
              <figure key={img.id} className="relative group overflow-hidden rounded-xl border border-rose/20">
                <img
                  src={img.secure_url}
                  alt={img.original_filename || img.public_id}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <label className="absolute top-2 left-2 bg-white/90 rounded-md px-2 py-1 text-xs flex items-center gap-2 shadow">
                  <input
                    type="checkbox"
                    checked={!!pSel[img.id]}
                    onChange={() => setPSel((s) => ({ ...s, [img.id]: !s[img.id] }))}
                  />
                  {img.original_filename || "image"}
                </label>
              </figure>
            ))}
          </div>

          {!pLoading && pImgs.length === 0 && (
            <div className="mt-3 text-sm text-charcoal/60">No images.</div>
          )}
        </div>
      )}

      {/* Client tab */}
      {tab === "client" && (
        <div className="rounded-2xl border border-rose/30 bg-white p-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <input
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
                placeholder="Enter client reference (e.g., ABC123)"
                className="rounded-xl border border-rose/30 px-3 py-2 text-sm bg-white"
              />
              <button
                onClick={loadClientByRef}
                disabled={cLoading || !refCode.trim()}
                className={cls(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  cLoading || !refCode.trim()
                    ? "bg-blush text-charcoal/50"
                    : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
                )}
              >
                {cLoading ? "Loading…" : "Load"}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {client && (
                <div className="text-xs text-charcoal/70">
                  Loaded: <code>{client.reference}</code> — {client.details?.name || "Client"}
                </div>
              )}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={cImgs.length > 0 && cCount === cImgs.length}
                  ref={(el) => el && (el.indeterminate = cCount > 0 && cCount < cImgs.length)}
                  onChange={(e) => toggleAll("c", e.target.checked)}
                />
                Select all
              </label>
              <button
                onClick={() => deleteSelected({ type: "c" })}
                disabled={cCount === 0 || cLoading || notAdmin || !client}
                className={cls(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  cCount === 0 || cLoading || notAdmin || !client
                    ? "bg-blush text-charcoal/50"
                    : "bg-red-600 text-white hover:bg-red-700"
                )}
              >
                Delete selected ({cCount})
              </button>
            </div>
          </div>

          {cMsg && <div className="mt-3 text-sm text-rose-700">{cMsg}</div>}

          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {cImgs.map((img) => (
              <figure key={img.id} className="relative group overflow-hidden rounded-xl border border-rose/20">
                <img
                  src={img.secure_url}
                  alt={img.original_filename || img.public_id}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <label className="absolute top-2 left-2 bg-white/90 rounded-md px-2 py-1 text-xs flex items-center gap-2 shadow">
                  <input
                    type="checkbox"
                    checked={!!cSel[img.id]}
                    onChange={() => setCSel((s) => ({ ...s, [img.id]: !s[img.id] }))}
                  />
                  {img.original_filename || "image"}
                </label>
              </figure>
            ))}
          </div>

          {!cLoading && client && cImgs.length === 0 && (
            <div className="mt-3 text-sm text-charcoal/60">No images for this client.</div>
          )}
        </div>
      )}
    </section>
  );
}
