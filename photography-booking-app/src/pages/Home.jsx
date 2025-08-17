import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="w-full py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Copy */}
        <div>
          <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal">
            Book stunning, story-driven photography.
          </h1>
          <p className="mt-4 text-charcoal/70 text-base md:text-lg">
            Portraits, events, and weddings—crafted with care and delivered fast. Pick a package, choose a time, and lock it in.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/booking"
              className="rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md"
            >
              Start Booking
            </Link>
            <Link
              to="/portfolio"
              className="px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-charcoal/70">
            <span>★★★★★</span>
            <span>100+ happy clients</span>
          </div>
        </div>

        {/* Image / Hero Card */}
        <div className="glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-rose/30 p-4 md:p-6 bg-white/80">
          <img
            className="rounded-xl w-full object-cover aspect-[4/3]"
            src="photography-booking-app/dist/assets/_DSC0154.jpg"
            alt="Featured photography sample"
          />
        </div>
      </div>
    </section>
  )
}
