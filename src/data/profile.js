export const profile = {
  name: 'Ali Arif',
  firstName: 'Ali',
  lastName: 'Arif',
  title: 'Backend & AI Systems Engineer',
  email: 'aliarif.itu@gmail.com',
  location: 'Lahore, Pakistan',
  availability: 'Open for Opportunities',
  linkedin: 'ali-arif-3a093590',
  linkedinUrl: 'https://www.linkedin.com/in/ali-arif-3a093590',
  github: 'Ali-0005',
  githubUrl: 'https://github.com/Ali-0005',
  credly: 'Credly Badges',
  credlyUrl: 'https://www.credly.com/users/ali-arif.1c7c9700/badges/credly',
  googleScholar: 'Google Scholar',
  googleScholarUrl: 'https://scholar.google.com/citations?user=8IBzFzUAAAAJ',
}

export const site = {
  name: 'Ali Arif Portfolio',
  url: 'https://ali-0005.github.io/aliarif-portfolio',
  image: 'https://ali-0005.github.io/aliarif-portfolio/hero.webp',
}

export const pageMetadata = {
  '/': {
    title: 'Ali Arif | Python Django Backend Developer | AI & SaaS Engineer',
    description:
      'Python Django backend developer building scalable SaaS platforms, AI applications, REST APIs, automation workflows, and cloud-ready software.',
    schemaType: 'WebPage',
  },
  '/about': {
    title: 'About Ali Arif | Backend & AI Systems Engineer',
    description:
      'About Ali Arif, a Backend & AI Systems Engineer building scalable SaaS platforms, AI systems, automation workflows, APIs, and cloud-ready software.',
    schemaType: 'ProfilePage',
  },
  '/contact': {
    title: 'Contact Me | Ali Arif | Backend & AI Systems Engineer',
    description:
      'Contact Ali Arif for Django backend systems, SaaS platforms, AI and RAG applications, automation workflows, API integrations, and cloud deployment.',
    schemaType: 'ContactPage',
  },
  '/projects/django-real-estate-platform': {
    title: 'Django Real Estate Platform | Python Case Study | Ali Arif',
    description:
      'Built a scalable Django-based real estate platform with PostgreSQL, AWS, optimized search, geospatial features, and REST APIs.',
    schemaType: 'CreativeWork',
  },
  '/projects/social-media-management-platform': {
    title: 'Social Media Management SaaS | Django + React | Ali Arif',
    description:
      'Social media management platform for scheduling, publishing, team collaboration, analytics, and scalable SaaS workflows.',
    schemaType: 'CreativeWork',
  },
  '/projects/omnichannel-ai-chatbot-platform': {
    title: 'Omnichannel AI Chatbot Platform | Meta & Zapier Integration | Ali Arif',
    description:
      'Omnichannel AI chatbot platform integrating Meta, Slack, Zapier, and business messaging channels with real-time routing.',
    schemaType: 'CreativeWork',
  },
  '/projects/rag-ai-chatbot-engine': {
    title: 'RAG AI Chatbot Engine | Python & OpenAI Project | Ali Arif',
    description:
      'RAG AI chatbot engine using Python, OpenAI, vector search, semantic retrieval, and automated training pipelines.',
    schemaType: 'CreativeWork',
  },
  '/projects/stripe-billing-platform': {
    title: 'Stripe Billing SaaS Platform | Django Backend | Ali Arif',
    description:
      'Stripe billing SaaS platform with subscriptions, customer lifecycle automation, analytics, and Django backend architecture.',
    schemaType: 'CreativeWork',
  },
}

export function normalizePagePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function getCanonicalUrl(pathname) {
  const path = normalizePagePath(pathname)
  return `${site.url}${path === '/' ? '/' : `${path}/`}`
}

export function getStructuredData(pathname) {
  const path = normalizePagePath(pathname)
  const metadata = pageMetadata[path] ?? pageMetadata['/']
  const canonicalUrl = getCanonicalUrl(path)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${site.url}/#person`,
        name: profile.name,
        jobTitle: profile.title,
        url: `${site.url}/`,
        image: site.image,
        email: `mailto:${profile.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressCountry: 'PK',
        },
        sameAs: [
          profile.linkedinUrl,
          profile.githubUrl,
          profile.credlyUrl,
          profile.googleScholarUrl,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.name,
        url: `${site.url}/`,
        publisher: { '@id': `${site.url}/#person` },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#service`,
        name: `${profile.name} - Backend & AI Engineering Services`,
        url: `${site.url}/contact/`,
        image: site.image,
        founder: { '@id': `${site.url}/#person` },
        areaServed: 'Worldwide',
        serviceType: [
          'Django backend development',
          'SaaS platform development',
          'AI and RAG application development',
          'API integration and automation',
        ],
      },
      {
        '@type': metadata.schemaType,
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { '@id': `${site.url}/#website` },
        about: { '@id': `${site.url}/#person` },
        ...(metadata.schemaType === 'ProfilePage'
          ? { mainEntity: { '@id': `${site.url}/#person` } }
          : {}),
        inLanguage: 'en',
      },
    ],
  }
}
