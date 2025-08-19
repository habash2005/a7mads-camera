import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand / Copyright */}
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-rose" aria-hidden />
            <span className="font-serif text-sm tracking-tight text-charcoal">
              © {year} Lama NC
            </span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:lamawafa13@gmail.com"
              className="btn btn-ghost px-3 py-1.5"
              aria-label="Email Lama"
            >
              lamawafa13@gmail.com
            </a>
            <a
              href="tel:+19195930459"
              className="btn btn-primary px-3 py-1.5"
              aria-label="Call Lama"
            >
              (919) 593-0459
            </a>
          </div>
        </div>

        {/* Subline */}
        <div className="mt-4 text-xs text-muted text-center md:text-right">
          Raleigh, NC • Available for travel
        </div>
      </div>
    </footer>
  );
}
