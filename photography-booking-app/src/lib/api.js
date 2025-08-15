export async function checkAvailability({ date, time }){
  await new Promise(r => setTimeout(r, 600))
  const unavailable = time?.endsWith(':30')
  return { available: !unavailable }
}
export async function submitBooking(payload){
  await new Promise(r => setTimeout(r, 700))
  const ref = 'BK-' + String(Date.now()).slice(-6)
  return { ok: true, reference: ref, payload }
}
