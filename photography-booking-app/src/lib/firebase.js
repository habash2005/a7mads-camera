// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// ---- Initialize the app ----
const app =
  getApps().length
    ? getApp()
    : initializeApp({
        apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
        // We'll hard-target Storage below; keeping this here is harmless
        storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId:             import.meta.env.VITE_FIREBASE_APP_ID,
      });

/* ------------------------------------------------------------------ */
/* Optional: App Check (respects VITE_APPCHECK_DISABLED=1)            */
/* ------------------------------------------------------------------ */
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  getToken as getAppCheckToken,
} from "firebase/app-check";

const APPCHECK_DISABLED = String(import.meta.env.VITE_APPCHECK_DISABLED || "0") === "1";
let appCheck;

if (!APPCHECK_DISABLED) {
  if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "";
  if (siteKey) {
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
    });
    if (import.meta.env.DEV) {
      getAppCheckToken(appCheck, true).catch(() => {});
    }
  }
} else {
  // eslint-disable-next-line no-console
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

/* ------------------------------------------------------------------ */
/* SDKs                                                               */
/* ------------------------------------------------------------------ */
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔒 Force Storage to your *real* bucket (non-default host)
export const STORAGE_BUCKET_HOST = "ahmad-port.firebasestorage.app";
export const STORAGE_GS_URI = `gs://${STORAGE_BUCKET_HOST}`;

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app, STORAGE_GS_URI);

export { app, appCheck };
export default app;

// Dev hint to confirm targeting
if (import.meta.env.DEV) {
  console.log("[firebase] storage ->", STORAGE_GS_URI);
}
