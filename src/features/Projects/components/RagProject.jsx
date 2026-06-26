import { useState } from 'react'
import {
  FiArrowLeft, FiBarChart2, FiBookOpen, FiBriefcase, FiCalendar, FiCheckCircle,
  FiCloud, FiDatabase, FiGrid, FiLayers, FiMaximize2, FiMessageSquare, FiSearch, FiSend,
  FiServer, FiTarget, FiUser, FiZap,
  FiX,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'
import ragCover from '../../../assets/cover/Rag.png'
import ragCoverWebp from '../../../assets/cover/Rag.webp'
import architectureImage from '../../../assets/rag_architecture.png'
import ProjectLeftSidebar from './ProjectLeftSidebar'
import { trackBookCallClick } from '../../../shared/lib/analytics'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Results & Impact', 'Outcome']
const projectInfo = [
  { icon: 'briefcase', label: 'Project Type', value: 'AI Platform / RAG System' },
  { icon: 'grid', label: 'Industry', value: 'AI / SaaS / Automation' },
  { icon: 'calendar', label: 'Duration', value: 'Jan 2024 - Present' },
  { icon: 'user', label: 'Role', value: 'AI Systems & Backend Engineer' },
  { icon: 'user', label: 'Team', value: 'Solo Engineer' },
  { icon: 'cloud', label: 'Deployment', value: 'AWS Cloud' },
]
const challenges = [
  'Train chatbots using proprietary business content',
  'Support documents, websites, spreadsheets, and Q&A sources',
  'Generate context-aware answers grounded in retrieved data',
  'Scale across multiple chatbots, teams, and knowledge bases',
  'Maintain retrieval accuracy, observability, and reliability',
]
const features = [
  [FiSearch, 'RAG Engine'], [FiBookOpen, 'Multi-Source Training'],
  [FiDatabase, 'Vector Search'], [FiMessageSquare, 'Conversational Memory'],
  [FiBarChart2, 'Analytics & Monitoring'], [FiZap, 'Automation Pipelines'],
]
const contributions = [
  [FiLayers, 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20', 'RAG Architecture', 'Designed and implemented retrieval, context construction, prompt orchestration, and OpenAI response generation.'],
  [FiBookOpen, 'text-purple-400 bg-purple-500/10 border-purple-400/20', 'Training Pipelines', 'Built automated workflows to process websites, PDFs, DOCX, XLSX, text files, and Q&A datasets into embeddings.'],
  [FiDatabase, 'text-blue-400 bg-blue-500/10 border-blue-400/20', 'Vector Search Infrastructure', 'Integrated Pinecone for high-performance semantic search, ranking, and context retrieval at scale.'],
  [FiSearch, 'text-sky-400 bg-sky-500/10 border-sky-400/20', 'Content Processing', 'Developed async crawlers and pipelines for extraction, chunking, cleaning, and incremental retraining.'],
  [FiMessageSquare, 'text-amber-400 bg-amber-500/10 border-amber-400/20', 'Conversational Intelligence', 'Implemented session memory, prompt orchestration, and multi-turn interaction handling.'],
  [FiBarChart2, 'text-green-400 bg-green-500/10 border-green-400/20', 'Monitoring & Reliability', 'Added analytics, logging, and testing workflows for retrieval accuracy and production readiness.'],
]
const technologies = {
  'AI & Retrieval': ['OpenAI GPT', 'Pinecone', 'Embeddings', 'Semantic Search', 'Vector Databases'],
  Backend: ['Python', 'Django', 'Django REST Framework'],
  Database: ['PostgreSQL'],
  Automation: ['Celery', 'Redis'],
  'Content Processing': ['BeautifulSoup', 'PyPDF2', 'python-docx', 'OpenPyXL', 'AioHTTP'],
  Observability: ['Logging', 'Monitoring', 'Analytics'],
}
const results = [
  ['Accurate Answers', 'Grounded responses using retrieved knowledge.'],
  ['Multi-Source Support', 'Web, PDF, DOCX, XLSX, Text & Q&A ingestion.'],
  ['Scalable Retrieval', 'Vector search with Pinecone for fast, relevant results.'],
  ['Context-Aware', 'Memory-enabled conversations for multi-turn interactions.'],
  ['Production Ready', 'Monitoring, analytics, and reliability built-in.'],
]
const outcomeTags = ['RAG Architecture', 'Semantic Search', 'AI Automation', 'Knowledge Management', 'Scalable', 'Production Ready']
const highlights = [
  'Built production-grade RAG architecture with OpenAI + Pinecone.',
  'Automated training pipelines for multiple data sources.',
  'Implemented semantic search, retrieval ranking & context optimization.',
  'Added conversational memory for intelligent multi-turn chats.',
  'Ensured reliability with monitoring, analytics & scalable background workflows.',
]

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function RagProject() {
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
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">RAG-Based AI Chatbot Engine & Training System</h1>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">A production-grade Retrieval-Augmented Generation platform that allows organizations to build intelligent AI assistants trained on their own knowledge sources.</p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-200">
                <span className="flex items-center gap-2"><FiLayers className="text-blue-400" /> RAG Architecture</span>
                <span className="flex items-center gap-2"><FiDatabase className="text-blue-400" /> Vector Search</span>
                <span className="flex items-center gap-2"><FiZap className="text-blue-400" /> AI Training Pipelines</span>
                <span className="flex items-center gap-2"><FiMessageSquare className="text-blue-400" /> Conversational AI</span>
              </div>
            </div>
            <picture className="block">
              <source srcSet={ragCoverWebp} type="image/webp" />
              <img src={ragCover} alt="RAG chatbot engine cover" className="w-full object-contain" decoding="async" />
            </picture>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            <ProjectLeftSidebar
              cardClass={card}
              sections={sections}
              ctaTitle="Interested in building an AI system?"
              ctaText="I help businesses build intelligent, scalable and production-ready AI solutions."
              ctaLabel="Schedule a Call"
              info={projectInfo}
            />

            <div className="divide-y divide-white/10">
              <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title>
                <p className="mt-4 leading-7 text-slate-300">This RAG-based system enables organizations to ingest, process, and train on proprietary data from multiple sources, then retrieve and generate accurate answers using OpenAI models.</p>
                <p className="mt-3 leading-7 text-slate-300">It ensures responses are grounded in verified information with real-time retrieval, contextual memory, and continuous learning pipelines.</p>
              </section>
              <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title>
                <p className="mt-4 text-slate-300">Traditional AI chatbots often hallucinate, lack current information, and cannot reliably use private business data. Organizations needed a platform that could:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">{challenges.map((item) => <li key={item} className="flex gap-2"><FiCheckCircle className="shrink-0 text-blue-400" />{item}</li>)}</ul>
              </section>
              <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{features.map(([Icon, label]) => <div key={label} className={`${card} p-4 text-center text-xs`}><Icon className="mx-auto mb-3 text-2xl text-blue-400" />{label}</div>)}</div>
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
                    alt="RAG architecture overview"
                    className="w-full rounded-lg object-contain"
                  />
                  <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/30 bg-[#020817]/80 text-blue-400 opacity-0 transition group-hover:opacity-100">
                    <FiMaximize2 />
                  </span>
                </button>
              </section>
              <section id="results-&-impact" className="py-7"><Title icon={FiZap}>Results & Impact</Title>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{results.map(([name, text]) => <div key={name} className={`${card} p-4`}><b className="text-sm">{name}</b><p className="mt-2 text-xs leading-5 text-slate-400">{text}</p></div>)}</div>
              </section>
              <section id="outcome" className="py-7"><Title icon={FiTarget}>Outcome</Title>
                <p className="mt-4 leading-7 text-slate-300">The RAG-based chatbot engine empowers organizations to leverage proprietary data and deliver intelligent, accurate, and context-aware AI experiences. The platform improves response quality, reduces hallucinations, and provides a scalable foundation for enterprise AI assistants.</p>
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
                    [FiGrid, 'Type', 'AI Platform / RAG System'],
                    [FiUser, 'Role', 'AI Systems & Backend Engineer'],
                    [FiCalendar, 'Duration', 'Jan 2024 - Present'],
                    [FiCloud, 'Deployment', 'AWS Cloud'],
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
                <div className="mt-5 space-y-5 text-sm">{['Accurate Answers', 'Multi-Source Support', 'Scalable Retrieval', 'Production Ready'].map((item) => <p key={item} className="flex gap-3"><FiCheckCircle className="mt-1 shrink-0 text-emerald-400" /><b>{item}</b></p>)}</div>
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
                  <h2 className="text-2xl font-bold">Need a Similar AI System?</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-300">I can help you build RAG systems, AI chatbots, and intelligent automation solutions tailored to your business.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/#contact" onClick={trackBookCallClick} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500">Book a Discovery Call</Link>
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
              alt="RAG architecture overview enlarged"
              className="max-h-[92vh] w-full rounded-xl border border-white/10 object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default RagProject
