// netlify/functions/sms-booking.js
// Sends an IFTTT Webhooks request to trigger your SMS applet.
// Set env var IFTTT_BOOKING_URL to your full webhook URL from IFTTT:
//   e.g. https://maker.ifttt.com/trigger/booking_sms/with/key/XXXXXXXX

export const handler = async (event) => {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    try {
      const { booking } = JSON.parse(event.body || "{}");
      if (!booking) {
        return { statusCode: 400, body: "Missing booking payload" };
      }
  
      const url =
        process.env.IFTTT_BOOKING_URL ||
        ""; // fallback left blank on purpose
  
      if (!url) {
        return {
          statusCode: 500,
          body: "IFTTT_BOOKING_URL not set in environment",
        };
      }
  
      // Compose concise values for IFTTT
      const v1 = `${booking.details?.name || "Unknown"} (${booking.details?.phone || ""})`;
      const v2 = `${booking.package?.name || "Package"} — ${booking.date} ${booking.time}`;
      const v3 = `Ref: ${booking.reference}`;
  
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value1: v1, value2: v2, value3: v3 }),
      });
  
      if (!resp.ok) {
        const text = await resp.text();
        return { statusCode: 502, body: `IFTTT error: ${resp.status} ${text}` };
      }
  
      return { statusCode: 200, body: "OK" };
    } catch (e) {
      return { statusCode: 500, body: `Server error: ${e.message || e}` };
    }
  };
  