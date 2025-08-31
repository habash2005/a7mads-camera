// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// ---- App init ----
const app =
  getApps().length
    ? getApp()
    : initializeApp({
        apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
        // keep whatever is in env; we hard-target Storage below anyway
        storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId:             import.meta.env.VITE_FIREBASE_APP_ID,
      });

// ---- (Optional) App Check ----
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  getToken as getAppCheckToken,
} from "firebase/app-check";

const APPCHECK_DISABLED = String(import.meta.env.VITE_APPCHECK_DISABLED || "0") === "1";
let appCheck;

if (!APPCHECK_DISABLED) {
  if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  const v3Key = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "";
  if (v3Key) {
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(v3Key),
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

// ---- SDKs ----
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔒 Force Storage to your exact bucket (non-default host)
const STORAGE_BUCKET_HOST = "ahmad-port.firebasestorage.app";
const STORAGE_GS_URI = `gs://${STORAGE_BUCKET_HOST}`;

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app, STORAGE_GS_URI);

// Export helpers so UI can display the *actual* target
export { app, appCheck, STORAGE_BUCKET_HOST, STORAGE_GS_URI };
export default app;

// Dev hint (safe): confirm the bucket at runtime
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log("[firebase] storage ->", STORAGE_GS_URI);
}
