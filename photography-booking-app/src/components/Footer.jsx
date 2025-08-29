import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <img src="/a7mads-wordmark.svg" alt="A7mads Camera" className="h-7 mb-4" />
          <p className="text-sm text-muted max-w-md">
            Confident, modern photography for portraits, branding, and events. Clean light. Sharp detail. Consistent results.
          </p>
        </div>
        <div>
          <h4 className="font-extrabold tracking-tight mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/booking" className="hover:underline">Booking</Link></li>
            <li><Link to="/client-gallery" className="hover:underline">Client Gallery</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold tracking-tight mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Greensboro, NC</li>
            <li>IG: <a href="https://instagram.com/a7madscamera" target="_blank" rel="noreferrer" className="hover:underline">@a7madscamera</a></li>
            <li><a href="mailto:hello@a7madscamera.com" className="hover:underline">hello@a7madscamera.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)] py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} A7mads Camera. All rights reserved.
      </div>
    </footer>
  );
}
