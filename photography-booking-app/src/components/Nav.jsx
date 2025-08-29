// src/components/Nav.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function cls(...xs) {
  return xs.filter(Boolean).join(" ");
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuId = "mobile-nav-menu";

  const itemClass = ({ isActive }) =>
    cls(
      "relative px-1.5 py-1 text-sm font-medium transition-colors duration-200",
      "hover:text-rose",
      isActive
        ? "text-rose after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-rose"
        : "text-gray-700"
    );

  return (
    <header
      className={cls(
        "sticky top-0 z-40 border-b border-default",
        "bg-white/70 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60",
        open && "shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow ring-1 ring-[var(--border)]">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          </span>
          <span className="text-base font-serif font-semibold tracking-tight text-charcoal">
            A7mads Camera
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/portfolio" className={itemClass}>Portfolio</NavLink>
          <NavLink to="/booking" className={itemClass}>Book</NavLink>
          <NavLink to="/client-portal" className={itemClass}>Client Portal</NavLink>
          <NavLink to="/faq" className={itemClass}>FAQ</NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link to="/booking" className="hidden md:block">
          <button className="btn btn-primary shadow-sm">Book Now →</button>
        </Link>

        {/* Mobile toggle */}
        <button
          aria-controls={menuId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center gap-2 h-9 rounded-full px-2.5 bg-white/90 shadow-sm ring-1 ring-[var(--border)]"
        >
          <div className="relative w-5 h-5">
            <span className={cls("absolute h-0.5 w-5 bg-[var(--text)] transition-transform duration-300", open ? "rotate-45 top-2.5" : "top-1")} />
            <span className={cls("absolute h-0.5 w-5 bg-[var(--text)] transition-opacity duration-200", open ? "opacity-0 top-2.5" : "opacity-100 top-2.5")} />
            <span className={cls("absolute h-0.5 w-5 bg-[var(--text)] transition-transform duration-300", open ? "-rotate-45 top-2.5" : "top-4")} />
          </div>
          <span className="text-sm font-semibold text-charcoal">Menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id={menuId}
          className="md:hidden relative z-40 overflow-hidden transition-[max-height,opacity] duration-300 max-h-96 opacity-100 border-t border-default bg-white/95 backdrop-blur"
        >
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/portfolio" className={itemClass}>Portfolio</NavLink>
            <NavLink to="/booking" className={itemClass}>Book</NavLink>
            <NavLink to="/client-portal" className={itemClass}>Client Portal</NavLink>
            <NavLink to="/faq" className={itemClass}>FAQ</NavLink>
            <Link to="/booking">
              <button className="btn btn-primary w-full mt-2">Book Now →</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
