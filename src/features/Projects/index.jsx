import {
  FiArrowLeft,
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiGrid,
  FiMapPin,
  FiServer,
  FiTarget,
  FiUser,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../Home/components/Navbar'
import {
  contributions,
  projectSections,
  technologies,
} from '../../data/realEstateProject'

const cardClass = 'rounded-xl border border-white/10 bg-[#0b1424]/80'

function DemoThumbnail() {
  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-xl rounded-xl border border-white/20 bg-[#101b2b] p-3 shadow-2xl shadow-blue-950/70">
      <div className="flex h-full overflow-hidden rounded-lg bg-slate-100">
        <div className="w-2/5 space-y-2 bg-white p-3">
          <div className="h-3 w-16 rounded bg-blue-500" />
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-2 rounded border border-slate-200 p-2">
              <div className="h-10 w-14 rounded bg-amber-100" />
              <div className="flex-1 space-y-2">
                <div className="h-2 rounded bg-slate-300" />
                <div className="h-2 w-2/3 rounded bg-blue-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex-1 bg-gradient-to-br from-blue-100 via-slate-200 to-emerald-100">
          {[['20%', '25%'], ['65%', '20%'], ['45%', '58%'], ['75%', '70%']].map(([left, top]) => (
            <FiMapPin key={`${left}-${top}`} className="absolute text-xl text-blue-600" style={{ left, top }} />
          ))}
          <div className="absolute inset-x-0 top-1/2 h-px rotate-12 bg-white/80" />
          <div className="absolute inset-y-0 left-1/2 w-px -rotate-12 bg-white/80" />
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-bold text-white">
      <Icon className="text-blue-400" />
      {children}
    </h2>
  )
}

function ArchitectureCard({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-blue-400">{title}</p>
      <div className={`${cardClass} space-y-2 p-3`}>
        {items.map((item, index) => (
          <div key={item}>
            <div className="flex items-center justify-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-3 text-center text-xs text-slate-200">
              {index % 2 === 0 ? <FiDatabase className="text-xl text-blue-400" /> : <FiServer className="text-xl text-emerald-400" />}
              {item}
            </div>
            {index < items.length - 1 && <div className="py-1 text-center text-xs text-blue-300">↓</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

function RealEstateProject() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <section className="px-5 pb-16 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400">
            <FiArrowLeft />
            Back to Projects
          </Link>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-400">
                Featured Case Study
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                Real Estate & Community Discovery Platform (Casamere)
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                A large-scale MLS-backed real estate platform with geospatial search, AI-powered media pipelines, and operational tooling for properties and communities.
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-200">
                <span className="flex items-center gap-2"><FiCode className="text-blue-400" /> Backend & AI Systems</span>
                <span className="flex items-center gap-2"><FiMapPin className="text-blue-400" /> Geospatial Search</span>
                <span className="flex items-center gap-2"><FiTarget className="text-blue-400" /> AI Automation</span>
                <span className="flex items-center gap-2"><FiGrid className="text-blue-400" /> Operational Tools</span>
              </div>
            </div>
            <DemoThumbnail />
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-[200px_minmax(0,1fr)_280px]">
            <aside className="space-y-5">
              <nav className={`${cardClass} p-3`}>
                {projectSections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400">
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    {section.label}
                  </a>
                ))}
              </nav>
              <div className={`${cardClass} p-5`}>
                <p className="font-semibold">Interested in building something similar?</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">Let’s discuss how I can help you build a scalable solution.</p>
                <Link to="/#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold">
                  Schedule a Call
                </Link>
              </div>
              <div className={`${cardClass} space-y-5 p-5 text-sm`}>
                <p className="flex gap-3"><FiBriefcase className="text-blue-400" /> <span><small className="text-slate-400">Project Type</small><br />Enterprise Platform</span></p>
                <p className="flex gap-3"><FiGrid className="text-blue-400" /> <span><small className="text-slate-400">Industry</small><br />Real Estate</span></p>
                <p className="flex gap-3"><FiCalendar className="text-blue-400" /> <span><small className="text-slate-400">Duration</small><br />Feb 2026 – Present</span></p>
                <p className="flex gap-3"><FiUser className="text-blue-400" /> <span><small className="text-slate-400">Team</small><br />Cross-functional Team</span></p>
              </div>
            </aside>

            <div className="divide-y divide-white/10">
              <section id="overview" className="pb-7">
                <SectionTitle icon={FiBriefcase}>Overview</SectionTitle>
                <p className="mt-4 leading-7 text-slate-300">Casamere is a large-scale MLS-backed real estate and community discovery platform that helps users search, explore, and evaluate properties and neighborhoods through intelligent search, geospatial filtering, AI-powered media processing, and operational automation.</p>
              </section>

              <section id="challenge" className="py-7">
                <SectionTitle icon={FiTarget}>Business Challenge</SectionTitle>
                <p className="mt-4 leading-7 text-slate-300">Real estate platforms must process and serve massive property datasets while delivering fast search, accurate location-based results, and rich property insights.</p>
                <p className="mt-3 text-slate-300">The platform needed to:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {['Deliver high-performance search across large MLS datasets', 'Support geospatial filtering and map-based discovery', 'Automate property media generation and processing', 'Extract and validate amenities from diverse sources', 'Provide admin tooling for large-scale operations', 'Ensure reliable infrastructure for production workloads'].map((item) => (
                    <li key={item} className="flex gap-2"><FiCheckCircle className="mt-0.5 shrink-0 text-blue-400" />{item}</li>
                  ))}
                </ul>
              </section>

              <section id="role" className="py-7">
                <SectionTitle icon={FiUser}>My Role</SectionTitle>
                <p className="mt-4 font-semibold">Backend & AI Systems Engineer</p>
                <p className="mt-2 leading-7 text-slate-300">I was responsible for designing and improving backend services, search infrastructure, AI-powered pipelines, and operational tooling used across the platform.</p>
              </section>

              <section id="contributions" className="py-7">
                <SectionTitle icon={FiTarget}>Key Contributions</SectionTitle>
                <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {contributions.map(([title, description]) => (
                    <article key={title} className={`${cardClass} p-4`}>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400"><FiCode /></div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-3 text-xs leading-5 text-slate-400">{description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="architecture" className="py-7 lg:hidden">
                <SectionTitle icon={FiServer}>Architecture</SectionTitle>
              </section>

              <section id="results" className="py-7">
                <SectionTitle icon={FiBarChart2}>Results & Impact</SectionTitle>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[['88%', 'Search Performance Improvement', '90s → 11s'], ['90%+', 'Faster Media Processing', 'AI-powered workflows'], ['5x', 'Increase in Data Throughput', 'For large datasets'], ['High', 'Operational Efficiency', 'Through automation tooling']].map(([value, label, note]) => (
                    <div key={label} className={`${cardClass} p-4`}>
                      <p className="text-2xl font-bold text-emerald-400">{value}</p>
                      <p className="mt-3 text-xs leading-5">{label}</p>
                      <p className="mt-3 text-xs text-slate-400">{note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="outcome" className="py-7">
                <SectionTitle icon={FiTarget}>Outcome</SectionTitle>
                <p className="mt-4 leading-7 text-slate-300">The platform now delivers fast, accurate, and data-rich property and community discovery experiences. By optimizing search infrastructure, introducing AI-powered pipelines, and building scalable backend services and tooling, the platform achieved significant performance improvements and operational efficiency gains, empowering users and administrators alike.</p>
              </section>
            </div>

            <aside className="space-y-5">
              <div className={`${cardClass} p-5`}>
                <h2 className="text-lg font-bold">Architecture Overview</h2>
                <div className="mt-5 space-y-5">
                  <ArchitectureCard title="Search Layer" items={['MLS Listings', 'PostgreSQL + PostGIS', 'Search APIs', 'Map & Community Discovery', 'User Experience']} />
                  <ArchitectureCard title="AI Processing Layer" items={['Property Data', 'Extraction & Validation', 'AI Services', 'Media Generation', 'Storage & Delivery']} />
                </div>
              </div>

              <div id="technologies" className={`${cardClass} p-5`}>
                <h2 className="text-lg font-bold">Technologies Used</h2>
                <div className="mt-5 space-y-4">
                  {Object.entries(technologies).map(([group, items]) => (
                    <div key={group}>
                      <p className="mb-2 text-xs font-semibold text-blue-400">{group}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-300">{item}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClass} p-5`}>
                <p className="font-semibold">Have a similar project?</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">Let’s build something powerful together.</p>
                <Link to="/#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold">
                  Book a Discovery Call
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RealEstateProject
