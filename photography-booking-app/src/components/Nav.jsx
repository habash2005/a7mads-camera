import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-rose/40 bg-blush/80 backdrop-blur font-sans">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-rose text-ivory flex items-center justify-center shadow-md">
            📷
          </div>
          <span className="text-base font-serif font-semibold tracking-tight text-charcoal">
            Lama Photo NC
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-charcoal">
          <NavLink to="/portfolio" className="hover:text-gold transition-colors">
            Portfolio
          </NavLink>
          <NavLink to="/booking" className="hover:text-gold transition-colors">
            Book
          </NavLink>
          <NavLink to="/faq" className="hover:text-gold transition-colors">
            FAQ
          </NavLink>
        </nav>

        {/* Book Now Button */}
        <Link to="/booking" className="hidden md:block">
          <button className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md">
            Book Now →
          </button>
        </Link>
      </div>
    </header>
  )
}
