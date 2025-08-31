// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// --- Core app ---
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
      // keep your env value untouched; SDK will be pointed explicitly below
      storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId:             import.meta.env.VITE_FIREBASE_APP_ID,
    });

// --- Optional App Check (safe to keep disabled via env) ---
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
const APPCHECK_DISABLED = String(import.meta.env.VITE_APPCHECK_DISABLED || "0") === "1";
if (!APPCHECK_DISABLED) {
  if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  const v3SiteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "";
  if (v3SiteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(v3SiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }
} else {
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

// --- SDKs ---
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// IMPORTANT: explicitly bind Storage to the GS bucket (not the download host)
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const GS_BUCKET = `gs://${projectId}.appspot.com`; // <- SDK bucket identifier

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app, GS_BUCKET); // <-- override

// tiny debug so you can verify at runtime
if (import.meta.env.DEV) {
  console.log("[Firebase] projectId:", projectId);
  console.log("[Firebase] env storageBucket:", import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);
  console.log("[Firebase] SDK GS bucket:", GS_BUCKET);
}
if (typeof window !== "undefined") {
  window.__fb = { app, auth, db, storage };
}


export { app };
export default app;
