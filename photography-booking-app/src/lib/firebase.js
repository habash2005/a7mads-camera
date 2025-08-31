// src/lib/storage.js
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

/**
 * Uploads a file to one of the allowed paths per your Storage rules:
 *  - portfolio/{slug}/{timestamp}_{safeName}
 *  - clients/{ref}/{timestamp}_{safeName}
 *
 * @param {File} file
 * @param {Object} opts
 * @param {'portfolio'|'clients'} opts.bucket  which top-level folder to use
 * @param {string} [opts.slug] slug/folder under portfolio (required if bucket='portfolio')
 * @param {string} [opts.ref] client ref code/folder (required if bucket='clients')
 * @param {(pct:number)=>void} [onProgress] optional progress callback
 * @returns {Promise<{url:string,path:string}>}
 */
export function uploadImageAllowed(file, opts = {}, onProgress) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) throw new Error("You must be signed in as admin to upload.");

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-");
  let base;

  if (opts.bucket === "portfolio") {
    if (!opts.slug) throw new Error("Missing portfolio slug.");
    base = `portfolio/${opts.slug}`;
  } else if (opts.bucket === "clients") {
    if (!opts.ref) throw new Error("Missing client ref.");
    base = `clients/${opts.ref}`;
  } else {
    throw new Error("bucket must be 'portfolio' or 'clients' to satisfy your Storage rules.");
  }

  const path = `${base}/${Date.now()}_${safeName}`;
  const storage = getStorage();
  const storageRef = ref(storage, path);
  const task = uploadBytesResumable(storageRef, file, { contentType: file.type });

  return new Promise((resolve, reject) => {
    task.on(
      "state_changed",
      (snap) => {
        if (onProgress) {
          const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          onProgress(pct);
        }
      },
      (err) => reject(err),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}
