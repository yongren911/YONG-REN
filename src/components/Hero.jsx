import Button from './Button.jsx'

export default function Hero() {
  const heroVideoSrc = `${import.meta.env.BASE_URL}videos/hero.mp4`

  return (
    <section id="hero" className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={heroVideoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-24">
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
