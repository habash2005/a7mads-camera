// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// (optional) only if you use analytics on the web
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",
  authDomain: "limlim-32e6a.firebaseapp.com",
  projectId: "limlim-32e6a",
  storageBucket: "limlim-32e6a.firebasestorage.app", // <-- keep what console shows
  messagingSenderId: "525168702365",
  appId: "1:525168702365:web:79f3fe9d2ea7a77bd0f574",
  measurementId: "G-8WB2SKM96V",
};

export const app = initializeApp(firebaseConfig);

// --- App Check (CRITICAL) ---
if (typeof window !== "undefined") {
  // Uncomment while debugging to see tokens in dev tools:
  // self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

  initializeAppCheck(app, {
    // Use your **reCAPTCHA v3 SITE KEY** here (never the secret key)
    provider: new ReCaptchaV3Provider("YOUR_RECAPTCHA_V3_SITE_KEY"),
    isTokenAutoRefreshEnabled: true,
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// (optional) Analytics guard so it doesn’t blow up in SSR
isSupported().then(ok => ok && getAnalytics(app));
