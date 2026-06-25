import {
  FiArrowLeft,
  FiAperture,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiEye,
  FiGrid,
  FiImage,
  FiMapPin,
  FiSearch,
  FiServer,
  FiSettings,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import casamereCover from '../../../assets/cover/casamere.png'
import casamereCoverWebp from '../../../assets/cover/casamere.webp'
import Navbar from '../../Home/components/Navbar'
import ProjectLeftSidebar from './ProjectLeftSidebar'
import {
  contributions,
  projectSections,
  technologies,
} from '../../../data/realEstateProject'

const cardClass = 'rounded-xl border border-white/10 bg-[#0b1424]/80'
const projectInfo = [
  { icon: 'briefcase', label: 'Project Type', value: 'Enterprise Platform' },
  { icon: 'grid', label: 'Industry', value: 'Real Estate' },
  { icon: 'calendar', label: 'Duration', value: 'Feb 2026 - Present' },
  { icon: 'user', label: 'Team', value: 'Cross-functional Team' },
  { icon: 'cloud', label: 'Deployment', value: 'Cloud Infrastructure' },
]
const sidebarSections = projectSections.filter(
  (section) => !['architecture', 'technologies'].includes(section.id),
)

const contributionIcons = {
  'Geospatial Search & Discovery': {
    Icon: FiMapPin,
    className: 'bg-emerald-500/15 text-emerald-400',
  },
  'Search Performance Optimization': {
    Icon: FiTrendingUp,
    className: 'bg-purple-500/15 text-purple-400',
  },
  'AI-Powered Media Pipelines': {
    Icon: FiImage,
    className: 'bg-blue-500/15 text-blue-400',
  },
  'Amenities Extraction & Normalization': {
    Icon: FiDatabase,
    className: 'bg-amber-500/15 text-amber-400',
  },
  'Operational Tooling & Automation': {
    Icon: FiSettings,
    className: 'bg-blue-500/15 text-blue-400',
  },
  'AI Services Integrations': {
    Icon: FiAperture,
    className: 'bg-emerald-500/15 text-emerald-400',
  },
}

const architectureIcons = {
  'MLS Listings': { Icon: FiDatabase, className: 'text-blue-400' },
  'PostgreSQL + PostGIS': { Icon: FiDatabase, className: 'text-emerald-400' },
  'Search APIs': { Icon: FiSearch, className: 'text-blue-400' },
  'Map & Community Discovery': { Icon: FiMapPin, className: 'text-emerald-400' },
  'User Experience': { Icon: FiEye, className: 'text-blue-400' },
  'Property Data': { Icon: FiDatabase, className: 'text-blue-400' },
  'Extraction & Validation': { Icon: FiCheckCircle, className: 'text-emerald-400' },
  'AI Services': { Icon: FiAperture, className: 'text-blue-400' },
  'Media Generation': { Icon: FiImage, className: 'text-emerald-400' },
  'Storage & Delivery': { Icon: FiServer, className: 'text-blue-400' },
}

function DemoThumbnail() {
  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-xl rounded-xl border border-white/20 bg-[#101b2b] p-3 shadow-2xl shadow-blue-950/70">
      <picture className="block h-full w-full">
        <source srcSet={casamereCoverWebp} type="image/webp" />
        <img
          src={casamereCover}
          alt="Casamere real estate platform cover"
          className="h-full w-full rounded-lg object-cover"
          decoding="async"
        />
      </picture>
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
        {items.map((item, index) => {
          const { Icon, className } = architectureIcons[item]

          return (
          <div key={item}>
            <div className="flex items-center justify-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-3 text-center text-xs text-slate-200">
              <Icon className={`text-xl ${className}`} />
              {item}
            </div>
            {index < items.length - 1 && <div className="py-1 text-center text-xs text-blue-300">↓</div>}
          </div>
          )
        })}
      </div>
    </div>
  )
}

function CasamereProject() {
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
                <a href="https://www.casamere.com/" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
                  Real Estate & Community Discovery Platform
                </a>
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

          <div className="mt-12 grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            <ProjectLeftSidebar
              cardClass={cardClass}
              sections={sidebarSections}
              info={projectInfo}
              liveWebsite={{ href: 'https://www.casamere.com/', label: 'www.casamere.com' }}
            />

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
                <SectionTitle icon={FiStar}>Key Contributions</SectionTitle>
                <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {contributions.map(([title, description]) => {
                    const { Icon, className } = contributionIcons[title]

                    return (
                      <article key={title} className={`${cardClass} p-4`}>
                        <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${className}`}>
                          <Icon className="text-xl" />
                        </div>
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <p className="mt-3 text-xs leading-5 text-slate-400">{description}</p>
                      </article>
                    )
                  })}
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

              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-[#0b1424]/90 to-purple-700/25 p-7 shadow-2xl shadow-blue-950/40">
                <p className="text-xl font-bold leading-8">Interested in building something similar?</p>
                <p className="mt-5 text-base leading-8 text-slate-400">Let’s discuss how I can help you build a scalable solution.</p>
                <Link to="/#contact" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-4 text-lg font-bold transition hover:from-blue-500 hover:to-purple-500">
                  Schedule a Call
                  <FiArrowLeft className="rotate-180" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CasamereProject
