// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// ---- Project + bucket (your bucket is a custom one) ----
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID; // "ahmad-port"
const BUCKET_ID = "ahmad-port.firebasestorage.app";         // <- your exact bucket id
const GS_URI    = `gs://${BUCKET_ID}`;

// ---- Core app ----
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId,
      // Not strictly required, but nice to keep consistent with your real bucket:
      storageBucket:     BUCKET_ID,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId:             import.meta.env.VITE_FIREBASE_APP_ID,
    });

// ---- App Check (optional; honored if not disabled) ----
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

// ---- Other SDKs ----
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Explicitly bind Storage to YOUR bucket's gs:// URI
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app, GS_URI);

export { app, appCheck };
export default app;

// Tiny dev log
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log("[firebase] project:", projectId, "| storage:", GS_URI);
}
