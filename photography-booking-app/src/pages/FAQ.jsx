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

      <section id="faq" className="w-full border-y border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-16 md:py-24">
          <div className="badge mb-4">Good to know</div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-[hsl(var(--muted))] max-w-prose">
            Quick answers about sessions, rescheduling, travel, and more.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <details
                key={i}
                className="group card overflow-hidden open:shadow-lg transition-shadow"
              >
                <summary className="cursor-pointer select-none px-6 py-5 flex items-start justify-between gap-4">
                  <span className="font-semibold">{item.q}</span>
                  {/* plus icon that rotates to an “x” when open */}
                  <span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-pill border border-[hsl(var(--border))] text-sm transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 text-sm leading-relaxed text-[hsl(var(--muted))]">
                  {item.list ? (
                    <>
                      <p>{item.a[0]}</p>
                      <ul className="list-disc ms-5 mt-2 space-y-1">
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

          <div className="mt-10 card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[hsl(var(--muted))]">
              Didn’t see your question? I’m happy to help—reach out any time.
            </p>
            <a href="mailto:hello@a7mads.com" className="btn btn-primary">
              Email me
            </a>
          </div>
        </div>

        {/* subtle accent strip */}
        <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
      </section>
    </>
  );
}
