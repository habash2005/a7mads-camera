import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <div className="container-pro py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src="/a7mads-wordmark.svg" alt="A7mads Camera" className="h-6" />
          </div>
          <p className="mt-3 text-sm text-[hsl(var(--muted))]">
            Modern, story-driven photography for people and brands.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/portfolio" className="no-underline">Portfolio</Link></li>
            <li><Link to="/booking" className="no-underline">Booking</Link></li>
            <li><Link to="/faq" className="no-underline">FAQ</Link></li>
            <li><Link to="/client-portal" className="no-underline">Client Portal</Link></li>
            {/* New: Admin link */}
            <li>
              <Link to="/admin" className="no-underline" rel="nofollow">
                Admin
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Get in touch</h4>
          <p className="text-sm text-[hsl(var(--muted))]">
            Based in North Carolina — available statewide.
          </p>
          <a href="mailto:hello@a7mads.com" className="mt-3 inline-block no-underline">hello@a7mads.com</a>
          <div className="mt-4">
            <Link to="/booking" className="btn btn-primary">Book a session</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[hsl(var(--border))]">
        <div className="container-pro py-4 text-xs text-[hsl(var(--muted))] flex items-center justify-between">
          <span>© {new Date().getFullYear()} A7mads Camera</span>
          <span>Designed with ♥ in NC</span>
        </div>
      </div>
    </footer>
  );
}
