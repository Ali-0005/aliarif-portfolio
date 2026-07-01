import { useEffect, useState } from 'react'
import { FiCalendar, FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  getCanonicalUrl,
  getStructuredData,
  normalizePagePath,
  pageMetadata,
  site,
} from '../../../data/profile'
// import logo from '../../../assets/header_footer_logo.png'
import logo from '../../../assets/removebg-preview.png'


const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Me', href: '/contact/' },
]

function updateMetaTag(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

function SeoMetadata({ pathname }) {
  useEffect(() => {
    const path = normalizePagePath(pathname)
    const metadata = pageMetadata[path] ?? pageMetadata['/']
    const canonicalUrl = getCanonicalUrl(path)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    let structuredData = document.head.querySelector('#structured-data')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'structured-data'
      structuredData.type = 'application/ld+json'
      document.head.appendChild(structuredData)
    }

    document.title = metadata.title
    canonical.setAttribute('href', canonicalUrl)
    updateMetaTag('meta[name="description"]', {
      name: 'description',
      content: metadata.description,
    })
    updateMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    })
    updateMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: metadata.title,
    })
    updateMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description,
    })
    updateMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: path.startsWith('/projects/') ? 'article' : 'website',
    })
    updateMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    updateMetaTag('meta[property="og:image"]', { property: 'og:image', content: site.image })
    updateMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: metadata.title,
    })
    updateMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description,
    })
    updateMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: site.image })
    structuredData.textContent = JSON.stringify(getStructuredData(path))
  }, [pathname])

  return null
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const activeLink = location.pathname === '/' ? location.hash || '#home' : location.pathname
  const homeUrl = import.meta.env.BASE_URL

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash, location.pathname])

  const handleNavigation = (event, href) => {
    event.preventDefault()
    closeMenu()

    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    if (location.pathname !== '/' || location.hash !== href) {
      navigate(`/${href}`)
    }

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <>
      <SeoMetadata pathname={location.pathname} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020817]/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a
          href={`${homeUrl}#home`}
          className="flex items-center gap-3"
          onClick={(event) => handleNavigation(event, '#home')}
        >
          <img
            src={logo}
            alt="Ali Arif logo"
            className="h-11 w-11 rounded-xl object-cover"
          />

          <div className="leading-tight">
            <p className="text-base font-bold tracking-wide text-white">
              ALI <span className="text-blue-400">ARIF</span>
            </p>
            <p className="text-xs font-medium text-slate-400">
              Backend & AI Systems Engineer
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const NavigationLink = link.href.startsWith('/') ? Link : 'a'

            return (
            <NavigationLink
              key={link.href}
              {...(link.href.startsWith('/')
                ? { to: link.href }
                : { href: `${homeUrl}${link.href}` })}
              onClick={(event) =>
                link.href.startsWith('/')
                  ? closeMenu()
                  : handleNavigation(event, link.href)
              }
              className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                activeLink === link.href ? 'text-blue-400' : 'text-slate-200'
              }`}
            >
              {link.label}
              {activeLink === link.href && (
                <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-blue-500" />
              )}
            </NavigationLink>
            )
          })}
        </div>

        <a
          href={`${homeUrl}#contact`}
          onClick={(event) => handleNavigation(event, '#contact')}
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
            {navLinks.map((link) => {
              const NavigationLink = link.href.startsWith('/') ? Link : 'a'

              return (
              <NavigationLink
                key={link.href}
                {...(link.href.startsWith('/')
                  ? { to: link.href }
                  : { href: `${homeUrl}${link.href}` })}
                onClick={(event) =>
                  link.href.startsWith('/')
                    ? closeMenu()
                    : handleNavigation(event, link.href)
                }
                className={`rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/5 ${
                  activeLink === link.href
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-200'
                }`}
              >
                {link.label}
              </NavigationLink>
              )
            })}

            <a
              href={`${homeUrl}#contact`}
              onClick={(event) => handleNavigation(event, '#contact')}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              <FiCalendar className="text-base" />
              Book a Call
            </a>
          </div>
        </div>
      )}
      </header>
    </>
  )
}

export default Navbar
