/* global self */
// src/lib/firebase.js
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
 * REQUIRED ENV VARS (set in Netlify & local .env):
 * VITE_FIREBASE_PROJECT_ID=ahmad-port
 * VITE_FIREBASE_API_KEY=...
 * VITE_FIREBASE_AUTH_DOMAIN=ahmad-port.firebaseapp.com
 * VITE_FIREBASE_STORAGE_BUCKET=ahmad-port.firebasestorage.app
 * VITE_FIREBASE_MESSAGING_SENDER_ID=...
 * VITE_FIREBASE_APP_ID=...
 * VITE_FIREBASE_MEASUREMENT_ID=G-...           (optional)
 * VITE_RECAPTCHA_V3_SITE_KEY=...               (prod only; optional in dev)
 */

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahmad-port";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  // NOTE: Firebase config wants the bucket *name* (not URL). We'll still override Storage below.
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// ---- App ----
export const app = initializeApp(firebaseConfig);

// ---- App Check ----
if (typeof window !== "undefined") {
  if (import.meta.env.DEV) {
    // Enable local dev without solving reCAPTCHA (must be set before init)
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }
  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
  // Only initialize reCAPTCHA in prod with a real key
  if (!import.meta.env.DEV && siteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
    });
  } else {
    console.info(
      "[firebase] App Check not initialized (dev or missing VITE_RECAPTCHA_V3_SITE_KEY)."
    );
  }
}

// ---- Firestore ----
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

// ---- Auth ----
export const auth = getAuth(app);

// ---- Storage ----
// You said your bucket name is *literally* "ahmad-port.firebasestorage.app".
// Pass the GS URL so the SDK treats it as a bucket, not an HTTPS host.
const BUCKET_NAME = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
export const storage = BUCKET_NAME
  ? getStorage(app, `gs://${BUCKET_NAME}`)
  : getStorage(app);

// ---- Analytics (optional) ----
isSupported().then((ok) => {
  if (ok && firebaseConfig.measurementId) getAnalytics(app);
});
