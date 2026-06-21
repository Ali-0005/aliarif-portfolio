import {
  FiBox,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiLink,
  FiMessageCircle,
  FiPackage,
  FiRefreshCw,
  FiServer,
  FiZap,
} from 'react-icons/fi'

const technologyGroups = [
  {
    title: 'Backend',
    icon: FiServer,
    color: 'text-emerald-400',
    border: 'border-emerald-400/15',
    technologies: ['Python', 'Django', 'DRF', 'PostgreSQL', 'PostGIS'],
  },
  {
    title: 'AI & Systems',
    icon: FiCpu,
    color: 'text-violet-400',
    border: 'border-violet-400/15',
    technologies: ['OpenAI', 'Pinecone', 'Fireworks AI', 'Replicate', 'RAG Pipelines'],
  },
  {
    title: 'Cloud & DevOps',
    icon: FiCloud,
    color: 'text-sky-400',
    border: 'border-sky-400/15',
    technologies: ['AWS (EC2, S3)', 'CloudFront', 'Route53', 'Docker', 'CloudWatch'],
  },
  {
    title: 'Automation & Queues',
    icon: FiZap,
    color: 'text-lime-400',
    border: 'border-lime-400/15',
    technologies: ['Celery', 'Redis', 'RabbitMQ', 'Webhooks', 'Async Processing'],
  },
  {
    title: 'Frontend',
    icon: FiGitBranch,
    color: 'text-pink-400',
    border: 'border-pink-400/15',
    technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Axios', 'Vite'],
  },
]

const itemIcons = [
  FiCode,
  FiLayers,
  FiDatabase,
  FiPackage,
  FiBox,
  FiRefreshCw,
  FiLink,
  FiMessageCircle,
]

function TechStackSection() {
  return (
    <section className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
          Technologies I Work With
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {technologyGroups.map((group) => {
            const GroupIcon = group.icon

            return (
              <article
                key={group.title}
                className={`rounded-2xl border bg-[#0b1424]/85 p-5 shadow-xl shadow-black/20 ${group.border}`}
              >
                <div className="flex items-center gap-3">
                  <GroupIcon className={`text-2xl ${group.color}`} />
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>

                <ul className="mt-5 space-y-4">
                  {group.technologies.map((technology, index) => {
                    const ItemIcon = itemIcons[index % itemIcons.length]

                    return (
                      <li
                        key={technology}
                        className="flex items-center gap-3 text-sm font-medium text-slate-300"
                      >
                        <ItemIcon className={`shrink-0 text-base ${group.color}`} />
                        {technology}
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
