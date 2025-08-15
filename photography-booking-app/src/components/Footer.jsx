import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-rose/40 bg-blush/20 py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 text-sm text-charcoal flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Copyright */}
        <div className="font-serif text-rose">
          © {new Date().getFullYear()} Lama NC
        </div>
        
        {/* Contact Links */}
        <div className="flex items-center gap-4">
          <a href="mailto:hello@example.com" className="hover:text-gold transition-colors">
            hello@example.com
          </a>
          <a href="tel:+15551234567" className="hover:text-gold transition-colors">
            (555) 123-4567
          </a>
        </div>
      </div>
    </footer>
  )
}
