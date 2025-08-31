// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,     // e.g. ahmad-port.firebaseapp.com
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,      // ahmad-port
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,  // ahmad-port.firebasestorage.app
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// -------- App Check FIRST --------
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  // ReCaptchaEnterpriseProvider, // use this instead if your key is Enterprise
  getToken as getAppCheckToken,
  getAppCheck
} from "firebase/app-check";

// Enable debug token in dev (so local works with enforcement)
if (import.meta.env.DEV) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

// Use the provider that matches the **type of key you created in Firebase Console**
const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY; // or VITE_RECAPTCHA_SITE_KEY (enterprise)

if (siteKey) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(siteKey),
    // provider: new ReCaptchaEnterpriseProvider(siteKey), // uncomment if your key is Enterprise
    isTokenAutoRefreshEnabled: true,
  });
}

// -------- Now other products --------
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence).catch(() => {});

if (import.meta.env.DEV) {
  console.log("[Firebase] projectId:", firebaseConfig.projectId);
  console.log("[Firebase] storageBucket:", firebaseConfig.storageBucket);
  // Optional: quick prove App Check is alive
  getAppCheckToken(getAppCheck(), true)
    .then(t => console.log("[AppCheck] token (short):", t.token.slice(0,16)+"…"))
    .catch(e => console.warn("[AppCheck] token error:", e));
}

export default app;
