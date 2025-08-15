import React from 'react'

export default function FAQ() {
  const items = [
    { q: 'How fast do I get photos?', a: 'Sneak peeks within 24–48 hours. Full galleries typically within 10–14 days.' },
    { q: 'Do you travel?', a: 'Yes! Travel within 25 miles is included. Beyond that, a small fee applies.' },
    { q: 'Can I reschedule?', a: 'Absolutely—please let me know 48 hours in advance when possible.' },
    { q: 'Do you offer video?', a: 'Yes, as an add-on for events and weddings. Ask for bundles.' },
  ]

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-700">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-pink-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white hover:shadow-lg transition-shadow"
            >
              <div className="font-semibold text-pink-700">{item.q}</div>
              <div className="text-pink-900/80 text-sm mt-1">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
