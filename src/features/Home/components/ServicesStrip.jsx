import {
  FiBox,
  FiCloud,
  FiCode,
  FiCreditCard,
  FiGitBranch,
  FiMessageCircle,
  FiZap,
} from 'react-icons/fi'

const services = [
  {
    title: 'AI Chatbots & RAG Systems',
    icon: FiMessageCircle,
    color: 'text-orange-300',
    border: 'border-orange-400/30',
    background: 'bg-orange-500/10',
  },
  {
    title: 'SaaS Platforms',
    icon: FiBox,
    color: 'text-blue-400',
    border: 'border-blue-400/30',
    background: 'bg-blue-500/10',
  },
  {
    title: 'Workflow Automation',
    icon: FiGitBranch,
    color: 'text-violet-400',
    border: 'border-violet-400/30',
    background: 'bg-violet-500/10',
  },
  {
    title: 'Stripe Billing Systems',
    icon: FiCreditCard,
    color: 'text-sky-400',
    border: 'border-sky-400/30',
    background: 'bg-sky-500/10',
  },
  {
    title: 'Backend APIs & Microservices',
    icon: FiCode,
    color: 'text-fuchsia-400',
    border: 'border-fuchsia-400/30',
    background: 'bg-fuchsia-500/10',
  },
  {
    title: 'AWS Cloud Infrastructure',
    icon: FiCloud,
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
    background: 'bg-emerald-500/10',
  },
  {
    title: 'MVP Development for Startups',
    icon: FiZap,
    color: 'text-amber-300',
    border: 'border-amber-400/30',
    background: 'bg-amber-500/10',
  },
]

function ServicesStrip() {
  return (
    <section className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
          What I Can Help You Build
        </p>

        <div className="mt-4 rounded-2xl border border-blue-400/15 bg-[#0b1424]/85 p-5 shadow-xl shadow-black/20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className="flex items-center gap-3 xl:min-w-0"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${service.border} ${service.background} ${service.color}`}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-slate-100">
                    {service.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesStrip
