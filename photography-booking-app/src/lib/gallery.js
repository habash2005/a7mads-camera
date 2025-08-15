import {
    collection, addDoc, serverTimestamp, doc, setDoc, getDocs, query, orderBy,
  } from "firebase/firestore";
  import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
  import { db, storage } from "./firebase";
  
  /** Create a gallery doc (or you can create it elsewhere and just pass galleryId) */
  export async function createGallery({ title = "Client Gallery", client = {}, slug = "" } = {}) {
    const col = collection(db, "galleries");
    const docRef = await addDoc(col, {
      title, client, slug: slug || null, createdAt: serverTimestamp(),
    });
    return { id: docRef.id };
  }
  
  /** Upload originals without compression; write image docs under galleries/{id}/images */
  export async function uploadOriginals(galleryId, files) {
    const uploaded = [];
    for (const file of files) {
      // keep original file bytes; don't transform
      const safeName = `${Date.now()}_${file.name}`; // avoid collisions
      const path = `galleries/${galleryId}/originals/${safeName}`;
      const sref = ref(storage, path);
      await uploadBytes(sref, file); // ← raw bytes, no compression
  
      // store metadata in Firestore
      const imgDoc = doc(collection(db, `galleries/${galleryId}/images`));
      await setDoc(imgDoc, {
        name: file.name,
        storagePath: path,
        size: file.size,
        contentType: file.type,
        createdAt: serverTimestamp(),
      });
  
      uploaded.push({ id: imgDoc.id, name: file.name, storagePath: path });
    }
    return uploaded;
  }
  
  /** List images with signed download URLs */
  export async function listImagesWithUrls(galleryId) {
    const qy = query(collection(db, `galleries/${galleryId}/images`), orderBy("createdAt", "asc"));
    const snap = await getDocs(qy);
    const items = [];
    for (const d of snap.docs) {
      const data = d.data();
      const url = await getDownloadURL(ref(storage, data.storagePath));
      items.push({ id: d.id, ...data, url });
    }
    return items;
  }
  