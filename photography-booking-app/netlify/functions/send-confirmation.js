// netlify/functions/send-confirmation.js
import sendgrid from '@sendgrid/mail';

// Netlify env vars (Site settings → Environment variables)
const SG_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;       // verified in SendGrid
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;     // your inbox

if (!SG_KEY) console.warn("Missing SENDGRID_API_KEY");
if (!FROM_EMAIL) console.warn("Missing FROM_EMAIL");
if (!ADMIN_EMAIL) console.warn("Missing ADMIN_EMAIL");

sendgrid.setApiKey(SG_KEY || "");

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const ok = (body) => ({ statusCode: 200, headers, body: JSON.stringify(body) });
const bad = (code, msg) => ({ statusCode: code, headers, body: JSON.stringify({ error: msg }) });

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers };
  if (event.httpMethod !== 'POST') return bad(405, 'Method not allowed');

  try {
    const { booking } = JSON.parse(event.body || '{}');
    if (!booking) return bad(400, 'Missing booking payload');

    const {
      id,
      reference,
      status = 'pending',
      package: pkg = {},
      details = {},
      date,
      time,
    } = booking;

    const ref = reference || (id ? String(id).slice(-6).toUpperCase() : 'N/A');
    const durationText = typeof pkg.duration === 'string' ? pkg.duration : '';
    const customerEmail = details.email;
    const customerName = details.name || 'there';

    const lines = [
      `Package: ${pkg.name || 'Photography'}${pkg.price != null ? ` — $${pkg.price}` : ''}${durationText ? ` (${durationText})` : ''}`,
      `When: ${date} ${time}`,
      `Location: ${details.location || 'N/A'}`,
      `Reference: ${ref}`,
      `Status: ${status}`,
    ].join('\n');

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px">Thanks, ${customerName}! 🎉</h2>
        <p>We received your booking request. We'll confirm shortly.</p>
        <ul style="padding-left:16px">
          <li><strong>Package:</strong> ${pkg.name || 'Photography'}${pkg.price != null ? ` — $${pkg.price}` : ''}${durationText ? ` (${durationText})` : ''}</li>
          <li><strong>When:</strong> ${date} ${time}</li>
          <li><strong>Location:</strong> ${details.location || 'N/A'}</li>
          <li><strong>Reference:</strong> ${ref}</li>
          <li><strong>Status:</strong> ${status}</li>
        </ul>
        <p style="margin-top:16px">— Limlim Photography</p>
      </div>
    `;

    const messages = [];

    if (customerEmail) {
      messages.push({
        to: customerEmail,
        from: FROM_EMAIL,
        subject: `We received your booking — ${date} ${time}`,
        text: lines,
        html,
      });
    }

    messages.push({
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New booking: ${pkg.name || 'Photography'} — ${date} ${time}`,
      text: `${lines}\n\nCustomer:\nName: ${details.name || 'N/A'}\nEmail: ${details.email || 'N/A'}\nPhone: ${details.phone || 'N/A'}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New booking received</h2>
          <pre style="white-space:pre-wrap">${lines}</pre>
          <h3>Customer</h3>
          <ul style="padding-left:16px">
            <li><strong>Name:</strong> ${details.name || 'N/A'}</li>
            <li><strong>Email:</strong> ${details.email || 'N/A'}</li>
            <li><strong>Phone:</strong> ${details.phone || 'N/A'}</li>
          </ul>
        </div>
      `,
    });

    const resp = await sendgrid.send(messages.length === 1 ? messages[0] : messages);
    const okResp = (Array.isArray(resp) ? resp : [resp]).every(r => (r.statusCode || r[0]?.statusCode || 202) >= 200);
    if (!okResp) return bad(502, 'SendGrid failed');

    return ok({ sent: true });
  } catch (err) {
    console.error(err);
    return bad(500, 'Failed to send confirmation');
  }
};
