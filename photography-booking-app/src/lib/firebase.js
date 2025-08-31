// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ⚙️ Vite envs
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,   // e.g. ahmad-port.firebaseapp.com
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,    // ahmad-port
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,// ✅ ahmad-port.firebasestorage.app
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

// Persist session so uploads don’t “lose auth”
setPersistence(auth, browserLocalPersistence).catch(() => {});

// ✅ App Check (only if you’ve enabled enforcement in Console)
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
if (import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

// Dev-time sanity logs
if (import.meta.env.DEV) {
  console.log("[Firebase] projectId:", firebaseConfig.projectId);
  console.log("[Firebase] storageBucket:", firebaseConfig.storageBucket);
}

export default app;
