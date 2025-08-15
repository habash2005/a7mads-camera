import React from 'react'

export default function PackageCard({ p, selected, onSelect }) {
  return (
    <div
      className={`glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 ${
        selected ? 'border-rose' : 'border-transparent'
      } p-5 md:p-6 bg-ivory`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-serif font-semibold text-charcoal">{p.name}</h3>
          <p className="text-rose/80">{p.desc}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-rose">${p.price}</div>
          <div className="text-xs text-charcoal/60">{p.duration}</div>
        </div>
      </div>

      {/* Included Items */}
      <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
        {p.includes.map((it, i) => (
          <li key={i}>✔️ {it}</li>
        ))}
      </ul>

      {/* Select Button */}
      <div className="mt-5">
        <button
          onClick={onSelect}
          className={`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${
            selected
              ? 'bg-gold text-charcoal hover:bg-rose hover:text-ivory'
              : 'bg-rose text-ivory hover:bg-gold hover:text-charcoal'
          }`}
        >
          {selected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  )
}
