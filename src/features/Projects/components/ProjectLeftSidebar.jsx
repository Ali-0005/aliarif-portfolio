import {
  FiArrowRight,
  FiBriefcase,
  FiCalendar,
  FiCloud,
  FiExternalLink,
  FiGrid,
  FiLink,
  FiUser,
  FiUsers,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { trackBookCallClick } from '../../../shared/lib/analytics'

const iconMap = {
  briefcase: FiBriefcase,
  grid: FiGrid,
  calendar: FiCalendar,
  user: FiUser,
  users: FiUsers,
  cloud: FiCloud,
}

function ProjectLeftSidebar({
  cardClass,
  sections,
  ctaTitle = 'Have a similar project?',
  ctaText = "Let's build something powerful together.",
  ctaLabel = 'Book a Discovery Call',
  info,
  liveWebsite,
}) {
  return (
    <aside className="space-y-5">
      <nav className={`${cardClass} p-3`}>
        {sections.map((section) => {
          const id = typeof section === 'string' ? section.toLowerCase().replaceAll(' ', '-') : section.id
          const label = typeof section === 'string' ? section : section.label

          return (
            <a key={id} href={`#${id}`} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-blue-500/10 hover:text-blue-400">
              {label}
            </a>
          )
        })}
      </nav>

      <div className={`${cardClass} bg-gradient-to-br from-[#0b1424]/90 via-[#10245c]/80 to-purple-900/45 p-5`}>
        <p className="text-lg font-bold">{ctaTitle}</p>
        <p className="mt-4 text-sm leading-7 text-slate-300">{ctaText}</p>
        <Link to="/#contact" onClick={trackBookCallClick} className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-4 text-sm font-semibold transition hover:bg-blue-500">
          {ctaLabel}
          <FiArrowRight />
        </Link>
      </div>

      <div className={`${cardClass} p-5`}>
        <h2 className="text-lg font-bold">Project Information</h2>
        <div className="mt-6 space-y-6 text-sm">
          {info.map(({ icon, label, value }) => {
            const Icon = iconMap[icon] || FiBriefcase

            return (
              <div key={label} className="flex gap-4">
                <Icon className="mt-1 shrink-0 text-xl text-blue-400" />
                <div>
                  <p className="text-xs font-semibold text-slate-500">{label}</p>
                  <p className="mt-1 font-semibold leading-6 text-slate-100">{value}</p>
                </div>
              </div>
            )
          })}
          {liveWebsite && (
            <div className="flex gap-4">
              <FiLink className="mt-1 shrink-0 text-xl text-blue-400" />
              <div>
                <p className="text-xs font-semibold text-slate-500">Live Website</p>
                <a
                  href={liveWebsite.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
                >
                  {liveWebsite.label}
                  <FiExternalLink />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default ProjectLeftSidebar
