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

// ---- Load env or fallback to project defaults
const PROJECT_ID = "limlim-32e6a";
const RAW_BUCKET =
  import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.appspot.com`;

// Auto-fix common mistake: *.firebasestorage.app -> *.appspot.com
const BUCKET = RAW_BUCKET.includes("firebasestorage.app")
  ? RAW_BUCKET.replace(".firebasestorage.app", ".appspot.com")
  : RAW_BUCKET;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || PROJECT_ID,
  storageBucket: BUCKET, // MUST be like: limlim-32e6a.appspot.com
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "525168702365",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:525168702365:web:79f3fe9d2ea7a77bd0f574",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-8WB2SKM96V",
};

export const app = initializeApp(firebaseConfig);

/* ---------------- App Check (only if you provided a real site key) ---------------- */
if (typeof window !== "undefined") {
  // Enable debug token on localhost/dev ONLY (optional)
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
      "[firebase] App Check not initialized (no VITE_RECAPTCHA_V3_SITE_KEY). " +
        "If App Check enforcement is ON for Storage/Firestore, requests will be rejected."
    );
  }
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

// Pin Storage to the corrected bucket via gs:// URL for extra safety
export const storage = getStorage(app, `gs://${BUCKET}`);

isSupported().then((ok) => ok && getAnalytics(app));
