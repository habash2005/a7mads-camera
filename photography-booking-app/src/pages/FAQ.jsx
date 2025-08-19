import React from 'react'

export default function FAQ() {
  const items = [
    { q: 'How fast do I get photos?', a: 'Sneak peeks within 24–48 hours. Full galleries typically within 10–14 days.' },
    { q: 'Do you travel?', a: 'Yes! Travel within 25 miles is included. Beyond that, a small fee applies.' },
    { q: 'Can I reschedule?', a: 'Absolutely—please let me know 48 hours in advance when possible.' },
    { q: 'Do you offer video?', a: 'Yes, as an add-on for events and weddings. Ask for bundles.' },
  ]

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-burgundy/15 bg-white shadow-soft hover:shadow-lg hover:border-gold/40 transition-all"
            >
              <div className="font-semibold text-maroon">{item.q}</div>
              <div className="text-charcoal/80 text-sm mt-2 leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}