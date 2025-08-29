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

// Use ONLY one project. Set these in .env for ahmad-port
// VITE_FIREBASE_PROJECT_ID=ahmad-port
// VITE_FIREBASE_API_KEY=...
// VITE_FIREBASE_AUTH_DOMAIN=ahmad-port.firebaseapp.com
// VITE_FIREBASE_STORAGE_BUCKET=ahmad-port.appspot.com
// VITE_FIREBASE_MESSAGING_SENDER_ID=...
// VITE_FIREBASE_APP_ID=...
// VITE_FIREBASE_MEASUREMENT_ID=G-...
// VITE_RECAPTCHA_V3_SITE_KEY= (App Check site key for THIS web app)

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahmad-port";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  // IMPORTANT: bucket NAME, not a URL/domain
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// ---- App Check ----
if (typeof window !== "undefined") {
  // In dev, enable debug token so local runs work even with enforcement ON.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-undef
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
  // You still need a provider even when using a debug token.
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(siteKey || "unused"),
    isTokenAutoRefreshEnabled: true,
  });
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
// Let SDK use storageBucket from config (recommended). Do NOT pass the wrong URL.
export const storage = getStorage(app);

// ---- Analytics (optional) ----
isSupported().then(
  (ok) => ok && firebaseConfig.measurementId && getAnalytics(app)
);
