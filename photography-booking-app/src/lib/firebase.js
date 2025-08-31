// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

const app = getApps().length ? getApp() : initializeApp({
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,     // ahmad-port.firebaseapp.com
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,      // ahmad-port
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,  // ahmad-port.firebasestorage.app
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
});

// ---- APP CHECK FIRST ----
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  // ReCaptchaEnterpriseProvider, // <-- use this instead if your key is Enterprise
  getAppCheck, getToken as getAppCheckToken
} from "firebase/app-check";

if (import.meta.env.DEV) self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

// Use ONE of these envs (not both) depending on your key type:
const v3Key = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
// const entKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // Enterprise

if (v3Key) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(v3Key),
    isTokenAutoRefreshEnabled: true,
  });
}
// else if (entKey) {
//   initializeAppCheck(app, {
//     provider: new ReCaptchaEnterpriseProvider(entKey),
//     isTokenAutoRefreshEnabled: true,
//   });
// }

// ---- Now other SDKs ----
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: quick proof in console (dev only)
if (import.meta.env.DEV) {
  getAppCheckToken(getAppCheck(), true)
    .then(t => console.log("[AppCheck ok]", (t.token||"").slice(0,16)+"…"))
    .catch(e => console.warn("[AppCheck err]", e?.message||e));
}
export default app;
