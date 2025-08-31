// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

// ---- Create (or reuse) the app ------------------------------------------------
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,     // e.g. ahmad-port.firebaseapp.com
      projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,      // e.g. ahmad-port
      storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,  // e.g. ahmad-port.firebasestorage.app
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId:             import.meta.env.VITE_FIREBASE_APP_ID,
      // measurementId optional
    });

// ---- App Check (optional; safe to disable via env) ----------------------------
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  // ReCaptchaEnterpriseProvider, // use this instead if your key is Enterprise
  getToken as getAppCheckToken,
} from "firebase/app-check";

const APPCHECK_DISABLED = String(import.meta.env.VITE_APPCHECK_DISABLED || "0") === "1";
let appCheck;

if (!APPCHECK_DISABLED) {
  if (import.meta.env.DEV) {
    // enables console debug token for local dev
    // @ts-ignore
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const v3SiteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY || "";
  // const enterpriseKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""; // if using Enterprise

  if (v3SiteKey) {
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(v3SiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }
  // else if (enterpriseKey) {
  //   appCheck = initializeAppCheck(app, {
  //     provider: new ReCaptchaEnterpriseProvider(enterpriseKey),
  //     isTokenAutoRefreshEnabled: true,
  //   });
  // }

  if (import.meta.env.DEV && appCheck) {
    getAppCheckToken(appCheck, true)
      .then(t => console.log("[AppCheck OK]", (t.token || "").slice(0, 12) + "…"))
      .catch(e => console.warn("[AppCheck error]", e?.message || e));
  }
} else {
  console.warn("[AppCheck] Disabled via VITE_APPCHECK_DISABLED=1");
}

// ---- SDK instances ------------------------------------------------------------
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app, appCheck };

// Helper: make sure the current user’s ID token is fresh before sensitive writes
export async function ensureFreshAuth() {
  if (auth.currentUser) {
    await auth.currentUser.getIdToken(true);
  }
}

export default app;

/* -------------------------------------------------------------------------- */
/*  OPTIONAL DEBUG (remove when done)                                          */
/*  After logging-in as admin, run in DevTools:                                */
/*     await __probeWrite()                                                    */
/* -------------------------------------------------------------------------- */
if (typeof window !== "undefined") {
  // @ts-ignore
  window.__fb = { app, auth, storage, options: app.options };

  // @ts-ignore
  window.__probeWrite = async () => {
    const u = auth.currentUser;
    console.log("[probe] projectId:", app.options.projectId);
    console.log("[probe] storageBucket:", app.options.storageBucket);
    console.log("[probe] currentUser:", u?.email || null);
    if (!u) throw new Error("Not signed in");

    await u.getIdToken(true); // refresh token carried to Storage
    const { ref, uploadString } = await import("firebase/storage");
    const r = ref(storage, "portfolio/__probe.txt");
    await uploadString(r, "ok", "raw");
    console.log("[probe] write OK");
  };
}
