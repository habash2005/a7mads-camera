// src/components/SiteHeader.jsx
import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/75 backdrop-blur">
      <div className="container-site h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
          <LogoWordmark className="h-7 md:h-8 transition duration-300 group-hover:drop-shadow-[0_10px_24px_rgba(78,168,255,.45)]" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLink} end>Home</NavLink>
          <NavLink to="/portfolio" className={navLink}>Portfolio</NavLink>
          <NavLink to="/booking" className={navLink}>Book</NavLink>
          <NavLink to="/client-portal" className={navLink}>Client Portal</NavLink>
          <NavLink to="/faq" className={navLink}>FAQ</NavLink>
          {/* Admin link is in footer only */}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/booking" className="btn btn-primary">Book a Session</Link>
        </div>

        {/* Mobile toggle (optional) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-3 h-9 px-3 rounded-full ring-1 ring-[var(--border)]"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--bg)]/90 backdrop-blur">
          <div className="container-site py-3 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/booking", label: "Book" },
              { to: "/client-portal", label: "Client Portal" },
              { to: "/faq", label: "FAQ" },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} className={navLink} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
