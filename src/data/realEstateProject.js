export const projectSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Business Challenge' },
  { id: 'role', label: 'My Role' },
  { id: 'contributions', label: 'Key Contributions' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'results', label: 'Results & Impact' },
  { id: 'outcome', label: 'Outcome' },
]

export const contributions = [
  ['Geospatial Search & Discovery', 'Designed scalable listing and community search APIs with map-based filters, geospatial queries, and PostGIS-powered search infrastructure.'],
  ['Search Performance Optimization', 'Improved heavy search performance through query redesign, indexing, database optimization, and architecture improvements.'],
  ['AI-Powered Media Pipelines', 'Built automated thumbnail and media pipelines using Replicate, BrowserShots, Pillow, AWS S3, and AI services.'],
  ['Amenities Extraction & Normalization', 'Developed hybrid extraction pipelines with validation, observability, and structured processing for amenities and community data.'],
  ['Operational Tooling & Automation', 'Designed Django admin tools, bulk actions, GIS import pipelines, and automation utilities for large-scale data management.'],
  ['AI Services Integrations', 'Integrated OpenAI and Fireworks AI pipelines for media generation, automation workflows, and operational processing.'],
]

export const technologies = {
  Backend: ['Python', 'Django', 'DRF'],
  Database: ['PostgreSQL', 'PostGIS'],
  'AI & Automation': ['OpenAI', 'Fireworks AI', 'Replicate', 'Pillow', 'BrowserShots'],
  Infrastructure: ['AWS S3', 'Docker', 'Redis', 'Celery'],
  Observability: ['Sentry'],
}
