import {
  FiArrowLeft, FiBriefcase, FiCheckCircle, FiCode, FiGrid,
  FiLock, FiMessageCircle, FiRefreshCw, FiServer, FiShield,
  FiTarget, FiZap,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'
import ProjectLeftSidebar from './ProjectLeftSidebar'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Engineering Challenges', 'Technologies', 'Results & Impact', 'Outcome']
const projectInfo = [
  { icon: 'briefcase', label: 'Project Type', value: 'Integration Platform' },
  { icon: 'users', label: 'Industry', value: 'AI & Automation' },
  { icon: 'calendar', label: 'Duration', value: '2025 - Present' },
  { icon: 'cloud', label: 'Environment', value: 'Production' },
  { icon: 'briefcase', label: 'Associated With', value: 'Enterprise AI Chatbot Platform' },
]
const challenges = ['Message duplication', 'Conversation synchronization', 'Real-time event handling', 'Platform-specific webhook processing', 'Access token security', 'Reliability of external integrations', 'Multi-tenant chatbot deployments']
const built = [
  ['Omnichannel Messaging', 'Unified communication infrastructure across multiple messaging channels.'],
  ['Meta Messenger Integration', 'Real-time Facebook Messenger communication workflows.'],
  ['Instagram Messaging', 'Customer engagement through Instagram messaging APIs.'],
  ['Slack Integration Layer', 'Workspace communication and AI-powered Slack interactions.'],
  ['Message Routing Engine', 'Intelligent tenant-aware conversation routing and management.'],
  ['Monitoring & Reliability', 'Operational visibility and event processing analytics.'],
]
const contributions = [
  ['Real-Time Messaging Infrastructure', 'Built an event-driven messaging architecture capable of processing incoming communication events from Meta platforms, Slack, and internal automation systems.'],
  ['Webhook Processing & Event Management', 'Designed secure webhook ingestion systems with verification, validation, retry-safe processing, error recovery, and reliable delivery mechanisms.'],
  ['Intelligent Message Routing', 'Developed tenant-aware routing infrastructure with channel-specific workflows, conversation state management, and AI orchestration pipelines.'],
  ['Reliability & Idempotency Controls', 'Implemented safeguards against duplicate execution using cache locking, event deduplication, concurrency control, loop prevention, and idempotency checks.'],
  ['Security & Token Management', 'Designed secure credential management with OAuth integrations, JWT authentication, encrypted token storage, and secure API communication.'],
  ['Monitoring & Operational Reliability', 'Built observability tooling with structured logging, event tracing, processing analytics, reliability dashboards, and production troubleshooting workflows.'],
]
const technologies = {
  Backend: ['Python', 'Django', 'DRF'],
  'Messaging & Integrations': ['Meta Graph API', 'Messenger API', 'Instagram API', 'Slack Events API', 'Webhooks'],
  Security: ['OAuth2', 'JWT', 'Fernet Encryption'],
  Processing: ['Celery', 'Redis', 'Async Workers'],
  Observability: ['Logging', 'Monitoring', 'Event Analytics'],
}

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function ArchitectureColumn({ title, items }) {
  return <div className={`${card} p-4`}><p className="mb-4 text-center text-sm font-semibold">{title}</p><div className="space-y-2">{items.map((item) => <div key={item} className="rounded-md border border-blue-400/30 bg-blue-500/5 px-3 py-2 text-center text-xs text-slate-300">{item}</div>)}</div></div>
}

function OmnichannelProject() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"><FiArrowLeft />Back to Projects</Link>

          <div className="mt-7 grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            <ProjectLeftSidebar
              cardClass={card}
              sections={sections}
              info={projectInfo}
            />

            <div className="min-w-0">
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-400">Featured Case Study</span>
                  <h1 className="mt-5 text-4xl font-extrabold leading-tight">Omnichannel AI Chatbot Integrations (Meta + Slack)</h1>
                  <p className="mt-5 leading-8 text-slate-300">Production-grade messaging and automation platform connecting AI chatbots with Meta Messenger, Instagram, and Slack through a unified routing, automation, and conversation management infrastructure.</p>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">{['Meta Integrations', 'Slack Workflows', 'Webhook Infrastructure', 'Real-Time Messaging', 'AI Automation'].map((item) => <span key={item} className="rounded-md border border-white/10 px-2 py-1">{item}</span>)}</div>
                </div>
                <div className={`${card} grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-5 text-center text-xs`}>
                  <div className="space-y-3">{['Facebook Messenger', 'Instagram Messaging', 'Slack Workspace', 'Webhooks'].map((item) => <div key={item} className="rounded-lg border border-white/10 p-3">{item}</div>)}</div>
                  <FiZap className="text-2xl text-purple-400" />
                  <div className="space-y-3"><div className="rounded-lg border border-blue-400/30 p-5"><b>Message Router</b><p className="mt-2 leading-5 text-slate-400">Tenant Routing<br />Event Processing<br />Conversation Sync</p></div><div className="rounded-lg border border-purple-400/30 p-3">AI Conversation Engine</div><div className="rounded-lg border border-blue-400/30 p-3">Response Delivery</div></div>
                </div>
              </div>

              <div className="mt-8 divide-y divide-white/10">
                <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title><p className="mt-4 leading-7 text-slate-300">This omnichannel messaging platform enables organizations to connect AI assistants with customer-facing communication channels including Facebook Messenger, Instagram Messaging, and Slack.</p><p className="mt-3 leading-7 text-slate-300">The system acts as the communication layer of a larger enterprise AI ecosystem, providing unified message routing, conversation synchronization, webhook processing, and operational observability.</p><p className="mt-3 leading-7 text-slate-300">By centralizing communication workflows, organizations can deliver consistent AI-powered experiences across multiple channels while maintaining scalability, security, and reliability.</p></section>
                <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title><p className="mt-4 leading-7 text-slate-300">Organizations often manage customer interactions across multiple disconnected messaging platforms. This creates operational complexity and introduces challenges around:</p><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{challenges.map((item) => <div key={item} className={`${card} flex items-center gap-3 p-3 text-xs`}><FiRefreshCw className="shrink-0 text-blue-400" />{item}</div>)}</div><p className="mt-4 leading-7 text-slate-300">The platform needed a centralized communication infrastructure capable of processing messaging events at scale while maintaining security and operational reliability.</p></section>
                <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{built.map(([name, description]) => <article key={name} className={`${card} p-4 text-center`}><FiMessageCircle className="mx-auto text-3xl text-blue-400" /><h3 className="mt-3 text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="key-contributions" className="py-7"><Title icon={FiTarget}>Key Contributions</Title><div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{contributions.map(([name, description]) => <article key={name} className={`${card} p-4`}><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="architecture" className="py-7"><Title icon={FiServer}>Architecture Overview</Title><div className="mt-5 grid gap-3 md:grid-cols-3"><ArchitectureColumn title="1. Messaging Flow" items={['Messenger • Instagram • Slack', 'Webhook Layer', 'Validation & Verification', 'Message Router', 'Conversation Engine', 'AI Processing', 'Response Delivery']} /><ArchitectureColumn title="2. Security Layer" items={['OAuth Authentication', 'Encrypted Storage', 'Token Management', 'Secure API Calls']} /><ArchitectureColumn title="3. Reliability Layer" items={['Incoming Events', 'Duplicate Detection', 'Cache Locking', 'Idempotency Check', 'Safe Processing']} /></div></section>
                <section id="engineering-challenges" className="py-7"><Title icon={FiCode}>Engineering Challenges</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[['Duplicate Event Processing', 'Implemented idempotency validation, cache locking, and duplicate detection mechanisms.'], ['Message Loop Prevention', 'Implemented echo suppression and intelligent event filtering to prevent loops.'], ['Secure Credential Handling', 'Built encrypted credential storage using Fernet encryption and controlled decryption workflows.'], ['Multi-Tenant Routing', 'Implemented tenant-isolated conversation management and routing systems.']].map(([name, text]) => <article key={name} className={`${card} p-4`}><h3 className="text-sm font-semibold">{name}</h3><p className="mt-3 text-xs leading-5 text-slate-400">{text}</p></article>)}</div></section>
                <section id="results-&-impact" className="py-7"><Title icon={FiGrid}>Results & Impact</Title><div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-6">{['Unified Messaging', 'Multi-Channel Support', 'Secure Integrations', 'Reliable Processing', 'Tenant Isolation', 'Production Ready'].map((item) => <div key={item} className={`${card} p-4 text-center text-xs font-semibold`}><FiCheckCircle className="mx-auto mb-3 text-xl text-blue-400" />{item}</div>)}</div></section>
              </div>
            </div>

            <aside className="space-y-5">
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Snapshot</h2><div className="mt-5 space-y-4 text-sm text-slate-300"><p>Type<br /><b className="text-white">Integration Platform</b></p><p>Role<br /><b className="text-white">Full-Stack & AI Automation Engineer</b></p><p>Duration<br /><b className="text-white">2025 – Present</b></p><p>Environment<br /><b className="text-white">Production</b></p><p>Associated With<br /><b className="text-white">Enterprise AI Chatbot Platform</b></p></div></div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2><div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Highlights</h2><div className="mt-5 space-y-3 text-sm text-slate-300">{['Unified messaging architecture', 'Messenger integration', 'Instagram integration', 'Slack integration', 'Secure webhook processing', 'Tenant-aware routing', 'Encrypted token storage', 'Event reliability controls', 'Production observability'].map((item) => <p key={item} className="flex gap-2"><FiCheckCircle className="shrink-0 text-blue-400" />{item}</p>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Key Results</h2><div className="mt-5 space-y-5">{[['3+', 'Channels Integrated'], ['10K+', 'Messages Processed Daily'], ['99.9%', 'Event Processing Reliability'], ['Multi-Tenant', 'Isolated Deployments'], ['Secure', 'Token & Data Protection'], ['Production Ready', 'Monitoring & Reliability']].map(([value, label]) => <div key={label} className="flex gap-3"><FiShield className="mt-1 shrink-0 text-emerald-400" /><p><b className="text-lg text-blue-400">{value}</b><br /><span className="text-xs text-slate-400">{label}</span></p></div>)}</div></div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OmnichannelProject

