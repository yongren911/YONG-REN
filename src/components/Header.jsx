import { useState } from 'react'

const navItems = ['Men', 'Women', 'Sports', 'Gear', 'Stories', 'Sustainability']

function MenuIcon({ isOpen }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span className={`absolute left-0 top-1 block h-0.5 w-6 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
      <span className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`absolute bottom-1 left-0 block h-0.5 w-6 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
    </span>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[#fbf8ef]/88 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-6" aria-label="Primary navigation">
        <a href="#hero" className="focus-ring rounded text-xl font-black tracking-[0.18em] text-ink">
          YONGREN
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="text-sm font-semibold text-ink/70 transition hover:text-ink">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 text-sm font-semibold text-ink/75 md:flex">
          <a className="transition hover:text-ink" href="#search">Search</a>
          <a className="transition hover:text-ink" href="#account">Account</a>
          <a className="transition hover:text-ink" href="#cart">Cart</a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-ink/10 p-3 text-ink transition hover:bg-ink hover:text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </nav>

      <div id="mobile-menu" className={`overflow-hidden border-t border-ink/10 bg-[#fbf8ef] transition-all duration-300 lg:hidden ${isOpen ? 'max-h-[32rem]' : 'max-h-0'}`}>
        <div className="section-shell grid gap-1 py-5">
          {navItems.map((item) => (
            <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-2xl px-3 py-3 text-lg font-semibold text-ink transition hover:bg-stone">
              {item}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-ink/10 pt-4 text-center text-sm font-bold text-ink/70">
            <a className="rounded-full bg-white px-3 py-3" href="#search">Search</a>
            <a className="rounded-full bg-white px-3 py-3" href="#account">Account</a>
            <a className="rounded-full bg-white px-3 py-3" href="#cart">Cart</a>
          </div>
        </div>
      </div>
    </header>
  )
}
