import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function ProtectedRoute({ children }) {
  const { ready, user } = useAuth();
  const loc = useLocation();

  if (!ready) {
    return (
      <div className="min-h-[40vh] grid place-items-center text-sm text-[color:var(--muted)]">
        Checking your session…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: loc }} />;
  }

  return children;
}
