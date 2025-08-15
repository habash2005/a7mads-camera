import React from 'react'

export default function Stepper({ step }) {
  const steps = ['Package', 'Date & Time', 'Details', 'Review']

  return (
    <div className="flex items-center gap-3 font-sans">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-3">
          {/* Step Number Circle */}
          <div
            className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold shadow-sm transition-all ${
              i <= step
                ? 'bg-rose text-ivory'
                : 'bg-blush/40 text-charcoal/70'
            }`}
          >
            {i + 1}
          </div>

          {/* Step Label */}
          <span
            className={`hidden sm:block text-sm transition-colors ${
              i === step
                ? 'font-semibold text-charcoal'
                : 'text-charcoal/60'
            }`}
          >
            {label}
          </span>

          {/* Divider */}
          {i < steps.length - 1 && (
            <div
              className={`w-6 sm:w-10 h-px transition-colors ${
                i < step ? 'bg-rose/70' : 'bg-blush/50'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}
