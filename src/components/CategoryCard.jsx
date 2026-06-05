export default function CategoryCard({ title, description, image }) {
  return (
    <article className="group surface-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex aspect-[4/3] items-center justify-center rounded-b-[2rem] bg-field/80 p-8 sm:p-10">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-7 sm:p-8">
        <h3 className="text-2xl font-black tracking-[-0.04em] text-ink">{title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-ink/65">{description}</p>
        <a href="#gear" className="mt-6 inline-flex text-sm font-black uppercase tracking-[0.18em] text-clay transition group-hover:translate-x-1">
          Shop Now →
        </a>
      </div>
    </article>
  )
}
