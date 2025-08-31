// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// ---- derive a safe bucket id & gs:// URL from whatever is in env ----
const projectId   = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const rawBucket   = (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "").trim();

/**
 * The Firebase JS SDK needs the *bucket id* (the thing after gs://), which for
 * the default bucket is "<project-id>.appspot.com".
 * Some folks put a web host like "<project-id>.firebasestorage.app" into env.
 * This helper accepts either and produces:
 *  - bucketId: "<project-id>.appspot.com"
 *  - gsUri:    "gs://<project-id>.appspot.com"
 */
function coerceBucket(raw, proj) {
  if (!proj) throw new Error("VITE_FIREBASE_PROJECT_ID is required");
  const fallback = `${proj}.appspot.com`;

  if (!raw) return { bucketId: fallback, gsUri: `gs://${fallback}` };

  const lower = raw.toLowerCase();

  // If they gave us a gs:// already
  if (lower.startsWith("gs://")) {
    const id = raw.slice(5);
    return { bucketId: id, gsUri: `gs://${id}` };
  }

  // If they pasted the firebasestorage.app or https urls, map to the bucket id.
  if (lower.endsWith(".firebasestorage.app")) {
    return { bucketId: fallback, gsUri: `gs://${fallback}` };
  }
  if (lower.includes("firebasestorage.googleapis.com")) {
    return { bucketId: fallback, gsUri: `gs://${fallback}` };
  }

  // Otherwise assume they actually gave a bucket id already.
  return { bucketId: raw, gsUri: `gs://${raw}` };
}

const { bucketId, gsUri } = coerceBucket(rawBucket, projectId);

// ---- Core app ----
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId,
      // We keep whatever is in env for the options (harmless),
      // actual Storage SDK below is explicitly pointed at gsUri.
      storageBucket:     rawBucket || bucketId,
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
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

// ---- Other SDKs ----
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// IMPORTANT: explicitly bind Storage to the GS bucket URI we computed.
// This works regardless of what the env value looked like.
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app, gsUri);

export { app, appCheck };
export default app;

// (Optional) tiny dev log to confirm targeting
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log("[firebase] project:", projectId, "| storage gs://", gsUri);
}
