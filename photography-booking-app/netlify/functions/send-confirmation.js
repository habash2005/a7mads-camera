// netlify/functions/send-confirmation.js
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Quick CORS helper
const ok = (body) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  body: JSON.stringify(body),
});
const bad = (code, msg) => ({
  statusCode: code,
  headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type' },
  body: JSON.stringify({ error: msg }),
});

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return ok({}); // CORS preflight

  if (event.httpMethod !== 'POST') {
    return bad(405, 'Use POST');
  }

  try {
    const { booking } = JSON.parse(event.body || '{}');
    if (!booking) return bad(400, 'Missing booking payload');

    const {
      details = {},
      date,
      time,
      reference,
      package: pkg = {},
    } = booking;

    const from = process.env.FROM_EMAIL;
    const admin = process.env.ADMIN_EMAIL;

    const subject = `Booking received — ${reference}`;
    const text = [
      `Hi ${details.name || 'there'},`,
      '',
      `Thanks for booking with Lama Photo NC!`,
      '',
      `Summary:`,
      `• Package: ${pkg.name} — $${pkg.price} (${pkg.duration})`,
      `• Date & Time: ${date} ${time}`,
      `• Location: ${details.location}`,
      `• Ref: ${reference}`,
      '',
      `We’ll confirm your appointment shortly. Reply to this email if you need to make changes.`,
      '',
      `— Lama Photo NC`,
    ].join('\n');

    const msgToClient = {
      to: details.email,
      from,
      subject,
      text,
    };

    const msgToAdmin = {
      to: admin,
      from,
      subject: `NEW BOOKING — ${reference}`,
      text: [
        `New booking:`,
        `Client: ${details.name} <${details.email}> (${details.phone})`,
        `Package: ${pkg.name} — $${pkg.price} (${pkg.duration})`,
        `When: ${date} ${time}`,
        `Location: ${details.location}`,
        `Ref: ${reference}`,
      ].join('\n'),
    };

    await sendgrid.send([msgToClient, msgToAdmin]);
    return ok({ sent: true });
  } catch (err) {
    console.error(err);
    return bad(500, 'Failed to send confirmation');
  }
};
