import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {
  getCanonicalUrl,
  getStructuredData,
  pageMetadata,
  site,
} from './src/data/profile.js'

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function createSeoHead(pathname, metadata) {
  const canonicalUrl = getCanonicalUrl(pathname)
  const structuredData = JSON.stringify(getStructuredData(pathname)).replaceAll('<', '\\u003c')
  const openGraphType = pathname.startsWith('/projects/') ? 'article' : 'website'

  return `<!-- SEO_START -->
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(metadata.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:image" content="${site.image}" />
    <meta property="og:type" content="${openGraphType}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />
    <meta name="twitter:image" content="${site.image}" />
    <title>${escapeHtml(metadata.title)}</title>
    <script id="structured-data" type="application/ld+json">${structuredData}</script>
    <!-- SEO_END -->`
}

function staticSeoPages() {
  return {
    name: 'static-seo-pages',
    enforce: 'post',
    generateBundle(_, bundle) {
      const indexAsset = bundle['index.html']

      if (!indexAsset || indexAsset.type !== 'asset') {
        this.error('Unable to generate SEO entry pages because index.html was not emitted.')
      }

      const indexHtml = String(indexAsset.source)
      const seoBlock = /<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/

      if (!seoBlock.test(indexHtml)) {
        this.error('Unable to locate the SEO block in index.html.')
      }

      Object.entries(pageMetadata).forEach(([pathname, metadata]) => {
        if (pathname === '/') {
          return
        }

        this.emitFile({
          type: 'asset',
          fileName: `${pathname.slice(1)}/index.html`,
          source: indexHtml.replace(seoBlock, createSeoHead(pathname, metadata)),
        })
      })
    },
  }
}

export default defineConfig({
  base: '/aliarif-portfolio/',
  plugins: [react(), tailwindcss(), staticSeoPages()],
})
