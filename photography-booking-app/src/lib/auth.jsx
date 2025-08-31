// src/lib/auth.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as fbSignOut } from "firebase/auth";

/** Case-insensitive admin allow-list */
export const ADMIN_ALLOW_LIST = new Set(["ahmadhijaz325@gmail.com"].map(e => e.toLowerCase()));

function isAdminEmail(email) {
  return !!email && ADMIN_ALLOW_LIST.has(String(email).toLowerCase());
}

const AuthCtx = createContext({
  ready: false,
  user: null,
  isAdmin: false,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setReady(true);
    });
    return () => unsub();
  }, []);

  const isAdmin = useMemo(() => isAdminEmail(user?.email || ""), [user]);

  const value = useMemo(() => ({
    ready,
    user,
    isAdmin,
    login: (email, password) => signInWithEmailAndPassword(auth, email, password),
    logout: () => fbSignOut(auth),
  }), [ready, user, isAdmin]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  return useContext(AuthCtx);
}
