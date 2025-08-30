import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function AdminRoute({ children }) {
  const { ready, user, isAdmin } = useAuth();

  if (!ready) return <section className="container-site py-12">Loading…</section>;
  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;

  return children;
}
