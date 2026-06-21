import {
  FiArrowLeft, FiBookOpen, FiBriefcase, FiCalendar, FiCheckCircle,
  FiCode, FiDatabase, FiGrid, FiLayers, FiMessageCircle, FiSearch,
  FiServer, FiTarget, FiTrendingUp, FiUser, FiZap,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../../Home/components/Navbar'

const card = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const sections = ['Overview', 'Business Challenge', 'What I Built', 'Key Contributions', 'Architecture', 'Engineering Challenges', 'Technologies', 'Results & Impact', 'Outcome']
const features = [
  ['RAG Engine', 'Retrieval-augmented generation for accurate, context-aware responses.'],
  ['Multi-Source Training', 'Automated pipelines for documents, web, spreadsheets, and Q&A datasets.'],
  ['Vector Search', 'Pinecone-powered semantic search for relevant and precise knowledge retrieval.'],
  ['Conversational Memory', 'Context persistence and memory for natural, multi-turn conversations.'],
  ['Analytics & Monitoring', 'Track performance, retrieval accuracy, and system health in real-time.'],
]
const contributions = [
  ['RAG Architecture', 'Designed and implemented a scalable RAG architecture with retrieval, context construction, prompt orchestration, and response generation using OpenAI GPT models.'],
  ['Training Pipelines', 'Built automated workflows to ingest and process websites, PDFs, DOCX, XLSX, text files, and Q&A datasets into high-quality embeddings.'],
  ['Vector Search Infrastructure', 'Integrated Pinecone vector database for high-performance semantic search, ranking, and context retrieval at scale.'],
  ['Content Processing', 'Developed async crawlers and processing pipelines for content extraction, chunking, cleaning, and incremental retraining.'],
  ['Conversational Intelligence', 'Implemented conversation memory, session management, prompt orchestration, and multi-turn interaction handling.'],
  ['Monitoring & Reliability', 'Added monitoring, analytics, and testing workflows to ensure retrieval accuracy, system reliability, and production readiness.'],
]
const technologies = {
  'AI & Retrieval': ['OpenAI GPT', 'Pinecone', 'Embeddings', 'Semantic Search', 'Vector Databases'],
  Backend: ['Python', 'Django', 'Django REST Framework'],
  Database: ['PostgreSQL'],
  'Processing & Automation': ['Celery', 'Redis'],
  'Content Processing': ['BeautifulSoup', 'PyPDF2', 'python-docx', 'OpenPyXL', 'AioHTTP'],
  'Observability & Tools': ['Logging', 'Monitoring', 'Analytics'],
}

function Title({ icon: Icon, children }) {
  return <h2 className="flex items-center gap-3 text-xl font-bold"><Icon className="text-blue-400" />{children}</h2>
}

function Pipeline({ title, items }) {
  return <div className={`${card} p-4`}><p className="mb-4 text-center text-sm font-semibold">{title}</p><div className="flex flex-wrap items-center justify-center gap-2">{items.map((item, index) => <div key={item} className="contents"><span className="rounded-md border border-blue-400/30 bg-blue-500/5 px-3 py-2 text-center text-xs text-slate-300">{item}</span>{index < items.length - 1 && <span className="text-blue-400">→</span>}</div>)}</div></div>
}

function RagProject() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"><FiArrowLeft />Back to Projects</Link>
          <div className="mt-7 grid gap-7 lg:grid-cols-[190px_minmax(0,1fr)_280px]">
            <aside className="space-y-5">
              <nav className={`${card} p-3`}>{sections.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-blue-500/10 hover:text-blue-400">{item}</a>)}</nav>
              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950 to-purple-950 p-5"><p className="font-semibold">Interested in building an AI system?</p><p className="mt-3 text-sm leading-6 text-slate-400">I help businesses build intelligent, scalable and production-ready AI solutions.</p><Link to="/#contact" className="mt-4 inline-flex w-full justify-center rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold">Schedule a Call</Link></div>
              <div className={`${card} space-y-4 p-5 text-sm`}><h2 className="font-bold">Project Information</h2><p><FiBriefcase className="mr-2 inline text-blue-400" />AI Platform / RAG System</p><p><FiGrid className="mr-2 inline text-blue-400" />AI • SaaS • Automation</p><p><FiCalendar className="mr-2 inline text-blue-400" />Jan 2024 – Present</p><p><FiUser className="mr-2 inline text-blue-400" />AI Systems & Backend Engineer</p><p><FiUser className="mr-2 inline text-blue-400" />Solo Engineer</p><p><FiServer className="mr-2 inline text-blue-400" />AWS Cloud</p><p><FiLayers className="mr-2 inline text-blue-400" />Enterprise AI Chatbot Ecosystem</p></div>
            </aside>

            <div className="min-w-0">
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_1.15fr]">
                <div><span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-400">Featured Case Study</span><h1 className="mt-5 text-4xl font-extrabold leading-tight">RAG-Based AI Chatbot Engine & Training System</h1><p className="mt-5 leading-8 text-slate-300">A production-grade Retrieval-Augmented Generation (RAG) platform that allows organizations to build intelligent AI assistants trained on their own knowledge sources. The system combines automated training pipelines, vector search, semantic retrieval, and OpenAI models to deliver accurate, context-aware responses.</p><div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">{['RAG Architecture', 'Vector Search', 'AI Training Pipelines', 'Conversational AI'].map((item) => <span key={item} className="rounded-md border border-white/10 px-2 py-1">{item}</span>)}</div></div>
                <div className={`${card} grid min-h-72 grid-cols-[110px_1fr] overflow-hidden text-xs`}><div className="space-y-4 border-r border-white/10 p-4"><b>AI Assistant</b>{['New Chat', 'Conversations', 'Knowledge Bases', 'Analytics', 'Settings'].map((item) => <p key={item} className="text-slate-400">{item}</p>)}</div><div className="p-5"><div className="rounded-lg border border-white/10 p-4"><p>What is the refund policy for annual subscriptions?</p><div className="mt-4 rounded-lg bg-white/[0.03] p-4 leading-6 text-slate-300">According to the document “Refund Policy 2024.pdf”, annual subscriptions are eligible for a full refund within 30 days of purchase.</div><div className="mt-4 border-t border-white/10 pt-3 text-blue-400">Sources: Refund Policy • Terms & Conditions</div></div><div className="mt-4 rounded-lg border border-white/10 px-4 py-3 text-slate-500">Ask anything...</div></div></div>
              </div>

              <div className="mt-8 divide-y divide-white/10">
                <section id="overview" className="pb-7"><Title icon={FiBriefcase}>Overview</Title><p className="mt-4 leading-7 text-slate-300">This RAG-based system enables organizations to ingest, process, and train on their proprietary data from multiple sources, then retrieve and generate accurate answers using OpenAI models. It ensures responses are grounded in verified information with real-time retrieval, contextual memory, and continuous learning pipelines.</p></section>
                <section id="business-challenge" className="py-7"><Title icon={FiTarget}>Business Challenge</Title><p className="mt-4 leading-7 text-slate-300">Traditional AI chatbots often hallucinate, lack up-to-date information, and cannot leverage private business data. Organizations needed a solution that could:</p><ul className="mt-4 space-y-2 text-sm text-slate-300">{['Train chatbots using their own content', 'Support multiple data formats and sources', 'Provide context-aware and accurate responses', 'Scale across multiple chatbots and teams', 'Maintain high retrieval accuracy and system reliability'].map((item) => <li key={item} className="flex gap-2"><FiCheckCircle className="shrink-0 text-blue-400" />{item}</li>)}</ul></section>
                <section id="what-i-built" className="py-7"><Title icon={FiBriefcase}>What I Built</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{features.map(([name, description]) => <article key={name} className={`${card} p-4 text-center`}><FiDatabase className="mx-auto text-3xl text-blue-400" /><h3 className="mt-3 text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="key-contributions" className="py-7"><Title icon={FiZap}>Key Contributions</Title><div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{contributions.map(([name, description]) => <article key={name} className={`${card} p-4`}><h3 className="text-sm font-semibold">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{description}</p></article>)}</div></section>
                <section id="architecture" className="py-7"><Title icon={FiServer}>Architecture Overview</Title><div className="mt-5 grid gap-3 md:grid-cols-3"><Pipeline title="1. Training Pipeline" items={['Sources', 'Extraction & Processing', 'Chunking', 'Embeddings', 'Pinecone']} /><Pipeline title="2. Retrieval Pipeline" items={['User Question', 'Embedding Generation', 'Pinecone Retrieval', 'Prompt Construction', 'OpenAI GPT', 'Final Response']} /><Pipeline title="3. Conversation Flow" items={['User Data', 'Chat Interface', 'Conversation Memory', 'Knowledge Context', 'OpenAI GPT', 'Response']} /></div></section>
                <section id="results-&-impact" className="py-7"><Title icon={FiTrendingUp}>Results & Impact</Title><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[['Accurate Answers', 'Grounded responses using retrieved knowledge.'], ['Multi-Source Support', 'Web, PDF, DOCX, XLSX, Text & Q&A ingestion.'], ['Scalable Retrieval', 'Vector search with Pinecone for fast, relevant results.'], ['Context-Aware', 'Memory-enabled conversations for multi-turn interactions.'], ['Production Ready', 'Monitoring, analytics, and reliability built-in.']].map(([name, text]) => <div key={name} className={`${card} p-4`}><b className="text-sm">{name}</b><p className="mt-2 text-xs leading-5 text-slate-400">{text}</p></div>)}</div></section>
                <section id="outcome" className="py-7"><Title icon={FiTarget}>Outcome</Title><p className="mt-4 leading-7 text-slate-300">The RAG-based chatbot engine empowers organizations to leverage their proprietary data and deliver intelligent, accurate, and context-aware AI experiences. The platform significantly improves response quality, reduces hallucinations, and provides a scalable foundation for enterprise AI assistants.</p><div className="mt-5 flex flex-wrap gap-2">{['RAG Architecture', 'Semantic Search', 'AI Automation', 'Knowledge Management', 'Scalable', 'Production Ready'].map((item) => <span key={item} className="rounded-md border border-white/10 px-3 py-2 text-xs text-slate-300">{item}</span>)}</div></section>
              </div>
            </div>

            <aside className="space-y-5">
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Snapshot</h2><div className="mt-5 space-y-4 text-sm text-slate-300"><p>Type<br /><b className="text-white">AI Platform / RAG System</b></p><p>Role<br /><b className="text-white">AI Systems & Backend Engineer</b></p><p>Duration<br /><b className="text-white">Jan 2024 – Present</b></p><p>Environment<br /><b className="text-white">Production</b></p><p>Associated With<br /><b className="text-white">Enterprise AI Chatbot Platform (Ecosystem Module)</b></p></div></div>
              <div id="technologies" className={`${card} p-5`}><h2 className="text-lg font-bold">Technologies Used</h2><div className="mt-5 space-y-4">{Object.entries(technologies).map(([group, items]) => <div key={group}><p className="mb-2 text-xs font-semibold text-blue-400">{group}</p><div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}</div></div>)}</div></div>
              <div className={`${card} p-5`}><h2 className="text-lg font-bold">Project Highlights</h2><div className="mt-5 space-y-4 text-sm text-slate-300">{['Built production-grade RAG architecture with OpenAI + Pinecone.', 'Automated training pipelines for multiple data sources.', 'Implemented semantic search, retrieval ranking & context optimization.', 'Added conversational memory for intelligent multi-turn chats.', 'Ensured reliability with monitoring, analytics & scalable background workflows.'].map((item) => <p key={item} className="flex gap-3"><FiCheckCircle className="shrink-0 text-emerald-400" />{item}</p>)}</div></div>
              <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-blue-950 to-purple-950 p-5"><h2 className="text-lg font-bold">Need a Similar Solution?</h2><p className="mt-3 text-sm leading-6 text-slate-300">I can help you build RAG systems, AI chatbots, and intelligent automation solutions tailored to your business.</p><Link to="/#contact" className="mt-4 inline-flex w-full justify-center rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold">Book a Discovery Call</Link></div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RagProject
