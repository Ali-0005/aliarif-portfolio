import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import billingThumbnail from '../../../assets/thumbnails/billing_thumbnail.png'
import casamereThumbnail from '../../../assets/thumbnails/casamere_thumbnail.png'
import omniChannelThumbnail from '../../../assets/thumbnails/omni_channel_thumbnail.png'
import ragThumbnail from '../../../assets/thumbnails/rag_thumbnail.png'
import socifiyThumbnail from '../../../assets/thumbnails/socifiy_thumbnail.png'

const projects = [
  {
    title: 'Real Estate & Community Discovery Platform (Casamere)',
    type: 'Flagship Project',
    description:
      'MLS-backed platform with AI-powered media workflows and geospatial search.',
    result: '88% Search Performance Improvement',
    thumbnail: casamereThumbnail,
    href: '/projects/django-real-estate-platform',
  },
  {
    title: 'SOCIFIY – Social Media Management SaaS',
    type: 'SaaS Project',
    description:
      'Social media management SaaS for scheduling, publishing, and team collaboration.',
    result: 'High-volume scheduling engine built',
    thumbnail: socifiyThumbnail,
    href: '/projects/social-media-management-platform',
  },
  {
    title: 'Omnichannel AI Chatbot Integrations',
    type: 'Integration Project',
    description:
      'Messaging platform connecting AI chatbots with Meta, Slack, and business channels.',
    result: 'Real-time routing with high reliability',
    thumbnail: omniChannelThumbnail,
    href: '/projects/omnichannel-ai-chatbot-platform',
  },
  {
    title: 'RAG-Based AI Chatbot Engine',
    type: 'AI Systems Project',
    description:
      'RAG system with vector search, semantic retrieval, and automated training pipelines.',
    result: 'Scalable RAG pipeline with Pinecone',
    thumbnail: ragThumbnail,
    href: '/projects/rag-ai-chatbot-engine',
  },
  {
    title: 'Billing & BI Platform',
    type: 'Backend Project',
    description:
      'Enterprise billing platform with subscriptions, analytics, and customer lifecycle management.',
    result: 'Stripe integration with automated workflows',
    thumbnail: billingThumbnail,
    href: '/projects/stripe-billing-platform',
  },
]

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-base">
          Projects
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {projects.map((project) => {
            const Card = project.href ? Link : 'a'
            const cardProps = project.href ? { to: project.href } : { href: '#contact' }

            return (
              <Card
                key={project.title}
                {...cardProps}
                className="group flex overflow-hidden rounded-2xl border border-blue-400/20 bg-[#0b1424]/85 shadow-xl shadow-black/20 transition hover:border-blue-300/60 hover:bg-[#0f1a2c]"
              >
                <div className="flex w-full flex-col">
                  <div className="h-32 overflow-hidden bg-[#0f1a2c]">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
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

                    <span className="mt-auto inline-flex items-center gap-2 border-t border-white/5 pt-5 text-sm font-semibold text-blue-400">
                      Case Study
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
