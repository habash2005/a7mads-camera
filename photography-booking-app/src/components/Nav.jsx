import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-rose/40 bg-blush/80 backdrop-blur font-sans">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="h-9 w-9 rounded-xl bg-rose text-ivory flex items-center justify-center shadow-md">
            📷
          </div>
          <span className="text-base font-serif font-semibold tracking-tight text-charcoal">
            Lama Photo NC
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-charcoal">
          <NavLink to="/portfolio" className="hover:text-gold transition-colors">Portfolio</NavLink>
          <NavLink to="/booking"  className="hover:text-gold transition-colors">Book</NavLink>
          <NavLink to="/client"   className="hover:text-gold transition-colors">Clients</NavLink>
          <NavLink to="/faq"      className="hover:text-gold transition-colors">FAQ</NavLink>
          <NavLink to="/admin"    className="hover:text-gold transition-colors">Admin</NavLink>
        </nav>

        {/* Book Now (desktop only) */}
        <Link to="/booking" className="hidden md:block">
          <button className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md">
            Book Now →
          </button>
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
          className="block md:hidden p-2 rounded-lg bg-rose text-ivory"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`${open ? 'block' : 'hidden'} md:hidden border-t border-rose/40 bg-blush/80 px-4 py-3 space-y-3`}
      >
        <NavLink to="/portfolio" className="block text-sm text-charcoal hover:text-gold transition-colors" onClick={() => setOpen(false)}>Portfolio</NavLink>
        <NavLink to="/booking"  className="block text-sm text-charcoal hover:text-gold transition-colors" onClick={() => setOpen(false)}>Book</NavLink>
        <NavLink to="/client"   className="block text-sm text-charcoal hover:text-gold transition-colors" onClick={() => setOpen(false)}>Clients</NavLink>
        <NavLink to="/faq"      className="block text-sm text-charcoal hover:text-gold transition-colors" onClick={() => setOpen(false)}>FAQ</NavLink>
        <NavLink to="/admin"    className="block text-sm text-charcoal hover:text-gold transition-colors" onClick={() => setOpen(false)}>Admin</NavLink>

        <Link to="/booking" onClick={() => setOpen(false)}>
          <button className="w-full mt-2 rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md">
            Book Now →
          </button>
        </Link>
      </div>
    </header>
  )
}
