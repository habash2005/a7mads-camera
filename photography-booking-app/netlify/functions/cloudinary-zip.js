// netlify/functions/cloudinary-zip.js
// Node 18+ on Netlify has global `fetch`.

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

  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Missing Cloudinary env vars" }) };
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

  // Cloudinary Admin API endpoint for archives
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image/generate_archive`;
  const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString("base64");

  const common = {
    resource_type: "image",
    target_format: "zip",
    target_public_id: String(filename).replace(/\.zip$/i, ""), // sets the zip name
    flatten_folders: true,
    mode: "download",
    async: false,
    expires_at: Math.floor(Date.now() / 1000) + 60 * 10, // 10 minutes
  };

  const body = tag
    ? {
        ...common,
        // IMPORTANT: must be an ARRAY for tag-based archives
        tags: [tag],
      }
    : {
        ...common,
        public_ids, // include folder segments if your public_ids contain them
      };

  try {
    console.log("Cloudinary generate_archive payload:", {
      by: tag ? "tag" : "public_ids",
      count: public_ids?.length || 0,
      tag,
      filename,
    });

    const resp = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await resp.text();
    const data = text ? JSON.parse(text) : {};

    if (!resp.ok) {
      console.error("Cloudinary archive error", { status: resp.status, data });
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "Cloudinary error", status: resp.status, detail: data }),
      };
    }

    // data.url is the one-time ZIP URL for the originals
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, url: data.url, filename }) };
  } catch (e) {
    console.error("Archive request failed:", e);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Archive failed", detail: String(e) }) };
  }
};
