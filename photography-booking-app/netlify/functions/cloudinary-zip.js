// netlify/functions/cloudinary-zip.js
export const handler = async (event) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers };
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
    }
  
    const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Missing Cloudinary env vars" }) };
    }
  
    let payload;
    try {
      payload = JSON.parse(event.body || "{}");
    } catch {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
    }
  
    const { public_ids = [], tag = null, filename = "gallery.zip" } = payload;
    if ((!public_ids || public_ids.length === 0) && !tag) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Provide public_ids[] or tag" }) };
    }
  
    // ✅ Correct endpoint path:
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image/generate_archive`;
    const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString("base64");
  
    // “tags” must be an array of strings; “public_ids” must be full ids (include folder if any)
    const body = {
      public_ids,
      tags: tag ? [tag] : undefined,
      resource_type: "image",
      target_format: "zip",
      flatten_folders: true,
      mode: "download",                   // return a direct download URL
      async: false,                       // return immediately
      expires_at: Math.floor(Date.now() / 1000) + 60 * 10, // ~10 min link
    };
  
    try {
      console.log("Cloudinary generate_archive payload:", { count: public_ids.length, tag });
      const resp = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        console.error("Cloudinary archive error", { status: resp.status, data });
        return {
          statusCode: 502,
          headers,
          body: JSON.stringify({ error: "Cloudinary error", status: resp.status, detail: data }),
        };
      }
  
      // data.url is the one-time ZIP URL of ORIGINAL files (no transforms)
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true, url: data.url, filename }) };
    } catch (e) {
      console.error("Archive request failed:", e);
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Archive failed", detail: String(e) }) };
    }
  };
  