import {
  FiArrowRight,
  FiBarChart2,
  FiMapPin,
  FiMessageSquare,
  FiShare2,
  FiUsers,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Real Estate & Community Discovery Platform (Casamere)',
    type: 'Flagship Project',
    description:
      'MLS-backed platform with AI-powered media workflows and geospatial search.',
    result: '88% Search Performance Improvement',
    icon: FiMapPin,
    accent: 'from-sky-100 to-blue-200',
    href: '/projects/real-estate',
  },
  {
    title: 'SOCIFIY – Social Media Management SaaS',
    type: 'SaaS Project',
    description:
      'Social media management SaaS for scheduling, publishing, and team collaboration.',
    result: 'High-volume scheduling engine built',
    icon: FiUsers,
    accent: 'from-slate-100 to-blue-100',
  },
  {
    title: 'Omnichannel AI Chatbot Integrations',
    type: 'Integration Project',
    description:
      'Messaging platform connecting AI chatbots with Meta, Slack, and business channels.',
    result: 'Real-time routing with high reliability',
    icon: FiMessageSquare,
    accent: 'from-blue-50 to-indigo-100',
  },
  {
    title: 'RAG-Based AI Chatbot Engine',
    type: 'AI Systems Project',
    description:
      'RAG system with vector search, semantic retrieval, and automated training pipelines.',
    result: 'Scalable RAG pipeline with Pinecone',
    icon: FiShare2,
    accent: 'from-slate-100 to-cyan-100',
  },
  {
    title: 'Billing & BI Platform',
    type: 'Backend Project',
    description:
      'Enterprise billing platform with subscriptions, analytics, and customer lifecycle management.',
    result: 'Stripe integration with automated workflows',
    icon: FiBarChart2,
    accent: 'from-indigo-50 to-violet-100',
  },
]

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
            Featured Projects
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-500/5 px-3 py-2 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/10"
          >
            View All Projects
            <FiArrowRight />
          </a>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article
                key={project.title}
                className="flex overflow-hidden rounded-2xl border border-blue-400/20 bg-[#0b1424]/85 shadow-xl shadow-black/20"
              >
                <div className="flex w-full flex-col">
                  <div
                    className={`flex h-32 items-center justify-center bg-gradient-to-br ${project.accent}`}
                  >
                    <div className="rounded-2xl border border-blue-400/20 bg-white/80 p-5 shadow-lg">
                      <Icon className="text-4xl text-blue-600" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-bold leading-6 text-white">
                      {project.title}
                    </h3>
                    <span className="mt-3 w-fit rounded-full border border-indigo-400/20 bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                      {project.type}
                    </span>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {project.description}
                    </p>
                    <p className="mt-5 text-base font-semibold leading-6 text-emerald-400">
                      {project.result}
                    </p>

                    {project.href ? (
                      <Link
                        to={project.href}
                        className="mt-auto inline-flex items-center gap-2 border-t border-white/5 pt-5 text-sm font-semibold text-blue-400"
                      >
                        Case Study
                        <FiArrowRight />
                      </Link>
                    ) : (
                      <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 border-t border-white/5 pt-5 text-sm font-semibold text-blue-400"
                    >
                      Case Study
                      <FiArrowRight />
                    </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
