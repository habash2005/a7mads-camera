// src/pages/AdminDashboard.jsx
import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const AdminUpload       = React.lazy(() => import("./AdminUpload"));
const AdminMediaManager = React.lazy(() => import("./AdminMediaManager"));

/* --------------------------- small helpers --------------------------- */
const ADMIN_EMAILS = new Set(["ahmadhijaz325@gmail.com"].map(s => s.toLowerCase()));
const cls = (...xs) => xs.filter(Boolean).join(" ");

/** Count without aggregation API (no RunAggregationQuery)
 *  NOTE: scans only up to `cap` docs for totals to avoid huge fetches.
 *  If you expect >cap, bump it or implement pagination later.
 */
async function countByScan(qy, cap = 2000) {
  const snap = await getDocs(query(qy, limit(cap)));
  const n = snap.size;
  return n >= cap ? `${cap}+` : n;
}

/** Try orderBy(startAt) then fall back to createdAt */
async function getUpcomingRows({ take = 6 }) {
  const col = collection(db, "bookings");
  const nowTs = Timestamp.fromDate(new Date());
  try {
    const qy = query(
      col,
      where("startAt", ">=", nowTs),
      orderBy("startAt", "asc"),
      limit(take)
    );
    const snap = await getDocs(qy);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch {
    // fallback: order by createdAt and filter client-side
    const qy2 = query(col, orderBy("createdAt", "desc"), limit(200));
    const snap2 = await getDocs(qy2);
    const rows = snap2.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(r => {
        const dt = r.startAt?.toDate?.();
        return dt && dt.getTime() >= Date.now();
      })
      .sort((a, b) => (a.startAt?.seconds || 0) - (b.startAt?.seconds || 0))
      .slice(0, take);
    return rows;
  }
}

/* ------------------------------ page ------------------------------- */
export default function AdminDashboard() {
  const [me, setMe] = useState(null);
  const isAdmin = !!me && ADMIN_EMAILS.has((me.email || "").toLowerCase());

  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);

  const [upcoming, setUpcoming] = useState({ rows: [], loading: true, error: "" });

  const [refIndex, setRefIndex] = useState({ rows: [], loading: true, error: "" });
  const [refSearch, setRefSearch] = useState("");
  const [savingStatus, setSavingStatus] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setMe(u || null));
    return () => unsub();
  }, []);

  useEffect(() => {
    (async () => {
      setLoadingStats(true);
      try {
        const bookingsCol  = collection(db, "bookings");
        const galleriesCol = collection(db, "galleries");
        const nowTs = Timestamp.fromDate(new Date());

        // counts — NO aggregation calls
        const totalBookings = await countByScan(bookingsCol);
        const pending = await countByScan(query(bookingsCol, where("status", "==", "pending")));
        // upcoming confirmed: scan a bounded window (no 2 where+count aggregation)
        let confirmedUpcoming = 0;
        try {
          const snap = await getDocs(
            query(
              bookingsCol,
              where("startAt", ">=", nowTs),
              orderBy("startAt", "asc"),
              limit(600)
            )
          );
          confirmedUpcoming = snap.docs
            .map(d => d.data())
            .filter(r => String(r.status || "").toLowerCase() === "confirmed").length;
        } catch {
          const snap2 = await getDocs(query(bookingsCol, orderBy("createdAt", "desc"), limit(600)));
          confirmedUpcoming = snap2.docs
            .map(d => d.data())
            .filter(r => {
              const dt = r.startAt?.toDate?.();
              return dt && dt.getTime() >= Date.now() && String(r.status || "").toLowerCase() === "confirmed";
            }).length;
        }
        const galleries = await countByScan(galleriesCol);

        setStats({ totalBookings, pending, confirmedUpcoming, galleries });
      } catch {
        setStats({ totalBookings: "—", pending: "—", confirmedUpcoming: "—", galleries: "—" });
      } finally {
        setLoadingStats(false);
      }

      await refreshUpcoming();
      await loadRefIndex();
    })();
  }, []);

  async function refreshUpcoming() {
    setUpcoming({ rows: [], loading: true, error: "" });
    try {
      const rows = await getUpcomingRows({ take: 6 });
      setUpcoming({ rows, loading: false, error: "" });
    } catch {
      setUpcoming({ rows: [], loading: false, error: "Couldn’t load upcoming bookings." });
    }
  }

  async function loadRefIndex() {
    setRefIndex((p) => ({ ...p, loading: true, error: "" }));
    try {
      // prefer startAt desc; fall back to createdAt desc
      let snap;
      try {
        snap = await getDocs(query(collection(db, "bookings"), orderBy("startAt", "desc"), limit(300)));
      } catch {
        snap = await getDocs(query(collection(db, "bookings"), orderBy("createdAt", "desc"), limit(300)));
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
          startAt: data.startAt,
          createdAt: data.createdAt,
          details: data.details || {},
        };
      });
      setRefIndex({ rows, loading: false, error: "" });
    } catch {
      setRefIndex({ rows: [], loading: false, error: "Couldn’t load references." });
    }
  }

  async function changeStatus(b, nextStatus) {
    const id = b.id;
    const prev = (b.status || "").toLowerCase();
    const next = String(nextStatus || "").toLowerCase();
    if (!next || next === prev) return;
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

      // reflect in lists
      setUpcoming((p) => ({
        ...p,
        rows: p.rows.map((r) => (r.id === id ? { ...r, status: next } : r)),
      }));
      setRefIndex((p) => ({
        ...p,
        rows: p.rows.map((r) => (r.id === id ? { ...r, status: next } : r)),
      }));
    } catch {
      alert("Could not change status.");
    } finally {
      setSavingStatus((m) => ({ ...m, [id]: false }));
    }
  }

  async function cancelBooking(id) {
    if (!window.confirm("Cancel this appointment?")) return;
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
      setRefIndex((p) => ({
        ...p,
        rows: p.rows.map((r) => (r.id === id ? { ...r, status: "canceled" } : r)),
      }));
    } catch {
      alert("Could not cancel.");
    }
  }

  async function deleteBooking(id, status) {
    if ((status || "").toLowerCase() !== "canceled") {
      alert("Only canceled bookings can be deleted.");
      return;
    }
    if (!window.confirm("Permanently delete this canceled booking?")) return;
    try {
      await deleteDoc(doc(db, "bookings", id));
      setUpcoming((p) => ({ ...p, rows: p.rows.filter((r) => r.id !== id) }));
      setRefIndex((p) => ({ ...p, rows: p.rows.filter((r) => r.id !== id) }));
    } catch {
      alert("Could not delete.");
    }
  }

  const filteredRefs = useMemo(() => {
    const q = refSearch.trim().toLowerCase();
    if (!q) return refIndex.rows;
    return refIndex.rows.filter((r) =>
      r.reference.toLowerCase().includes(q) ||
      (r.name || "").toLowerCase().includes(q) ||
      (r.email || "").toLowerCase().includes(q)
    );
  }, [refSearch, refIndex.rows]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      window.location.hash = "#/admin/login";
    } catch (err) {
      alert("Sign out failed: " + (err?.message || err));
    }
  };

  return (
    <section className="w-full py-10 md:py-14 bg-cream">
      <Helmet>
        <title>Admin · Dashboard</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-burgundy">Admin Dashboard</h2>
            <p className="text-xs text-neutral-500 mt-1">
              {me ? <>Signed in as <span className="font-medium">{me.email}</span></> : "—"}
              {!isAdmin && me ? " • You are not an admin (uploads/deletes disabled)" : ""}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded-lg bg-rose text-white hover:bg-rose/80"
          >
            Sign Out
          </button>
        </div>

        {/* Stats */}
        {loadingStats ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {Array.from({length:4}).map((_,i)=>(
              <div key={i} className="rounded-xl bg-white p-4 ring-1 ring-neutral-200/70 animate-pulse h-20" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard label="Total Bookings" value={stats.totalBookings} />
            <StatCard label="Pending" value={stats.pending} />
            <StatCard label="Upcoming" value={stats.confirmedUpcoming} />
            <StatCard label="Galleries" value={stats.galleries} />
          </div>
        )}

        {/* Upcoming */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-serif font-semibold text-burgundy">Upcoming Bookings</h3>
          <button
            onClick={refreshUpcoming}
            className="text-sm underline text-neutral-600 hover:text-burgundy"
          >
            Refresh
          </button>
        </div>

        {upcoming.loading ? (
          <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200/70">Loading…</div>
        ) : upcoming.error ? (
          <div className="rounded-xl bg-white p-4 ring-1 ring-rose/30 text-rose">{upcoming.error}</div>
        ) : (
          <div className="overflow-hidden rounded-xl ring-1 ring-neutral-200/70 mb-10">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100/60">
                <tr>
                  <th className="px-3 py-2 text-left">Reference</th>
                  <th className="px-3 py-2 text-left">Client</th>
                  <th className="px-3 py-2">When</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.rows.map((b) => (
                  <tr key={b.id} className="border-t border-neutral-200/60">
                    <td className="px-3 py-2 font-mono">{b.reference}</td>
                    <td className="px-3 py-2">{b.details?.name || "—"}</td>
                    <td className="px-3 py-2">
                      {b.startAt?.toDate?.().toLocaleString([], {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }) || "—"}
                    </td>
                    <td className="px-3 py-2">
                      <StatusPill status={b.status} />
                    </td>
                    <td className="px-3 py-2 space-x-2">
                      <button
                        onClick={() => changeStatus(b, "confirmed")}
                        disabled={savingStatus[b.id] || !isAdmin}
                        className={cls(
                          "hover:underline",
                          isAdmin ? "text-emerald-700" : "text-neutral-400 cursor-not-allowed"
                        )}
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => changeStatus(b, "finished")}
                        disabled={savingStatus[b.id] || !isAdmin}
                        className={cls(
                          "hover:underline",
                          isAdmin ? "text-gold" : "text-neutral-400 cursor-not-allowed"
                        )}
                      >
                        Finish
                      </button>
                      <button
                        onClick={() => cancelBooking(b.id)}
                        disabled={savingStatus[b.id] || !isAdmin}
                        className={cls(
                          "hover:underline",
                          isAdmin ? "text-wine" : "text-neutral-400 cursor-not-allowed"
                        )}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => deleteBooking(b.id, b.status)}
                        disabled={!isAdmin}
                        className={cls(
                          "hover:underline",
                          isAdmin ? "text-rose" : "text-neutral-400 cursor-not-allowed"
                        )}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {upcoming.rows.length === 0 && (
                  <tr>
                    <td className="px-3 py-6 text-center text-neutral-500" colSpan={5}>
                      No upcoming bookings.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Refs table */}
        <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Booking References</h3>
        <input
          type="text"
          placeholder="Search by reference, name, or email"
          className="border px-3 py-2 rounded mb-3 w-full max-w-md"
          value={refSearch}
          onChange={(e) => setRefSearch(e.target.value)}
        />
        <div className="overflow-auto border border-neutral-200/70 rounded-xl mb-10">
          <table className="w-full text-sm">
            <thead className="bg-neutral-100/60">
              <tr>
                <th className="px-3 py-2 text-left">Reference</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Email</th>
                <th className="px-3 py-2 text-left">When</th>
                <th className="px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {refIndex.rows.length === 0 ? (
                <tr>
                  <td className="px-3 py-6 text-center text-neutral-500" colSpan={5}>
                    No recent bookings.
                  </td>
                </tr>
              ) : (
                filteredRefs.map((r) => (
                  <tr key={r.id} className="border-t border-neutral-200/60">
                    <td className="px-3 py-2 font-mono">{r.reference}</td>
                    <td className="px-3 py-2">{r.name}</td>
                    <td className="px-3 py-2">{r.email}</td>
                    <td className="px-3 py-2">{r.when}</td>
                    <td className="px-3 py-2">
                      <StatusPill status={r.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Tools — only show to admins */}
        {isAdmin ? (
          <Suspense fallback={<div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200/70">Loading upload tools…</div>}>
            <AdminUpload />
            <div className="my-10" />
            <AdminMediaManager />
          </Suspense>
        ) : (
          <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200/70 text-sm text-neutral-600">
            You’re signed in, but not as an admin. Upload/delete tools are hidden.
          </div>
        )}
      </div>
    </section>
  );
}

/* ----------------------------- small bits ---------------------------- */
function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-white shadow-soft p-4 text-center ring-1 ring-neutral-200/70">
      <div className="text-xl font-bold text-burgundy">{String(value)}</div>
      <div className="text-sm text-neutral-500">{label}</div>
    </div>
  );
}

function StatusPill({ status }) {
  const s = (status || "").toLowerCase();
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1";
  if (s === "confirmed")
    return (
      <span className={cls(base, "bg-emerald-50 text-emerald-800 ring-emerald-200")}>
        Confirmed
      </span>
    );
  if (s === "finished")
    return <span className={cls(base, "bg-gold/15 text-charcoal ring-gold/40")}>Finished</span>;
  if (s === "canceled")
    return <span className={cls(base, "bg-wine/15 text-wine ring-wine/30")}>Canceled</span>;
  return <span className={cls(base, "bg-gold/15 text-charcoal ring-gold/40")}>Pending</span>;
}
