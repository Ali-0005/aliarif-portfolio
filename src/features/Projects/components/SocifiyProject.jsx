import { useState } from 'react'
import {
  FiArrowLeft, FiBarChart2, FiBriefcase, FiCalendar, FiCheckCircle,
  FiExternalLink, FiGrid, FiLayers, FiLink, FiLock, FiMaximize2, FiServer, FiTarget, FiUsers, FiX, FiZap, FiSend,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'
import architectureImage from '../../../assets/socifiy_architecture.png'
import heroDemo from '../../../assets/socifiy-hero-demo.png'
import heroDemoWebp from '../../../assets/socifiy-hero-demo.webp'
import ProjectLeftSidebar from './ProjectLeftSidebar'
import { trackBookCallClick } from '../../../shared/lib/analytics'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Outcome']
const projectInfo = [
  { icon: 'briefcase', label: 'Project Type', value: 'SaaS Platform' },
  { icon: 'grid', label: 'Industry', value: 'Social Media / Marketing' },
  { icon: 'calendar', label: 'Duration', value: 'Jul 2025 - Present' },
  { icon: 'users', label: 'Team', value: 'Solo Full-Stack Engineer' },
  { icon: 'cloud', label: 'Deployment', value: 'AWS Cloud Infrastructure' },
]
const challenges = [
  'Coordinate multiple users and roles', 'Schedule and publish content reliably',
  'Manage workflows and approvals', 'Integrate with multiple platforms',
  'Maintain secure multi-tenant operations', 'Scale infrastructure cost-effectively',
]
const features = [
  [FiLayers, 'Multi-Tenant Architecture'], [FiCalendar, 'Content Scheduling Engine'],
  [FiZap, 'Workflow Automation'], [FiUsers, 'Team Collaboration'],
  [FiBarChart2, 'Analytics & Reporting'], [FiLock, 'Secure Integrations'],
]
const contributions = [
  [FiLayers, 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20', 'Multi-Tenant SaaS Architecture', 'Designed and implemented a secure multi-tenant architecture with data isolation, organization workspaces, and role-based access control.'],
  [FiGrid, 'text-purple-400 bg-purple-500/10 border-purple-400/20', 'Frontend Dashboard', 'Developed responsive React dashboards for content management, scheduling, analytics, and team collaboration.'],
  [FiLock, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'Authentication & Security', 'Implemented JWT authentication, refresh tokens, Google OAuth, and RBAC for secure user and team access.'],
  [FiServer, 'text-sky-400 bg-sky-500/10 border-sky-400/20', 'Cloud Infrastructure', 'Designed and deployed the entire infrastructure on AWS for scalability, security, and high availability.'],
  [FiCalendar, 'text-amber-400 bg-amber-500/10 border-amber-400/20', 'Scheduling & Automation Engine', 'Built asynchronous scheduling and automation pipelines using Celery, Redis, and event-driven processing.'],
  [FiBarChart2, 'text-green-400 bg-green-500/10 border-green-400/20', 'Database & Reliability', 'Optimized PostgreSQL architecture, queries, and monitoring systems to ensure production reliability and performance.'],
]
const technologies = {
  Backend: ['Python', 'Django', 'DRF'],
  Database: ['PostgreSQL'],
  Frontend: ['React', 'Redux Toolkit', 'Tailwind CSS'],
  Authentication: ['JWT', 'Google OAuth'],
  Automation: ['Celery', 'Redis'],
  'Cloud & DevOps': ['AWS EC2', 'AWS S3', 'AWS RDS', 'CloudFront', 'Route 53', 'Docker', 'CI/CD'],
  Integrations: ['Meta APIs', 'Google OAuth'],
}

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function SocifiyProject() {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"><FiArrowLeft />Back to Projects</Link>

          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-400">Featured Case Study</span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                <a href="https://www.socifiy.net" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
                  Social Media Management SaaS Platform
                </a>
              </h1>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">A cloud-native social media management platform for businesses, agencies, and teams to automate content publishing, collaborate seamlessly, and manage social operations from a single dashboard.</p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-200">
                <span className="flex items-center gap-2"><FiLayers className="text-blue-400" /> Multi-Tenant SaaS</span>
                <span className="flex items-center gap-2"><FiZap className="text-blue-400" /> Workflow Automation</span>
                <span className="flex items-center gap-2"><FiCalendar className="text-blue-400" /> Content Scheduling</span>
                <span className="flex items-center gap-2"><FiUsers className="text-blue-400" /> Team Collaboration</span>
              </div>
            </div>
            <picture className="block">
              <source srcSet={heroDemoWebp} type="image/webp" />
              <img src={heroDemo} alt="SOCIFIY dashboard shown on laptop and mobile devices" className="w-full object-contain" decoding="async" />
            </picture>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            <ProjectLeftSidebar
              cardClass={card}
              sections={sections}
              info={projectInfo}
              liveWebsite={{ href: 'https://www.socifiy.net', label: 'www.socifiy.net' }}
            />

            <div className="divide-y divide-white/10">
              <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title>
                <p className="mt-4 leading-7 text-slate-300">SOCIFIY is a cloud-native social media management platform that helps businesses and agencies schedule content, automate publishing, collaborate with teams, and manage multiple social media accounts from a centralized dashboard.</p>
                <p className="mt-3 leading-7 text-slate-300">I architected and built the platform from the ground up including backend systems, frontend dashboards, workflow automation, and cloud infrastructure.</p>
              </section>
              <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title>
                <p className="mt-4 text-slate-300">Managing social media at scale is complex. Teams need tools that help them:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">{challenges.map((item) => <li key={item} className="flex gap-2"><FiCheckCircle className="shrink-0 text-blue-400" />{item}</li>)}</ul>
              </section>
              <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{features.map(([Icon, label]) => <div key={label} className={`${card} p-4 text-center text-xs`}><Icon className="mx-auto mb-3 text-2xl text-blue-400" />{label}</div>)}</div>
              </section>
              <section id="key-contributions" className="py-7"><Title icon={FiZap}>Key Contributions</Title>
                <div className="mt-5 grid gap-3 md:grid-cols-2">{contributions.map(([Icon, iconClass, name, description]) => <article key={name} className={`${card} flex gap-4 p-4`}><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${iconClass}`}><Icon className="text-xl" /></div><div><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></div></article>)}</div>
              </section>
              <section id="architecture" className="py-7"><Title icon={FiServer}>Architecture Overview</Title>
                <button
                  type="button"
                  onClick={() => setIsArchitectureOpen(true)}
                  className={`${card} group relative mt-5 block w-full overflow-hidden p-3 text-left`}
                >
                  <img
                    src={architectureImage}
                    alt="SOCIFIY architecture overview"
                    className="w-full rounded-lg object-contain"
                  />
                  <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/30 bg-[#020817]/80 text-blue-400 opacity-0 transition group-hover:opacity-100">
                    <FiMaximize2 />
                  </span>
                </button>
              </section>
              <section id="outcome" className="py-7"><Title icon={FiTarget}>Outcome</Title>
                <p className="mt-4 leading-7 text-slate-300">SOCIFIY is now a production-ready social media management platform trusted by businesses and agencies for their content scheduling, automation, and team collaboration needs. The platform is built for scale, reliability, and performance.</p>
              </section>
            </div>

            <aside className="space-y-5">
              <div className={`${card} p-5`}>
                <h2 className="flex items-center gap-3 text-lg font-bold">
                  <FiBriefcase className="text-blue-400" />
                  Project Snapshot
                </h2>
                <div className="mt-6 space-y-5 text-sm">
                  {[
                    [FiGrid, 'Type', 'SaaS Platform'],
                    [FiZap, 'Role', 'Full-Stack & AI Automation Engineer'],
                    [FiCalendar, 'Duration', 'Jul 2025 - Present'],
                  ].map(([Icon, label, value]) => (
                    <div key={label} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                        <Icon className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500">{label}</p>
                        <p className="mt-1 font-semibold leading-6 text-slate-100">{value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                      <FiLink className="text-xl text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Live Site</p>
                      <a
                        href="https://www.socifiy.net"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
                      >
                        www.socifiy.net
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2>
                <div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div>
              </div>
              <div id="results-&-impact" className={`${card} p-5`}><h2 className="text-lg font-bold">Key Results</h2>
                <div className="mt-5 space-y-5 text-sm">{['Multi-Tenant Ready', 'Automated Publishing', 'Scalable Infrastructure', 'Production Ready'].map((item) => <p key={item} className="flex gap-3"><FiCheckCircle className="mt-1 shrink-0 text-emerald-400" /><b>{item}</b></p>)}</div>
              </div>
            </aside>
          </div>
          <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-r from-blue-600/30 via-[#10245c]/70 to-purple-700/30 p-6 shadow-2xl shadow-blue-950/40">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                  <FiSend className="text-4xl text-blue-300" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Need a Scalable SaaS or Automation Platform?</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-300">I help startups and businesses build scalable backend systems, automation workflows, and cloud-native applications.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/#contact" onClick={trackBookCallClick} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500">Book a Discovery Call</Link>
                <Link to="/#projects" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold transition hover:bg-white/10">View All Projects <FiArrowLeft className="rotate-180" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isArchitectureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setIsArchitectureOpen(false)}>
          <div className="relative max-h-[92vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsArchitectureOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#020817]/90 text-white transition hover:text-blue-400"
              aria-label="Close architecture image"
            >
              <FiX />
            </button>
            <img
              src={architectureImage}
              alt="SOCIFIY architecture overview enlarged"
              className="max-h-[92vh] w-full rounded-xl border border-white/10 object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default SocifiyProject
