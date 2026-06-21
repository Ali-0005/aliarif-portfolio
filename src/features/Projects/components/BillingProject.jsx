import {
  FiArrowLeft, FiBarChart2, FiBriefcase, FiCalendar, FiCheckCircle,
  FiCreditCard, FiGrid, FiLayers, FiMail, FiRefreshCw, FiServer,
  FiShield, FiTarget, FiTrendingUp, FiUser, FiZap,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Engineering Challenges', 'Technologies', 'Results & Impact', 'Outcome']
const needs = ['Subscription Plans', 'Free Trials', 'Add-ons', 'Invoices', 'Coupons & Discounts', 'Customer Onboarding', 'Payment Failures', 'Business Reporting', 'Customer Lifecycle Tracking']
const features = [
  ['Subscription Billing System', 'Flexible subscription management with plans, trials, add-ons, coupons and renewals.'],
  ['Stripe Integration', 'End-to-end Stripe integration for payments, checkout, and webhooks.'],
  ['Invoice Automation', 'Automated invoice generation, tracking and PDF invoice delivery.'],
  ['Customer Lifecycle', 'Onboarding, emails, reminders, and engagement automation.'],
  ['Analytics & BI', 'Revenue tracking, customer insights, and business performance reports.'],
  ['Monitoring & Reliability', 'Operational visibility, alerts, error tracking and reliability controls.'],
]
const contributions = [
  ['Subscription Architecture', 'Designed a flexible architecture supporting multiple pricing models, upgrades, downgrades, add-ons, trials, and coupons.'],
  ['Stripe Payment Infrastructure', 'Integrated Stripe Checkout, Payments, Subscriptions, Invoices, and Webhooks with secure and scalable payment processing workflows.'],
  ['Billing Workflow Automation', 'Built event-driven workflows to process billing events, sync data, and maintain financial accuracy across the platform.'],
  ['Business Intelligence Layer', 'Developed analytics pipelines and dashboards to track revenue, MRR, customer growth, churn, and payment performance.'],
  ['Customer Lifecycle Automation', 'Automated onboarding, trial reminders, invoice emails, payment alerts, and subscription status notifications using AWS SES.'],
  ['Reliability & Error Handling', 'Implemented retries, idempotency, validation, rollback handling, and audit logging to ensure reliable billing operations.'],
]
const technologies = {
  Backend: ['Python', 'Django', 'DRF'],
  'Billing & Payments': ['Stripe API', 'Stripe Checkout', 'Stripe Webhooks'],
  Database: ['PostgreSQL'],
  Automation: ['Celery', 'Redis'],
  Notifications: ['Amazon SES'],
  Reporting: ['Analytics', 'PDF Generation', 'Business Intelligence'],
}

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function Flow({ title, items, color = 'blue' }) {
  const border = color === 'green' ? 'border-emerald-400/30' : color === 'purple' ? 'border-purple-400/30' : 'border-blue-400/30'
  return <div className={`${card} p-4`}><p className="mb-4 text-center text-sm font-semibold">{title}</p><div className="space-y-2">{items.map((item) => <div key={item} className={`rounded-md border ${border} bg-white/[0.02] px-3 py-2 text-center text-xs text-slate-300`}>{item}</div>)}</div></div>
}

function BillingProject() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"><FiArrowLeft />Back to Projects</Link>
          <div className="mt-7 grid gap-7 lg:grid-cols-[190px_minmax(0,1fr)_280px]">
            <aside className="space-y-5">
              <nav className={`${card} p-3`}>{sections.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-blue-500/10 hover:text-blue-400">{item}</a>)}</nav>
              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950 to-purple-950 p-5"><p className="font-semibold">Need a similar solution?</p><p className="mt-3 text-sm leading-6 text-slate-400">I can help you build robust billing systems, subscription platforms, and business intelligence solutions.</p><Link to="/#contact" className="mt-4 inline-flex w-full justify-center rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold">Book a Discovery Call</Link></div>
              <div className={`${card} space-y-4 p-5 text-sm`}><h2 className="font-bold">Project Information</h2><p><FiBriefcase className="mr-2 inline text-blue-400" />Backend Project</p><p><FiGrid className="mr-2 inline text-blue-400" />SaaS / Fintech</p><p><FiCalendar className="mr-2 inline text-blue-400" />Jan 2024 – Present</p><p><FiServer className="mr-2 inline text-blue-400" />Production</p><p><FiLayers className="mr-2 inline text-blue-400" />Enterprise AI Chatbot Platform</p></div>
            </aside>

            <div className="min-w-0">
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_1.15fr]">
                <div><span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-400">Featured Case Study</span><h1 className="mt-5 text-4xl font-extrabold leading-tight">Billing & Business Intelligence Platform</h1><p className="mt-5 leading-8 text-slate-300">Enterprise SaaS platform integrating subscriptions, payments, analytics, reporting, and customer lifecycle management to drive revenue growth and operational efficiency.</p><div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">{['Stripe Billing', 'Subscription Management', 'Revenue Analytics', 'Business Intelligence', 'Customer Lifecycle Automation'].map((item) => <span key={item} className="rounded-md border border-white/10 px-2 py-1">{item}</span>)}</div></div>
                <div className={`${card} grid gap-3 p-5 sm:grid-cols-[1fr_1.2fr_1fr]`}>
                  <div className="flex flex-col items-center justify-center gap-5"><div className="rounded-lg border border-white/10 p-4 text-center text-xs"><FiUser className="mx-auto mb-2 text-2xl text-blue-400" />Customer</div><div className="rounded-lg border border-blue-400/30 px-5 py-4 text-xl font-bold text-blue-300">Stripe</div></div>
                  <div className="space-y-2">{['Stripe Checkout', 'Payment Processing', 'Stripe Webhooks', 'Billing Engine', 'Subscription Manager', 'Platform Access'].map((item) => <div key={item} className="rounded-lg border border-white/10 px-3 py-3 text-center text-xs">{item}</div>)}</div>
                  <div className="space-y-3">{[['MRR', '$128,540'], ['Active Subscriptions', '2,846'], ['Revenue', '$1.24M']].map(([name, value]) => <div key={name} className="rounded-lg border border-white/10 p-4"><p className="text-xs text-slate-400">{name}</p><b className="mt-2 block text-xl">{value}</b><FiTrendingUp className="mt-3 text-emerald-400" /></div>)}</div>
                </div>
              </div>

              <div className="mt-8 divide-y divide-white/10">
                <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title><p className="mt-4 leading-7 text-slate-300">This billing and business intelligence platform serves as the financial and operational backbone of a large enterprise AI SaaS platform. It automates subscriptions, payments, invoicing, customer lifecycle workflows, and reporting to ensure revenue growth, operational efficiency, and data-driven decisions.</p></section>
                <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title><p className="mt-4 leading-7 text-slate-300">Managing a SaaS business requires handling multiple complex billing and operational needs.</p><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{needs.map((item) => <div key={item} className={`${card} flex items-center gap-3 p-3 text-xs`}><FiRefreshCw className="shrink-0 text-blue-400" />{item}</div>)}</div></section>
                <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{features.map(([name, description]) => <article key={name} className={`${card} p-4 text-center`}><FiCreditCard className="mx-auto text-3xl text-blue-400" /><h3 className="mt-3 text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="key-contributions" className="py-7"><Title icon={FiZap}>Key Contributions</Title><div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{contributions.map(([name, description]) => <article key={name} className={`${card} p-4`}><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="architecture" className="py-7"><Title icon={FiServer}>Architecture Overview</Title><div className="mt-5 grid gap-3 md:grid-cols-3"><Flow title="1. Billing Flow" items={['Customer', 'Stripe Checkout', 'Payment Processing', 'Stripe Webhooks', 'Billing Service', 'Subscription Manager', 'Platform Access']} /><Flow title="2. Analytics Pipeline" color="green" items={['Subscriptions • Payments • Customers • Usage Data', 'Analytics Engine', 'Business Intelligence', 'Reports & Dashboards']} /><Flow title="3. Notification Workflow" color="purple" items={['Billing Event', 'Webhook Processing', 'Business Rules', 'Amazon SES', 'Customer Notification']} /></div></section>
                <section id="engineering-challenges" className="py-7"><Title icon={FiLayers}>Engineering Challenges</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[['Subscription Complexity', 'Designed a flexible subscription architecture supporting multiple billing models.'], ['Billing Synchronization', 'Implemented webhook pipelines with validation, retries, and idempotency controls.'], ['Business Visibility', 'Built analytics dashboards and reporting pipelines for actionable insights.'], ['Operational Automation', 'Automated emails, onboarding, notifications, and billing workflows using Celery.']].map(([name, text]) => <article key={name} className={`${card} p-4`}><h3 className="text-sm font-semibold">{name}</h3><p className="mt-3 text-xs leading-5 text-slate-400">{text}</p></article>)}</div></section>
                <section id="results-&-impact" className="py-7"><Title icon={FiBarChart2}>Results & Impact</Title><div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-6">{['Subscription Automation', 'Revenue Visibility', 'Automated Invoicing', 'Customer Lifecycle', 'Payment Reliability', 'Production Ready'].map((item) => <div key={item} className={`${card} p-4 text-center text-xs font-semibold`}><FiCheckCircle className="mx-auto mb-3 text-xl text-blue-400" />{item}</div>)}</div></section>
                <section id="outcome" className="py-7"><Title icon={FiTarget}>Outcome</Title><p className="mt-4 leading-7 text-slate-300">The platform successfully became the financial backbone of the enterprise AI ecosystem, enabling seamless subscription management, automated billing operations, and deep business intelligence. By combining Stripe integration, workflow automation, analytics pipelines, and operational reporting, the platform delivers a reliable, scalable, and production-ready billing system that drives growth and efficiency.</p></section>
              </div>
            </div>

            <aside className="space-y-5">
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Snapshot</h2><div className="mt-5 space-y-4 text-sm text-slate-300"><p>Type<br /><b className="text-white">Billing & BI Platform</b></p><p>Role<br /><b className="text-white">Backend Engineer</b></p><p>Duration<br /><b className="text-white">Jan 2024 – Present</b></p><p>Environment<br /><b className="text-white">Production</b></p><p>Associated With<br /><b className="text-white">Enterprise AI Chatbot Platform</b></p></div></div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2><div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Highlights</h2><div className="mt-5 space-y-3 text-sm text-slate-300">{['Subscription billing automation', 'Stripe payment infrastructure', 'Automated invoicing workflows', 'Customer lifecycle management', 'Revenue analytics & reporting', 'Event-driven billing operations', 'Automated notifications', 'Payment reliability controls', 'Production-ready monitoring'].map((item) => <p key={item} className="flex gap-2"><FiCheckCircle className="shrink-0 text-blue-400" />{item}</p>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Key Results</h2><div className="mt-5 space-y-5">{[['35% ↑', 'Increase in MRR Growth'], ['2.8K+', 'Active Subscriptions'], ['98.7%', 'Payment Success Rate'], ['60% ↓', 'Manual Billing Effort'], ['Real-Time', 'Revenue Visibility'], ['100%', 'Invoice Accuracy']].map(([value, label]) => <div key={label} className="flex gap-3"><FiShield className="mt-1 shrink-0 text-emerald-400" /><p><b className="text-lg text-blue-400">{value}</b><br /><span className="text-xs text-slate-400">{label}</span></p></div>)}</div></div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BillingProject
