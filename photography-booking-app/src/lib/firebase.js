// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
const app = getApps().length ? getApp() : initializeApp({
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,    // ahmad-port.firebaseapp.com
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,     // ahmad-port
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // ahmad-port.firebasestorage.app
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
});

// --- App Check FIRST ---
import { initializeAppCheck, ReCaptchaV3Provider /* or ReCaptchaEnterpriseProvider */ } from "firebase/app-check";
if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY),
  // provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_SITE_KEY), // use this if your key is Enterprise
  isTokenAutoRefreshEnabled: true,
});

// Now other SDKs
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
