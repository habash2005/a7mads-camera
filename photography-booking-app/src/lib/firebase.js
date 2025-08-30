/* global self */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics, isSupported } from "firebase/analytics";

// ---- Config (keep your custom bucket) ----
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahmad-port";

const firebaseConfig = {
  apiKey:       import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:   import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId:    PROJECT_ID,
  // IMPORTANT: you said to keep this EXACT bucket name
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:        import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// ---- App Check (do it only when truly configured) ----
if (typeof window !== "undefined") {
  const disableAppCheck = String(import.meta.env.VITE_APPCHECK_DISABLED || "").trim() === "1";
  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;

  try {
    if (!disableAppCheck && siteKey) {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(siteKey),
        isTokenAutoRefreshEnabled: true,
      });
      console.info("[firebase] App Check enabled with reCAPTCHA v3.");
    } else if (import.meta.env.DEV) {
      // dev convenience so local runs work
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider("local-dev"),
        isTokenAutoRefreshEnabled: true,
      });
      console.info("[firebase] App Check debug mode (DEV).");
    } else {
      console.warn("[firebase] App Check SKIPPED (no site key or VITE_APPCHECK_DISABLED=1).");
    }
  } catch (e) {
    console.warn("[firebase] App Check init warning:", e?.message || e);
  }
}

// ---- Firestore ----
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

// ---- Auth ----
export const auth = getAuth(app);

// ---- Storage ----
export const storage = getStorage(app);

// ---- Analytics (optional) ----
isSupported().then((ok) => {
  if (ok && firebaseConfig.measurementId) getAnalytics(app);
});
