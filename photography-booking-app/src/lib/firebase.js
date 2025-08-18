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
  apiKey: "AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",
  authDomain: "limlim-32e6a.firebaseapp.com",
  projectId: "limlim-32e6a",
  // ⬇️ Keep this exactly as you have it since uploads work for you
  storageBucket: "limlim-32e6a.firebasestorage.app",
  messagingSenderId: "525168702365",
  appId: "1:525168702365:web:79f3fe9d2ea7a77bd0f574",
  measurementId: "G-8WB2SKM96V",
};

export const app = initializeApp(firebaseConfig);

/* ---------------- App Check (required if enforced) ---------------- */
if (typeof window !== "undefined") {
  // Helpful for localhost/dev so App Check doesn't block you
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-undef
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "REPLACE_ME";
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

/* ---------------- Firestore (stable networking & local cache) ---------------- */
// This reduces chatty console noise and helps on restrictive networks.
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: true,
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

/* ---------------- Auth / Storage / Analytics ---------------- */
export const auth = getAuth(app);
// Uses the storageBucket from your config (firebasestorage.app)
export const storage = getStorage(app);

// Guard analytics so it only initializes where supported
isSupported().then((ok) => ok && getAnalytics(app));
