// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import { auth } from "../lib/firebase";
import AdminUpload from "./AdminUpload";
import AdminBookings from "./AdminBookings";
import AdminGallery from "./AdminGallery";

const TABS = [
  { id: "upload", label: "Upload" },
  { id: "bookings", label: "Bookings" },
  { id: "galleries", label: "Galleries" },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("upload");

  return (
    <section className="w-full py-12 md:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal">
            Admin Dashboard
          </h1>
          <button
            onClick={() => auth.signOut()}
            className="rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md"
          >
            Sign out
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors
                ${tab === t.id ? "bg-rose text-ivory" : "bg-blush text-charcoal hover:bg-rose/20"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6">
          {tab === "upload" && <AdminUpload />}
          {tab === "bookings" && <AdminBookings />}
          {tab === "galleries" && <AdminGallery />}
        </div>
      </div>
    </section>
  );
}
