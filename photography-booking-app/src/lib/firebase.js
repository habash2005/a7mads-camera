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
  // ✅ keep your Blaze bucket domain
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// ---- App Check ----
if (typeof window !== "undefined") {
  if (import.meta.env.DEV) {
    // allow localhost even if reCAPTCHA is flaky
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }
  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;

  try {
    // Always init; in dev, debug token makes it work even if siteKey isn’t set
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey || "missing-site-key"),
      isTokenAutoRefreshEnabled: true,
    });
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
