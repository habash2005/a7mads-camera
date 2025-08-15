// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import {
  collection,
  getDocs,
  getCountFromServer,
  orderBy,
  query,
  where,
  limit,
} from "firebase/firestore";

/* ---------- Helpers ---------- */
async function safeCount(qy) {
  try {
    const res = await getCountFromServer(qy);
    return res.data().count || 0;
  } catch {
    // If an index is missing, don't crash the UI—show 0 and keep going.
    return 0;
  }
}
function cls(...xs) { return xs.filter(Boolean).join(" "); }
function jumpTo(title) {
  const el = Array.from(document.querySelectorAll("h3")).find(
    (h) => h.textContent?.trim() === title
  );
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- Page ---------- */
export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [upcoming, setUpcoming] = useState({ rows: [], loading: true, error: "" });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    (async () => {
      setLoadingStats(true);
      const bookingsCol = collection(db, "bookings");
      const galleriesCol = collection(db, "galleries");

      // Stats
      const totalBookings = await safeCount(query(bookingsCol));
      const pending = await safeCount(query(bookingsCol, where("status", "==", "pending")));
      const confirmedUpcoming = await safeCount(
        query(
          bookingsCol,
          where("status", "==", "confirmed"),
          where("startAt", ">=", new Date())
        )
      );
      const galleries = await safeCount(query(galleriesCol));

      setStats({ totalBookings, pending, confirmedUpcoming, galleries });
      setLoadingStats(false);

      // Upcoming list (next 6)
      try {
        const qy = query(
          bookingsCol,
          where("startAt", ">=", new Date()),
          orderBy("startAt", "asc"),
          limit(6)
        );
        const snap = await getDocs(qy);
        const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setUpcoming({ rows, loading: false, error: "" });
      } catch (e) {
        console.warn("Upcoming query failed (likely needs composite index):", e);
        setUpcoming({ rows: [], loading: false, error: "Couldn’t load upcoming bookings (index needed?)." });
      }
    })();
  }, []);

  return (
    <section className="w-full py-10 md:py-14 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Admin</h1>
            <p className="text-sm text-charcoal/70">Manage uploads, client galleries, and bookings in one place.</p>
          </div>
          <button
            onClick={() => auth.signOut()}
            className="rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md"
          >
            Sign out
          </button>
        </div>

        {/* Top Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {loadingStats ? (
            <>
              <StatSkeleton />
              <StatSkeleton />
              <StatSkeleton />
              <StatSkeleton />
            </>
          ) : (
            <>
              <StatCard label="Total Bookings" value={stats.totalBookings} />
              <StatCard label="Pending" value={stats.pending} accent="rose" />
              <StatCard label="Upcoming (Confirmed)" value={stats.confirmedUpcoming} accent="gold" />
              <StatCard label="Galleries" value={stats.galleries} />
            </>
          )}
        </div>

        {/* Quick Actions — moved up just under stats */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card title="Quick Actions" className="lg:col-span-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Action label="New Gallery" onClick={() => jumpTo("Galleries")} />
              <Action label="Upload Photos" onClick={() => jumpTo("Upload")} />
              <Action label="View Upcoming" onClick={() => jumpTo("Upcoming Bookings")} />
              <Action label="Go to Portfolio" href="/portfolio" />
            </div>
            <p className="text-xs text-charcoal/60 mt-4">
              Tip: For fastest queries on <code>bookings</code>, add a composite index:
              <code> status (ASC) </code> + <code> startAt (ASC)</code>.
            </p>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Upload */}
          <Card title="Upload" className="lg:col-span-6 xl:col-span-7">
            <p className="text-sm text-charcoal/70 mb-4">
              Upload to <span className="font-semibold">Portfolio</span> or a selected <span className="font-semibold">Client Gallery</span>. Tags are applied automatically.
            </p>
            <div className="rounded-2xl border border-rose/30 bg-white overflow-hidden">
              <Embed componentPath="../pages/AdminUpload" />
            </div>
          </Card>

          {/* Upcoming Bookings */}
          <Card title="Upcoming Bookings" className="lg:col-span-6 xl:col-span-5">
            {upcoming.loading ? (
              <TableSkeleton rows={4} />
            ) : upcoming.error ? (
              <div className="text-sm text-red-700">{upcoming.error}</div>
            ) : upcoming.rows.length === 0 ? (
              <div className="text-sm text-charcoal/60">No upcoming bookings.</div>
            ) : (
              <div className="rounded-2xl border border-rose/30 bg-white overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-rose-50 text-charcoal/80">
                    <tr>
                      <Th>When</Th>
                      <Th>Client</Th>
                      <Th>Package</Th>
                      <Th>Ref</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcoming.rows.map((b) => {
                      const dt = b.startAt?.toDate?.();
                      const when = dt
                        ? dt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
                        : `${b.date} ${b.time}`;
                      return (
                        <tr key={b.id} className="border-t border-slate-100">
                          <Td>
                            <div>{when}</div>
                            <div className="text-slate-500">{b.details?.location}</div>
                          </Td>
                          <Td>
                            <div className="font-medium">{b.details?.name}</div>
                            <div className="text-slate-500">{b.details?.email}</div>
                            <div className="text-slate-500">{b.details?.phone}</div>
                          </Td>
                          <Td>
                            <div className="font-medium">{b.package?.name}</div>
                            <div className="text-slate-500">
                              ${b.package?.price} — {b.package?.duration}
                            </div>
                          </Td>
                          <Td className="font-mono">{b.reference}</Td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          {/* Galleries */}
          <Card title="Galleries" className="lg:col-span-12">
            <p className="text-sm text-charcoal/70 mb-4">
              Create a client gallery (slug + access code). Then upload with the generated tag (e.g., <code>gal-aliyah-sam</code>).
            </p>
            <div className="rounded-2xl border border-rose/30 bg-white overflow-hidden">
              <Embed componentPath="../pages/AdminGallery" />
            </div>
          </Card>

          {/* Notes */}
          <Card title="Notes" className="lg:col-span-12">
            <ul className="text-sm text-charcoal/80 list-disc ml-5 space-y-2">
              <li>Confirm pending bookings and send welcome emails.</li>
              <li>Create galleries for upcoming shoots.</li>
              <li>Upload highlight images to Portfolio.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable UI bits ---------- */
function StatCard({ label, value, accent }) {
  const ring =
    accent === "rose" ? "ring-rose/30" :
    accent === "gold" ? "ring-gold/30" :
    "ring-slate-200";
  return (
    <div className={cls(
      "rounded-2xl bg-white/80 border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 ring-1",
      ring
    )}>
      <div className="text-sm text-charcoal/70">{label}</div>
      <div className="text-2xl font-semibold text-charcoal mt-1">{value}</div>
    </div>
  );
}
function StatSkeleton() {
  return (
    <div className="rounded-2xl bg-white/80 border border-rose/30 p-4 animate-pulse">
      <div className="h-3 w-24 bg-slate-200 rounded mb-3" />
      <div className="h-7 w-12 bg-slate-200 rounded" />
    </div>
  );
}
function Card({ title, className, children }) {
  return (
    <section className={cls(
      "rounded-2xl border border-rose/30 bg-blush/20 p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
      className
    )}>
      <h3 className="text-lg font-serif font-semibold text-charcoal mb-3">{title}</h3>
      {children}
    </section>
  );
}
function Th({ children }) { return <th className="text-left px-4 py-3">{children}</th>; }
function Td({ children, className }) { return <td className={cls("px-4 py-3 align-top", className)}>{children}</td>; }
function TableSkeleton({ rows = 4 }) {
  return (
    <div className="rounded-2xl border border-rose/30 bg-white overflow-hidden">
      <div className="animate-pulse p-4 space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="h-10 bg-slate-100 rounded" />
        ))}
      </div>
    </div>
  );
}
function Action({ label, onClick, href }) {
  if (href) {
    return (
      <a
        href={href}
        className="w-full text-center rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow"
      >
        {label}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow"
    >
      {label}
    </button>
  );
}

/* Lazy embed so AdminUpload/AdminGallery keep their own layout/styles */
function Embed({ componentPath }) {
  const [Comp, setComp] = useState(null);
  useEffect(() => {
    let mounted = true;
    import(/* @vite-ignore */ componentPath).then((m) => {
      if (mounted) setComp(() => m.default);
    });
    return () => { mounted = false; };
  }, [componentPath]);
  if (!Comp) return <div className="p-4 animate-pulse text-sm text-charcoal/60">Loading…</div>;
  return <Comp />;
}
