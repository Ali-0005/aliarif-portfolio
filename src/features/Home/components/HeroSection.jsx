import { FaAws, FaPython } from 'react-icons/fa'
import {
  SiDjango,
  SiOpenai,
  SiPostgresql,
  SiReact,
} from 'react-icons/si'
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiGlobe,
  FiMessageCircle,
  FiUser,
} from 'react-icons/fi'
import { HiOutlineRocketLaunch, HiOutlineSparkles } from 'react-icons/hi2'
import heroImg from '../../../assets/hero.png'

const stats = [
  // { value: '5+', label: 'Years Experience', icon: FiUser },
  // { value: '20+', label: 'Projects Delivered', icon: HiOutlineRocketLaunch },
  // { value: 'Backend & AI Systems', label: 'Engineer', icon: FiCode },
  // { value: 'Available for', label: 'Hybrid/ Remote Opportunities', icon: FiGlobe },
]

const techCards = [
  { name: 'Python', icon: FaPython, className: 'left-0 top-16 -translate-x-6' },
  { name: 'Django', icon: SiDjango, className: 'right-0 top-24 translate-x-6' },
  { name: 'PostgreSQL', icon: SiPostgresql, className: 'left-0 top-44 -translate-x-10' },
  { name: 'OpenAI', icon: SiOpenai, className: 'right-0 top-56 translate-x-10' },
  { name: 'AWS', icon: FaAws, className: 'right-6 bottom-32 translate-x-10' },
  { name: 'React', icon: SiReact, className: 'left-6 bottom-32 -translate-x-10' },
]

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020817] px-5 pb-20 pt-32 text-white lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-1/4 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for Freelance & Contract Work
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building Scalable SaaS Platforms &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I architect robust backend systems, AI-powered applications, and
            automation workflows that transform complex ideas into scalable
            digital products.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Using Python, Django, Generative AI, and cloud infrastructure, I
            build production-ready software designed for performance,
            reliability, and business growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              View Projects
              <FiArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Let's Talk
              <FiMessageCircle />
            </a>

            <a
            href={`${import.meta.env.BASE_URL}Ali-Arif-Python-Django-Backend-Developer-Resume.pdf`}
            download="Ali-Arif-Python-Django-Backend-Developer-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
            Download Resume
            <FiDownload />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.label} className="flex min-w-0 items-center gap-3">
                  <Icon className="shrink-0 text-2xl text-blue-400" />
                  <div>
                    <p className="text-xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/60 backdrop-blur">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-600/20" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]">
              <img
                src={heroImg}
                alt="Ali Arif - Backend and AI Systems Engineer"
                className="h-auto w-full object-cover"
              />
            </div>

            {techCards.map((tech) => {
              const Icon = tech.icon

              return (
                <div
                  key={tech.name}
                  className={`absolute hidden rounded-2xl border border-white/10 bg-[#0b1424]/90 px-4 py-3 text-center shadow-xl shadow-black/30 backdrop-blur md:block ${tech.className}`}
                >
                  <Icon className="mx-auto text-3xl text-blue-400" />
                  <p className="mt-2 text-xs font-semibold text-white">
                    {tech.name}
                  </p>
                </div>
              )
            })}

            <div className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1424]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-center gap-2 border-b border-white/10 pb-4 text-center text-sm font-semibold text-white">
                <HiOutlineSparkles className="text-blue-400" />
                Available for Freelance & Contract Work
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-lg font-bold text-white">5+</p>
                  <p className="text-[11px] text-slate-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">20+</p>
                  <p className="text-[11px] text-slate-400">Projects Delivered</p>
                </div>
                <div>
                  <FiCode className="mx-auto text-2xl text-blue-400" />
                  <p className="text-[11px] text-slate-400">
                    Backend & AI Systems Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
