import ReactGA from 'react-ga4'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

let isInitialized = false

export function initializeAnalytics() {
  if (!measurementId || isInitialized) {
    return
  }

  ReactGA.initialize(measurementId)
  isInitialized = true
}

export function trackPageView(path) {
  if (!measurementId) {
    return
  }

  ReactGA.send({ hitType: 'pageview', page: path })
}

export function trackEvent(category, action, label) {
  if (!measurementId) {
    return
  }

  ReactGA.event({
    category,
    action,
    label,
  })
}

export function trackResumeDownload() {
  trackEvent('Engagement', 'resume_download', 'Resume')
}

export function trackContactFormSubmit() {
  trackEvent('Lead', 'contact_form_submit', 'Contact Form')
}

export function trackWhatsAppClick() {
  trackEvent('Contact', 'whatsapp_click', 'WhatsApp')
}

export function trackEmailClick() {
  trackEvent('Contact', 'email_click', 'Email')
}

export function trackLinkedInClick() {
  trackEvent('Social', 'linkedin_click', 'LinkedIn')
}

export function trackGitHubClick() {
  trackEvent('Social', 'github_click', 'GitHub')
}

export function trackBookCallClick() {
  trackEvent('Lead', 'book_call_click', 'Book Call')
}
