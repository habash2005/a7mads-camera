// src/lib/auth.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, getIdTokenResult } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";

const AuthCtx = createContext({ ready: false, user: null, claims: null });

export function AuthProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(null);
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        try {
          const token = await getIdTokenResult(u, true);
          setClaims(token.claims || null);
        } catch {
          setClaims(null);
        }
      } else {
        setClaims(null);
      }
      setReady(true);
    });
    return () => unsub();
  }, []);

  const value = useMemo(() => ({ ready, user, claims }), [ready, user, claims]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  return useContext(AuthCtx);
}

export function ProtectedRoute({ children }) {
  const { ready, user } = useAuth();
  const location = useLocation();
  if (!ready) return null; // splash could go here
  if (!user) return <Navigate to="/admin/login" replace state={{ from: location }} />;
  return children;
}
