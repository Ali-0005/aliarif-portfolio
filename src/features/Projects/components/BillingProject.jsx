import { useState } from 'react'
import {
  FiActivity, FiAlertCircle, FiArrowLeft, FiBarChart2, FiBriefcase, FiCalendar,
  FiCheckCircle, FiCloud, FiCreditCard, FiDollarSign, FiFileText, FiGift,
  FiGrid, FiLayers, FiMaximize2, FiPackage, FiRefreshCw, FiSend, FiServer, FiSettings, FiShield,
  FiTag, FiTarget, FiTrendingDown, FiTrendingUp, FiUser, FiUsers, FiZap,
  FiX,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'
import billingCover from '../../../assets/cover/Billing.png'
import architectureImage from '../../../assets/billing_architecture.png'
import ProjectLeftSidebar from './ProjectLeftSidebar'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Engineering Challenges', 'Technologies', 'Results & Impact', 'Outcome']
const projectInfo = [
  { icon: 'briefcase', label: 'Project Type', value: 'Backend Project' },
  { icon: 'grid', label: 'Industry', value: 'SaaS / Fintech' },
  { icon: 'calendar', label: 'Duration', value: 'Jan 2024 - Present' },
  { icon: 'cloud', label: 'Environment', value: 'Production' },
  { icon: 'briefcase', label: 'Associated With', value: 'Enterprise AI Chatbot Platform' },
]
const needs = [
  [FiPackage, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'Subscription Plans'],
  [FiGift, 'text-sky-400 bg-sky-500/10 border-sky-400/20', 'Free Trials'],
  [FiSettings, 'text-purple-400 bg-purple-500/10 border-purple-400/20', 'Add-ons'],
  [FiFileText, 'text-amber-400 bg-amber-500/10 border-amber-400/20', 'Invoices'],
  [FiTag, 'text-orange-400 bg-orange-500/10 border-orange-400/20', 'Coupons & Discounts'],
  [FiUsers, 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20', 'Customer Onboarding'],
  [FiAlertCircle, 'text-yellow-400 bg-yellow-500/10 border-yellow-400/20', 'Payment Failures'],
  [FiBarChart2, 'text-cyan-400 bg-cyan-500/10 border-cyan-400/20', 'Business Reporting'],
  [FiActivity, 'text-green-400 bg-green-500/10 border-green-400/20', 'Customer Lifecycle Tracking'],
]
const features = [
  [FiCreditCard, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'Subscription Billing System', 'Flexible subscription management with plans, trials, add-ons, coupons and renewals.'],
  [FiDollarSign, 'text-purple-400 bg-purple-500/10 border-purple-400/20', 'Stripe Integration', 'End-to-end Stripe integration for payments, checkout, and webhooks.'],
  [FiFileText, 'text-green-400 bg-green-500/10 border-green-400/20', 'Invoice Automation', 'Automated invoice generation, tracking and PDF invoice delivery.'],
  [FiUsers, 'text-amber-400 bg-amber-500/10 border-amber-400/20', 'Customer Lifecycle', 'Onboarding, emails, reminders, and engagement automation.'],
  [FiBarChart2, 'text-cyan-400 bg-cyan-500/10 border-cyan-400/20', 'Analytics & BI', 'Revenue tracking, customer insights, and business performance reports.'],
  [FiShield, 'text-pink-400 bg-pink-500/10 border-pink-400/20', 'Monitoring & Reliability', 'Operational visibility, alerts, error tracking and reliability controls.'],
]
const contributions = [
  [FiLayers, 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20', 'Subscription Architecture', 'Designed a flexible architecture supporting multiple pricing models, upgrades, downgrades, add-ons, trials, and coupons.'],
  [FiCreditCard, 'text-purple-400 bg-purple-500/10 border-purple-400/20', 'Stripe Payment Infrastructure', 'Integrated Stripe Checkout, Payments, Subscriptions, Invoices, and Webhooks with secure and scalable workflows.'],
  [FiRefreshCw, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'Billing Workflow Automation', 'Built event-driven workflows to process billing events, sync data, and maintain financial accuracy.'],
  [FiBarChart2, 'text-sky-400 bg-sky-500/10 border-sky-400/20', 'Business Intelligence Layer', 'Developed analytics pipelines and dashboards to track revenue, MRR, customer growth, churn, and payment performance.'],
  [FiUser, 'text-amber-400 bg-amber-500/10 border-amber-400/20', 'Customer Lifecycle Automation', 'Automated onboarding, trial reminders, invoice emails, payment alerts, and subscription notifications using AWS SES.'],
  [FiShield, 'text-green-400 bg-green-500/10 border-green-400/20', 'Reliability & Error Handling', 'Implemented retries, idempotency, validation, rollback handling, and audit logging for reliable billing operations.'],
]
const technologies = {
  Backend: ['Python', 'Django', 'DRF'],
  'Billing & Payments': ['Stripe API', 'Stripe Checkout', 'Stripe Webhooks'],
  Database: ['PostgreSQL'],
  Automation: ['Celery', 'Redis'],
  Notifications: ['Amazon SES'],
  Reporting: ['Analytics', 'PDF Generation', 'Business Intelligence'],
}
const engineeringChallenges = [
  ['Subscription Complexity', 'Managing plans, trials, coupons and add-ons while maintaining billing consistency.', 'Designed a flexible subscription architecture supporting multiple billing models.', FiPackage, 'bg-blue-500/15 text-blue-400'],
  ['Billing Synchronization', 'Ensuring billing events remain synchronized with platform state.', 'Implemented webhook pipelines with validation, retries, and idempotency controls.', FiRefreshCw, 'bg-orange-500/15 text-orange-400'],
  ['Business Visibility', 'Providing operational visibility into customer and revenue performance.', 'Built analytics dashboards and reporting pipelines for actionable insights.', FiBarChart2, 'bg-green-500/15 text-green-400'],
  ['Operational Automation', 'High manual effort in billing communications and lifecycle operations.', 'Automated emails, onboarding, notifications, and billing workflows using Celery.', FiCreditCard, 'bg-purple-500/15 text-purple-400'],
]
const results = [
  ['Subscription Automation', 'End-to-end automated billing workflows.', FiCreditCard, 'bg-blue-500/15 text-blue-400'],
  ['Revenue Visibility', 'Real-time revenue tracking & reporting.', FiDollarSign, 'bg-emerald-500/15 text-emerald-400'],
  ['Automated Invoicing', 'Reduced manual billing by 60%.', FiFileText, 'bg-purple-500/15 text-purple-400'],
  ['Customer Lifecycle', 'Automated onboarding & engagement.', FiUsers, 'bg-amber-500/15 text-amber-400'],
  ['Payment Reliability', 'High success rate with error handling.', FiActivity, 'bg-cyan-500/15 text-cyan-400'],
  ['Production Ready', 'Monitoring, logging & operational tooling.', FiShield, 'bg-pink-500/15 text-pink-400'],
]
const highlights = [
  'Subscription billing automation',
  'Stripe payment infrastructure',
  'Automated invoicing workflows',
  'Customer lifecycle management',
  'Revenue analytics & reporting',
  'Event-driven billing operations',
  'Automated notifications',
  'Payment reliability controls',
  'Production-ready monitoring',
]
const keyResults = [
  ['35% ↑', 'Increase in MRR Growth', FiTrendingUp, 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20', 'text-blue-400'],
  ['2.8K+', 'Active Subscriptions', FiUsers, 'text-purple-400 bg-purple-500/10 border-purple-400/20', 'text-blue-400'],
  ['98.7%', 'Payment Success Rate', FiShield, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'text-blue-400'],
  ['60% ↓', 'Manual Billing Effort', FiTrendingDown, 'text-orange-400 bg-orange-500/10 border-orange-400/20', 'text-orange-400'],
  ['Real-Time', 'Revenue Visibility', FiActivity, 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20', 'text-emerald-400'],
  ['100%', 'Invoice Accuracy', FiFileText, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'text-blue-400'],
]
const outcomeTags = ['Stripe Billing', 'Subscription Management', 'Revenue Analytics', 'Business Intelligence', 'Customer Lifecycle Automation', 'Production Ready']

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function BillingProject() {
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
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">Billing & Business Intelligence Platform</h1>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">Enterprise SaaS platform integrating subscriptions, payments, analytics, reporting, and customer lifecycle management to drive revenue growth and operational efficiency.</p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-200">
                <span className="flex items-center gap-2"><FiCreditCard className="text-blue-400" /> Stripe Billing</span>
                <span className="flex items-center gap-2"><FiRefreshCw className="text-blue-400" /> Subscription Management</span>
                <span className="flex items-center gap-2"><FiBarChart2 className="text-blue-400" /> Revenue Analytics</span>
                <span className="flex items-center gap-2"><FiZap className="text-blue-400" /> Workflow Automation</span>
              </div>
            </div>
            <img src={billingCover} alt="Billing and business intelligence platform cover" className="w-full object-contain" />
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            <ProjectLeftSidebar
              cardClass={card}
              sections={sections}
              ctaTitle="Need a similar solution?"
              ctaText="I can help you build robust billing systems, subscription platforms, and business intelligence solutions."
              info={projectInfo}
            />

            <div className="divide-y divide-white/10">
              <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title>
                <p className="mt-4 leading-7 text-slate-300">This billing and business intelligence platform serves as the financial and operational backbone of a large enterprise AI SaaS platform. It automates subscriptions, payments, invoicing, customer lifecycle workflows, and reporting to ensure revenue growth, operational efficiency, and data-driven decisions.</p>
              </section>
              <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title>
                <p className="mt-4 leading-7 text-slate-300">Managing a SaaS business requires handling multiple complex billing and operational needs.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{needs.map(([Icon, iconClass, item]) => <div key={item} className={`${card} flex items-center gap-3 p-3 text-xs`}><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${iconClass}`}><Icon className="text-lg" /></span>{item}</div>)}</div>
              </section>
              <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{features.map(([Icon, iconClass, label, description]) => <article key={label} className={`${card} p-4`}><div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg border ${iconClass}`}><Icon className="text-2xl" /></div><h3 className="text-sm font-semibold">{label}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div>
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
                    alt="Billing architecture overview"
                    className="w-full rounded-lg object-contain"
                  />
                  <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/30 bg-[#020817]/80 text-blue-400 opacity-0 transition group-hover:opacity-100">
                    <FiMaximize2 />
                  </span>
                </button>
              </section>
              <section id="engineering-challenges" className="py-7"><Title icon={FiLayers}>Engineering Challenges</Title>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">{engineeringChallenges.map(([name, challenge, solution, Icon, iconClass]) => <article key={name} className={`${card} p-4`}><div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}><Icon className="text-xl" /></div><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{challenge}</p><p className="mt-3 text-xs font-semibold text-blue-400">Solution</p><p className="mt-1 text-xs leading-5 text-slate-400">{solution}</p></article>)}</div>
              </section>
              <section id="results-&-impact" className="py-7"><Title icon={FiBarChart2}>Results & Impact</Title>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{results.map(([name, description, Icon, iconClass]) => <article key={name} className={`${card} p-4`}><div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${iconClass}`}><Icon className="text-2xl" /></div><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div>
              </section>
              <section id="outcome" className="py-7"><Title icon={FiTarget}>Outcome</Title>
                <p className="mt-4 leading-7 text-slate-300">The platform successfully became the financial backbone of the enterprise AI ecosystem, enabling seamless subscription management, automated billing operations, and deep business intelligence. By combining Stripe integration, workflow automation, analytics pipelines, and operational reporting, the platform delivers a reliable, scalable, and production-ready billing system that drives growth and efficiency.</p>
                <div className="mt-5 flex flex-wrap gap-2">{outcomeTags.map((item) => <span key={item} className="rounded-md border border-white/10 px-3 py-2 text-xs text-slate-300">{item}</span>)}</div>
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
                    [FiGrid, 'Type', 'Billing & BI Platform'],
                    [FiUser, 'Role', 'Backend Engineer'],
                    [FiCalendar, 'Duration', 'Jan 2024 - Present'],
                    [FiCloud, 'Environment', 'Production'],
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
                </div>
              </div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2>
                <div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div>
              </div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Highlights</h2>
                <div className="mt-5 space-y-4 text-sm text-slate-300">{highlights.map((item) => <p key={item} className="flex gap-3"><FiCheckCircle className="shrink-0 text-emerald-400" />{item}</p>)}</div>
              </div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Key Results</h2>
                <div className="mt-5 divide-y divide-white/10">{keyResults.map(([value, label, Icon, iconClass, valueClass]) => <div key={label} className="flex gap-4 py-3 first:pt-0 last:pb-0"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${iconClass}`}><Icon className="text-xl" /></div><p><b className={`text-xl ${valueClass}`}>{value}</b><br /><span className="text-xs text-slate-300">{label}</span></p></div>)}</div>
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
                  <h2 className="text-2xl font-bold">Need a Powerful Billing Platform?</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-300">I help businesses build scalable billing programs, integrate Stripe, automate workflows, and deliver data-driven insights.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500">Book a Discovery Call</Link>
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
              alt="Billing architecture overview enlarged"
              className="max-h-[92vh] w-full rounded-xl border border-white/10 object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default BillingProject
