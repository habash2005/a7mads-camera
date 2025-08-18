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

const PROJECT_ID = "limlim-32e6a";

// Read whatever you set; default to firebasestorage.app so your UI sees it
const RAW_BUCKET =
  import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
  "limlim-32e6a.firebasestorage.app";

// Normalize ONLY for the actual Storage SDK (bucket IDs are appspot.com).
// We keep RAW_BUCKET untouched for display purposes.
const REAL_BUCKET = RAW_BUCKET
  .replace(".firebasestorage.app", ".appspot.com")
  .replace(".firebaseapp.com", ".appspot.com"); // just in case that was used

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",

  // authDomain is always firebaseapp.com (this is correct)
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    `${PROJECT_ID}.firebaseapp.com`,

  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || PROJECT_ID,

  // Keep your preferred string here so your UI shows firebasestorage.app
  storageBucket: RAW_BUCKET,

  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "525168702365",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:525168702365:web:79f3fe9d2ea7a77bd0f574",
  measurementId:
    import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-8WB2SKM96V",
};

export const app = initializeApp(firebaseConfig);

/* ---------------- App Check (reCAPTCHA v3) ---------------- */
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

/* ---------------- Firestore (stable networking & local cache) ---------------- */
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

/* ---------------- Auth / Storage / Analytics ---------------- */
export const auth = getAuth(app);

// IMPORTANT: point the SDK at the real bucket ID (appspot.com),
// while keeping your display string as firebasestorage.app.
export const storage = getStorage(app, `gs://${REAL_BUCKET}`);

// Export a label the UI can show (what you prefer to see)
export const storageBucketLabel = RAW_BUCKET;

isSupported().then((ok) => ok && getAnalytics(app));
