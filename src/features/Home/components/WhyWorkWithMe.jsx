import {
  FiBriefcase,
  FiCloud,
  FiCode,
  FiLayers,
  FiMessageCircle,
  FiShield,
  FiUser,
} from 'react-icons/fi'

const reasons = [
  {
    title: '5+ Years of Engineering Experience',
    icon: FiUser,
    color: 'text-blue-400',
    border: 'border-blue-400/30',
    background: 'bg-blue-500/10',
  },
  {
    title: 'Production Systems Serving Real Users',
    icon: FiShield,
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
    background: 'bg-emerald-500/10',
  },
  {
    title: 'AI & RAG Systems Deep Expertise',
    icon: FiCode,
    color: 'text-violet-400',
    border: 'border-violet-400/30',
    background: 'bg-violet-500/10',
  },
  {
    title: 'End-to-End SaaS Development Capability',
    icon: FiLayers,
    color: 'text-amber-300',
    border: 'border-amber-400/30',
    background: 'bg-amber-500/10',
  },
  {
    title: 'Cloud-Native Architecture & DevOps',
    icon: FiCloud,
    color: 'text-cyan-400',
    border: 'border-cyan-400/30',
    background: 'bg-cyan-500/10',
  },
  {
    title: 'Direct Founder Collaboration & Communication',
    icon: FiMessageCircle,
    color: 'text-fuchsia-400',
    border: 'border-fuchsia-400/30',
    background: 'bg-fuchsia-500/10',
  },
  {
    title: 'Flexible Engagement: Freelance & Part-Time',
    icon: FiBriefcase,
    color: 'text-orange-300',
    border: 'border-orange-400/30',
    background: 'bg-orange-500/10',
  },
]

function WhyWorkWithMe() {
  return (
    <section className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
          Why Clients Work With Me
        </p>

        <div className="mt-4 rounded-2xl border border-blue-400/15 bg-[#0b1424]/85 px-5 py-6 shadow-xl shadow-black/20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-0">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <div
                  key={reason.title}
                  className={`flex items-start gap-3 xl:px-4 ${
                    index > 0 ? 'xl:border-l xl:border-white/5' : ''
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${reason.border} ${reason.background} ${reason.color}`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-slate-200">
                    {reason.title}
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

export default WhyWorkWithMe
