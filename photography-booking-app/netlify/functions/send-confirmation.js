// --- Optional: IFTTT SMS ping (server-side, no CORS issues)
let ifttt = { ok: false, status: 0, text: 'skipped' };
if (IFTTT_KEY) {
  try {
    // ✅ Official endpoint shape
    const url = `https://maker.ifttt.com/trigger/${encodeURIComponent(IFTTT_EVENT)}/with/key/${encodeURIComponent(IFTTT_KEY)}`;

    // Keep values short; use them in the IFTTT applet body as {{Value1}}, {{Value2}}, {{Value3}}
    const value1 = `${pkg.name || 'Booking'} — ${date} ${time}`;              // what/when
    const value2 = `Ref: ${ref}`;                                             // ref
    const value3 = `${customerName}${phone ? ` (${phone})` : ''} @ ${location}`; // who/where

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value1, value2, value3 }),
    });

    const text = await resp.text();
    ifttt = { ok: resp.ok, status: resp.status, text };
    if (!resp.ok) console.error('[IFTTT] failed', ifttt);
  } catch (e) {
    console.error('[IFTTT] error', e);
  }
}
