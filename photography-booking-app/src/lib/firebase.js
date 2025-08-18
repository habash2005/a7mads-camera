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

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    `${PROJECT_ID}..firebasestorage.app`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || PROJECT_ID,

  // 👇 keep exactly this; you asked to use the firebasestorage.app style
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "limlim-32e6a.firebasestorage.app",

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
  // Optional: make localhost easier during development
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
export const storage = getStorage(app); // will use your firebasestorage.app bucket

isSupported().then((ok) => ok && getAnalytics(app));
