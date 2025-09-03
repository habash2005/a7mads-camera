import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/portfolio", label: "Work" },
  { to: "/booking", label: "Book" },
  { to: "/client-portal", label: "Client" },
  { to: "/faq", label: "FAQ" },
];

function cls(...xs) { return xs.filter(Boolean).join(" "); }

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const item = ({ isActive }) =>
    cls(
      "relative px-2 py-1 text-sm font-medium transition-colors",
      isActive ? "text-[hsl(var(--brand))]" : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))]"
    );

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] header-glass">
      <div className="container-pro h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white ring-1 ring-[hsl(var(--border))] shadow-sm floaty">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand))]" />
          </span>
          <span className="sr-only">A7mads Camera</span>
          <img src="/a7mads-wordmark.svg" alt="" className="h-6 md:h-7" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={item}>{l.label}</NavLink>
          ))}
          <Link to="/booking" className="no-underline">
            <button className="btn btn-rose">Start a Project</button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden btn btn-ghost" onClick={() => setOpen(s => !s)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
          <div className="container-pro py-3 flex flex-col gap-2">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className="py-2 no-underline text-[hsl(var(--text))]">
                {l.label}
              </NavLink>
            ))}
            <Link to="/booking" className="no-underline">
              <button className="btn btn-rose w-full">Start a Project</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
