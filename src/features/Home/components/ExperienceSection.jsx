import { FiBriefcase, FiCalendar, FiGlobe, FiMonitor } from 'react-icons/fi'
import governmentLogo from '../../../assets/Government_of_pak.png'
import icmaLogo from '../../../assets/icma_logo.png'
import selfEmployedLogo from '../../../assets/self_employee.jfif'

const experience = [
  {
    company: 'Highline Residential',
    url: 'https://www.hlres.com/',
    location: 'USA',
    role: 'Backend & AI Systems Engineer',
    period: 'Feb 2026 – Present',
    logo: 'HL',
    icon: FiBriefcase,
    logoStyle: 'bg-black text-white',
  },
  {
    company: 'Self Employed',
    location: 'Hybrid / Remote',
    role: 'Software Engineer (Freelance / Contract)',
    period: '2025 – Present',
    logo: selfEmployedLogo,
    icon: FiGlobe,
    logoStyle: 'bg-white',
  },
  {
    company: 'Government of Pakistan',
    location: 'Pakistan',
    role: 'Software Engineer',
    period: 'Jan 2022 – Jun 2025',
    logo: governmentLogo,
    icon: FiMonitor,
    logoStyle: 'bg-white',
  },
  {
    company: 'ICMA Digital Academy',
    url: 'https://www.icmadigital.org/',
    location: 'UK',
    role: 'AI Instructor (Generative AI)',
    period: 'Dec 2025 – Present',
    logo: icmaLogo,
    icon: FiCalendar,
    logoStyle: 'bg-white',
  },
]

function ExperienceSection() {
  return (
    <section className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
          Professional Experience
        </p>

        <div className="relative mt-4 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-8 right-8 top-1/2 hidden h-px bg-blue-500/30 xl:block" />

          {experience.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={`${item.company}-${item.role}`}
                className="relative z-10 rounded-2xl border border-blue-400/20 bg-[#0b1424] p-5 shadow-xl shadow-black/20"
              >
                {index < experience.length - 1 && (
                  <span className="absolute -right-[15px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#020817] bg-blue-500 xl:block" />
                )}

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 text-lg font-bold shadow-lg ${item.logoStyle}`}
                  >
                    {typeof item.logo === 'string' &&
                    !item.logo.includes('/') &&
                    !item.logo.includes('.') ? (
                      item.logo
                    ) : (
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="h-full w-full rounded-xl object-contain p-1"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-blue-400"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      ({item.location})
                    </p>
                    <p className="mt-2 text-sm font-medium leading-5 text-slate-200">
                      {item.role}
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                      <Icon className="shrink-0 text-cyan-400" />
                      {item.period}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
