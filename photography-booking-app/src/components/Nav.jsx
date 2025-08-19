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
      "relative px-1.5 py-1 text-sm text-gray-700 hover:text-rose transition-colors",
      isActive && "text-rose after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-rose"
    );

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-default">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-[var(--border)] bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          </span>
          <span className="text-base font-semibold tracking-tight text-charcoal">
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
          <button className="btn btn-primary shadow-sm">
            Book Now →
          </button>
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-[var(--border)] bg-white"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-[var(--text)]" />
            <span className="block h-0.5 w-5 bg-[var(--text)]" />
            <span className="block h-0.5 w-5 bg-[var(--text)]" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cls(
          "md:hidden border-t border-default bg-white",
          open ? "block" : "hidden"
        )}
      >
        <div className="px-4 py-3 space-y-2">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              cls(
                "block rounded-md px-3 py-2 text-sm hover:bg-gray-50",
                isActive ? "text-rose bg-[var(--accent-100)]" : "text-gray-800"
              )
            }
            onClick={() => setOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              cls(
                "block rounded-md px-3 py-2 text-sm hover:bg-gray-50",
                isActive ? "text-rose bg-[var(--accent-100)]" : "text-gray-800"
              )
            }
            onClick={() => setOpen(false)}
          >
            Book
          </NavLink>
          <NavLink
            to="/portal"
            className={({ isActive }) =>
              cls(
                "block rounded-md px-3 py-2 text-sm hover:bg-gray-50",
                isActive ? "text-rose bg-[var(--accent-100)]" : "text-gray-800"
              )
            }
            onClick={() => setOpen(false)}
          >
            Client Portal
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              cls(
                "block rounded-md px-3 py-2 text-sm hover:bg-gray-50",
                isActive ? "text-rose bg-[var(--accent-100)]" : "text-gray-800"
              )
            }
            onClick={() => setOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              cls(
                "block rounded-md px-3 py-2 text-sm hover:bg-gray-50",
                isActive ? "text-rose bg-[var(--accent-100)]" : "text-gray-800"
              )
            }
            onClick={() => setOpen(false)}
          >
            Admin
          </NavLink>

          <Link to="/booking" onClick={() => setOpen(false)}>
            <button className="btn btn-primary w-full mt-2">Book Now →</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
