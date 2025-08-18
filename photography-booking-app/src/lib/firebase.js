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

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "limlim-32e6a.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "limlim-32e6a",
  // ✅ keep EXACTLY this domain per your request
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "limlim-32e6a.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "525168702365",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:525168702365:web:79f3fe9d2ea7a77bd0f574",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-8WB2SKM96V",
};

export const app = initializeApp(firebaseConfig);

/* ---------------- App Check (only if a real site key is provided) ---------------- */
if (typeof window !== "undefined") {
  // Enable debug token in dev so local testing isn't blocked by enforcement
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-undef
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
  if (SITE_KEY && SITE_KEY !== "REPLACE_ME") {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
  } else {
    console.warn(
      "[firebase] App Check NOT initialized (no VITE_RECAPTCHA_V3_SITE_KEY). " +
        "If App Check enforcement is ON for Firestore/Storage, you will see 'Missing or insufficient permissions'."
    );
  }
}

/* ---------------- Firestore (stable networking + cache) ---------------- */
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

/* ---------------- Auth / Storage / Analytics ---------------- */
export const auth = getAuth(app);
export const storage = getStorage(app); // uses your firebasestorage.app bucket above

isSupported().then((ok) => ok && getAnalytics(app));
