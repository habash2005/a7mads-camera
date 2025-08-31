// src/lib/storage-list.js
// Robust helpers to list images from Firebase Storage folders with optional
// one-level subfolders, pagination, and safe concurrency on URL/metadata fetches.

import { storage } from "./firebase";
import {
  ref as sRef,
  list,          // paginated (prefer over listAll for large folders)
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

/** Simple concurrency limiter (no external deps) */
function pLimit(max = 8) {
  const queue = [];
  let active = 0;

  const next = () => {
    if (active >= max || queue.length === 0) return;
    active++;
    const { fn, resolve, reject } = queue.shift();
    Promise.resolve()
      .then(fn)
      .then((v) => { active--; resolve(v); next(); })
      .catch((e) => { active--; reject(e); next(); });
  };

  return (fn) =>
    new Promise((resolve, reject) => {
      queue.push({ fn, resolve, reject });
      next();
    });
}

/**
 * Internal: list *all* items in a folder with pagination.
 * @param {import("firebase/storage").StorageReference} folderRef
 * @returns {Promise<{items: import("firebase/storage").StorageReference[], prefixes: import("firebase/storage").StorageReference[]}>}
 */
async function listAllPages(folderRef) {
  const allItems = [];
  const allPrefixes = [];
  let pageToken = undefined;

  do {
    const res = await list(folderRef, { pageToken, maxResults: 1000 });
    if (res.items?.length) allItems.push(...res.items);
    if (res.prefixes?.length) allPrefixes.push(...res.prefixes);
    pageToken = res.nextPageToken || undefined;
  } while (pageToken);

  return { items: allItems, prefixes: allPrefixes };
}

/**
 * Internal: pull useful info for a single object (URL + minimal metadata).
 * Uses a concurrency limiter to avoid spawning too many parallel calls.
 */
function makeObjectInfoFetcher(limit = pLimit(10)) {
  return async function objectInfo(itemRef, prefixPath = "") {
    const [url, meta] = await Promise.all([
      limit(() => getDownloadURL(itemRef)),
      limit(() => getMetadata(itemRef)),
    ]);
    const name = itemRef.name;
    return {
      id: `${prefixPath}${name}`,              // stable id
      name,                                    // file name only
      fullPath: itemRef.fullPath,              // "portfolio/portraits/abc.jpg"
      path: `${prefixPath}${name}`,            // relative to root path param
      src: url,                                // public URL
      size: Number(meta.size || 0),            // bytes
      contentType: meta.contentType || "",
      timeCreated: meta.timeCreated || "",     // ISO string
      updated: meta.updated || "",             // ISO string
      bucket: meta.bucket || "",
      generation: meta.generation || "",
      md5Hash: meta.md5Hash || "",
    };
  };
}

/**
 * Fetch image objects from a folder (and optionally one level of subfolders).
 * It returns items sorted by time (newest first), then by path.
 *
 * @param {Object} opts
 * @param {string} [opts.path="portfolio"]  Storage folder (e.g., "portfolio" or "clients/ABC123")
 * @param {boolean} [opts.includeSubfolders=true]  Scan one level of subfolders
 * @param {("images"|"all")} [opts.kind="images"]  Filter to image/* contentType by default
 * @returns {Promise<Array<{
 *   id: string, name: string, fullPath: string, path: string,
 *   src: string, size: number, contentType: string,
 *   timeCreated: string, updated: string, bucket: string,
 *   generation: string, md5Hash: string
 * }>>}
 */
export async function fetchStorageObjects({
  path = "portfolio",
  includeSubfolders = true,
  kind = "images",
} = {}) {
  const rootRef = sRef(storage, path);
  const { items, prefixes } = await listAllPages(rootRef);

  const limit = pLimit(10);
  const toInfo = makeObjectInfoFetcher(limit);

  // 1) Items directly under /path
  let rootInfos = await Promise.all(items.map((r) => toInfo(r)));

  // 2) Items in one-level subfolders (e.g., /portfolio/portraits)
  let nestedInfos = [];
  if (includeSubfolders && prefixes?.length) {
    const perFolder = await Promise.all(
      prefixes.map(async (folderRef) => {
        const { items: subItems } = await listAllPages(folderRef);
        if (subItems.length === 0) return [];
        const folderName = folderRef.name; // e.g., "portraits"
        return Promise.all(subItems.map((r) => toInfo(r, `${folderName}/`)));
      })
    );
    nestedInfos = perFolder.flat();
  }

  // Combine
  let all = [...rootInfos, ...nestedInfos];

  // Optional filter: images only
  if (kind === "images") {
    all = all.filter((x) => (x.contentType || "").startsWith("image/"));
  }

  // Sort by timeCreated desc, then path asc
  all.sort((a, b) => {
    const ta = a.timeCreated || "";
    const tb = b.timeCreated || "";
    if (ta && tb && ta !== tb) return tb.localeCompare(ta);
    return a.path.localeCompare(b.path);
  });

  return all;
}

/**
 * Convenience wrapper specialized for your portfolio tree.
 * Exactly matches your original function signature.
 *
 * @param {Object} [opts]
 * @param {string} [opts.path="portfolio"]
 * @param {boolean} [opts.includeSubfolders=true]
 * @returns {ReturnType<typeof fetchStorageObjects>}
 */
export async function fetchPortfolioImages({
  path = "portfolio",
  includeSubfolders = true,
} = {}) {
  // images only
  return fetchStorageObjects({ path, includeSubfolders, kind: "images" });
}
