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
  FiStar,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { FaAws, FaPython } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiDjango, SiOpenai, SiPostgresql } from 'react-icons/si'
import { profile } from '../../data/profile'
import portrait from '../../assets/self_employee.jfif'
import Navbar from '../Home/components/Navbar'
import Footer from '../Home/components/Footer'

const journeyItems = [
  {
    icon: FiLayers,
    role: 'Research Associate',
    period: '2016 - 2020',
    description:
      'Conducted engineering research, published in IEEE journals, supervised student projects and supported teaching.',
  },
  {
    icon: FiCode,
    role: 'System Software Engineer',
    period: '2021',
    description:
      'Worked on system modeling, testing, performance analysis and reliable engineering solution delivery.',
  },
  {
    icon: FiBriefcase,
    role: 'Software Engineer',
    period: '2022 - 2025',
    description:
      'Built Django APIs, AI systems, Stripe billing, training pipelines, automation workflows and cloud-deployed SaaS platforms.',
  },
  {
    icon: FiServer,
    role: 'Independent Software Developer',
    period: '2025 - Present',
    description:
      'Delivering full-stack SaaS products, AI solutions, integrations and cloud infrastructure for clients worldwide.',
  },
  {
    icon: FiTrendingUp,
    role: 'Backend Software Engineer',
    period: '2026 - Present',
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
    icon: FiLayers,
    title: 'MS in Electronics & Computer Engineering',
    text: 'Strong academic foundation in engineering, signal processing and research driven problem solving.',
  },
  {
    icon: FiFileText,
    title: 'IEEE Publications',
    text: 'Published research in reputed IEEE journals in antennas, sensors and biomedical engineering applications.',
  },
  {
    icon: FiUsers,
    title: 'Generative AI Instructor',
    text: 'Delivered Gen-AI training and business productivity programs, helping learners build practical AI skills.',
  },
]

const recognition = [
  ['Gold Medal', 'For academic excellence'],
  ["Dean's Honour List", 'Consistently recognized for outstanding performance'],
  ['Graduate Fellowship', 'Awarded for academic merit and research potential'],
  ['Best Final Year Project Medal', 'Dr. M. Nawaz Medal for excellence'],
  ['IEEE Publications', 'Research contributions in engineering domains'],
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
  { icon: FaPython, label: 'Python', className: 'left-5 top-10' },
  { icon: SiPostgresql, label: 'PostgreSQL', className: 'left-2 top-32' },
  { icon: SiDjango, label: 'Django', className: 'right-7 top-16' },
  { icon: SiOpenai, label: 'OpenAI', className: 'right-7 top-36' },
  { icon: FaAws, label: 'AWS', className: 'bottom-14 right-10' },
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
                href="/resume.pdf"
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

          <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-blue-400/20 bg-[#07111f] p-5 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_36%)]" />
            <div className="absolute inset-6 rounded-2xl border border-blue-400/10" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(59,130,246,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.18)_1px,transparent_1px)] [background-size:42px_42px]" />
            <img
              src={portrait}
              alt={profile.name}
              className="absolute bottom-0 left-1/2 z-10 h-[92%] max-h-[520px] -translate-x-1/2 object-cover object-top grayscale"
            />
            {techBadges.map((badge) => {
              const Icon = badge.icon

              return (
                <div
                  key={badge.label}
                  className={`absolute z-20 hidden items-center gap-3 rounded-lg border border-blue-400/25 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/25 backdrop-blur sm:flex ${badge.className}`}
                >
                  <Icon className="text-2xl text-blue-400" />
                  {badge.label}
                </div>
              )
            })}
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
                  <div>
                    <h3 className="font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
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
              const Icon = item.icon

              return (
                <article key={item.title} className="flex gap-5 rounded-xl border border-blue-400/20 bg-[#07111f]/80 p-6">
                  <Icon className="shrink-0 text-4xl text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
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
            {recognition.map(([title, text]) => (
              <article key={title} className="rounded-xl border border-blue-400/20 bg-[#07111f]/80 p-5">
                <FiStar className="text-3xl text-amber-400" />
                <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{text}</p>
              </article>
            ))}
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
