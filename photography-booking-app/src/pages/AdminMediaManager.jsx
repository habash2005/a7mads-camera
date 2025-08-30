import React, { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../lib/firebase";
import { useIsAdmin } from "../lib/auth";
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

const CONCURRENCY = 5;
const cls = (...xs) => xs.filter(Boolean).join(" ");

function storagePathOf(img) {
  if (img.public_id || img.path || img.storagePath || img.fullPath) {
    return img.public_id || img.path || img.storagePath || img.fullPath;
  }
  const m = String(img.secure_url || "").match(/\/o\/([^?]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export default function AdminMediaManager({ selectedRef = "" }) {
  const [me, setMe] = useState(null);
  const isAdmin = useIsAdmin(me);
  const notAdmin = !isAdmin;

  const [tab, setTab] = useState("portfolio"); // 'portfolio' | 'client'

  // ---- Portfolio state ----
  const [portfolioId, setPortfolioId] = useState("");
  const [pImgs, setPImgs] = useState([]);
  const [pSel, setPSel] = useState({});
  const [pLoading, setPLoading] = useState(false);
  const [pMsg, setPMsg] = useState("");
  const [pDeleting, setPDeleting] = useState({}); // id -> 'pending' | 'ok' | 'err'

  // ---- Client state ----
  const [refCode, setRefCode] = useState("");
  const [client, setClient] = useState(null);
  const [cImgs, setCImgs] = useState([]);
  const [cSel, setCSel] = useState({});
  const [cLoading, setCLoading] = useState(false);
  const [cMsg, setCMsg] = useState("");
  const [cDeleting, setCDeleting] = useState({}); // id -> 'pending' | 'ok' | 'err'

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
    setPDeleting({});
    try {
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

  /* load client gallery by explicit code */
  async function loadClientByRefWithCode(code) {
    const ref = String(code || "").trim().toUpperCase();
    if (!ref) return;

    setCMsg("");
    setCLoading(true);
    setClient(null);
    setCImgs([]);
    setCSel({});
    setCDeleting({});
    try {
      const bSnap = await getDocs(
        query(collection(db, "bookings"), where("reference", "==", ref), limit(1))
      );
      if (bSnap.empty) {
        setCMsg("No booking found for that reference.");
        return;
      }
      const b = { id: bSnap.docs[0].id, ...bSnap.docs[0].data() };
      setClient(b);

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
  async function loadClientByRef() {
    await loadClientByRefWithCode(refCode);
  }

  // react to external quick-pick (from AdminDashboard)
  useEffect(() => {
    const ext = String(selectedRef || "").trim().toUpperCase();
    if (!ext) return;
    setTab("client");
    setRefCode(ext);
    loadClientByRefWithCode(ext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRef]);

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

  /** delete one image (Storage tolerant + Firestore doc) */
  async function deleteOne({ img, kind, galleryId, bookingId }) {
    const path = storagePathOf(img);

    const setMap = kind === "p" ? setPDeleting : setCDeleting;
    setMap((m) => ({ ...m, [img.id]: "pending" }));

    try {
      if (path) {
        try {
          await deleteObject(sRef(storage, path));
        } catch (e) {
          if (e?.code !== "storage/object-not-found") {
            throw e;
          }
          console.warn("Storage: already gone", path);
        }
      }

      const dref =
        kind === "p"
          ? doc(db, "galleries", galleryId, "images", img.id)
          : doc(db, "bookings", bookingId, "images", img.id);

      await deleteDoc(dref);

      setMap((m) => ({ ...m, [img.id]: "ok" }));
      return { ok: true };
    } catch (e) {
      console.error("Delete failed:", e);
      setMap((m) => ({ ...m, [img.id]: "err" }));
      return { ok: false, error: e };
    }
  }

  /* delete selected (with concurrency) */
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

    const chunks = [];
    for (let i = 0; i < list.length; i += CONCURRENCY) chunks.push(list.slice(i, i + CONCURRENCY));

    let deleted = 0;
    let failed = 0;

    for (const group of chunks) {
      const results = await Promise.all(
        group.map((img) =>
          deleteOne({
            img,
            kind: type === "p" ? "p" : "c",
            galleryId: portfolioId,
            bookingId: client?.id,
          })
        )
      );
      deleted += results.filter((r) => r.ok).length;
      failed += results.filter((r) => !r.ok).length;
    }

    alert(`Deleted ${deleted}${failed ? ` — ${failed} failed` : " — done!"}`);

    if (type === "p") await loadPortfolio();
    else await loadClientByRefWithCode(client?.reference || refCode);
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

        <div
          className={cls(
            "text-xs rounded-lg px-3 py-2",
            notAdmin ? "bg-rose-50 text-rose-800" : "bg-emerald-50 text-emerald-700"
          )}
        >
          {notAdmin ? "Not signed in as admin — deletes will fail." : `Signed in as ${me?.email}`}
        </div>
      </div>

      {/* …the rest of your original component (UI, lists, buttons) remains unchanged … */}
      {/* Paste your existing JSX below. No more hardcoded email checks are needed. */}
    </section>
  );
}
