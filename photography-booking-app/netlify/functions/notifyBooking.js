// netlify/functions/notifyBooking.js  (optional manual notifier)
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: 'Method not allowed' };

  try {
    const { subject, html, text, to = ADMIN_EMAIL } = JSON.parse(event.body || '{}');
    if (!subject || !(html || text)) {
      return { statusCode: 400, headers, body: 'Missing subject/html or text' };
    }
    const msg = { to, from: FROM_EMAIL, subject, html: html || undefined, text: text || undefined };
    await sendgrid.send(msg);
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, headers, body: 'Notification failed' };
  }
};
