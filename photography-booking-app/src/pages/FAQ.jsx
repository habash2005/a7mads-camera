// src/pages/FAQ.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function FAQ() {
  const items = [
    {
      q: "What should I wear for my session?",
      a: [
        "Be you! The best photos come when you feel like yourself. Wear what makes you comfortable, confident, and happy.",
        "I can give tips for colors or styles, but the most important thing is that it feels like you.",
      ],
    },
    {
      q: "What if I need to reschedule or cancel my session?",
      a: [
        "Life happens! If you need to reschedule, just let me know as soon as possible. Your 25% deposit is applied to the new date, so rescheduling won’t cost extra.",
        "If you need to cancel, please give at least 48 hours’ notice. The 25% deposit you paid to secure your booking is non-refundable. This doesn’t affect rescheduling—it just holds your spot.",
      ],
    },
    {
      q: "Do you travel for sessions, and are there travel fees?",
      a: [
        "Yes! Here’s how I calculate travel fees:",
        "0–20 miles → Free",
        "21–40 miles → $15",
        "41–60 miles → $25",
        "61–80 miles → $40",
        "80+ miles → Custom quote",
      ],
      list: true,
    },
    {
      q: "Have more questions?",
      a: ["Feel free to reach out—happy to help!"],
    },
  ];

  // Build FAQPage JSON-LD (plain text only)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: (it.list
          ? [it.a[0], ...it.a.slice(1).map((x) => `• ${x}`)]
          : it.a
        ).join("\n"),
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>FAQ | A7mad’s Camera</title>
        <meta
          name="description"
          content="Answers to the most common questions about sessions, rescheduling, travel fees, and more."
        />
        <link rel="canonical" href="https://a7madscamera.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section id="faq" className="w-full py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy">
            Frequently Asked Questions
          </h1>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-burgundy/15 bg-white shadow-soft open:shadow-lg transition-all"
              >
                <summary className="cursor-pointer select-none p-6 flex items-start justify-between gap-4">
                  <span className="font-semibold text-maroon">{item.q}</span>
                  <span className="mt-1 text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 text-charcoal/80 text-sm leading-relaxed">
                  {item.list ? (
                    <>
                      <p>{item.a[0]}</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        {item.a.slice(1).map((li, j) => (
                          <li key={j}>{li}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    item.a.map((p, j) => (
                      <p key={j} className={j ? "mt-2" : undefined}>
                        {p}
                      </p>
                    ))
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
