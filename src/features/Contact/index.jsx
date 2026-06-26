import {
  FiArrowRight,
  FiBox,
  FiCheckCircle,
  FiChevronDown,
  FiGithub,
  FiInfo,
  FiLock,
  FiMail,
  FiMapPin,
  FiMinus,
  FiPlus,
  FiSend,
  FiUsers,
} from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Navbar from '../Home/components/Navbar'
import Footer from '../Home/components/Footer'
import { profile } from '../../data/profile'
import contactCover from '../../assets/cover/contact_me.png'

const inputClass =
  'min-h-12 w-full rounded-lg border border-slate-600/70 bg-[#06101d] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400'

const projectTypes = [
  'SaaS platform',
  'AI or RAG system',
  'Backend API',
  'Automation workflow',
]

const budgets = ['$1k - $3k', '$3k - $7k', '$7k - $15k', '$15k+']
const timelines = ['As soon as possible', '2 - 4 weeks', '1 - 3 months', 'Flexible']

const fitItems = [
  'Scalable Django backend',
  'Production-ready AI or RAG system',
  'Multi-tenant SaaS architecture',
  'Stripe, Meta, Zapier or third-party integrations',
  'AWS deployment and backend optimization',
]

const steps = [
  {
    number: '01',
    icon: FiUsers,
    title: 'Discovery',
    text: 'We clarify goals, users, scope, constraints, and success criteria.',
  },
  {
    number: '02',
    icon: FiBox,
    title: 'Technical Direction',
    text: 'I propose a practical architecture, delivery plan, milestones, and risks.',
  },
  {
    number: '03',
    icon: FiSend,
    title: 'Build & Deliver',
    text: 'The solution is implemented, tested, documented, and prepared for production.',
  },
]

const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'I focus on backend systems, SaaS platforms, AI and RAG applications, automation workflows, API integrations, cloud deployment, and performance improvements.',
    open: true,
  },
  {
    question: 'Can you work with an existing codebase?',
    answer: '',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: '',
  },
  {
    question: 'Can you sign an NDA?',
    answer: '',
  },
]

function ContactGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <img
        src={contactCover}
        alt="Contact me"
        className="w-full rounded-lg object-cover"
      />
    </div>
  )
}

function Contact() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <section className="px-5 pt-28 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                Contact Me
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s Build Something{' '}
                <span className="text-blue-500">Reliable.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
                Have a SaaS product, AI system, backend platform, or automation
                workflow in mind? Tell me what you&apos;re building, where
                you&apos;re stuck, and what success looks like.
              </p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-green-500/35 bg-green-500/5 px-5 py-3 text-sm font-semibold text-green-400">
                <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                Available for selected freelance and contract projects
              </div>
            </div>

            <ContactGraphic />
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.15fr_0.75fr]">
          <form className="rounded-lg border border-blue-400/20 bg-[#07111f]/70 p-6 shadow-2xl shadow-black/30">
            <h2 className="text-2xl font-bold">Start a Conversation</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
              Share a few details about your project. I&apos;ll review the
              requirements and respond with the most practical next step.
            </p>

            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-medium">
                Full Name
                <span className="relative">
                  <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                  <input className={`${inputClass} pl-12`} placeholder="Your full name" />
                </span>
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Work Email
                <span className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                  <input className={`${inputClass} pl-12`} placeholder="you@company.com" />
                </span>
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Company / Organization <span className="text-slate-400">(Optional)</span>
                <span className="relative">
                  <FiBox className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                  <input className={`${inputClass} pl-12`} placeholder="Your company or organization" />
                </span>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Project Type
                  <span className="relative">
                    <select className={`${inputClass} appearance-none text-slate-400`}>
                      <option>Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  </span>
                </label>

                <label className="grid gap-2 text-sm font-medium">
                  Estimated Budget
                  <span className="relative">
                    <select className={`${inputClass} appearance-none text-slate-400`}>
                      <option>Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget}>{budget}</option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  </span>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium">
                Project Timeline
                <span className="relative">
                  <select className={`${inputClass} appearance-none text-slate-400`}>
                    <option>Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline}>{timeline}</option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                </span>
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Project Details
                <textarea
                  className={`${inputClass} min-h-32 resize-y py-4 leading-6`}
                  placeholder="Tell me about your project, goals, challenges, features you need, and any other details that will help me understand your requirements..."
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 h-4 w-4 accent-blue-500"
                />
                I&apos;m comfortable sharing project details by email.
              </label>

              <button
                type="button"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-lg bg-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                <FiSend className="text-2xl" />
                Send Project Inquiry
                <FiArrowRight className="text-2xl" />
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <FiLock />
                Your information will only be used to respond to your inquiry.
              </p>
            </div>
          </form>

          <aside className="grid gap-7">
            <div className="rounded-lg border border-blue-400/20 bg-[#07111f]/70 p-7 shadow-2xl shadow-black/30">
              <h2 className="text-2xl font-bold">Direct Contact</h2>
              <div className="mt-6 grid gap-5">
                {[
                  [FiMail, 'Email', profile.email],
                  [FiMapPin, 'Location', profile.location],
                  [FiCheckCircle, 'Availability', profile.availability],
                  [FiClockIcon, 'Response Time', 'Usually within 1-2 business days'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/5 text-2xl text-blue-400">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{label}</p>
                      <p className="mt-1 text-base text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-5 border-t border-slate-600/50 pt-6">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/5 text-2xl text-blue-400">
                    <FaLinkedinIn />
                  </span>
                  LinkedIn
                </a>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600/60 bg-white/5 text-2xl text-slate-300">
                    <FiGithub />
                  </span>
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-blue-400/20 bg-[#07111f]/70 p-7 shadow-2xl shadow-black/30">
              <h2 className="text-2xl font-bold">A Good Fit If You Need</h2>
              <div className="mt-6 grid gap-4">
                {fitItems.map((item) => (
                  <div key={item} className="flex gap-4 text-base text-slate-200">
                    <FiCheckCircle className="mt-1 shrink-0 text-xl text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">How We Can Work Together</h2>
          <div className="mt-2 h-0.5 w-8 bg-blue-500" />

          <div className="mt-6 grid gap-7 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-lg border border-blue-400/20 bg-[#07111f]/70 p-7"
              >
                {index < steps.length - 1 && (
                  <FiArrowRight className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-3xl text-blue-400 lg:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-500 text-xl font-semibold text-blue-400">
                    {step.number}
                  </div>
                  <step.icon className="mt-10 shrink-0 text-5xl text-blue-400" />
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex gap-6 rounded-lg border border-blue-400/20 bg-[#07111f]/70 p-7">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 text-4xl text-blue-400">
              <FiInfo />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Before You Send</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Helpful details include your current product stage, required
                features, preferred timeline, existing technology stack, and the
                main problem you want to solve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">Common Questions</h2>
          <div className="mt-5 overflow-hidden rounded-lg border border-blue-400/20 bg-[#07111f]/70">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-blue-400/10 last:border-b-0">
                <div className="flex items-start gap-5 px-7 py-5">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-500 text-slate-300">
                    {faq.open ? <FiMinus /> : <FiPlus />}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{faq.question}</h3>
                    {faq.open && (
                      <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
                    )}
                  </div>
                  <FiChevronDown className="mt-1 text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-3 pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-blue-400/25 bg-[#07111f]/80 p-7">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-500 text-4xl text-blue-400">
              <FiMail />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Prefer Email?</h2>
              <p className="mt-3 text-slate-300">
                Send your project overview directly to{' '}
                <a className="font-semibold text-blue-400" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-slate-400/70 px-6 text-sm font-semibold text-white transition hover:border-blue-400"
            >
              Write an Email
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FiClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default Contact
