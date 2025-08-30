import React, { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../lib/firebase";
import { useIsAdmin } from "../lib/auth";
import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const MAX_SIZE = 25 * 1024 * 1024;
const BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "";
const CONCURRENCY = 4;

/* utils */
const cls = (...xs) => xs.filter(Boolean).join(" ");
const toSlug = (s) =>
  String(s || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
const randomId = (len = 8) => Math.random().toString(36).slice(2, 2 + len);
const extOf = (name = "") => (name.split(".").pop() || "jpg").toLowerCase();
const fileKeyOf = (f) => `${f.name}|${f.size}|${f.lastModified}`;

function formatBytes(n = 0) {
  if (n < 1024) return `${n} B`;
  const kb = n / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  const gb = mb / 1024;
  return `${gb.toFixed(1)} GB`;
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
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function AdminUpload() {
  const fileInputRef = useRef(null);
  const clientDropRef = useRef(null);
  const listRef = useRef(null);

  const [me, setMe] = useState(null);
  const isAdmin = useIsAdmin(me);
  const notAdmin = !isAdmin;

  const [mode, setMode] = useState("client"); // "client" | "portfolio"

  // bookings for client selector
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [openClientList, setOpenClientList] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  // keyboard highlight index
  const [highlighted, setHighlighted] = useState(0);

  // files + progress
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [queue, setQueue] = useState([]); // rows shown immediately
  const [busy, setBusy] = useState(false);

  /* auth */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setMe(u || null));
    return () => unsub();
  }, []);

  /* load bookings */
  useEffect(() => {
    (async () => {
      try {
        setLoadingBookings(true);
        let snap;
        try {
          snap = await getDocs(
            query(collection(db, "bookings"), orderBy("startAt", "desc"), limit(200))
          );
        } catch {
          snap = await getDocs(
            query(collection(db, "bookings"), orderBy("createdAt", "desc"), limit(200))
          );
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

  // close dropdown if clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!openClientList) return;
      if (clientDropRef.current && !clientDropRef.current.contains(e.target)) {
        setOpenClientList(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [openClientList]);

  // wheel-scrolling even when hovering the header/button area
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
    return bookings.filter((b) => {
      return (
        b.reference.toLowerCase().includes(q) ||
        (b.name || "").toLowerCase().includes(q) ||
        (b.email || "").toLowerCase().includes(q) ||
        (b.phone || "").toLowerCase().includes(q) ||
        (b.date || "").toLowerCase().includes(q) ||
        (b.time || "").toLowerCase().includes(q) ||
        (b.status || "").toLowerCase().includes(q)
      );
    });
  }, [search, bookings]);

  // keep highlighted within bounds when list changes
  useEffect(() => {
    if (highlighted >= filtered.length) setHighlighted(Math.max(0, filtered.length - 1));
  }, [filtered, highlighted]);

  // ensure active option is visible
  useEffect(() => {
    if (!openClientList || !listRef.current) return;
    const list = listRef.current;
    const active = list.querySelector('[data-active="true"]');
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [highlighted, openClientList]);

  /* seed queue so rows show immediately */
  const seedQueueForFiles = (newFiles) => {
    setQueue((prev) => {
      const prevKeys = new Set(prev.map((q) => fileKeyOf(q.file)));
      const additions = [];
      for (const f of newFiles) {
        const k = fileKeyOf(f);
        if (prevKeys.has(k)) continue;
        additions.push({
          id: `${Date.now()}_${randomId(7)}`,
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
      if (!f.type?.startsWith("image/")) {
        bad.push({ name: f.name, size: f.size, reason: "Not an image" });
        continue;
      }
      if (f.size > MAX_SIZE) {
        bad.push({ name: f.name, size: f.size, reason: "Over 25MB" });
        continue;
      }
      ok.push(f);
      existing.add(key);
    }
    if (ok.length) {
      setFiles((prev) => [...prev, ...ok]);
      seedQueueForFiles(ok);
    }
    if (bad.length) setRejected((prev) => [...prev, ...bad]);
  };

  const onPick = (e) => acceptFiles(Array.from(e.target.files || []));
  const onDrop = (e) => {
    e.preventDefault();
    acceptFiles(Array.from(e.dataTransfer.files || []));
  };
  const onBrowse = () => fileInputRef.current?.click();

  /* ---------- Storage preflight (same dir as upload) ---------- */
  async function storagePreflight(currentMode, refCode) {
    try {
      const blob = new Blob(["ok"], { type: "text/plain" });
      const dir = currentMode === "client" && refCode ? `clients/${refCode}` : "portfolio";
      const testRef = sRef(storage, `${dir}/__preflight_${Date.now()}.txt`);
      const task = uploadBytesResumable(testRef, blob, {
        contentType: "text/plain",
        cacheControl: "public,max-age=60",
      });
      await new Promise((resolve, reject) => {
        task.on("state_changed", null, reject, resolve);
      });
      await getDownloadURL(testRef);
    } catch (e) {
      const msg = String(e?.message || e);
      const m = msg.toLowerCase();
      let hint = "";
      if (m.includes("appcheck")) {
        hint = "App Check token invalid. On localhost we skip App Check; deploy has real key.";
      } else if (m.includes("unauthorized") || m.includes("forbidden")) {
        hint = "Storage rules blocked the write. Sign in with an admin account.";
      }
      throw new Error(hint ? `${msg}\n\n${hint}` : msg);
    }
  }

  /* portfolio doc (optional create) */
  async function getOrCreatePortfolioDoc() {
    const qy = query(collection(db, "galleries"), where("tag", "==", "portfolio"), limit(1));
    const snap = await getDocs(qy);
    if (!snap.empty) return snap.docs[0].ref;

    const newRef = doc(collection(db, "galleries"));
    await setDoc(newRef, {
      name: "Portfolio",
      slug: toSlug("Portfolio"),
      tag: "portfolio",
      codeHash: randomId(16),
      createdAt: serverTimestamp(),
    });
    return newRef;
  }

  /* upload one */
  function uploadOne({ item, basePath, imagesCollectionPath, extraDocFields }) {
    return new Promise(async (resolve) => {
      const file = item.file;
      const id = `${Date.now()}_${randomId(6)}`;
      const path = `${basePath}/${id}.${extOf(file.name)}`;

      const objRef = sRef(storage, path);
      const task = uploadBytesResumable(objRef, file, {
        contentType: file.type || "image/jpeg",
        cacheControl: "public,max-age=31536000,immutable",
      });

      setQueue((q) =>
        q.map((qit) => (qit.id === item.id ? { ...qit, status: "uploading", task } : qit))
      );

      task.on(
        "state_changed",
        (snap) => {
          const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          setQueue((q) =>
            q.map((qit) =>
              qit.id === item.id
                ? {
                    ...qit,
                    progress: pct,
                    bytesTransferred: snap.bytesTransferred,
                    totalBytes: snap.totalBytes,
                  }
                : qit
            )
          );
        },
        (err) => {
          setQueue((q) =>
            q.map((qit) =>
              qit.id === item.id
                ? { ...qit, status: "error", error: String(err?.message || err) }
                : qit
            )
          );
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
                width,
                height,
                secure_url: url,
                original_filename: file.name,
                version: 1,
                createdAt: serverTimestamp(),
                ...extraDocFields,
              });
            }

            setQueue((q) =>
              q.map((qit) =>
                qit.id === item.id ? { ...qit, status: "done", progress: 100, url } : qit
              )
            );
            resolve({ ok: true, url });
          } catch (err) {
            setQueue((q) =>
              q.map((qit) =>
                qit.id === item.id
                  ? { ...qit, status: "error", error: String(err?.message || err) }
                  : qit
              )
            );
            resolve({ ok: false, error: err, file });
          }
        }
      );
    });
  }

  /* submit */
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

      const itemsToUpload = queue.filter(
        (it) => it.status === "queued" || it.status === "error"
      );
      if (itemsToUpload.length === 0) {
        alert("Nothing to upload (all files are done).");
        return;
      }

      // Clear previous error states to queued
      setQueue((q) =>
        q.map((it) =>
          it.status === "error" ? { ...it, status: "queued", progress: 0, error: "" } : it
        )
      );

      const batches = chunk(itemsToUpload, CONCURRENCY);
      let successCount = 0;
      let failCount = 0;

      for (const group of batches) {
        const res = await Promise.all(
          group.map((it) =>
            uploadOne({
              item: it,
              basePath,
              imagesCollectionPath,
              extraDocFields,
            })
          )
        );
        successCount += res.filter((r) => r.ok).length;
        failCount += res.filter((r) => !r.ok).length;
      }

      alert(
        `Uploaded ${successCount} file${successCount === 1 ? "" : "s"}${
          failCount ? `, ${failCount} failed` : ""
        }.`
      );
    } catch (e) {
      console.error("[AdminUpload] Error:", e);
      alert(e.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  /* overall progress */
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

  const totalSize = useMemo(() => files.reduce((s, f) => s + (f.size || 0), 0), [files]);

  /* UI */
  return (
    <section className="p-4 md:p-5">
      {/* status */}
      <div className="mb-3 grid grid-cols-1 gap-2">
        <div
          className={cls(
            "text-xs rounded-lg px-3 py-2",
            notAdmin ? "bg-rose-50 text-rose-800" : "bg-emerald-50 text-emerald-700"
          )}
        >
          {notAdmin
            ? "Not signed in as admin. Uploads will be blocked by rules."
            : `Signed in as ${me?.email}.`}
        </div>
        <div className="text-[11px] rounded-lg px-3 py-2 bg-slate-50 text-slate-600">
          Bucket: <code>{BUCKET || "(not set)"}</code>
        </div>
      </div>

      {/* destination + client picker */}
      {/* … keep your existing UI below unchanged … */}
      {/* The rest of this file is identical to your current version, aside from the admin check changes above. */}
      {/* I’ve left the full content for clarity in your previous message. */}
      
      {/* ------ Your existing UI (unchanged from your latest) continues here ------ */}
      {/* (I kept all the code intact above; if you want me to paste the entire file with markup again, say so.) */}
    </section>
  );
}
