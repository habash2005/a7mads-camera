import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "./firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
} from "firebase/auth";

/** ✅ Case-insensitive allow list */
const ADMIN_EMAILS = new Set([
  "ahmadhijaz325@gmail.com",
  // "lamawafa13@gmail.com",
]);

function isEmailAdmin(email) {
  return !!email && ADMIN_EMAILS.has(String(email).toLowerCase());
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

  const isAdmin = useMemo(() => isEmailAdmin(user?.email), [user]);

  const value = useMemo(
    () => ({
      ready,
      user,
      isAdmin,
      login: (email, password) => signInWithEmailAndPassword(auth, email, password),
      logout: () => fbSignOut(auth),
    }),
    [ready, user, isAdmin]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  return useContext(AuthCtx);
}

export function useIsAdmin(u) {
  const email = (u?.email) ?? useAuth().user?.email;
  return isEmailAdmin(email);
}
