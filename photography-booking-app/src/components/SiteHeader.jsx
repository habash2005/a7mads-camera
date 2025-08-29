import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/a7mads-wordmark.svg" alt="A7mads Camera" className="h-7" />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-paper/90">
          <NavItem to="/portfolio" label="Portfolio" />
          <NavItem to="/booking" label="Booking" />
          <NavItem to="/client-gallery" label="Client Gallery" />
          <NavItem to="/faq" label="FAQ" />
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/booking" className="btn btn-primary">Book a Session</Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-xl2 transition-colors ${isActive ? "text-white" : "text-paper/80 hover:text-white hover:bg-white/5"}`
      }
    >
      {label}
    </NavLink>
  );
}
