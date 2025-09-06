// src/components/Nav.jsx
import React, { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const cls = (...xs) => xs.filter(Boolean).join(" ");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const { pathname } = useLocation();
  const menuId = "mobile-nav-menu";

  // Close mobile menu on route change
  React.useEffect(() => setOpen(false), [pathname]);

  // Try module path first (works in dev & prod builds)
  const moduleLogo = useMemo(() => {
    try {
      // put your file at: src/a7mads-wordmark.png  (or change the filename here)
      return new URL("src/a7mads-wordmark.png", import.meta.url).href;
    } catch {
      return "";
    }
  }, []);

  // Fallback to public path if the module import isn't available
  const logoSrc = moduleLogo || "/a7mads-logo.svg";

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
        {/* Brand / Logo (image with fallback text, same as SiteHeader) */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 no-underline"
        >
          {imgOk ? (
            <img
              src={logoSrc}
              alt="A7mads Camera"
              className={cls(
                "h-9 md:h-10 w-auto",
                "[filter:drop-shadow(0_0_1px_rgba(0,0,0,0.35))_drop-shadow(0_2px_6px_rgba(0,0,0,0.20))]"
              )}
              onError={() => setImgOk(false)}
            />
          ) : (
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-black">A7mads</span>{" "}
              <span className="text-sky-500">Camera</span>
            </span>
          )}
          <span className="sr-only">A7mads Camera</span>
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
            <NavLink to="/portfolio" className={itemClass} onClick={() => setOpen(false)}>Portfolio</NavLink>
            <NavLink to="/booking" className={itemClass} onClick={() => setOpen(false)}>Book</NavLink>
            <NavLink to="/client-portal" className={itemClass} onClick={() => setOpen(false)}>Client Portal</NavLink>
            <NavLink to="/faq" className={itemClass} onClick={() => setOpen(false)}>FAQ</NavLink>
            <Link to="/booking" onClick={() => setOpen(false)}>
              <button className="btn btn-primary w-full mt-2">Book Now →</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
