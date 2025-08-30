import React, { useEffect, useMemo, useState, Suspense } from "react";
import { useAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";

const AdminUpload = React.lazy(() => import("./AdminUpload"));
const AdminBookings = React.lazy(() => import("./AdminBookings"));
const AdminMediaManager = React.lazy(() => import("./AdminMediaManager"));

const cls = (...xs) => xs.filter(Boolean).join(" ");

async function safeCount(qy) {
  try {
    const res = await getCountFromServer(qy);
    return res.data().count || 0;
  } catch {
    return 0;
  }
}

export default function AdminDashboard() {
  const { ready, user, isAdmin, logout } = useAuth();

  // Gate the page
  if (!ready) {
    return (
      <section className="container-site py-16">
        <div className="text-sm text-[color:var(--muted)]">Checking session…</div>
      </section>
    );
  }
  if (!user) {
    // Hash router: use location hash to redirect
    window.location.hash = "#/admin/login";
    return null;
  }
  if (!isAdmin) {
    return (
      <section className="container-site py-16">
        <h2 className="text-xl font-semibold">Admins only</h2>
        <p className="text-[color:var(--muted)] mt-2">
          You’re signed in as <b>{user.email}</b> but this account isn’t on the
          admin allow-list. Ask the owner to add your email in
          <code className="ml-1">src/lib/auth.jsx</code>.
        </p>
        <button
          onClick={logout}
          className="btn btn-ghost mt-6"
        >
          Sign out
        </button>
      </section>
    );
  }

  // Page state
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);

  const [upcoming, setUpcoming] = useState({
    rows: [],
    loading: true,
    error: "",
  });
  const [refIndex, setRefIndex] = useState({
    rows: [],
    loading: true,
    error: "",
  });
  const [refSearch, setRefSearch] = useState("");
  const [savingStatus, setSavingStatus] = useState({});

  useEffect(() => {
    (async () => {
      // Stats
      setLoadingStats(true);
      const bookingsCol = collection(db, "bookings");
      const galleriesCol = collection(db, "galleries");
      const nowTs = Timestamp.fromDate(new Date());

      const totalBookings = await safeCount(query(bookingsCol));
      const pending = await safeCount(
        query(bookingsCol, where("status", "==", "pending"))
      );
      const confirmedUpcoming = await safeCount(
        query(
          bookingsCol,
          where("status", "==", "confirmed"),
          where("startAt", ">=", nowTs)
        )
      );
      const galleries = await safeCount(query(galleriesCol));

      setStats({ totalBookings, pending, confirmedUpcoming, galleries });
      setLoadingStats(false);

      await refreshUpcoming();
      await loadRefIndex();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refreshUpcoming() {
    try {
      const qy = query(
        collection(db, "bookings"),
        where("startAt", ">=", Timestamp.fromDate(new Date())),
        orderBy("startAt", "asc"),
        limit(6)
      );
      const snap = await getDocs(qy);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setUpcoming({ rows, loading: false, error: "" });
    } catch (e) {
      setUpcoming({
        rows: [],
        loading: false,
        error: "Couldn’t load upcoming bookings.",
      });
    }
  }

  async function loadRefIndex() {
    setRefIndex((p) => ({ ...p, loading: true, error: "" }));
    try {
      const col = collection(db, "bookings");
      let snap;
      try {
        snap = await getDocs(query(col, orderBy("startAt", "desc"), limit(300)));
      } catch {
        snap = await getDocs(
          query(col, orderBy("createdAt", "desc"), limit(300))
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
          status: (data.status || "").toLowerCase(),
          when: dt
            ? dt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
            : `${data.date || ""} ${data.time || ""}`.trim(),
        };
      });
      setRefIndex({ rows, loading: false, error: "" });
    } catch {
      setRefIndex({
        rows: [],
        loading: false,
        error: "Couldn’t load references.",
      });
    }
  }

  async function changeStatus(b, nextStatus) {
    const id = b.id;
    const prev = (b.status || "").toLowerCase();
    const next = String(nextStatus || "").toLowerCase();
    if (!next || next === prev) return;
    if (next === "canceled" && !window.confirm("Mark this booking as CANCELED?"))
      return;

    setSavingStatus((m) => ({ ...m, [id]: true }));
    try {
      await updateDoc(doc(db, "bookings", id), {
        status: next,
        updatedAt: serverTimestamp(),
        ...(next === "confirmed" ? { confirmedAt: serverTimestamp() } : {}),
        ...(next === "finished" ? { finishedAt: serverTimestamp() } : {}),
        ...(next === "canceled" ? { canceledAt: serverTimestamp() } : {}),
      });

      setUpcoming((p) => ({
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
      setUpcoming((p) => ({
        ...p,
        rows: p.rows.filter((r) => r.id !== id),
      }));
    } catch {
      alert("Could not delete.");
    }
  }

  const filteredRefs = useMemo(() => {
    const q = refSearch.trim().toLowerCase();
    if (!q) return refIndex.rows;
    return refIndex.rows.filter(
      (r) =>
        r.reference.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q)
    );
  }, [refSearch, refIndex.rows]);

  const handleSignOut = async () => {
    try {
      await logout();
      window.location.hash = "#/admin/login";
    } catch (err) {
      alert("Sign out failed: " + err.message);
    }
  };

  return (
    <section className="w-full py-10 md:py-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif font-semibold text-burgundy">
            Admin Dashboard
          </h2>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded-lg bg-rose text-white hover:bg-rose/80"
          >
            Sign Out
          </button>
        </div>

        {/* Stats */}
        {loadingStats ? (
          <div>Loading stats...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard label="Total Bookings" value={stats.totalBookings} />
            <StatCard label="Pending" value={stats.pending} />
            <StatCard label="Upcoming" value={stats.confirmedUpcoming} />
            <StatCard label="Galleries" value={stats.galleries} />
          </div>
        )}

        {/* Upcoming */}
        <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
          Upcoming Bookings
        </h3>
        {upcoming.loading ? (
          <div>Loading...</div>
        ) : upcoming.error ? (
          <div className="text-rose">{upcoming.error}</div>
        ) : (
          <table className="w-full text-sm border border-neutral-200/70 rounded-xl overflow-hidden mb-10">
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
                  <td className="px-3 py-2">{b.reference}</td>
                  <td className="px-3 py-2">{b.details?.name}</td>
                  <td className="px-3 py-2">
                    {b.startAt?.toDate?.().toLocaleString([], {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-3 py-2">
                    <StatusPill status={b.status} />
                  </td>
                  <td className="px-3 py-2 space-x-2">
                    <button
                      onClick={() => changeStatus(b, "confirmed")}
                      disabled={savingStatus[b.id]}
                      className="text-emerald-700 hover:underline"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => changeStatus(b, "finished")}
                      disabled={savingStatus[b.id]}
                      className="text-gold hover:underline"
                    >
                      Finish
                    </button>
                    <button
                      onClick={() => cancelBooking(b.id)}
                      disabled={savingStatus[b.id]}
                      className="text-wine hover:underline"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteBooking(b.id, b.status)}
                      className="text-rose hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Reference index */}
        <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">
          Booking References
        </h3>
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
              {filteredRefs.map((r) => (
                <tr key={r.id} className="border-t border-neutral-200/60">
                  <td className="px-3 py-2">{r.reference}</td>
                  <td className="px-3 py-2">{r.name}</td>
                  <td className="px-3 py-2">{r.email}</td>
                  <td className="px-3 py-2">{r.when}</td>
                  <td className="px-3 py-2">
                    <StatusPill status={r.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tools */}
        <Suspense fallback={<div>Loading upload tools…</div>}>
          <AdminUpload />
          <div className="my-10" />
          <AdminMediaManager />
        </Suspense>
      </div>
    </section>
  );
}

/* ---------- UI bits ---------- */
function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-white shadow-soft p-4 text-center ring-1 ring-neutral-200/70">
      <div className="text-xl font-bold text-burgundy">{value}</div>
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
    return (
      <span className={cls(base, "bg-gold/15 text-charcoal ring-gold/40")}>
        Finished
      </span>
    );
  if (s === "canceled")
    return (
      <span className={cls(base, "bg-wine/15 text-wine ring-wine/30")}>
        Canceled
      </span>
    );
  return (
    <span className={cls(base, "bg-gold/15 text-charcoal ring-gold/40")}>
      Pending
    </span>
  );
}
