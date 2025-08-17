import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // limlim-32e6a.appspot.com
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// App Check (reCAPTCHA v3)
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

// bind storage to bucket explicitly (prevents "no default bucket")
const bucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET; // limlim-32e6a.appspot.com
export const storage = bucket ? getStorage(app, `gs://${bucket}`) : getStorage(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
