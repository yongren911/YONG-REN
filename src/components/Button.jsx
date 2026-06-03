export default function Button({ children, href = '#', variant = 'primary' }) {
  const styles = variant === 'primary'
    ? 'bg-white text-ink hover:-translate-y-0.5 hover:bg-field hover:shadow-soft'
    : 'border border-white/55 text-white hover:-translate-y-0.5 hover:bg-white hover:text-ink'

  return (
    <a href={href} className={`focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.18em] transition duration-300 ${styles}`}>
      {children}
    </a>
  )
}
