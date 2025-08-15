import React, { useEffect, useMemo, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection, getDocs, orderBy, query, updateDoc, doc, where
} from "firebase/firestore";

const statusClasses = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  done: "bg-slate-200 text-slate-800",
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("upcoming"); // upcoming | all | pending | confirmed
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // pull all bookings; you can add server-side filtering later
        const qy = query(collection(db, "bookings"), orderBy("startAt", "asc"));
        const snap = await getDocs(qy);
        const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setBookings(rows);
      } catch (e) {
        console.error(e);
        setMsg("Failed to load bookings.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const now = Date.now();
  const filtered = useMemo(() => {
    let rows = bookings.slice();
    if (filter === "upcoming") rows = rows.filter(b => b.startAt?.toMillis() >= now);
    if (filter === "pending") rows = rows.filter(b => b.status === "pending");
    if (filter === "confirmed") rows = rows.filter(b => b.status === "confirmed");
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      rows = rows.filter(b =>
        (b.details?.name || "").toLowerCase().includes(q) ||
        (b.details?.email || "").toLowerCase().includes(q) ||
        (b.package?.name || "").toLowerCase().includes(q) ||
        (b.reference || "").toLowerCase().includes(q)
      );
    }
    return rows;
  }, [bookings, filter, search, now]);

  async function setStatus(id, status) {
    try {
      await updateDoc(doc(db, "bookings", id), { status });
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
    } catch (e) {
      console.error(e);
      setMsg("Could not update status.");
    }
  }

  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">Bookings</h2>
          <div className="flex gap-2">
            <select
              className="rounded-xl border border-rose/30 px-3 py-2 bg-white"
              value={filter}
              onChange={e=>setFilter(e.target.value)}
            >
              <option value="upcoming">Upcoming</option>
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
            </select>
            <input
              className="rounded-xl border border-rose/30 px-3 py-2 bg-white"
              placeholder="Search name, email, ref…"
              value={search}
              onChange={e=>setSearch(e.target.value)}
            />
          </div>
        </div>

        {msg && <div className="mt-3 text-sm text-red-700">{msg}</div>}

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-rose-50 text-charcoal/80">
              <tr>
                <th className="text-left px-4 py-3">When</th>
                <th className="text-left px-4 py-3">Client</th>
                <th className="text-left px-4 py-3">Package</th>
                <th className="text-left px-4 py-3">Ref</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="6" className="px-4 py-6 text-center text-slate-600">Loading…</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan="6" className="px-4 py-6 text-center text-slate-600">No bookings.</td></tr>
              ) : filtered.map(b => {
                const dt = b.startAt?.toDate?.() || null;
                const when = dt ? dt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" }) : `${b.date} ${b.time}`;
                return (
                  <tr key={b.id} className="border-t border-slate-100">
                    <td className="px-4 py-3">{when}</td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{b.details?.name}</div>
                      <div className="text-slate-500">{b.details?.email}</div>
                      <div className="text-slate-500">{b.details?.phone}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{b.package?.name}</div>
                      <div className="text-slate-500">${b.package?.price} — {b.package?.duration}</div>
                      <div className="text-slate-500">{b.details?.location}</div>
                    </td>
                    <td className="px-4 py-3 font-mono">{b.reference}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[b.status] || "bg-slate-100 text-slate-800"}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={()=>setStatus(b.id, "confirmed")} className="px-3 py-1 rounded-full bg-green-600 text-white hover:bg-green-700">Confirm</button>
                        <button onClick={()=>setStatus(b.id, "cancelled")} className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700">Cancel</button>
                        <button onClick={()=>setStatus(b.id, "done")} className="px-3 py-1 rounded-full bg-slate-800 text-white hover:bg-slate-900">Done</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
