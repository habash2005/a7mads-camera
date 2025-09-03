import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const ADMIN_EMAIL = "Ahmadhijaz325@gmail.com";

export default function ProtectedRoute({ children }) {
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const pass = !!user && user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
      setOk(pass);
      setReady(true);
    });
    return () => unsub();
  }, []);

  if (!ready) return <div className="container-pro py-20">Checking access…</div>;
  if (!ok) return <Navigate to="/admin/login" replace />;
  return children;
}
