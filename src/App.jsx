import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './features/Home'
import About from './features/About'
import Contact from './features/Contact'
import RealEstateProject from './features/Projects'
import SocifiyProject from './features/Projects/components/SocifiyProject'
import OmnichannelProject from './features/Projects/components/OmnichannelProject'
import RagProject from './features/Projects/components/RagProject'
import BillingProject from './features/Projects/components/BillingProject'
import { trackPageView } from './shared/lib/analytics'

const pageMetadata = {
  '/': {
    title: 'Ali Arif | Python Django Backend Developer | AI & SaaS Engineer',
    description:
      'Python Django backend developer building scalable SaaS platforms, AI applications, REST APIs, automation workflows, and cloud-ready software.',
  },
  '/about': {
    title: 'About Ali Arif | Backend & AI Systems Engineer',
    description:
      'About Ali Arif, a Backend & AI Systems Engineer building scalable SaaS platforms, AI systems, automation workflows, APIs, and cloud-ready software.',
  },
  '/contact': {
    title: 'Contact Me | Ali Arif | Backend & AI Systems Engineer',
    description:
      'Contact Ali Arif for Django backend systems, SaaS platforms, AI and RAG applications, automation workflows, API integrations, and cloud deployment.',
  },
  '/projects/django-real-estate-platform': {
    title: 'Django Real Estate Platform | Python Case Study | Ali Arif',
    description:
      'Built a scalable Django-based real estate platform with PostgreSQL, AWS, optimized search, geospatial features, and REST APIs.',
  },
  '/projects/social-media-management-platform': {
    title: 'Social Media Management SaaS | Django + React | Ali Arif',
    description:
      'Social media management platform for scheduling, publishing, team collaboration, analytics, and scalable SaaS workflows.',
  },
  '/projects/omnichannel-ai-chatbot-platform': {
    title: 'Omnichannel AI Chatbot Platform | Meta & Zapier Integration | Ali Arif',
    description:
      'Omnichannel AI chatbot platform integrating Meta, Slack, Zapier, and business messaging channels with real-time routing.',
  },
  '/projects/rag-ai-chatbot-engine': {
    title: 'RAG AI Chatbot Engine | Python & OpenAI Project | Ali Arif',
    description:
      'RAG AI chatbot engine using Python, OpenAI, vector search, semantic retrieval, and automated training pipelines.',
  },
  '/projects/stripe-billing-platform': {
    title: 'Stripe Billing SaaS Platform | Django Backend | Ali Arif',
    description:
      'Stripe billing SaaS platform with subscriptions, customer lifecycle automation, analytics, and Django backend architecture.',
  },
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata['/']
    let description = document.querySelector('meta[name="description"]')

    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }

    document.title = metadata.title
    description.setAttribute('content', metadata.description)
  }, [pathname])

  return null
}

function AnalyticsPageView() {
  const { pathname, search, hash } = useLocation()
  const lastTrackedPath = useRef('')

  useEffect(() => {
    const path = `${pathname}${search}${hash}`

    if (lastTrackedPath.current === path) {
      return
    }

    lastTrackedPath.current = path
    trackPageView(path)
  }, [pathname, search, hash])

  return null
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <PageMetadata />
      <AnalyticsPageView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/django-real-estate-platform" element={<RealEstateProject />} />
        <Route path="/projects/social-media-management-platform" element={<SocifiyProject />} />
        <Route path="/projects/omnichannel-ai-chatbot-platform" element={<OmnichannelProject />} />
        <Route path="/projects/rag-ai-chatbot-engine" element={<RagProject />} />
        <Route path="/projects/stripe-billing-platform" element={<BillingProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
