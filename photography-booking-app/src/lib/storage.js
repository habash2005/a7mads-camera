// Minimal helper to fetch all images from Firebase Storage under a folder.
// Handles optional subfolders (e.g., portfolio/portraits, /branding, /events).

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

/**
 * Fetch all image download URLs from a folder (and its immediate subfolders).
 * @param {Object} opts
 * @param {import('firebase/app').FirebaseApp} opts.app - Your Firebase app (optional if already initialized globally)
 * @param {string} opts.path - Folder path in Storage, default "portfolio"
 * @param {boolean} opts.includeSubfolders - If true, also scan one level of subfolders
 * @returns {Promise<Array<{id:string, src:string, path:string}>>}
 */
export async function fetchPortfolioImages({ app, path = "portfolio", includeSubfolders = true } = {}) {
  const storage = getStorage(app); // uses default if already initialized
  const rootRef = ref(storage, path);

  // Helper: list items for a given ref
  const listRefToItems = async (r, prefixPath = "") => {
    const { items } = await listAll(r);
    // Turn each StorageReference into a URL
    const urls = await Promise.all(
      items.map(async (itemRef, idx) => {
        const src = await getDownloadURL(itemRef);
        return {
          id: `${prefixPath}${itemRef.name}-${idx}`,
          src,
          path: `${prefixPath}${itemRef.name}`,
        };
      })
    );
    return urls;
  };

  const { prefixes, items } = await listAll(rootRef);

  // 1) Items directly under /portfolio
  const rootItems = await Promise.all(
    items.map(async (itemRef, idx) => {
      const src = await getDownloadURL(itemRef);
      return {
        id: `${itemRef.name}-${idx}`,
        src,
        path: itemRef.name,
      };
    })
  );

  // 2) Items in one-level subfolders (e.g., /portfolio/portraits)
  let nested = [];
  if (includeSubfolders && prefixes?.length) {
    nested = (
      await Promise.all(
        prefixes.map(async (folderRef) => {
          const folderName = folderRef.name; // e.g., "portraits"
          return listRefToItems(folderRef, `${folderName}/`);
        })
      )
    ).flat();
  }

  // Combine + sort by path (you can switch to a custom order if you prefer)
  const all = [...rootItems, ...nested].sort((a, b) => a.path.localeCompare(b.path));
  return all;
}
