// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function ProtectedRoute({ children, requireAdmin = true }) {
  const { ready, user, isAdmin } = useAuth();
  const location = useLocation();

  // Wait for auth init
  if (!ready) return <div className="container-site py-10">Loading…</div>;

  // Not logged in -> send to login
  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  // Logged in but not admin
  if (requireAdmin && !isAdmin) {
    return (
      <div className="container-site py-10">
        <h2 className="h2 text-rose">Not authorized</h2>
        <p className="mt-2 text-[color:var(--muted)]">Ask the owner to grant your account admin access.</p>
      </div>
    );
  }

  return children;
}
