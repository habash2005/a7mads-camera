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

// ✅ make sure this matches your real bucket (no gs:// here)
const STORAGE_BUCKET =
  import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
  "limlim-32e6a.firebasestorage.app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET, // used for default URLs
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// App Check (reCAPTCHA v3)
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

// Firestore
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

// ✅ Auth / Storage / Analytics
export const auth = getAuth(app);

// 🔥 FORCE the bucket at runtime too (protects against empty env / SDK fallback)
export const storage = getStorage(app, `gs://${STORAGE_BUCKET}`);

isSupported().then((ok) => ok && getAnalytics(app));
