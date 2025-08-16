// netlify/functions/cloudinary-zip.js
// Node 18+ on Netlify has global fetch.

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers };
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { public_ids = [], tag = null, filename = "gallery.zip" } = payload;
  if ((!public_ids || public_ids.length === 0) && !tag) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Provide public_ids[] or tag" }) };
  }

  try {
    const opts = {
      resource_type: "image",
      type: "upload",
      target_public_id: String(filename).replace(/\.zip$/i, ""),
      flatten_folders: true,
      allow_missing: true,
    };
    if (tag) opts.tags = [tag];                 // download by tag
    if (public_ids?.length) opts.public_ids = public_ids; // or by ids

    const { download_url } = await cloudinary.utils.download_zip_url(opts);
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, url: download_url, filename }) };
  } catch (err) {
    console.error("[cloudinary-zip] error", err);
    return { statusCode: 502, headers, body: JSON.stringify({ error: "Cloudinary error", detail: String(err) }) };
  }
};
