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

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahmad-port";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  // You asked to keep this; SDK will use it as provided.
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// ---------- App Check ----------
if (typeof window !== "undefined") {
  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;

  if (import.meta.env.DEV) {
    // Dev: use debug token, and SKIP initializing reCAPTCHA provider to avoid errors
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    // Do NOT call initializeAppCheck here; with enforcement OFF or debug token registered,
    // local dev works without noisy recaptcha errors.
    console.info("[firebase] App Check: DEV mode (debug token).");
  } else if (siteKey) {
    // Prod: real reCAPTCHA v3 provider
    try {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(siteKey),
        isTokenAutoRefreshEnabled: true,
      });
      console.info("[firebase] App Check initialized (prod).");
    } catch (e) {
      console.warn("[firebase] App Check init warning:", e?.message || e);
    }
  } else {
    console.warn("[firebase] App Check NOT initialized (missing VITE_RECAPTCHA_V3_SITE_KEY).");
  }
}

// ---------- Firestore ----------
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

// ---------- Auth ----------
export const auth = getAuth(app);

// ---------- Storage ----------
export const storage = getStorage(app);

// ---------- Analytics (optional) ----------
isSupported().then((ok) => {
  if (ok && firebaseConfig.measurementId) getAnalytics(app);
});
