// src/components/SiteHeader.jsx
import { Link, NavLink } from "react-router-dom";
import LogoWordmark from "./LogoWordmark";
import ThemeToggle from "./ThemeToggle";

const navLink = ({ isActive }) =>
  `px-3 py-2 rounded-pill transition-colors ${
    isActive
      ? "text-[var(--accent)]"
      : "text-[color:var(--muted)] hover:text-[color:var(--text)] hover:bg-[color:var(--accent-soft)]"
  }`;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/75 backdrop-blur">
      <div className="container-site h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
          <LogoWordmark className="h-7 md:h-8 transition duration-300 group-hover:drop-shadow-[0_10px_24px_rgba(78,168,255,.45)]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/portfolio" className={navLink}>Portfolio</NavLink>
          <NavLink to="/client-portal" className={navLink}>Client Portal</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/booking" className="btn btn-primary">Book a Session</Link>
        </div>
      </div>
    </header>
  );
}
