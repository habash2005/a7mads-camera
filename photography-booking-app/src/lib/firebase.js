// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// --- Your env-config ---
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,      // e.g. ahmad-port.firebaseapp.com
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,       // ahmad-port
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,   // ahmad-port.firebasestorage.app
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ App Check must be initialized immediately after initializeApp,
//    BEFORE any other Firebase product is used.
import { initializeAppCheck, ReCaptchaV3Provider /* or ReCaptchaEnterpriseProvider */ } from "firebase/app-check";

// Helpful for local/dev: lets you run without real challenges.
// Remove in production if you like.
if (import.meta.env.DEV) {
  // set to true to use a debug token automatically in dev
  // (or set to a concrete string to pin a token)
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

if (import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
  // If you created an **Enterprise** site key in Firebase Console, use:
  // initializeAppCheck(app, {
  //   provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  //   isTokenAutoRefreshEnabled: true,
  // });
}

// Now it’s safe to create the other services
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence).catch(() => {});

// Optional sanity logs
if (import.meta.env.DEV) {
  console.log("[Firebase] projectId:", firebaseConfig.projectId);
  console.log("[Firebase] storageBucket:", firebaseConfig.storageBucket);
}

export default app;
