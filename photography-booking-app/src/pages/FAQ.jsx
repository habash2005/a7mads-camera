// src/pages/FAQ.jsx
import React from 'react'

import { Helmet } from "react-helmet-async"




export default function FAQ() {
  <Helmet>
        <title>Lama Wafa | Raleigh, NC Photographer</title>
        <meta
          name="description"
          content="Lama is a Palestinian photographer based in Raleigh, NC, specializing in events, milestones, and personal portraits." />
        <link rel="canonical" href="https://lamawafa.com/" />
      </Helmet>
  const items = [
    {
      q: 'What should I wear for my session?',
      a: (
        <>
          <p>
            Be you! The best photos come when you feel like yourself. Wear what makes you
            comfortable, confident, and happy.
          </p>
          <p className="mt-2">
            I can give tips for colors or styles, but the most important thing is that it feels like you.
          </p>
        </>
      ),
    },
    {
      q: 'What if I need to reschedule or cancel my session?',
      a: (
        <>
          <p>
            Life happens! If you need to reschedule, just let me know as soon as possible.
            Your 25% deposit is applied to the new date, so rescheduling won’t cost extra.
          </p>
          <p className="mt-2">
            If you need to cancel, please give at least 48 hours’ notice. The 25% deposit you
            paid to secure your booking is non-refundable. This doesn’t affect rescheduling—it
            just holds your spot.
          </p>
        </>
      ),
    },
    {
      q: 'Do you travel for sessions, and are there travel fees?',
      a: (
        <>
          <p>Yes! Here’s how I calculate travel fees:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>0–20 miles → Free</li>
            <li>21–40 miles → $15</li>
            <li>41–60 miles → $25</li>
            <li>61–80 miles → $40</li>
            <li>80+ miles → Custom quote</li>
          </ul>
        </>
      ),
    },
    {
      q: 'Have more questions?',
      a: <>Feel free to reach out, I’m happy to help!</>,
    },
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
              <div className="text-charcoal/80 text-sm mt-2 leading-relaxed">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
