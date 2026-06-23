import {
  FiArrowLeft, FiBarChart2, FiBriefcase, FiCalendar, FiCheckCircle,
  FiLayers, FiLock, FiServer, FiTarget, FiUsers, FiZap,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'
import heroDemo from '../../../assets/socifiy-hero-demo.png'
import ProjectLeftSidebar from './ProjectLeftSidebar'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Technologies', 'Results & Impact', 'Outcome']
const projectInfo = [
  { icon: 'briefcase', label: 'Project Type', value: 'SaaS Platform' },
  { icon: 'grid', label: 'Industry', value: 'Social Media / Marketing' },
  { icon: 'calendar', label: 'Duration', value: 'Jul 2025 - Jan 2026' },
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
  ['Multi-Tenant SaaS Architecture', 'Designed and implemented a secure multi-tenant architecture with data isolation, organization workspaces, and role-based access control.'],
  ['Frontend Dashboard', 'Developed responsive React dashboards for content management, scheduling, analytics, and team collaboration.'],
  ['Authentication & Security', 'Implemented JWT authentication, refresh tokens, Google OAuth, and RBAC for secure user and team access.'],
  ['Cloud Infrastructure', 'Designed and deployed the entire infrastructure on AWS for scalability, security, and high availability.'],
  ['Scheduling & Automation Engine', 'Built asynchronous scheduling and automation pipelines using Celery, Redis, and event-driven processing.'],
  ['Database & Reliability', 'Optimized PostgreSQL architecture, queries, and monitoring systems to ensure production reliability and performance.'],
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
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"><FiArrowLeft />Back to Projects</Link>

          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-400">Featured Case Study</span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">SOCIFIY - Social Media Management SaaS Platform</h1>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">A cloud-native social media management platform for businesses, agencies, and teams to automate content publishing, collaborate seamlessly, and manage social operations from a single dashboard.</p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-200">
                <span>Multi-Tenant SaaS</span><span>Workflow Automation</span><span>Content Scheduling</span><span>Team Collaboration</span>
              </div>
            </div>
            <img src={heroDemo} alt="SOCIFIY dashboard shown on laptop and mobile devices" className="w-full object-contain" />
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
                <div className="mt-5 grid gap-3 md:grid-cols-2">{contributions.map(([name, description]) => <article key={name} className={`${card} p-4`}><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div>
              </section>
              <section id="architecture" className="py-7"><Title icon={FiServer}>Architecture Overview</Title>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">{['React Dashboard -> Django REST APIs -> PostgreSQL (RDS)', 'Content Scheduled -> Celery Worker -> Platform Integrations', 'User -> CloudFront -> EC2 / S3 -> RDS / Redis'].map((item) => <div key={item} className={`${card} p-5 text-center text-xs leading-6 text-slate-300`}>{item}</div>)}</div>
              </section>
              <section id="outcome" className="py-7"><Title icon={FiTarget}>Outcome</Title>
                <p className="mt-4 leading-7 text-slate-300">SOCIFIY is now a production-ready social media management platform trusted by businesses and agencies for their content scheduling, automation, and team collaboration needs. The platform is built for scale, reliability, and performance.</p>
              </section>
            </div>

            <aside className="space-y-5">
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Snapshot</h2>
                <div className="mt-5 space-y-4 text-sm text-slate-300"><p>Type<br /><b className="text-white">SaaS Platform</b></p><p>Role<br /><b className="text-white">Full-Stack & AI Automation Engineer</b></p><p>Duration<br /><b className="text-white">Jul 2025 - Jan 2026</b></p></div>
              </div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2>
                <div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div>
              </div>
              <div id="results-&-impact" className={`${card} p-5`}><h2 className="text-lg font-bold">Key Results</h2>
                <div className="mt-5 space-y-5 text-sm">{['Multi-Tenant Ready', 'Automated Publishing', 'Scalable Infrastructure', 'Production Ready'].map((item) => <p key={item} className="flex gap-3"><FiCheckCircle className="mt-1 shrink-0 text-emerald-400" /><b>{item}</b></p>)}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SocifiyProject
