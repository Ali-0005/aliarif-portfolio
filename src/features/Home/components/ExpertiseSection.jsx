import { FiBox, FiCloud, FiCode, FiZap } from 'react-icons/fi'
import { LuBrainCircuit } from 'react-icons/lu'

const expertise = [
  {
    title: 'Backend Engineering',
    description:
      'Multi-tenant SaaS architectures, secure REST APIs, authentication systems, database optimization, and scalable backend design.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    icon: FiCode,
    color: 'text-blue-400',
    iconBorder: 'border-blue-400/25',
    iconBackground: 'bg-blue-500/10',
  },
  {
    title: 'AI Systems & RAG',
    description:
      'Context-aware AI agents, semantic search, vector databases, RAG pipelines, embeddings, and intelligent automation workflows.',
    tags: ['OpenAI', 'Pinecone', 'RAG'],
    icon: LuBrainCircuit,
    color: 'text-fuchsia-400',
    iconBorder: 'border-fuchsia-400/25',
    iconBackground: 'bg-fuchsia-500/10',
  },
  {
    title: 'SaaS Development',
    description:
      'Production-grade SaaS platforms with subscription billing, team collaboration, workflow automation, and analytics.',
    tags: ['Stripe', 'RBAC', 'Multi-tenant'],
    icon: FiBox,
    color: 'text-emerald-400',
    iconBorder: 'border-emerald-400/25',
    iconBackground: 'bg-emerald-500/10',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud-native deployments, containerized environments, CI/CD pipelines, monitoring, and scalable infrastructure.',
    tags: ['AWS', 'Docker', 'CI/CD'],
    icon: FiCloud,
    color: 'text-blue-400',
    iconBorder: 'border-blue-400/25',
    iconBackground: 'bg-blue-500/10',
  },
  {
    title: 'Integrations & Automation',
    description:
      'Third-party integrations, webhook architectures, asynchronous processing, business automation, and messaging platforms.',
    tags: ['Celery', 'Redis', 'APIs'],
    icon: FiZap,
    color: 'text-amber-400',
    iconBorder: 'border-amber-400/25',
    iconBackground: 'bg-amber-500/10',
  },
]

function ExpertiseSection() {
  return (
    <section className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
          Core Expertise
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {expertise.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="flex min-h-[292px] flex-col rounded-2xl border border-blue-400/20 bg-[#0b1424]/85 p-5 shadow-xl shadow-black/20"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.iconBorder} ${item.iconBackground} ${item.color}`}
                >
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
