import {
  FiArrowRight,
  FiAward,
  FiAtSign,
  FiGithub,
  FiMapPin,
  FiArrowUpRight,
} from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiGooglescholar } from 'react-icons/si'
import { profile } from '../../../data/profile'
import { trackEmailClick, trackGitHubClick, trackLinkedInClick } from '../../../shared/lib/analytics'

const profileItems = [

  {
    label: 'Email',
    value: profile.email,
    url: `mailto:${profile.email}`,
    icon: FiAtSign,
  },
  {
    label: 'Location',
    value: profile.location,
    icon: FiMapPin,
  },

  {
    label: 'LinkedIn',
    value: profile.linkedin,
    url: profile.linkedinUrl,
    icon: FaLinkedinIn,
  },

  {
    label: 'GitHub',
    value: profile.github,
    url: profile.githubUrl,
    icon: FiGithub,
  }, 

  {
    label: 'Google Scholar',
    value: profile.googleScholar,
    url: profile.googleScholarUrl,
    icon: SiGooglescholar,
  },

  {
    label: 'Credly',
    value: profile.credly,
    url: profile.credlyUrl,
    icon: FiAward,
  }, 

]

function AboutSection() {
  const profileClickHandlers = {
    Email: trackEmailClick,
    LinkedIn: trackLinkedInClick,
    GitHub: trackGitHubClick,
  }

  return (
    <section
      id="about"
      className="bg-[#020817] px-5 py-16 text-white lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            {/* <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
              About Me
            </p> */}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Me
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                I am {profile.name}, a {profile.title} with 5+ years of
                experience transforming complex requirements into
                production-grade digital products.
              </p>
              <p>
                My expertise lies in designing scalable backend architectures,
                AI-powered systems, and automation platforms that solve real
                business problems.
              </p>
              <p>
                From geospatial search engines and multi-tenant SaaS platforms
                to RAG-powered AI assistants and workflow automation systems, I
                focus on building reliable software that performs under
                real-world production workloads.
              </p>
            </div>

            <Link
              to="/about/"
              className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              More About Me
              <FiArrowRight />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0b1424]/85 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="grid gap-0 sm:grid-cols-2">
              {profileItems.map((item, index) => {
                const Icon = item.icon
                const isLeft = index % 2 === 0

                return (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 px-1 py-5 ${isLeft ? 'sm:pr-6' : 'sm:border-l sm:border-white/10 sm:pl-6'}`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.accent ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : 'border-blue-400/30 bg-blue-500/10 text-blue-400'}`}
                    >
                      <Icon className="text-xl" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        {item.label}
                      </p>
                      {item.url ? (
                        <a
                          href={item.url}
                          target={item.url.startsWith('http') ? '_blank' : undefined}
                          rel={item.url.startsWith('http') ? 'noreferrer' : undefined}
                          onClick={profileClickHandlers[item.label]}
                          className="mt-1 block text-base font-semibold text-white transition hover:text-blue-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-semibold text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="-mt-2 rounded-2xl border border-blue-500/25 bg-[#0b1424]/80 px-6 py-5 shadow-xl shadow-blue-950/20 lg:-mt-4 lg:ml-[26%]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-base font-semibold leading-8 text-slate-200 sm:text-lg">
                I build scalable SaaS{' '}
                <span className="text-blue-400">platforms</span>,{' '}
                <span className="text-blue-400">AI-powered systems</span>, and{' '}
                <span className="text-blue-400">automation</span> solutions that
                help businesses launch faster, operate efficiently, and grow
                with confidence.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 self-end text-blue-300 lg:self-auto">
              <Link
                to="/about/"
                className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 transition hover:border-blue-300 hover:bg-blue-500/20"
              >
                <FiArrowUpRight className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
