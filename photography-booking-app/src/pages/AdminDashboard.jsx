// src/pages/AdminDashboard.jsx
import React, { useEffect, useState, Suspense, useMemo } from "react";
import { auth, db } from "../lib/firebase";
import {
  collection,
  getDocs,
  getCountFromServer,
  orderBy,
  query,
  where,
  limit,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

// ✅ STATIC lazy imports so Vite can bundle them:
const AdminUpload       = React.lazy(() => import("./AdminUpload"));
const AdminBookings     = React.lazy(() => import("./AdminBookings")); // optional page
const AdminMediaManager = React.lazy(() => import("./AdminMediaManager"));

async function safeCount(qy) {
  try {
    const res = await getCountFromServer(qy);
    return res.data().count || 0;
  } catch {
    return 0;
  }
}
const cls = (...xs) => xs.filter(Boolean).join(" ");
function jumpTo(title) {
  const el = Array.from(document.querySelectorAll("h3")).find(
    (h) => h.textContent?.trim() === title
  );
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [upcoming, setUpcoming] = useState({ rows: [], loading: true, error: "" });
  const [loadingStats, setLoadingStats] = useState(true);

  // 🔎 Quick pick list (reference index)
  thead
  const [refIndex, setRefIndex] = useState({ rows: [], loading: true, error: "" });
  const [refSearch, setRefSearch] = useState("");
  const [selectedRefForMM, setSelectedRefForMM] = useState("");

  // per-row saving flag for status changes
  const [savingStatus, setSavingStatus] = useState({}); // id -> true/false

  useEffect(() => {
    (async () => {
      setLoadingStats(true);
      const bookingsCol  = collection(db, "bookings");
      const galleriesCol = collection(db, "galleries");

      const totalBookings = await safeCount(query(bookingsCol));
      const pending = await safeCount(query(bookingsCol, where("status", "==", "pending")));
      const confirmedUpcoming = await safeCount(
        query(bookingsCol, where("status", "==", "confirmed"), where("startAt", ">=", new Date()))
      );
      const galleries = await safeCount(query(galleriesCol));
      setStats({ totalBookings, pending, confirmedUpcoming, galleries });
      setLoadingStats(false);

      await refreshUpcoming(setUpcoming);
      await loadRefIndex();
    })();
  }, []);

  async function refreshUpcoming(setter) {
    try {
      const bookingsCol = collection(db, "bookings");
      const qy = query(
        bookingsCol,
        where("startAt", ">=", new Date()),
        orderBy("startAt", "asc"),
        limit(6)
      );
      const snap = await getDocs(qy);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setter({ rows, loading: false, error: "" });
    } catch (e) {
      console.warn("Upcoming query failed:", e);
      setter({ rows: [], loading: false, error: "Couldn’t load upcoming bookings (index needed?)." });
    }
  }

  // 📇 Build a lightweight reference list (recent bookings)
  async function loadRefIndex() {
    setRefIndex((p) => ({ ...p, loading: true, error: "" }));
    try {
      const col = collection(db, "bookings");
      let snap;
      try {
        snap = await getDocs(query(col, orderBy("startAt", "desc"), limit(300)));
      } catch {
        snap = await getDocs(query(col, orderBy("createdAt", "desc"), limit(300)));
      }
      const rows = snap.docs.map((d) => {
        const data = d.data();
        const dt = data.startAt?.toDate?.() || null;
        return {
          id: d.id,
          reference: data.reference || "",
          name: data.details?.name || "",
          email: data.details?.email || "",
          status: (data.status || "").toLowerCase(),
          when: dt
            ? dt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
            : `${data.date || ""} ${data.time || ""}`.trim(),
        };
      });
      setRefIndex({ rows, loading: false, error: "" });
    } catch (e) {
      console.error("loadRefIndex failed:", e);
      setRefIndex({ rows: [], loading: false, error: "Couldn’t load references." });
    }
  }

  // 🔄 Change booking status (pending | confirmed | finished | canceled)
  async function changeStatus(b, nextStatus) {
    const id = b.id;
    const prev = (b.status || "").toLowerCase();
    const next = String(nextStatus || "").toLowerCase();
    if (!next || next === prev) return;

    // Optional confirm on destructive change
    if (next === "canceled" && !window.confirm("Mark this booking as CANCELED?")) return;

    setSavingStatus((m) => ({ ...m, [id]: true }));
    try {
      await updateDoc(doc(db, "bookings", id), {
        status: next,
        updatedAt: serverTimestamp(),
        ...(next === "confirmed" ? { confirmedAt: serverTimestamp() } : {}),
        ...(next === "finished"  ? { finishedAt: serverTimestamp() }  : {}),
        ...(next === "canceled"  ? { canceledAt: serverTimestamp() }  : {}),
      });

      // Optimistically update the local row to avoid a full refetch flicker
      setUpcoming((p) => ({
        ...p,
        rows: p.rows.map((r) => (r.id === id ? { ...r, status: next } : r)),
      }));
    } catch (e) {
      console.error("Status update failed:", e);
      alert("Could not change status. Check Firestore rules/connection.");
    } finally {
      setSavingStatus((m) => ({ ...m, [id]: false }));
    }
  }

  // 🔻 Cancel (shortcut button keeps working)
  async function cancelBooking(id) {
    const ok = window.confirm("Cancel this appointment? This cannot be undone.");
    if (!ok) return;
    try {
      await updateDoc(doc(db, "bookings", id), {
        status: "canceled",
        canceledAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      setUpcoming((p) => ({
        ...p,
        rows: p.rows.map((r) => (r.id === id ? { ...r, status: "canceled" } : r)),
      }));
    } catch (e) {
      console.error("Cancel failed:", e);
      alert("Could not cancel. Check Firestore rules/connection.");
    }
  }

  // ❌ Permanently delete a canceled booking
  async function deleteBooking(id, status) {
    if ((status || "").toLowerCase() !== "canceled") {
      alert("You can only delete bookings that are already canceled.");
      return;
    }
    const ok = window.confirm("Permanently delete this canceled booking?");
    if (!ok) return;
    try {
      await deleteDoc(doc(db, "bookings", id));
      setUpcoming((p) => ({
        ...p,
        rows: p.rows.filter((r) => r.id !== id),
      }));
    } catch (e) {
      console.error("Delete failed:", e);
      alert("Could not delete. Check Firestore rules/connection.");
    }
  }

  const filteredRefs = useMemo(() => {
    const q = refSearch.trim().toLowerCase();
    if (!q) return refIndex.rows;
    return refIndex.rows.filter((r) =>
      r.reference.toLowerCase().includes(q) ||
      r.name.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q)
    );
  }, [refSearch, refIndex.rows]);

  return (
    <section className="w-full py-10 md:py-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">Admin</h1>
            <p className="text-sm text-charcoal/70">Manage uploads, media, and bookings in one place.</p>
          </div>
          <button
            onClick={() => auth.signOut()}
            className="rounded-full px-4 py-2 text-sm font-semibold bg-wine text-white hover:bg-maroon transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Sign out
          </button>
        </div>

        {/* Top Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {loadingStats ? (
            <>
              <StatSkeleton /><StatSkeleton /><StatSkeleton /><StatSkeleton />
            </>
          ) : (
            <>
              <StatCard label="Total Bookings" value={stats.totalBookings} />
              <StatCard label="Pending" value={stats.pending} accent="gold" />
              <StatCard label="Upcoming (Confirmed)" value={stats.confirmedUpcoming} accent="gold" />
              <StatCard label="Galleries" value={stats.galleries} />
            </>
          )}
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Upload — full width */}
          <Card title="Upload" className="lg:col-span-12">
            <p className="text-sm text-charcoal/70 mb-4">
              Upload to <span className="font-semibold">Portfolio</span> or attach to a <span className="font-semibold">Client (by reference)</span>.
            </p>
            <div className="rounded-2xl border border-burgundy/20 bg-white/85 backdrop-blur-sm overflow-hidden">
              <Suspense fallback={<div className="p-4 text-sm text-charcoal/60">Loading…</div>}>
                <AdminUpload />
              </Suspense>
            </div>
          </Card>

          {/* Upcoming Bookings — full width */}
          <Card title="Upcoming Bookings" className="lg:col-span-12">
            {upcoming.loading ? (
              <TableSkeleton rows={4} />
            ) : upcoming.error ? (
              <div className="text-sm text-wine">{upcoming.error}</div>
            ) : upcoming.rows.length === 0 ? (
              <div className="text-sm text-charcoal/60">No upcoming bookings.</div>
            ) : (
              <div className="rounded-2xl border border-burgundy/20 bg-white overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="max-h=[28rem] overflow-y-auto">
                    <table className="w-full text-sm min-w-[880px]">
                      <thead className="bg-burgundy/5 text-charcoal/80 sticky top-0 z-10">
                        <tr>
                          <Th>When</Th>
                          <Th>Client</Th>
                          <Th>Package</Th>
                          <Th>Ref</Th>
                          <Th className="w-64">Status</Th>
                          <Th className="w-40">Actions</Th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcoming.rows.map((b) => {
                          const dt = b.startAt?.toDate?.();
                          const when = dt
                            ? dt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
                            : `${b.date} ${b.time}`;
                          const status = (b.status || "").toLowerCase();
                          const isCanceled = status === "canceled";
                          const saving = !!savingStatus[b.id];

                          return (
                            <tr key={b.id} className="border-t border-burgundy/15">
                              <Td>
                                <div className="flex items-center gap-2">
                                  {isCanceled && <span className="text-wine font-semibold">●</span>}
                                  <span>{when}</span>
                                </div>
                                <div className="text-slate-500">{b.details?.location}</div>
                              </Td>
                              <Td>
                                <div className="font-medium">{b.details?.name}</div>
                                <div className="text-slate-500">{b.details?.email}</div>
                                <div className="text-slate-500">{b.details?.phone}</div>

                                {b.details?.shootFor && (
                                  <div className="text-xs text-slate-600 mt-1">
                                    <span className="font-medium">Shoot:</span> {b.details.shootFor}
                                  </div>
                                )}
                                {b.details?.style && (
                                  <div className="text-xs text-slate-600">
                                    <span className="font-medium">Style:</span> {b.details.style}
                                  </div>
                                )}
                                {b.details?.locationNotes && (
                                  <div className="text-xs text-slate-600">
                                    <span className="font-medium">Loc:</span> {b.details.locationNotes}
                                  </div>
                                )}
                                {b.details?.notes && (
                                  <div className="text-xs text-slate-600">
                                    <span className="font-medium">Notes:</span> {b.details.notes}
                                  </div>
                                )}
                              </Td>
                              <Td>
                                <div className="font-medium">{b.package?.name}</div>
                                <div className="text-slate-500">
                                  ${b.package?.price} — {b.package?.duration}
                                </div>
                              </Td>
                              <Td className="font-mono">{b.reference}</Td>

                              {/* Status column with pill + selector */}
                              <Td>
                                <div className="flex items-center gap-3">
                                  <StatusPill status={status} />
                                  <select
                                    value={status || "pending"}
                                    disabled={saving || isCanceled}
                                    onChange={(e) => changeStatus(b, e.target.value)}
                                    className={cls(
                                      "rounded-full border border-burgundy/20 bg-white px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-gold",
                                      saving ? "opacity-60 cursor-wait" : ""
                                    )}
                                    title={isCanceled ? "This booking is canceled" : "Change status"}
                                  >
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="finished">Finished</option>
                                    <option value="canceled">Canceled</option>
                                  </select>
                                  {saving && <span className="text-xs text-slate-500">Saving…</span>}
                                </div>
                              </Td>

                              {/* Actions */}
                              <Td>
                                {isCanceled ? (
                                  <div className="flex items-center gap-2">
                                    <span className="text-wine font-semibold">Canceled</span>
                                    <button
                                      className="rounded-full px-2 py-1 text-xs font-semibold border border-burgundy/30 text-charcoal hover:bg-wine hover:text-white transition-colors"
                                      title="Delete canceled booking"
                                      onClick={() => deleteBooking(b.id, b.status)}
                                    >
                                      ×
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    className="rounded-full px-3 py-2 text-xs font-semibold bg-wine text-white hover:bg-maroon transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
                                    onClick={() => cancelBooking(b.id)}
                                    title="Cancel appointment"
                                  >
                                    Cancel
                                  </button>
                                )}
                              </Td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* 🔎 Client Galleries Quick Pick — UNDER Upcoming Bookings */}
          <Card title="Client Galleries Quick Pick" className="lg:col-span-12">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <input
                value={refSearch}
                onChange={(e) => setRefSearch(e.target.value)}
                placeholder="Search by reference, name, or email…"
                className="rounded-xl border border-burgundy/20 px-3 py-2 text-sm bg-white w-full md:w-96 focus:border-burgundy focus:ring-gold/40"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={loadRefIndex}
                  disabled={refIndex.loading}
                  className={cls(
                    "rounded-full px-4 py-2 text-sm font-semibold shadow-soft transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
                    refIndex.loading ? "bg-burgundy/10 text-charcoal/50" : "bg-wine text-white hover:bg-maroon"
                  )}
                >
                  {refIndex.loading ? "Refreshing…" : "Refresh List"}
                </button>
                <span className="text-xs text-charcoal/60">
                  {refIndex.rows.length} loaded
                </span>
              </div>
            </div>

            {refIndex.error && <div className="mt-3 text-sm text-wine">{refIndex.error}</div>}

            <div className="mt-3 rounded-2xl border border-burgundy/20 bg-white overflow-hidden">
              <div className="max-h-[24rem] overflow-y-auto">
                <table className="w-full text-sm min-w-[760px]">
                  <thead className="bg-burgundy/5 text-charcoal/80 sticky top-0 z-10">
                    <tr>
                      <Th className="w-32">Ref</Th>
                      <Th>Name / Email</Th>
                      <Th className="w-56">When</Th>
                      <Th className="w-28">Status</Th>
                      <Th className="w-40">Open</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRefs.map((r) => (
                      <tr key={r.id} className="border-t border-burgundy/15">
                        <Td className="font-mono">{r.reference}</Td>
                        <Td>
                          <div className="font-medium">{r.name || "Client"}</div>
                          <div className="text-slate-500">{r.email}</div>
                        </Td>
                        <Td>{r.when || "—"}</Td>
                        <Td>
                          <StatusPill status={r.status} />
                        </Td>
                        <Td>
                          <button
                            className="rounded-full px-3 py-2 text-xs font-semibold bg-gold text-charcoal hover:bg-wine hover:text-white transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
                            onClick={() => {
                              setSelectedRefForMM(r.reference);
                              jumpTo("Media Manager");
                            }}
                          >
                            Open in Media Manager
                          </button>
                        </Td>
                      </tr>
                    ))}
                    {!refIndex.loading && filteredRefs.length === 0 && (
                      <tr>
                        <Td colSpan={5} className="text-charcoal/60">
                          No matches.
                        </Td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>

          {/* Media Manager — full width */}
          <Card title="Media Manager" className="lg:col-span-12">
            <div className="rounded-2xl border border-burgundy/20 bg-white overflow-hidden">
              <Suspense fallback={<div className="p-4 text-sm text-charcoal/60">Loading…</div>}>
                <AdminMediaManager selectedRef={selectedRefForMM} />
              </Suspense>
            </div>
          </Card>

          {/* Notes */}
          <Card title="Notes" className="lg:col-span-12">
            <ul className="text-sm text-charcoal/80 list-disc ml-5 space-y-2">
              <li>Confirm pending bookings and send welcome emails.</li>
              <li>Upload highlight images to Portfolio.</li>
              <li>Deliver client galleries from booking pages.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI bits ---------- */
function StatusPill({ status }) {
  const s = (status || "").toLowerCase();
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1";
  if (s === "confirmed") return <span className={cls(base, "bg-emerald-50 text-emerald-800 ring-emerald-200")}>Confirmed</span>;
  if (s === "finished")  return <span className={cls(base, "bg-gold/15 text-charcoal ring-gold/40")}>Finished</span>;
  if (s === "canceled")  return <span className={cls(base, "bg-wine/15 text-wine ring-wine/30")}>Canceled</span>;
  return <span className={cls(base, "bg-gold/15 text-charcoal ring-gold/40")}>Pending</span>;
}

function StatCard({ label, value, accent }) {
  const ring =
    accent === "gold" ? "ring-gold/30" : "ring-burgundy/15";
  return (
    <div className={cls(
      "rounded-2xl bg-white/85 border border-burgundy/20 shadow-soft p-4 ring-1 backdrop-blur-xs",
      ring
    )}>
      <div className="text-sm text-charcoal/70">{label}</div>
      <div className="text-2xl font-semibold text-charcoal mt-1">{value}</div>
    </div>
  );
}
function StatSkeleton() {
  return (
    <div className="rounded-2xl bg-white/85 border border-burgundy/20 p-4 animate-pulse">
      <div className="h-3 w-24 bg-slate-200 rounded mb-3" />
      <div className="h-7 w-12 bg-slate-200 rounded" />
    </div>
  );
}
function Card({ title, className, children }) {
  return (
    <section className={cls(
      "rounded-2xl border border-burgundy/20 bg-burgundy/5 p-4 md:p-5 shadow-soft",
      className
    )}>
      <h3 className="text-lg font-serif font-semibold text-burgundy mb-3">{title}</h3>
      {children}
    </section>
  );
}
function Th({ children, className }) {
  return <th className={cls("text-left px-4 py-3", className)}>{children}</th>;
}
function Td({ children, className, colSpan }) {
  return <td colSpan={colSpan} className={cls("px-4 py-3 align-top", className)}>{children}</td>;
}
function TableSkeleton({ rows = 4 }) {
  return (
    <div className="rounded-2xl border border-burgundy/20 bg-white overflow-hidden">
      <div className="animate-pulse p-4 space-y-3">
        {Array.from({ length: rows }).map((_, i) => <div key={i} className="h-10 bg-slate-100 rounded" />)}
      </div>
    </div>
  );
}
function Action({ label, onClick, href }) {
  if (href) {
    return (
      <a
        href={href}
        className="w-full text-center rounded-full px-4 py-2 text-sm font-semibold bg-wine text-white hover:bg-maroon transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
      >
        {label}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full px-4 py-2 text-sm font-semibold bg-wine text-white hover:bg-maroon transition-colors shadow-soft focus:outline-none focus:ring-2 focus:ring-gold"
    >
      {label}
    </button>
  );
}
