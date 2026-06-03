import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CategoryCard from './components/CategoryCard.jsx'
import PlaceholderVisual from './components/PlaceholderVisual.jsx'

const categories = [
  {
    title: 'Knee Support',
    description: 'Adaptive compression and low-profile stability for hard training, trail days and steady recovery.',
    tone: 'moss',
  },
  {
    title: 'Wrist Support',
    description: 'Durable support wraps and braces that move naturally through lifts, swings and daily work.',
    tone: 'clay',
  },
  {
    title: 'Performance Gloves',
    description: 'Grip, protection and breathable comfort for strength work, cycling and cold morning sessions.',
    tone: 'bark',
  },
  {
    title: 'Foot Recovery',
    description: 'Corrective and recovery-minded support for long miles, standing days and post-session care.',
    tone: 'field',
  },
]

const sports = ['Running', 'Strength Training', 'Basketball', 'Tennis & Badminton', 'Hiking', 'Daily Recovery']

const missionPoints = [
  'Tested for real movement',
  'Designed to last',
  'Easier to repair and care',
]

const productFeatures = [
  '360° adaptive compression',
  'Breathable support zones',
  'Low-profile stabilizing structure',
  'Built for training and recovery',
]

const stories = [
  'How to choose the right knee support',
  'Why recovery gear should feel invisible',
  'Designing support for everyday athletes',
]

const commitments = [
  'We build gear to last',
  'We reduce unnecessary waste',
  'We design for repair and care',
  'We test with real athletes',
]

const footerColumns = {
  Shop: ['Knee Support', 'Wrist Support', 'Gloves', 'Recovery Gear'],
  Sports: ['Running', 'Training', 'Court Sports', 'Outdoor'],
  Support: ['Size Guide', 'Care & Repair', 'Shipping', 'Returns'],
  Company: ['Our Mission', 'Stories', 'Sustainability', 'Contact'],
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] text-ink sm:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-lg leading-8 text-ink/62">{copy}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main>
        <Hero />

        <section id="gear" className="section-shell py-24 sm:py-32">
          <SectionHeading
            eyebrow="Featured Categories"
            title="Support systems for every moving part."
            copy="Clean silhouettes, field-tested materials and category clarity for the moments your body asks for help."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section id="sports" className="bg-ink py-24 text-white sm:py-28">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-clay">Shop by Sport</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-5xl">Made for the way you move.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-white/65">
                From early miles to late recovery, choose support by the terrain, load and rhythm of your day.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sports.map((sport) => (
                <a key={sport} href="#gear" className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white hover:text-ink">
                  <span className="text-2xl font-black tracking-[-0.04em]">{sport}</span>
                  <span className="mt-10 block text-sm font-black uppercase tracking-[0.18em] text-clay transition group-hover:translate-x-1">Explore →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="sustainability" className="section-shell py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <PlaceholderVisual tone="bark" label="Mission" className="min-h-[34rem] rounded-[2.5rem] shadow-soft" />
            <div>
              <p className="eyebrow">Brand Mission</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl">Better support, fewer compromises.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/66">
                AEROFIT is built around durable ergonomics, responsible material choices and gear that earns a long place in your kit. We favor repairable construction, clear care guidance and fit systems designed for years of training and recovery.
              </p>
              <div className="mt-8 grid gap-4">
                {missionPoints.map((point) => (
                  <div key={point} className="flex items-center gap-4 rounded-2xl bg-white/75 p-4 shadow-card">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-moss text-sm font-black text-white">✓</span>
                    <span className="font-black text-ink">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-24 sm:pb-32">
          <div className="surface-card grid overflow-hidden lg:grid-cols-2">
            <PlaceholderVisual tone="clay" label="AeroKnee" className="min-h-[32rem]" />
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="eyebrow">Product Highlight</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-5xl">AeroKnee Pro Support</h2>
              <p className="mt-5 text-lg leading-8 text-ink/64">
                A quiet, stable knee sleeve designed for daily athletes who switch between load, pace and recovery.
              </p>
              <ul className="mt-8 grid gap-3 text-ink/75">
                {productFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 text-clay">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-end justify-between gap-6 border-t border-ink/10 pt-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/45">Price</p>
                  <p className="mt-1 text-3xl font-black">$68</p>
                </div>
                <div className="flex gap-2" aria-label="Color options">
                  {['bg-ink', 'bg-moss', 'bg-clay'].map((color) => (
                    <span key={color} className={`h-8 w-8 rounded-full border-2 border-white shadow ${color}`} />
                  ))}
                </div>
              </div>
              <a href="#cart" className="focus-ring mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-moss sm:w-auto">
                Shop Now
              </a>
            </div>
          </div>
        </section>

        <section id="stories" className="bg-field py-24 sm:py-32">
          <div className="section-shell">
            <SectionHeading eyebrow="Stories" title="Field notes for stronger days." />
            <div className="grid gap-6 md:grid-cols-3">
              {stories.map((story, index) => (
                <article key={story} className="group overflow-hidden rounded-[2rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <PlaceholderVisual tone={index === 0 ? 'moss' : index === 1 ? 'field' : 'clay'} label="Journal" className="h-56" />
                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-clay">Guide</p>
                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">{story}</h3>
                    <a href="#stories" className="mt-8 inline-flex text-sm font-black uppercase tracking-[0.18em] text-ink/65 transition group-hover:text-clay">Read Story →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-24 sm:py-32">
          <SectionHeading
            eyebrow="Sustainability / Care"
            title="Keep good gear in motion longer."
            copy="Our responsibility starts with restraint: build only what has a purpose, make it durable, and help athletes care for it over time."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment) => (
              <div key={commitment} className="rounded-[1.75rem] border border-ink/10 bg-white/65 p-6">
                <span className="text-3xl text-clay">✦</span>
                <h3 className="mt-8 text-xl font-black tracking-[-0.04em]">{commitment}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell pb-24 sm:pb-32">
          <div className="rounded-[2.5rem] bg-ink p-8 text-white shadow-soft sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-clay">Newsletter</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-5xl">Join the Field Notes</h2>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="you@example.com" className="focus-ring min-h-14 flex-1 rounded-full border border-white/15 bg-white px-6 text-ink placeholder:text-ink/40" />
                <button type="submit" className="focus-ring min-h-14 rounded-full bg-clay px-8 text-sm font-black uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-white hover:text-ink">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-[#f8f4eb] py-14">
        <div className="section-shell grid gap-10 md:grid-cols-[1.1fr_repeat(4,1fr)]">
          <div>
            <a href="#hero" className="text-xl font-black tracking-[0.18em]">AEROFIT</a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink/58">Support, movement, durability and recovery for outdoor-minded athletes.</p>
          </div>
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-black">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/60">
                {links.map((link) => (
                  <li key={link}><a className="transition hover:text-ink" href="#gear">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
