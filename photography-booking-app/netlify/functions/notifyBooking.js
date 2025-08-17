// netlify/functions/notifyBooking.js
const { IFTTT_EVENT, IFTTT_KEY } = process.env;

function trunc(s = "", n = 160) {
  const t = String(s).replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 3) + "...";
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  if (!IFTTT_EVENT || !IFTTT_KEY) {
    return { statusCode: 500, body: "IFTTT_EVENT / IFTTT_KEY not set" };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { pkg = {}, date = "", time = "", details = {} } = data;

    const what = [pkg.name || "Session", pkg.price ? `$${pkg.price}` : ""]
      .filter(Boolean).join(" ");
    const when = [date, time].filter(Boolean).join(" ");
    const who  = [details.name, details.phone].filter(Boolean).join(" ");

    const payload = {
      value1: trunc(what, 60),  // e.g. "Portrait $250"
      value2: trunc(when, 40),  // e.g. "2025-08-17 02:00 PM"
      value3: trunc(who, 60),   // e.g. "Lama NC 919-xxx-xxxx"
    };

    const url = `https://maker.ifttt.com/trigger/${encodeURIComponent(IFTTT_EVENT)}/json/with/key/${encodeURIComponent(IFTTT_KEY)}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      throw new Error(`IFTTT ${r.status}: ${text || "request failed"}`);
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("[notifyBooking] error:", err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(err.message || err) }) };
  }
};
