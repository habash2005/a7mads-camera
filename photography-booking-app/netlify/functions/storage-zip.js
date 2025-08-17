// netlify/functions/storage-zip.js
const archiver = require("archiver");
const { Readable, PassThrough } = require("node:stream");

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers };

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { files = [], filename = "gallery.zip" } = payload;
  if (!Array.isArray(files) || files.length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Provide files[]" }) };
  }

  try {
    const zipStream = new PassThrough();
    const chunks = [];
    const done = new Promise((resolve, reject) => {
      zipStream.on("data", (c) => chunks.push(c));
      zipStream.on("end", resolve);
      zipStream.on("error", reject);
    });

    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.on("error", (err) => { throw err; });
    archive.pipe(zipStream);

    for (const f of files) {
      try {
        const res = await fetch(f.url);
        if (!res.ok) continue;
        const name =
          (f.name && String(f.name)) ||
          new URL(f.url).pathname.split("/").pop() ||
          `file-${Math.random().toString(36).slice(2)}.bin`;
        const nodeStream = Readable.fromWeb(res.body);
        archive.append(nodeStream, { name });
      } catch (e) {
        // skip this file
        console.warn("Fetch/append failed:", f.url, e);
      }
    }

    await archive.finalize();
    await done;

    const buffer = Buffer.concat(chunks);

    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename.replace(/"/g, "")}"`,
      },
      body: buffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (e) {
    console.error("ZIP build failed:", e);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Zip failed" }) };
  }
};
