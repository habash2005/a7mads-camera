// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID; // "ahmad-port"

// 🔒 Your actual bucket (you asked to lock this exact id)
export const BUCKET_ID = "ahmad-port.firebasestorage.app";
const GS_URI = `gs://${BUCKET_ID}`;

// --- Core app ---
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId,
      storageBucket:     BUCKET_ID, // keep options aligned with your real bucket
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId:             import.meta.env.VITE_FIREBASE_APP_ID,
    });

// --- App Check (optional) ---
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
    if (import.meta.env.DEV) getAppCheckToken(appCheck, true).catch(() => {});
  }
} else {
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

// --- Other SDKs ---
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref as sRef } from "firebase/storage";

// ⛳️ Explicitly bind Storage to YOUR gs:// bucket
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app, GS_URI);

// 🚨 Runtime guard: if anything points to the wrong bucket, log loudly
try {
  // ref(...).bucket returns the bucket id the instance is targeting
  const bucketAtRuntime = sRef(storage).bucket;
  if (bucketAtRuntime !== BUCKET_ID) {
    console.error(
      "[firebase] Storage bucket mismatch!",
      "expected:", BUCKET_ID,
      "actual:", bucketAtRuntime,
      "→ Some code/path is still using a different Storage instance."
    );
  } else if (import.meta.env.DEV) {
    console.log("[firebase] project:", projectId, "| storage:", `gs://${bucketAtRuntime}`);
  }
} catch { /* ignore */ }

export { app, appCheck };
export default app;
