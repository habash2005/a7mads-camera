// netlify/functions/send-confirmation.js
// Sends an IFTTT Webhooks request to trigger your SMS applet.
// Use either:
//   - IFTTT_BOOKING_URL = full webhook URL from IFTTT
//     e.g. https://maker.ifttt.com/trigger/booking_sms/with/key/XXXXXXXX
// or
//   - IFTTT_KEY + (optional) IFTTT_EVENT (defaults to "booking_sms")

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  const ok  = (body) => ({ statusCode: 200, headers: CORS, body: JSON.stringify(body) });
  const bad = (code, msg) => ({ statusCode: code, headers: CORS, body: JSON.stringify({ error: msg }) });
  
  const { IFTTT_BOOKING_URL, IFTTT_KEY, IFTTT_EVENT = 'booking_sms' } = process.env;
  
  function trunc(s = "", n = 160) {
    const t = String(s).replace(/\s+/g, " ").trim();
    return t.length <= n ? t : t.slice(0, n - 3) + "...";
  }
  
  export const handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: CORS };
    if (event.httpMethod !== 'POST')   return bad(405, 'Method not allowed');
  
    try {
      const { booking } = JSON.parse(event.body || '{}');
      if (!booking) return bad(400, 'Missing booking payload');
  
      const {
        id, reference, status = 'pending',
        package: pkg = {}, details = {}, date = '', time = '',
      } = booking;
  
      const ref       = reference || (id ? String(id).slice(-6).toUpperCase() : 'N/A');
      const name      = details.name || 'Client';
      const phone     = details.phone || '';
      const location  = details.location || 'N/A';
      const what      = [pkg.name || 'Session', pkg.price ? `$${pkg.price}` : ''].filter(Boolean).join(' ');
      const when      = [date, time].filter(Boolean).join(' ');
      const headline  = `NEW ${pkg.name || 'Booking'} • ${ref}`;
  
      // Compose concise SMS (value1/2/3 are what IFTTT’s SMS ingredient accepts)
      const value1 = trunc(`${headline}`);
      const value2 = trunc(`${name}${phone ? ` (${phone})` : ''}`);
      const value3 = trunc(`${when} @ ${location} — ${status}`);
  
      // Determine URL
      let url = IFTTT_BOOKING_URL || '';
      if (!url) {
        if (!IFTTT_KEY) {
          // Return 200 so the UI doesn’t break, but include the reason
          return ok({ sent: false, reason: 'IFTTT not configured (set IFTTT_BOOKING_URL or IFTTT_KEY)' });
        }
        url = `https://maker.ifttt.com/trigger/${encodeURIComponent(IFTTT_EVENT)}/with/key/${encodeURIComponent(IFTTT_KEY)}`;
      }
  
      // Send to IFTTT
      let resp, text = '';
      try {
        resp = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ value1, value2, value3 }),
        });
        text = await resp.text().catch(() => '');
      } catch (e) {
        console.error('[IFTTT] request error:', e);
        return ok({ sent: false, channel: 'ifttt', error: String(e) });
      }
  
      // Always 200; report whether IFTTT accepted it
      if (!resp.ok) {
        console.error('[IFTTT] non-2xx:', resp.status, text);
        return ok({ sent: false, channel: 'ifttt', status: resp.status, body: text });
      }
  
      return ok({ sent: true, channel: 'ifttt', status: resp.status, body: text });
    } catch (err) {
      console.error('[send-confirmation] fatal:', err);
      // 200 to avoid blocking UI; include error for logs
      return ok({ sent: false, error: String(err?.message || err) });
    }
  };
  