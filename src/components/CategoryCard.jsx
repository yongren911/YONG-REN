import PlaceholderVisual from './PlaceholderVisual.jsx'

export default function CategoryCard({ title, description, tone }) {
  return (
    <article className="group surface-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <PlaceholderVisual tone={tone} label="AEROFIT" className="h-64" />
      <div className="p-7">
        <h3 className="text-2xl font-black tracking-[-0.04em] text-ink">{title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-ink/65">{description}</p>
        <a href="#gear" className="mt-6 inline-flex text-sm font-black uppercase tracking-[0.18em] text-clay transition group-hover:translate-x-1">
          Shop Now →
        </a>
      </div>
    </article>
  )
}
