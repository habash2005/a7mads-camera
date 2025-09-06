// src/components/SiteHeader.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const cls = (...xs) => xs.filter(Boolean).join(" ");

const NAV = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/booking", label: "Booking" },
  { to: "/client-portal", label: "Client Portal" },
  { to: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  // ---- Choose where your file lives ----
  // If the file is in /public, uncomment the next line:
  // const publicLogo = "/a7mads-logo.svg";

  // If the file is in src/assets, keep this line:
  const moduleLogo = useMemo(() => {
    try {
      return new URL("src/a7mads-wordmark.png", import.meta.url).href;
    } catch {
      return ""; // if not found, we'll try public path
    }
  }, []);

  // Pick module path first (dev/prod safe), fallback to public
  const logoSrc = moduleLogo || "/a7mads-logo.svg";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cls(
        "sticky top-0 z-50 transition-all",
        "backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--bg))/0.72]",
        "bg-[hsl(var(--bg))/0.92]",
        scrolled
          ? "shadow-[0_6px_20px_rgba(0,0,0,0.06)] border-b border-[hsl(var(--border))]"
          : "border-b border-transparent"
      )}
    >
      <div className="container-pro h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          {imgOk ? (
            <img
              src={logoSrc}
              alt="A7mads Camera"
              className={cls(
                // Bigger + visible on light backgrounds
                "h-10 md:h-12 w-auto",
                // If logo is white/transparent, this soft shadow keeps it visible
                "[filter:drop-shadow(0_0_1px_rgba(0,0,0,0.35))_drop-shadow(0_2px_6px_rgba(0,0,0,0.20))]"
              )}
              onError={() => setImgOk(false)}
            />
          ) : (
            // Fallback text wordmark if the image path is wrong or file missing
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[hsl(var(--text))]">
              A7mads<span className="text-[hsl(var(--accent))]"> Camera</span>
            </span>
          )}
          <span className="sr-only">A7mads Camera</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="relative flex items-center gap-1.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-1.5 py-1">
            {NAV.map((n) => (
              <NavItem key={n.to} to={n.to}>
                {n.label}
              </NavItem>
            ))}
          </div>
          <Link to="/booking" className="no-underline ml-3">
            <CTA>Book Now</CTA>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <Burger open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
          <div className="container-pro py-3 flex flex-col gap-1.5">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cls(
                    "no-underline rounded-xl px-3 py-2 text-sm font-semibold",
                    isActive
                      ? "bg-[hsl(var(--accent-soft))] text-[hsl(var(--text))]"
                      : "text-[hsl(var(--text))] hover:bg-[hsl(var(--accent-soft))]"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/booking" className="no-underline mt-2">
              <CTA className="w-full justify-center">Book Now</CTA>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-pill { position: relative; }
        .nav-pill::after {
          content: "";
          position: absolute; left: 12px; right: 12px; bottom: 6px;
          height: 2px; border-radius: 2px;
          background: hsl(var(--accent));
          transform: scaleX(0); transform-origin: left;
          transition: transform 300ms ease;
        }
        .nav-pill[data-active="true"]::after,
        .nav-pill:hover::after { transform: scaleX(1); }
      `}</style>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cls(
          "nav-pill no-underline relative rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
          isActive
            ? "text-[hsl(var(--text))] bg-[hsl(var(--card))]"
            : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))]"
        )
      }
      children={({ isActive }) => (
        <span className="nav-pill" data-active={isActive ? "true" : "false"}>
          {children}
        </span>
      )}
    />
  );
}

function CTA({ children, className = "" }) {
  return (
    <span
      className={cls(
        "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold",
        "bg-[hsl(var(--accent))] text-[#0b0e11] ring-1 ring-[hsl(var(--accent-600))]",
        "shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition",
        className
      )}
    >
      {children} <span aria-hidden>→</span>
    </span>
  );
}

function Burger({ open }) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={cls(
          "absolute left-0 right-0 h-0.5 bg-[hsl(var(--text))] transition-transform",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
        )}
      />
      <span
        className={cls(
          "absolute left-0 right-0 h-0.5 bg-[hsl(var(--text))] transition-all",
          open ? "top-1/2 opacity-0" : "top-1/2"
        )}
      />
      <span
        className={cls(
          "absolute left-0 right-0 h-0.5 bg-[hsl(var(--text))] transition-transform",
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
        )}
      />
    </div>
  );
}
