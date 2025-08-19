// src/components/Nav.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function cls(...xs) {
  return xs.filter(Boolean).join(" ");
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  const itemClass = ({ isActive }) =>
    cls(
      "relative px-1.5 py-1 text-sm font-medium transition-colors duration-200",
      "hover:text-rose",
      isActive
        ? "text-rose after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-rose"
        : "text-gray-700"
    );

  return (
    <header className="sticky top-0 z-40 border-b border-default bg-white/70 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow ring-1 ring-[var(--border)]">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          </span>
          <span className="text-base font-serif font-semibold tracking-tight text-charcoal">
            Lama Wafa
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/portfolio" className={itemClass}>
            Portfolio
          </NavLink>
          <NavLink to="/booking" className={itemClass}>
            Book
          </NavLink>
          <NavLink to="/portal" className={itemClass}>
            Client Portal
          </NavLink>
          <NavLink to="/faq" className={itemClass}>
            FAQ
          </NavLink>
          <NavLink to="/admin" className={itemClass}>
            Admin
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link to="/booking" className="hidden md:block">
          <button className="btn btn-primary shadow-sm">Book Now →</button>
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/80 shadow-sm ring-1 ring-[var(--border)]"
        >
          <div className="relative w-5 h-5">
            <span
              className={cls(
                "absolute h-0.5 w-5 bg-[var(--text)] transition-transform duration-300",
                open ? "rotate-45 top-2.5" : "top-1"
              )}
            />
            <span
              className={cls(
                "absolute h-0.5 w-5 bg-[var(--text)] transition-opacity duration-300",
                open ? "opacity-0" : "top-2.5"
              )}
            />
            <span
              className={cls(
                "absolute h-0.5 w-5 bg-[var(--text)] transition-transform duration-300",
                open ? "-rotate-45 top-2.5" : "top-4"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cls(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 border-t border-default bg-white/90 backdrop-blur" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 space-y-2">
          {[
            { to: "/portfolio", label: "Portfolio" },
            { to: "/booking", label: "Book" },
            { to: "/portal", label: "Client Portal" },
            { to: "/faq", label: "FAQ" },
            { to: "/admin", label: "Admin" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cls(
                  "block rounded-md px-3 py-2 text-sm transition-colors duration-200",
                  isActive ? "text-rose bg-rose/10" : "text-gray-800 hover:bg-gray-50"
                )
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)}>
            <button className="btn btn-primary w-full mt-2">Book Now →</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
