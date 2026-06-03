import Button from './Button.jsx'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-hero-field text-white">
      <div className="absolute inset-0 -z-10 opacity-45 mix-blend-screen">
        <div className="absolute left-[8%] top-[16%] h-64 w-64 rounded-full border border-white/20" />
        <div className="absolute bottom-[-8rem] right-[6%] h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent" />
      </div>
      <div className="section-shell flex min-h-[calc(100vh-5rem)] items-center py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-white/70">Responsible support gear</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-8xl">
            Built for Movement. Made to Last.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            Protective gear for training, recovery and the wild days outside.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#gear">Shop Gear</Button>
            <Button href="#stories" variant="secondary">Explore Stories</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
