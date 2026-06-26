import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiCpu,
  FiDownload,
  FiFileText,
  FiGitBranch,
  FiLayers,
  FiMessageSquare,
  FiServer,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { FaAward, FaAws, FaBookOpen, FaGraduationCap, FaMedal, FaPython, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiDjango, SiOpenai, SiPostgresql, SiReact } from 'react-icons/si'
import { profile } from '../../data/profile'
import heroImg from '../../assets/hero.png'
import ituLogo from '../../assets/Logo-ITU-NEW.png'
import ucpLogo from '../../assets/UCP_logo.jfif'
import ieeeLogo from '../../assets/ieee_logo.png'
import rapidevLogo from '../../assets/rapidev.png'
import governmentLogo from '../../assets/Government_of_pak.png'
import selfEmployeeLogo from '../../assets/self_employee.jfif'
import icmaLogo from '../../assets/icma_logo.png'
import highlineLogo from '../../assets/highline_residential.png'
import Navbar from '../Home/components/Navbar'
import Footer from '../Home/components/Footer'

const journeyItems = [
  {
    icon: FiLayers,
    role: 'Research Associate',
    period: 'Sep 2016 - Dec 2020',
    logo: ituLogo,
    link: 'https://itu.edu.pk/',
    description:
      'Conducted engineering research, published in IEEE journals, supervised student projects and supported teaching.',
  },
  {
    icon: FiCode,
    role: 'System Software Engineer',
    period: 'Jan 2021 - Dec 2021',
    logo: rapidevLogo,
    link: 'https://rapidev.com/',
    description:
      'Worked on system modeling, testing, performance analysis and reliable engineering solution delivery.',
  },
  {
    icon: FiBriefcase,
    role: 'Software Engineer',
    period: 'Jan 2022 - Jun 2025',
    logo: governmentLogo,
    link: 'https://www.pakistan.gov.pk/',
    description:
      'Built Django APIs, AI systems, Stripe billing, training pipelines, automation workflows and cloud-deployed SaaS platforms.',
  },
  {
    icon: FiServer,
    role: 'Independent Software Developer',
    period: '2025 - Present',
    logo: selfEmployeeLogo,
    description:
      'Delivering full-stack SaaS products, AI solutions, integrations and cloud infrastructure for clients worldwide.',
  },
  {
    icon: FiFileText,
    role: 'AI Instructor (Generative AI)',
    period: 'Dec 2025 - Present',
    logo: icmaLogo,
    link: 'https://www.icmadigital.org/',
    description:
      'Delivering Gen-AI and business productivity training through live lectures, hands-on labs, assessments and project mentoring.',
  },
  {
    icon: FiTrendingUp,
    role: 'Backend & AI Systems Engineer',
    period: 'Jan 2026 - Present',
    logo: highlineLogo,
    link: 'https://www.hlres.com/',
    description:
      'Contributing to large-scale backend systems, platform reliability and long-term engineering improvements.',
  },
]

const workAreas = [
  {
    icon: FiServer,
    title: 'Backend Engineering',
    text: 'I build secure and scalable backend systems, REST APIs, authentication, database design and asynchronous processing pipelines.',
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Systems',
    text: 'I architect RAG pipelines, vector search, embeddings and intelligent chatbots that are grounded in real business data.',
  },
  {
    icon: FiGitBranch,
    title: 'SaaS & Automation',
    text: 'I develop subscription billing, workflows, scheduling, analytics and integrations that automate operations and drive growth.',
  },
  {
    icon: FiCloud,
    title: 'Cloud Deployment',
    text: 'I deploy, scale and operate applications on AWS with Docker, monitoring, logging and production best practices.',
  },
]

const workflow = [
  {
    icon: FiUsers,
    title: 'Understand the Business',
    text: 'I learn your users, goals, constraints and success metrics before writing any code.',
  },
  {
    icon: FiCode,
    title: 'Design for Production',
    text: 'I plan architecture, data models and workflows with security, performance and scalability in mind.',
  },
  {
    icon: FiMessageSquare,
    title: 'Communicate Clearly',
    text: 'I keep you updated with clear milestones, documentation and transparent progress.',
  },
  {
    icon: FiShield,
    title: 'Take Ownership',
    text: 'I take responsibility from implementation to deployment and long-term support.',
  },
]

const principles = [
  ['Maintainability', 'Write clean code and organize systems for long-term clarity.'],
  ['Proportional Architecture', 'Use the right tools and complexity for the job.'],
  ['Security & Reliability', 'Build secure, resilient and fault-tolerant systems.'],
  ['Useful Automation', 'Automate repetitive work and reduce manual effort.'],
  ['Measured Performance', 'Measure first, then optimize what matters.'],
  ['Honest Communication', 'Share risks, trade-offs and real timelines clearly.'],
]

const beyondDevelopment = [
  {
    logo: ituLogo,
    title: 'MS in Electronics & Computer Engineering',
    period: '2016 - 2018',
    link: 'https://itu.edu.pk/',
    text: 'Completed M.Sc. in Electronics & Computer Engineering with GPA 3.60/4.00 and Grade A+.',
  },
  {
    logo: ucpLogo,
    title: 'BS in Electrical Engineering',
    period: '2012 - 2016',
    link: 'https://ucp.edu.pk/',
    text: 'Graduated with a strong engineering foundation, GPA 3.95/4.00 and Grade A+.',
  },
  {
    logo: ieeeLogo,
    title: 'IEEE Peer Reviewer',
    period: 'Research Publications',
    link: 'https://www.webofscience.com/wos/author/record/AAP-8982-2020',
    text: 'Reviewed and published research across IEEE journals in antennas, sensors and biomedical engineering applications.',
  },
]

const recognition = [
  { icon: FaMedal, color: 'text-amber-400', title: 'Gold Medal', text: 'For academic excellence in BSEE' },
  { icon: FaRegStar, color: 'text-amber-400', title: "Dean's Honour List", text: 'Consistently recognized for outstanding academic performance in BSEE and MSEE' },
  { icon: FaGraduationCap, color: 'text-blue-400', title: 'Graduate Fellowship', text: 'Awarded for academic merit and research potential in MSEE' },
  { icon: FaAward, color: 'text-amber-400', title: 'Dr. M. Nawaz Medal', text: 'Awarded for best final year project in BSEE' },
  { icon: FaBookOpen, color: 'text-blue-400', title: 'IEEE Publications', link: 'https://ieeexplore.ieee.org/author/37086825302', text: 'Research contributions in engineering domains' },
]

const expertise = [
  ['Backend', ['Python', 'Django', 'DRF', 'REST APIs', 'JWT / OAuth2']],
  ['AI & Retrieval', ['OpenAI', 'Pinecone', 'Embeddings', 'RAG', 'LangChain-like']],
  ['Data', ['PostgreSQL', 'PostGIS', 'MS SQL Server', 'Query Optimization']],
  ['Automation', ['Celery', 'Redis', 'RabbitMQ', 'Webhooks', 'Web Scraping']],
  ['Integrations', ['Stripe', 'Meta APIs', 'Zapier', 'SendGrid', 'SES']],
  ['Frontend', ['React', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Axios']],
  ['Cloud', ['AWS EC2', 'S3', 'BMCS', 'CloudFront', 'Route 53']],
]

const techBadges = [
  { icon: FaPython, label: 'Python', className: 'left-0 top-16 -translate-x-6' },
  { icon: SiDjango, label: 'Django', className: 'right-0 top-24 translate-x-6' },
  { icon: SiPostgresql, label: 'PostgreSQL', className: 'left-0 top-44 -translate-x-10' },
  { icon: SiOpenai, label: 'OpenAI', className: 'right-0 top-56 translate-x-10' },
  { icon: FaAws, label: 'AWS', className: 'right-6 bottom-32 translate-x-10' },
  { icon: SiReact, label: 'React', className: 'left-6 bottom-32 -translate-x-10' },
]

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      <div className="mt-2 h-0.5 w-8 rounded-full bg-blue-500" />
      {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 pb-4 pt-24 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              About Me
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Engineering Reliable Systems From Complex Ideas
            </h1>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>
                I&apos;m {profile.name}, a Backend & AI Systems Engineer based in{' '}
                {profile.location}. I design and build production-ready SaaS
                platforms, AI-powered systems, APIs, automation workflows and
                cloud infrastructure using Python, Django, PostgreSQL, React and
                AWS.
              </p>
              <p>
                My focus is simple: build secure, scalable and maintainable
                software that solves real business problems.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                View My Work <FiArrowRight />
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}Ali-Arif-Python-Django-Backend-Developer-Resume.pdf`}
                download="Ali-Arif-Python-Django-Backend-Developer-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-white/5"
              >
                Download Resume <FiDownload />
              </a>
            </div>
            <p className="mt-7 flex items-center gap-3 text-sm text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
              {profile.availability}
            </p>
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

            {techBadges.map((badge) => {
              const Icon = badge.icon

              return (
                <div
                  key={badge.label}
                    className={`absolute hidden rounded-2xl border border-white/10 bg-[#0b1424]/90 px-4 py-3 text-center shadow-xl shadow-black/30 backdrop-blur md:block ${badge.className}`}
                >
                    <Icon className="mx-auto text-3xl text-blue-400" />
                    <p className="mt-2 text-xs font-semibold text-white">
                      {badge.label}
                    </p>
                </div>
              )
            })}

              <div className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1424]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="grid grid-cols-3 gap-4 text-center">
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
        </section>

        <section className="mt-5 grid gap-8 rounded-2xl border border-blue-400/20 bg-[#07111f]/80 p-6 shadow-xl shadow-black/20 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <SectionTitle title="My Journey" />
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                My path started in engineering research and academia, where I
                published in IEEE journals and built strong problem-solving
                foundations.
              </p>
              <p>
                I transitioned into industry to build real-world software
                systems. Today, I specialize in backend engineering, AI systems,
                SaaS platforms, cloud infrastructure and automation that deliver
                business value.
              </p>
              <p>
                I enjoy turning complex requirements into reliable digital
                products and long-term engineering solutions.
              </p>
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="absolute bottom-5 left-5 top-5 w-px bg-blue-400/40" />
            {journeyItems.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.role} className="relative grid gap-4 pl-14 sm:grid-cols-[1fr_auto]">
                  <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-400">
                    <Icon />
                  </span>
                  <div className="flex gap-4">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-blue-400/20 bg-white p-1 transition hover:border-blue-300"
                      >
                        <img
                          src={item.logo}
                          alt={`${item.role} logo`}
                          className="h-full w-full object-contain scale-125"
                        />
                      </a>
                    ) : (
                      <div className="flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-blue-400/20 bg-white p-1">
                        <img
                          src={item.logo}
                          alt={`${item.role} logo`}
                          className="h-full w-full object-contain scale-125"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-white">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-blue-300"
                          >
                            {item.role}
                          </a>
                        ) : (
                          item.role
                        )}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-blue-400">{item.period}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle title="What I Do" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workAreas.map((area) => {
              const Icon = area.icon

              return (
                <article key={area.title} className="rounded-xl border border-blue-400/20 bg-[#07111f]/80 p-6">
                  <Icon className="text-4xl text-blue-400" />
                  <h3 className="mt-4 font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{area.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle title="How I Work" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => {
              const Icon = step.icon

              return (
                <article key={step.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/15 text-lg font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <Icon className="mx-auto mt-5 text-4xl text-blue-400" />
                  <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-56 text-sm leading-6 text-slate-400">{step.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle title="Engineering Principles" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {principles.map(([title, text]) => (
              <article key={title} className="rounded-xl border border-blue-400/20 bg-[#07111f]/80 p-5">
                <FiCheckCircle className="text-xl text-blue-400" />
                <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle
            title="Beyond Development"
            subtitle="Research, teaching and continuous learning keep me grounded and growing."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {beyondDevelopment.map((item) => {
              return (
                <article key={item.title} className="flex gap-5 rounded-xl border border-blue-400/20 bg-[#07111f]/80 p-6">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 transition hover:ring-2 hover:ring-blue-300/60"
                    >
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        className="h-full w-full object-contain"
                      />
                    </a>
                  ) : (
                    <div className="flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1">
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-white">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-blue-300"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-blue-400">{item.period}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle title="Recognition" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {recognition.map((item) => {
              const Icon = item.icon

              return (
              <article key={item.title} className="rounded-xl border border-blue-400/20 bg-[#07111f]/80 p-5">
                <Icon className={`text-3xl ${item.color}`} />
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-blue-300"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{item.text}</p>
              </article>
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle title="Core Expertise" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {expertise.map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold text-blue-400">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-500/40 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-2xl border border-blue-400/25 bg-[#07111f] p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Let&apos;s Build Something That Works Beyond the Demo
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Whether you need a scalable backend, an AI-powered product,
                automation workflows or a complete SaaS platform, I can help you
                turn your idea into production-ready software.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                Discuss Your Project <FiArrowRight />
              </Link>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-white/5"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default About
