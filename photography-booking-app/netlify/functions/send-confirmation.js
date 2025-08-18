// netlify/functions/send-confirmation.js
import sendgrid from '@sendgrid/mail';

// --- Env vars (Netlify → Site settings → Environment variables)
const SG_KEY      = process.env.SENDGRID_API_KEY;
const FROM_EMAIL  = process.env.FROM_EMAIL;        // verified sender in SendGrid
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;       // your inbox
// (optional) IFTTT SMS:
const IFTTT_KEY   = process.env.IFTTT_KEY;         // Webhooks key
const IFTTT_EVENT = process.env.IFTTT_EVENT || 'booking_sms';

if (!SG_KEY)      console.warn('[send-confirmation] Missing SENDGRID_API_KEY');
if (!FROM_EMAIL)  console.warn('[send-confirmation] Missing FROM_EMAIL');
if (!ADMIN_EMAIL) console.warn('[send-confirmation] Missing ADMIN_EMAIL');

sendgrid.setApiKey(SG_KEY || '');

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const ok  = (body) => ({ statusCode: 200, headers: cors, body: JSON.stringify(body) });
const bad = (code, msg) => ({ statusCode: code, headers: cors, body: JSON.stringify({ error: msg }) });

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: cors };
  if (event.httpMethod !== 'POST')   return bad(405, 'Method not allowed');

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
    const phone = details.phone || '';
    const location = details.location || 'N/A';

    // --- Plain-text lines
    const lines = [
      `Package: ${pkg.name || 'Photography'}${pkg.price != null ? ` — $${pkg.price}` : ''}${durationText ? ` (${durationText})` : ''}`,
      `When: ${date} ${time}`,
      `Location: ${location}`,
      `Reference: ${ref}`,
      `Status: ${status}`,
    ].join('\n');

    // --- HTML body
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px">Thanks, ${customerName}! 🎉</h2>
        <p>We received your booking request. We'll confirm shortly.</p>
        <ul style="padding-left:16px">
          <li><strong>Package:</strong> ${pkg.name || 'Photography'}${pkg.price != null ? ` — $${pkg.price}` : ''}${durationText ? ` (${durationText})` : ''}</li>
          <li><strong>When:</strong> ${date} ${time}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Reference:</strong> ${ref}</li>
          <li><strong>Status:</strong> ${status}</li>
        </ul>
        <p style="margin-top:16px">— Limlim Photography</p>
      </div>
    `;

    // --- SendGrid emails
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
      text: `${lines}\n\nCustomer:\nName: ${customerName}\nEmail: ${customerEmail || 'N/A'}\nPhone: ${phone || 'N/A'}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New booking received</h2>
          <pre style="white-space:pre-wrap">${lines}</pre>
          <h3>Customer</h3>
          <ul style="padding-left:16px">
            <li><strong>Name:</strong> ${customerName}</li>
            <li><strong>Email:</strong> ${customerEmail || 'N/A'}</li>
            <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
          </ul>
        </div>
      `,
    });

    const sgResp = await sendgrid.send(messages.length === 1 ? messages[0] : messages);
    const okResp = (Array.isArray(sgResp) ? sgResp : [sgResp]).every(r => (r?.statusCode ?? 202) >= 200);
    if (!okResp) return bad(502, 'SendGrid failed');

    // --- Optional: IFTTT SMS ping (server-side, no CORS issues)
    let ifttt = { ok: false, status: 0, text: 'skipped' };
    if (IFTTT_KEY) {
      try {
        const url = `https://maker.ifttt.com/trigger/${IFTTT_EVENT}/with/key/${IFTTT_KEY}`;
        const sms = `NEW ${pkg.name || 'Booking'} • ${ref}\n${customerName} ${phone ? `(${phone})` : ''}\n${date} ${time} @ ${location}`;
        const resp = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ value1: sms, value2: ref, value3: phone }),
        });
        const text = await resp.text();
        ifttt = { ok: resp.ok, status: resp.status, text };
        if (!resp.ok) console.error('[IFTTT] failed', ifttt);
      } catch (e) {
        console.error('[IFTTT] error', e);
      }
    }

    return ok({ sent: true, ifttt });
  } catch (err) {
    console.error(err);
    return bad(500, 'Failed to send confirmation');
  }
};
