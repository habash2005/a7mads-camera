// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// ---- Core app ----
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,     // ahmad-port.firebaseapp.com
      projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,      // ahmad-port
      storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,  // ahmad-port.firebasestorage.app
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId:             import.meta.env.VITE_FIREBASE_APP_ID,
      // measurementId optional
    });

// ---- App Check (place BEFORE any other Firebase SDK usage) ----
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  // ReCaptchaEnterpriseProvider, // uncomment if you use Enterprise keys
  getToken as getAppCheckToken,
} from "firebase/app-check";

// Allow turning App Check off with an env var (useful for CI/preview)
const APPCHECK_DISABLED = String(import.meta.env.VITE_APPCHECK_DISABLED || "0") === "1";

let appCheck = undefined;

if (!APPCHECK_DISABLED) {
  // In local dev you can enable the debug token in the console:
  if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

  // Use exactly ONE provider that matches your key type in Console:
  const v3SiteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "";
  // const entSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""; // Enterprise

  if (v3SiteKey) {
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(v3SiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }
  // else if (entSiteKey) {
  //   appCheck = initializeAppCheck(app, {
  //     provider: new ReCaptchaEnterpriseProvider(entSiteKey),
  //     isTokenAutoRefreshEnabled: true,
  //   });
  // }

  // Optional: quick dev log to prove token acquisition
  if (import.meta.env.DEV && appCheck) {
    getAppCheckToken(appCheck, true)
      .then(t => console.log("[AppCheck OK]", (t.token || "").slice(0, 12) + "…"))
      .catch(e => console.warn("[AppCheck error]", e?.message || e));
  }
} else {
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

// ---- Other SDKs (safe to import AFTER App Check init) ----
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app, appCheck };
export default app;
