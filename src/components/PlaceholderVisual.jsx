export default function PlaceholderVisual({ tone = 'moss', label, className = '' }) {
  const toneMap = {
    moss: 'from-moss via-[#7d8b68] to-stone',
    clay: 'from-clay via-[#d8a075] to-stone',
    bark: 'from-bark via-moss to-[#d9d0bd]',
    field: 'from-[#dfe7d4] via-stone to-white',
  }

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${toneMap[tone]} ${className}`}>
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,rgba(255,255,255,.22)_0,transparent_30%),radial-gradient(circle_at_28%_22%,rgba(255,255,255,.44),transparent_18rem),radial-gradient(circle_at_78%_78%,rgba(23,21,18,.24),transparent_16rem)]" />
      <div className="absolute -bottom-10 -right-8 h-36 w-36 rounded-full border border-white/35" />
      <div className="absolute left-6 top-6 rounded-full border border-white/30 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-white/80">
        {label}
      </div>
    </div>
  )
}
