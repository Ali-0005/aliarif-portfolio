import { useState } from 'react'
import { FiCalendar, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020817]/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
            <span className="text-3xl font-black leading-none text-blue-500">A</span>
          </div>

          <div className="leading-tight">
            <p className="text-base font-bold tracking-wide text-white">ALI ARIF</p>
            <p className="text-xs font-medium text-slate-400">
              Backend & AI Systems Engineer
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                link.href === '#home' ? 'text-blue-400' : 'text-slate-200'
              }`}
            >
              {link.label}
              {link.href === '#home' && (
                <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-blue-500" />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 lg:inline-flex"
        >
          <FiCalendar className="text-base" />
          Book a Call
        </a>

        <button
          type="button"
          aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#020817]/95 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/5 ${
                  link.href === '#home'
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              <FiCalendar className="text-base" />
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar