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
 * VITE_FIREBASE_STORAGE_BUCKET=ahmad-port.firebasestorage.app   ✅ bucket name
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
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.firebasestorage.app`, // 👈 using your Blaze bucket
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // ok if undefined
};

// ---- Core app ----
export const app = initializeApp(firebaseConfig);

// ---- App Check ----
if (typeof window !== "undefined") {
  if (import.meta.env.DEV) {
    // Must be set BEFORE initializeAppCheck
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;

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
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

// ---- Auth ----
export const auth = getAuth(app);

// ---- Storage ----
export const storage = getStorage(app); // will use the `ahmad-port.firebasestorage.app` bucket

// ---- Analytics (optional) ----
isSupported().then((ok) => {
  if (ok && firebaseConfig.measurementId) {
    getAnalytics(app);
  }
});
