// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="container-site py-10 grid gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <h4 className="text-xl h3">A7mads Camera</h4>
          <p className="text-sm text-[color:var(--muted)] mt-2 max-w-md">
            Modern photography for brands, people, and events across North Carolina.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Explore</h5>
          <ul className="space-y-2 text-sm text-[color:var(--muted)]">
            <li><Link to="/portfolio" className="hover:text-[color:var(--text)]">Portfolio</Link></li>
            <li><Link to="/booking" className="hover:text-[color:var(--text)]">Booking</Link></li>
            <li><Link to="/client-portal" className="hover:text-[color:var(--text)]">Client Portal</Link></li>
            <li><Link to="/admin/login" className="hover:text-[color:var(--text)]">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <ul className="space-y-2 text-sm text-[color:var(--muted)]">
            <li>Greensboro, NC</li>
            <li><a href="mailto:hello@a7madscamera.com" className="hover:text-[color:var(--text)]">hello@a7madscamera.com</a></li>
            <li><a href="https://instagram.com/a7madscamera" target="_blank" rel="noreferrer" className="hover:text-[color:var(--text)]">@a7madscamera</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)] py-4 text-center text-xs text-[color:var(--muted)]">
        © {new Date().getFullYear()} A7mads Camera
      </div>
    </footer>
  );
}
