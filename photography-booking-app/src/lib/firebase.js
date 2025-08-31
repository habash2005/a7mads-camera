// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

const app =
  getApps().length
    ? getApp()
    : initializeApp({
        apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId:             import.meta.env.VITE_FIREBASE_APP_ID,
      });

// ----- App Check (enable this when Storage enforcement is ON)
import { initializeAppCheck, ReCaptchaV3Provider, getToken as getAppCheckToken } from "firebase/app-check";

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
      // sanity log that a token can be fetched
      getAppCheckToken(appCheck, true).then(t => {
        console.log("[AppCheck OK]", (t.token || "").slice(0, 12) + "…");
      }).catch(e => console.warn("[AppCheck error]", e?.message || e));
    }
  } else {
    console.warn("[AppCheck] No VITE_RECAPTCHA_V3_SITE_KEY provided; Storage with enforcement will fail.");
  }
} else {
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

// ----- SDKs
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Force Storage to your bucket (confirmed in Console & gcloud)
export const STORAGE_BUCKET_HOST = "ahmad-port.firebasestorage.app";
export const STORAGE_GS_URI = `gs://${STORAGE_BUCKET_HOST}`;

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app, STORAGE_GS_URI);

export { app, appCheck };
export default app;

if (import.meta.env.DEV) {
  console.log("[firebase] storage ->", STORAGE_GS_URI);
}
