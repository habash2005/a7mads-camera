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
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  // ✅ keep your custom bucket name (not appspot)
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// ---- App Check ----
if (typeof window !== "undefined") {
  if (import.meta.env.DEV) {
    // allows localhost even if enforcement is ON
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    console.info("[firebase] App Check debug token enabled (dev).");
  }

  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(siteKey || "missing-site-key"),
      isTokenAutoRefreshEnabled: true,
    });
    console.info("[firebase] App Check enabled with reCAPTCHA v3.");
  } catch (e) {
    console.warn("[firebase] App Check init warning:", e?.message || e);
  }
}

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export const auth = getAuth(app);
export const storage = getStorage(app);

isSupported().then(ok => {
  if (ok && firebaseConfig.measurementId) getAnalytics(app);
});
