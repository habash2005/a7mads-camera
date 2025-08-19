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

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "limlim-32e6a";

// IMPORTANT: this must be your real bucket host, e.g. "limlim-32e6a.firebasestorage.app"
const BUCKET_HOST =
  import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "limlim-32e6a.firebasestorage.app";
const BUCKET_GS_URL = `gs://${BUCKET_HOST}`;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  // Keep this as the host string (no protocol)
  storageBucket: BUCKET_HOST,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

/* App Check */
if (typeof window !== "undefined") {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-undef
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }
  const SITE_KEY =
    import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY ||
    "6LfnIakrAAAAAKu3hQwM4EqNaEOiZhNCK0Qipm5o";
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

/* Firestore */
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

/* Auth / Storage / Analytics */
export const auth = getAuth(app);

// 🔒 Force the SDK to use your firebasestorage.app bucket.
export const storage = getStorage(app, BUCKET_GS_URL);

isSupported().then((ok) => ok && getAnalytics(app));

// (optional) quick sanity in dev:
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log("[Storage bucket]", BUCKET_HOST);
}
