import { useState } from 'react'
import {
  FiArrowLeft, FiBriefcase, FiCheckCircle, FiCode, FiGrid,
  FiKey, FiLayers, FiMessageCircle, FiRefreshCw, FiRepeat,
  FiSend, FiServer, FiShield, FiTarget, FiWifi, FiCpu,
  FiGitBranch, FiLock, FiMaximize2, FiX, FiArrowRight,
} from 'react-icons/fi'
import { FaFacebookMessenger, FaInstagram, FaSlack } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import architectureImage from '../../../assets/omni_channel_architecture.png'
import omnichannelImage from '../../../assets/cover/omnichannel.png'
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
const challengeIcons = {
  'Message duplication': FiRepeat,
  'Conversation synchronization': FiRefreshCw,
  'Real-time event handling': FiWifi,
  'Platform-specific webhook processing': FiServer,
  'Access token security': FiKey,
  'Reliability of external integrations': FiShield,
  'Multi-tenant chatbot deployments': FiLayers,
}
const built = [
  ['Omnichannel Messaging', 'Unified communication infrastructure across multiple messaging channels.', FaFacebookMessenger, 'text-blue-400'],
  ['Meta Messenger Integration', 'Real-time Facebook Messenger communication workflows.', FaFacebookMessenger, 'text-blue-400'],
  ['Instagram Messaging', 'Customer engagement through Instagram messaging APIs.', FaInstagram, 'text-pink-400'],
  ['Slack Integration Layer', 'Workspace communication and AI-powered Slack interactions.', FaSlack, 'text-emerald-400'],
  ['Message Routing Engine', 'Intelligent tenant-aware conversation routing and management.', FiCpu, 'text-purple-400'],
  ['Monitoring & Reliability', 'Operational visibility and event processing analytics.', FiGrid, 'text-cyan-400'],
]
const contributions = [
  ['Real-Time Messaging Infrastructure', 'Built an event-driven messaging architecture capable of processing incoming communication events from Meta platforms, Slack, and internal automation systems.', FiCpu, 'bg-emerald-500/15 text-emerald-400'],
  ['Webhook Processing & Event Management', 'Designed secure webhook ingestion systems with verification, validation, retry-safe processing, error recovery, and reliable delivery mechanisms.', FiGitBranch, 'bg-blue-500/15 text-blue-400'],
  ['Intelligent Message Routing', 'Developed tenant-aware routing infrastructure with channel-specific workflows, conversation state management, and AI orchestration pipelines.', FiLayers, 'bg-purple-500/15 text-purple-400'],
  ['Reliability & Idempotency Controls', 'Implemented safeguards against duplicate execution using cache locking, event deduplication, concurrency control, loop prevention, and idempotency checks.', FiRefreshCw, 'bg-orange-500/15 text-orange-400'],
  ['Security & Token Management', 'Designed secure credential management with OAuth integrations, JWT authentication, encrypted token storage, and secure API communication.', FiLock, 'bg-amber-500/15 text-amber-400'],
  ['Monitoring & Operational Reliability', 'Built observability tooling with structured logging, event tracing, processing analytics, reliability dashboards, and production troubleshooting workflows.', FiMessageCircle, 'bg-cyan-500/15 text-cyan-400'],
]
const technologies = {
  Backend: ['Python', 'Django', 'DRF'],
  'Messaging & Integrations': ['Meta Graph API', 'Messenger API', 'Instagram API', 'Slack Events API', 'Webhooks'],
  Security: ['OAuth2', 'JWT', 'Fernet Encryption'],
  Processing: ['Celery', 'Redis', 'Async Workers'],
  Observability: ['Logging', 'Monitoring', 'Event Analytics'],
}
const heroTags = [
  { icon: FiMessageCircle, label: 'Meta Integrations' },
  { icon: FiRefreshCw, label: 'Slack Workflows' },
  { icon: FiServer, label: 'Webhook Infrastructure' },
  { icon: FiSend, label: 'Real-Time Messaging' },
  { icon: FiTarget, label: 'AI Automation' },
]
const engineeringChallenges = [
  ['Duplicate Event Processing', 'Webhook events occasionally arrived multiple times from external providers.', 'Implemented idempotency validation, cache locking, and duplicate detection mechanisms.', FiRepeat, 'bg-orange-500/15 text-orange-400'],
  ['Message Loop Prevention', 'AI-generated responses could trigger recursive webhook processing.', 'Implemented echo suppression and intelligent event filtering to prevent loops.', FiRefreshCw, 'bg-purple-500/15 text-purple-400'],
  ['Secure Credential Handling', 'Managing multiple integration tokens introduced security risks.', 'Built encrypted credential storage using Fernet encryption and controlled decryption workflows.', FiLock, 'bg-amber-500/15 text-amber-400'],
  ['Multi-Tenant Routing', 'Multiple organizations shared the same infrastructure.', 'Implemented tenant-isolated conversation management and routing systems.', FiGitBranch, 'bg-violet-500/15 text-violet-400'],
]
const results = [
  ['Unified Messaging', 'Single communication layer across channels.', FiMessageCircle, 'bg-blue-500/15 text-blue-400'],
  ['Multi-Channel Support', 'Messenger, Instagram, and Slack.', FaInstagram, 'bg-pink-500/15 text-pink-400'],
  ['Secure Integrations', 'Encrypted credential and token management.', FiShield, 'bg-emerald-500/15 text-emerald-400'],
  ['Reliable Processing', 'Idempotent event handling and duplicate prevention.', FiGitBranch, 'bg-orange-500/15 text-orange-400'],
  ['Tenant Isolation', 'Independent chatbot deployments.', FiLayers, 'bg-cyan-500/15 text-cyan-400'],
  ['Production Ready', 'Monitoring, observability, and reliability controls.', FiServer, 'bg-purple-500/15 text-purple-400'],
]
const keyResults = [
  ['3+', 'Channels Integrated', FiMessageCircle, 'bg-blue-500/15 text-blue-400'],
  ['10K+', 'Messages Processed Daily', FiMessageCircle, 'bg-yellow-500/15 text-yellow-400'],
  ['99.9%', 'Event Processing Reliability', FiShield, 'bg-orange-500/15 text-orange-400'],
  ['Multi-Tenant', 'Isolated Deployments', FiLayers, 'bg-purple-500/15 text-purple-400'],
  ['Secure', 'Token & Data Protection', FiLock, 'bg-cyan-500/15 text-cyan-400'],
  ['Production Ready', 'Monitoring & Reliability', FiServer, 'bg-emerald-500/15 text-emerald-400'],
]
const snapshotItems = [
  [FiGrid, 'Type', 'Integration Platform'],
  [FiCpu, 'Role', 'Full-Stack & AI Automation Engineer'],
  [FiBriefcase, 'Duration', '2025 - Present'],
  [FiServer, 'Environment', 'Production'],
  [FiMessageCircle, 'Associated With', 'Enterprise AI Chatbot Platform'],
]

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function DemoThumbnail() {
  return (
    <div className="relative mx-auto aspect-[1.94/1] w-full max-w-xl rounded-xl border border-white/20 bg-[#101b2b] p-3 shadow-2xl shadow-blue-950/70">
      <img
        src={omnichannelImage}
        alt="Omnichannel AI chatbot integration"
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  )
}

function OmnichannelProject() {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"><FiArrowLeft />Back to Projects</Link>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-400">Featured Case Study</span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">Omnichannel AI Chatbot Integrations (Meta + Slack)</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">Production-grade messaging and automation platform connecting AI chatbots with Meta Messenger, Instagram, and Slack through a unified routing, automation, and conversation management infrastructure.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                {heroTags.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2 py-1">
                    <Icon className="text-blue-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <DemoThumbnail />
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            <ProjectLeftSidebar
              cardClass={card}
              sections={sections}
              info={projectInfo}
            />

            <div className="min-w-0">
              <div className="divide-y divide-white/10">
                <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title><p className="mt-4 leading-7 text-slate-300">This omnichannel messaging platform enables organizations to connect AI assistants with customer-facing communication channels including Facebook Messenger, Instagram Messaging, and Slack.</p><p className="mt-3 leading-7 text-slate-300">The system acts as the communication layer of a larger enterprise AI ecosystem, providing unified message routing, conversation synchronization, webhook processing, and operational observability.</p><p className="mt-3 leading-7 text-slate-300">By centralizing communication workflows, organizations can deliver consistent AI-powered experiences across multiple channels while maintaining scalability, security, and reliability.</p></section>
                <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title><p className="mt-4 leading-7 text-slate-300">Organizations often manage customer interactions across multiple disconnected messaging platforms. This creates operational complexity and introduces challenges around:</p><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{challenges.map((item) => { const Icon = challengeIcons[item]; return <div key={item} className={`${card} flex items-center gap-3 p-3 text-xs`}><Icon className="shrink-0 text-blue-400" />{item}</div> })}</div><p className="mt-4 leading-7 text-slate-300">The platform needed a centralized communication infrastructure capable of processing messaging events at scale while maintaining security and operational reliability.</p></section>
                <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{built.map(([name, description, Icon, iconClass]) => <article key={name} className={`${card} p-4 text-center`}><Icon className={`mx-auto text-4xl ${iconClass}`} /><h3 className="mt-3 text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="key-contributions" className="py-7"><Title icon={FiTarget}>Key Contributions</Title><div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{contributions.map(([name, description, Icon, iconClass]) => <article key={name} className={`${card} p-4`}><div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}><Icon className="text-xl" /></div><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="architecture" className="py-7"><Title icon={FiServer}>Architecture Overview</Title><button type="button" onClick={() => setIsArchitectureOpen(true)} className={`${card} group relative mt-5 block w-full overflow-hidden p-3 text-left`}><img src={architectureImage} alt="Omnichannel architecture overview" className="h-auto w-full rounded-lg object-contain" /><span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/30 bg-[#020817]/80 text-blue-400 opacity-0 transition group-hover:opacity-100"><FiMaximize2 /></span></button></section>
                <section id="engineering-challenges" className="py-7"><Title icon={FiCode}>Engineering Challenges</Title><div className="mt-5 grid gap-3 sm:grid-cols-2">{engineeringChallenges.map(([name, problem, solution, Icon, iconClass]) => <article key={name} className={`${card} p-4`}><div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}><Icon className="text-xl" /></div><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs font-semibold text-blue-400">Problem</p><p className="mt-1 text-xs leading-5 text-slate-400">{problem}</p><p className="mt-3 text-xs font-semibold text-blue-400">Solution</p><p className="mt-1 text-xs leading-5 text-slate-400">{solution}</p></article>)}</div></section>
                <section id="results-&-impact" className="py-7"><Title icon={FiGrid}>Results & Impact</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{results.map(([name, description, Icon, iconClass]) => <article key={name} className={`${card} p-4 text-center`}><div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg ${iconClass}`}><Icon className="text-2xl" /></div><h3 className="mt-4 text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
              </div>
            </div>

            <aside className="space-y-5">
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Snapshot</h2><div className="mt-5 space-y-5 text-sm">{snapshotItems.map(([Icon, label, value]) => <div key={label} className="flex gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10"><Icon className="text-lg text-blue-400" /></div><p><span className="text-xs text-slate-400">{label}</span><br /><b className="text-white">{value}</b></p></div>)}</div></div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2><div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Highlights</h2><div className="mt-5 space-y-3 text-sm text-slate-300">{['Unified messaging architecture', 'Messenger integration', 'Instagram integration', 'Slack integration', 'Secure webhook processing', 'Tenant-aware routing', 'Encrypted token storage', 'Event reliability controls', 'Production observability'].map((item) => <p key={item} className="flex gap-2"><FiCheckCircle className="shrink-0 text-blue-400" />{item}</p>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Key Results</h2><div className="mt-5 space-y-5">{keyResults.map(([value, label, Icon, iconClass]) => <div key={label} className="flex gap-3"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${iconClass}`}><Icon className="text-xl" /></div><p><b className="text-lg text-blue-400">{value}</b><br /><span className="text-xs text-slate-400">{label}</span></p></div>)}</div></div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/30 to-purple-700/30 p-5"><div className="flex gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/20"><FiSend className="text-2xl text-blue-300" /></div><div><h2 className="text-sm font-bold">Need Omnichannel Messaging Infrastructure?</h2><p className="mt-2 text-xs leading-5 text-slate-300">I help businesses build scalable messaging systems, chatbot integrations, workflow automation platforms, and AI-powered communication solutions.</p><Link to="/#contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-xs font-semibold text-white hover:bg-blue-500">Book a Discovery Call <FiArrowRight /></Link></div></div></div>
            </aside>
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
              alt="Omnichannel architecture overview enlarged"
              className="max-h-[92vh] w-full rounded-xl border border-white/10 object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default OmnichannelProject

