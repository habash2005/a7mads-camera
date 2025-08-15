// netlify/functions/notifyBooking.js
import fetch from "node-fetch"; // Node18 runtime has fetch, keep import if your build needs it.

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // your inbox, e.g. you@domain.com
const FROM_EMAIL = process.env.FROM_EMAIL || "no-reply@yourdomain.com";

export default async (req) => {
  if (req.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { booking } = JSON.parse(req.body || "{}");
    if (!booking) return { statusCode: 400, body: "Missing booking payload" };

    const subject = `New booking: ${booking.package?.name} — ${booking.date} ${booking.time}`;
    const html = `
      <h2>New Booking Request</h2>
      <p><b>Package:</b> ${booking.package?.name} — $${booking.package?.price} (${booking.package?.duration})</p>
      <p><b>When:</b> ${booking.date} ${booking.time}</p>
      <p><b>Location:</b> ${booking.details?.location}</p>
      <p><b>Client:</b> ${booking.details?.name} — ${booking.details?.email} — ${booking.details?.phone}</p>
      <p><b>Ref:</b> ${booking.reference}</p>
    `;

    // Send to admin
    const adminMsg = {
      personalizations: [{ to: [{ email: ADMIN_EMAIL }] }],
      from: { email: FROM_EMAIL, name: "Lama Photo NC" },
      subject,
      content: [{ type: "text/html", value: html }],
    };

    // Optional: confirmation to client
    const client = booking.details?.email;
    const clientMsg = client
      ? {
          personalizations: [{ to: [{ email: client }] }],
          from: { email: FROM_EMAIL, name: "Lama Photo NC" },
          subject: "We received your booking request",
          content: [
            {
              type: "text/html",
              value: `<p>Thanks ${booking.details?.name}! We received your request for ${booking.date} ${booking.time}. We'll confirm shortly.</p><p>Ref: <b>${booking.reference}</b></p>`,
            },
          ],
        }
      : null;

    const send = (msg) =>
      fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(msg),
      });

    const results = [];
    results.push(await send(adminMsg));
    if (clientMsg) results.push(await send(clientMsg));

    const ok = results.every((r) => r.status >= 200 && r.status < 300);
    if (!ok) throw new Error("SendGrid error");

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: "Notification failed" };
  }
};
