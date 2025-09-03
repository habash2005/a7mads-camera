import React, { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  Timestamp,
} from "firebase/firestore";

const ADMIN_EMAILS = new Set(["ahmadhijaz325@gmail.com"]); // case-insensitive check below
const PAGE_LIMIT = 200;
const STATUSES = ["pending", "confirmed", "finished"];

const cls = (...xs) => xs.filter(Boolean).join(" ");
const fmt = (ts) =>
  ts instanceof Date
    ? ts.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
    : "—";

export default function AdminBookings() {
  const [me, setMe] = useState(null);
  const isAdmin = !!me && ADMIN_EMAILS.has(String(me.email || "").toLowerCase());

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState({}); // id -> boolean
  const [filter, setFilter] = useState("upcoming"); // 'upcoming' | 'all' | 'finished'

  useEffect(() => onAuthStateChanged(auth, (u) => setMe(u || null)), []);

  async function load() {
    setLoading(true);
    try {
      const col = collection(db, "bookings");
      const nowTs = Timestamp.fromDate(new Date());
      let snap;

      // Prefer a scoped query for "upcoming" to reduce reads
      if (filter === "upcoming") {
        try {
          snap = await getDocs(
            query(col, where("startAt", ">=", nowTs), orderBy("startAt", "asc"), limit(PAGE_LIMIT))
          );
        } catch {
          // Fallback if no composite index: grab recent by createdAt and filter client-side
          snap = await getDocs(query(col, orderBy("createdAt", "desc"), limit(PAGE_LIMIT)));
        }
      } else if (filter === "finished") {
        // Light server-side filter when possible
        try {
          snap = await getDocs(
            query(col, where("status", "==", "finished"), orderBy("startAt", "desc"), limit(PAGE_LIMIT))
          );
        } catch {
          snap = await getDocs(query(col, orderBy("createdAt", "desc"), limit(PAGE_LIMIT)));
        }
      } else {
        // 'all' – show upcoming first by startAt; fallback to createdAt
        try {
          snap = await getDocs(query(col, orderBy("startAt", "asc"), limit(PAGE_LIMIT)));
        } catch {
          snap = await getDocs(query(col, orderBy("createdAt", "desc"), limit(PAGE_LIMIT)));
        }
      }

      const items = snap.docs.map((d) => {
        const data = d.data() || {};
        const start = data.startAt?.toDate?.() || null;
        return {
          id: d.id,
          reference: data.reference || "",
          status: String(data.status || "pending").toLowerCase(),
          package: data.package?.name || data.package?.id || "",
          price: data.package?.price ?? null,
          details: data.details || {},
          start,
          // fallbacks for older rows:
          date: data.date || "",
          time: data.time || "",
          createdAt: data.createdAt?.toDate?.() || null,
        };
      });

      // Client-side refine according to filter (in case we used fallbacks)
      const now = new Date();
      const refined = items.filter((r) => {
        if (filter === "all") return true;
        if (filter === "finished") return r.status === "finished";
        // upcoming = not finished and (future or unknown start)
        if (r.status === "finished") return false;
        if (!r.start) return true;
        return r.start >= now;
      });

      // Sort:
      // - upcoming: soonest first
      // - finished: most recent first
      // - all: soonest first, then by createdAt desc for those without startAt
      refined.sort((a, b) => {
        const bothHaveStart = a.start && b.start;
        if (filter === "finished") {
          if (bothHaveStart) return b.start - a.start;
          if (a.start && !b.start) return -1;
          if (!a.start && b.start) return 1;
          const ac = a.createdAt ? a.createdAt.getTime() : 0;
          const bc = b.createdAt ? b.createdAt.getTime() : 0;
          return bc - ac;
        } else {
          if (bothHaveStart) return a.start - b.start;
          if (a.start && !b.start) return -1;
          if (!a.start && b.start) return 1;
          const ac = a.createdAt ? a.createdAt.getTime() : 0;
          const bc = b.createdAt ? b.createdAt.getTime() : 0;
          return bc - ac;
        }
      });

      setRows(refined);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [filter]);

  const filtered = useMemo(() => rows, [rows]); // already refined in load()

  async function setStatus(row, newStatus) {
    if (!isAdmin) return alert("Sign in as the admin to edit status.");
    if (!STATUSES.includes(newStatus)) return;

    setSaving((m) => ({ ...m, [row.id]: true }));
    try {
      await updateDoc(doc(db, "bookings", row.id), {
        status: newStatus,
        updatedAt: serverTimestamp(),
        ...(newStatus === "confirmed" ? { confirmedAt: serverTimestamp() } : {}),
        ...(newStatus === "finished"  ? { finishedAt: serverTimestamp() }  : {}),
      });

      // Optimistic local update
      setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, status: newStatus } : r)));
    } catch (e) {
      console.error("update status failed", e);
      alert("Couldn't update the status. Check rules / connection and try again.");
    } finally {
      setSaving((m) => ({ ...m, [row.id]: false }));
    }
  }

  function nextStatus(cur) {
    const i = STATUSES.indexOf(cur);
    return STATUSES[(i + 1) % STATUSES.length];
  }

  function StatusPill({ status }) {
    const s = status || "pending";
    const tone =
      s === "finished"
        ? "bg-emerald-100 text-emerald-800"
        : s === "confirmed"
        ? "bg-amber-100 text-amber-800"
        : "bg-slate-100 text-slate-700";
    return (
      <span className={cls("px-2 py-1 rounded-full text-xs font-medium", tone)}>
        {s}
      </span>
    );
  }

  return (
    <section className="p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="text-xl md:text-2xl font-semibold text-charcoal">Bookings</h1>

        <div
          className={cls(
            "text-xs rounded-lg px-3 py-2",
            isAdmin ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-800"
          )}
        >
          {me?.email ? (isAdmin ? `Signed in as ${me.email}` : `Signed in as ${me.email} (not admin)`) : "Not signed in"}
        </div>
      </div>

      {/* Filters */}
      <div className="mb-3 flex items-center gap-2">
        {["upcoming", "finished", "all"].map((f) => (
          <button
            key={f}
            className={cls(
              "px-3 py-1.5 rounded-full text-sm",
              filter === f ? "bg-rose text-ivory" : "bg-white border border-rose/30 text-charcoal"
            )}
            onClick={() => setFilter(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}

        <div className="ml-auto">
          <button
            onClick={load}
            disabled={loading}
            className={cls(
              "rounded-full px-4 py-2 text-sm font-semibold",
              loading
                ? "bg-blush text-charcoal/50"
                : "bg-gold text-charcoal hover:bg-rose hover:text-ivory"
            )}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-rose/20 bg-white">
        <table className="min-w-[720px] w-full text-sm">
          <thead className="bg-ivory/60 text-charcoal/70">
            <tr>
              <th className="px-4 py-3 text-left">Date / Time</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Reference</th>
              <th className="px-4 py-3 text-left">Package</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left w-56">Change</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => {
              const when = b.start ? fmt(b.start) : [b.date, b.time].filter(Boolean).join(" ");
              const savingRow = !!saving[b.id];

              return (
                <tr key={b.id} className="border-t border-rose/10">
                  <td className="px-4 py-3 whitespace-nowrap">{when || "—"}</td>
                  <td className="px-4 py-3 max-w-[220px]">
                    <div className="truncate">
                      {b.details?.name || "Client"}
                      {b.details?.email ? (
                        <span className="text-charcoal/50"> · {b.details.email}</span>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono">{b.reference}</td>
                  <td className="px-4 py-3">{b.package || "—"}</td>
                  <td className="px-4 py-3">
                    <StatusPill status={b.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <select
                        value={b.status || "pending"}
                        onChange={(e) => setStatus(b, e.target.value)}
                        disabled={!isAdmin || savingRow}
                        className={cls(
                          "rounded-xl border border-rose/30 bg-white px-3 py-2",
                          !isAdmin || savingRow ? "text-charcoal/40" : "text-charcoal"
                        )}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>

                      <button
                        type="button"
                        onClick={() => setStatus(b, nextStatus(b.status || "pending"))}
                        disabled={!isAdmin || savingRow}
                        className={cls(
                          "rounded-full px-3 py-2 text-xs font-semibold",
                          !isAdmin || savingRow
                            ? "bg-blush text-charcoal/50"
                            : "bg-rose text-ivory hover:bg-gold hover:text-charcoal"
                        )}
                        title="Advance to next status"
                      >
                        Next →
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {!loading && filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-charcoal/60">
                  No bookings to show.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-charcoal/50">
        Tip: “Next →” cycles pending → confirmed → finished. Saving writes <code>status</code>,
        <code>updatedAt</code>, and <code>confirmedAt/finishedAt</code> when applicable.
      </p>
    </section>
  );
}
