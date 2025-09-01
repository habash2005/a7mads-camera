// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// --- Core app ---
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
      // keep whatever is in env; we hard-target Storage below anyway
      storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ahmad-port.firebasestorage.app",
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId:             import.meta.env.VITE_FIREBASE_APP_ID,
    });

// --- (Optional) App Check ---
let appCheck = undefined;
if (typeof window !== "undefined") {
  const APPCHECK_DISABLED = String(import.meta.env.VITE_APPCHECK_DISABLED || "0") === "1";
  if (!APPCHECK_DISABLED) {
    if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    const v3Key  = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "";
    const entKey = import.meta.env.VITE_RECAPTCHA_ENT_SITE_KEY || "";
    if (v3Key || entKey) {
      (async () => {
        if (entKey) {
          const { initializeAppCheck, ReCaptchaEnterpriseProvider } = await import("firebase/app-check");
          appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaEnterpriseProvider(entKey),
            isTokenAutoRefreshEnabled: true,
          });
        } else if (v3Key) {
          const { initializeAppCheck, ReCaptchaV3Provider } = await import("firebase/app-check");
          appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider(v3Key),
            isTokenAutoRefreshEnabled: true,
          });
        }
      })().catch(() => {});
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
  }
}

// --- SDKs ---
export const auth    = getAuth(app);
export const db      = getFirestore(app);

// 🔒 Hard-target your exact bucket (custom host works fine with GS URI)
export const STORAGE_BUCKET_HOST = "ahmad-port.firebasestorage.app";
export const STORAGE_GS_URI      = `gs://${STORAGE_BUCKET_HOST}`;
export const storage = getStorage(app, STORAGE_GS_URI);

export { app, appCheck };
export default app;

// Dev hint
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log("[firebase] storage ->", STORAGE_GS_URI);
}
