// src/lib/firebase.js
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

/**
 * REQUIRED ENV VARS (set in Netlify & your local .env):
 * VITE_FIREBASE_PROJECT_ID=ahmad-port
 * VITE_FIREBASE_API_KEY=...
 * VITE_FIREBASE_AUTH_DOMAIN=ahmad-port.firebaseapp.com
 * VITE_FIREBASE_STORAGE_BUCKET=ahmad-port.appspot.com
 * VITE_FIREBASE_MESSAGING_SENDER_ID=...
 * VITE_FIREBASE_APP_ID=...
 * VITE_FIREBASE_MEASUREMENT_ID=G-...           (optional)
 * VITE_RECAPTCHA_V3_SITE_KEY=...              (prod only; optional in dev)
 */

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahmad-port";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  // IMPORTANT: this must be the bucket NAME (e.g. "<project>.appspot.com"), not a URL
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // ok if undefined
};

// ---- Core app ----
export const app = initializeApp(firebaseConfig);

// ---- App Check (safe & quiet in dev) ----
if (typeof window !== "undefined") {
  // In dev, enable debug token so calls work even if enforcement is on
  if (import.meta.env.DEV) {
    // Must be set BEFORE initializeAppCheck
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;

  // Only initialize reCAPTCHA V3 in production with a real site key.
  if (!import.meta.env.DEV && siteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
    });
  } else {
    console.info(
      "[firebase] App Check not initialized (dev environment or missing VITE_RECAPTCHA_V3_SITE_KEY)."
    );
  }
}

// ---- Firestore ----
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  // useFetchStreams is fine in modern browsers; remove if you see issues in older ones
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

// ---- Auth ----
export const auth = getAuth(app);

// ---- Storage ----
// Let SDK read storageBucket from config (do NOT pass a URL here)
export const storage = getStorage(app);

// ---- Analytics (optional) ----
isSupported().then((ok) => {
  if (ok && firebaseConfig.measurementId) {
    getAnalytics(app);
  }
});
