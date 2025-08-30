import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, getIdTokenResult } from "firebase/auth";

const AuthCtx = createContext({ ready: false, user: null, claims: null });

export function AuthProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(null);
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u || null);
      if (u) {
        try {
          const t = await getIdTokenResult(u, true);
          setClaims(t.claims || null);
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
