import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../lib/auth";
import { db, storage } from "../lib/firebase";
import {
  collection, doc, getDocs, limit, orderBy, query,
  serverTimestamp, setDoc, where,
} from "firebase/firestore";
import { ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const MAX_SIZE = 25 * 1024 * 1024;
const BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "";
const CONCURRENCY = 4;

const cls = (...xs) => xs.filter(Boolean).join(" ");
const toSlug = (s) => String(s || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const randomId = (len = 8) => Math.random().toString(36).slice(2, 2 + len);
const extOf = (name = "") => (name.split(".").pop() || "jpg").toLowerCase();
const fileKeyOf = (f) => `${f.name}|${f.size}|${f.lastModified}`;

function formatBytes(n = 0) { if (n < 1024) return `${n} B`; const kb = n/1024; if (kb < 1024) return `${kb.toFixed(1)} KB`; const mb = kb/1024; if (mb < 1024) return `${mb.toFixed(1)} MB`; const gb = mb/1024; return `${gb.toFixed(1)} GB`; }
async function getImageDims(file) { return new Promise((resolve) => { const url = URL.createObjectURL(file); const img = new Image(); img.onload = () => { resolve({ width: img.width, height: img.height }); URL.revokeObjectURL(url); }; img.onerror = () => { resolve({ width: 0, height: 0 }); URL.revokeObjectURL(url); }; img.src = url; }); }
function chunk(arr, size) { const out = []; for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size)); return out; }

export default function AdminUpload() {
  const fileInputRef = useRef(null);
  const clientDropRef = useRef(null);
  const listRef = useRef(null);

  const { isAdmin } = useAuth();
  const notAdmin = !isAdmin;

  const [mode, setMode] = useState("client"); // "client" | "portfolio"

  // client picker
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [openClientList, setOpenClientList] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [highlighted, setHighlighted] = useState(0);

  // files + progress
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [queue, setQueue] = useState([]);
  const [busy, setBusy] = useState(false);

  /* load bookings */
  useEffect(() => {
    (async () => {
      try {
        setLoadingBookings(true);
        let snap;
        try {
          snap = await getDocs(query(collection(db, "bookings"), orderBy("startAt", "desc"), limit(200)));
        } catch {
          snap = await getDocs(query(collection(db, "bookings"), orderBy("createdAt", "desc"), limit(200)));
        }
        const rows = snap.docs.map((d) => {
          const data = d.data();
          const dt = data.startAt?.toDate?.() || null;
          return {
            id: d.id,
            reference: data.reference || "",
            name: data.details?.name || "",
            email: data.details?.email || "",
            phone: data.details?.phone || "",
            date: data.date || "",
            time: data.time || "",
            start: dt,
            status: (data.status || "").toLowerCase(),
          };
        });
        setBookings(rows);
      } catch {
        setBookings([]);
      } finally {
        setLoadingBookings(false);
      }
    })();
  }, []);

  // dropdown helpers … (unchanged from your latest)
  useEffect(() => {
    function onDocClick(e) { if (!openClientList) return; if (clientDropRef.current && !clientDropRef.current.contains(e.target)) setOpenClientList(false); }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [openClientList]);

  useEffect(() => {
    const el = clientDropRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (!openClientList) return;
      if (!listRef.current) return;
      e.preventDefault();
      listRef.current.scrollTop += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [openClientList]);

  const filtered = useMemo(() => {
    if (!search.trim()) return bookings;
    const q = search.trim().toLowerCase();
    return bookings.filter((b) =>
      b.reference.toLowerCase().includes(q) ||
      (b.name || "").toLowerCase().includes(q) ||
      (b.email || "").toLowerCase().includes(q) ||
      (b.phone || "").toLowerCase().includes(q) ||
      (b.date || "").toLowerCase().includes(q) ||
      (b.time || "").toLowerCase().includes(q) ||
      (b.status || "").toLowerCase().includes(q)
    );
  }, [search, bookings]);

  useEffect(() => { if (highlighted >= filtered.length) setHighlighted(Math.max(0, filtered.length - 1)); }, [filtered, highlighted]);
  useEffect(() => { if (!openClientList || !listRef.current) return; const list = listRef.current; const active = list.querySelector('[data-active="true"]'); if (active) active.scrollIntoView({ block: "nearest" }); }, [highlighted, openClientList]);

  const seedQueueForFiles = (newFiles) => {
    setQueue((prev) => {
      const prevKeys = new Set(prev.map((q) => fileKeyOf(q.file)));
      const additions = [];
      for (const f of newFiles) {
        const k = fileKeyOf(f);
        if (prevKeys.has(k)) continue;
        additions.push({
          id: `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
          file: f,
          status: "queued",
          progress: 0,
          bytesTransferred: 0,
          totalBytes: f.size || 0,
          url: "",
          error: "",
          task: null,
        });
      }
      return additions.length ? [...prev, ...additions] : prev;
    });
  };

  const acceptFiles = (list) => {
    const ok = [];
    const bad = [];
    const existing = new Set(files.map(fileKeyOf));
    for (const f of list) {
      const key = fileKeyOf(f);
      if (existing.has(key)) continue;
      if (!f.type?.startsWith("image/")) { bad.push({ name: f.name, size: f.size, reason: "Not an image" }); continue; }
      if (f.size > MAX_SIZE) { bad.push({ name: f.name, size: f.size, reason: "Over 25MB" }); continue; }
      ok.push(f); existing.add(key);
    }
    if (ok.length) { setFiles((prev) => [...prev, ...ok]); seedQueueForFiles(ok); }
    if (bad.length) setRejected((prev) => [...prev, ...bad]);
  };

  const onPick = (e) => acceptFiles(Array.from(e.target.files || []));
  const onDrop = (e) => { e.preventDefault(); acceptFiles(Array.from(e.dataTransfer.files || [])); };
  const onBrowse = () => fileInputRef.current?.click();

  async function storagePreflight(currentMode, refCode) {
    try {
      const blob = new Blob(["ok"], { type: "text/plain" });
      const dir = currentMode === "client" && refCode ? `clients/${refCode}` : "portfolio";
      const testRef = sRef(storage, `${dir}/__preflight_${Date.now()}.txt`);
      const task = uploadBytesResumable(testRef, blob, { contentType: "text/plain", cacheControl: "public,max-age=60" });
      await new Promise((resolve, reject) => { task.on("state_changed", null, reject, resolve); });
      await getDownloadURL(testRef);
    } catch (e) {
      const msg = String(e?.message || e);
      const m = msg.toLowerCase();
      let hint = "";
      if (m.includes("appcheck")) {
        hint = "App Check token missing/invalid. Confirm App Check is initialized and your domain is allowed.";
      } else if (m.includes("unauthorized") || m.includes("forbidden")) {
        hint = "Storage rules blocked the write. Make sure your account is admin and rules allow writes to this path.";
      }
      throw new Error(hint ? `${msg}\n\n${hint}` : msg);
    }
  }

  async function getOrCreatePortfolioDoc() {
    const qy = query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1));
    const snap = await getDocs(qy);
    if (!snap.empty) return snap.docs[0].ref;
    const newRef = doc(collection(db, "galleries"));
    await setDoc(newRef, { name: "Portfolio", slug: toSlug("Portfolio"), tag: "portfolio", createdAt: serverTimestamp() });
    return newRef;
  }

  function uploadOne({ item, basePath, imagesCollectionPath, extraDocFields }) {
    return new Promise(async (resolve) => {
      const file = item.file;
      const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      const path = `${basePath}/${id}.${extOf(file.name)}`;
      const objRef = sRef(storage, path);
      const task = uploadBytesResumable(objRef, file, {
        contentType: file.type || "image/jpeg",
        cacheControl: "public,max-age=31536000,immutable",
      });

      setQueue((q) => q.map((qit) => (qit.id === item.id ? { ...qit, status: "uploading", task } : qit)));

      task.on(
        "state_changed",
        (snap) => {
          const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          setQueue((q) => q.map((qit) => (qit.id === item.id ? { ...qit, progress: pct, bytesTransferred: snap.bytesTransferred, totalBytes: snap.totalBytes } : qit)));
        },
        (err) => {
          setQueue((q) => q.map((qit) => (qit.id === item.id ? { ...qit, status: "error", error: String(err?.message || err) } : qit)));
          resolve({ ok: false, error: err, file });
        },
        async () => {
          try {
            const url = await getDownloadURL(task.snapshot.ref);
            const { width, height } = await getImageDims(file);
            if (imagesCollectionPath) {
              const imagesCol = collection(db, imagesCollectionPath);
              const docId = path.replace(/\//g, "__");
              await setDoc(doc(imagesCol, docId), {
                public_id: path,
                format: extOf(file.name),
                bytes: file.size,
                width, height,
                secure_url: url,
                original_filename: file.name,
                createdAt: serverTimestamp(),
                ...extraDocFields,
              });
            }
            setQueue((q) => q.map((qit) => (qit.id === item.id ? { ...qit, status: "done", progress: 100, url } : qit)));
            resolve({ ok: true, url });
          } catch (err) {
            setQueue((q) => q.map((qit) => (qit.id === item.id ? { ...qit, status: "error", error: String(err?.message || err) } : qit)));
            resolve({ ok: false, error: err, file });
          }
        }
      );
    });
  }

  async function onUpload() {
    if (notAdmin) return alert("You must be signed in as the admin to upload.");
    if (queue.length === 0) return alert("Pick some image files first.");
    if (mode === "client" && !selectedBooking) return alert("Choose a client reference first.");

    try {
      await storagePreflight(mode, selectedBooking?.reference);
    } catch (e) {
      console.error("[Storage preflight]", e);
      setQueue((q) =>
        q.map((it) =>
          it.status === "queued" || it.status === "uploading"
            ? { ...it, status: "error", error: `Preflight failed: ${e.message}` }
            : it
        )
      );
      alert(e.message || "Storage preflight failed.");
      return;
    }

    setBusy(true);
    try {
      let basePath = "";
      let imagesCollectionPath = "";
      let extraDocFields = {};

      if (mode === "client") {
        basePath = `clients/${selectedBooking.reference}`;
        imagesCollectionPath = `bookings/${selectedBooking.id}/images`;
        extraDocFields = { ref: selectedBooking.reference };
      } else {
        basePath = `portfolio`;
        const galRef = await getOrCreatePortfolioDoc();
        imagesCollectionPath = `galleries/${galRef.id}/images`;
        extraDocFields = { tag: "portfolio" };
      }

      const itemsToUpload = queue.filter((it) => it.status === "queued" || it.status === "error");
      if (itemsToUpload.length === 0) return alert("Nothing to upload.");

      setQueue((q) => q.map((it) => (it.status === "error" ? { ...it, status: "queued", progress: 0, error: "" } : it)));

      const batches = chunk(itemsToUpload, CONCURRENCY);
      let successCount = 0;
      let failCount = 0;

      for (const group of batches) {
        const res = await Promise.all(
          group.map((it) => uploadOne({ item: it, basePath, imagesCollectionPath, extraDocFields }))
        );
        successCount += res.filter((r) => r.ok).length;
        failCount += res.filter((r) => !r.ok).length;
      }

      alert(`Uploaded ${successCount}${failCount ? `, ${failCount} failed` : ""}.`);
    } catch (e) {
      console.error("[AdminUpload] Error:", e);
      alert(e.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const totalSize = useMemo(() => files.reduce((s, f) => s + (f.size || 0), 0), [files]);
  const overall = useMemo(() => {
    const totals = queue.reduce(
      (acc, it) => {
        const tb = it.totalBytes || it.file?.size || 0;
        const bt = it.bytesTransferred || (it.status === "done" ? tb : 0);
        return { total: acc.total + tb, done: acc.done + bt };
      },
      { total: 0, done: 0 }
    );
    return totals.total ? Math.round((totals.done / totals.total) * 100) : 0;
  }, [queue]);

  return (
    <section className="p-4 md:p-5">
      <div className={cls("mb-3 text-xs rounded-lg px-3 py-2", notAdmin ? "bg-rose-50 text-rose-800" : "bg-emerald-50 text-emerald-700")}>
        {notAdmin ? "Not signed in as admin. Uploads will be blocked by rules." : "Admin session OK."}
      </div>
      <div className="text-[11px] rounded-lg px-3 py-2 bg-slate-50 text-slate-600 mb-3">
        Bucket: <code>{BUCKET || "(not set)"}</code>
      </div>

      {/* …rest of your UI (destination picker, chooser, dropzone, lists, progress) stays as in your latest version … */}
      {/* keep your existing JSX below – unchanged */}
      {/* (Omitted here for brevity since you already pasted it; only admin check logic changed) */}
    </section>
  );
}
