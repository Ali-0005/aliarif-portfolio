import { FiCalendar, FiMail } from 'react-icons/fi'
import { profile } from '../../../data/profile'

function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-[#020817] px-5 pb-16 text-white lg:px-8 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-r from-blue-600/90 via-blue-950 to-violet-950 px-6 py-7 shadow-2xl shadow-blue-950/30 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-400/15 shadow-lg shadow-blue-500/20">
              <FiMail className="text-5xl text-white" />
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
                Have a product idea, AI solution, or backend system you want to
                build? Let&apos;s discuss your requirements and design a
                scalable solution that is ready for real users.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-nowrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-blue-400/40 bg-[#142654]/80 px-6 text-base font-semibold text-white transition hover:bg-[#1a326e]"
              >
                <FiMail className="text-xl" />
                {profile.email}
              </a>
              <a
                href={`mailto:${profile.email}?subject=Schedule%20a%20Call`}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-blue-300/20 bg-blue-600 px-7 text-base font-semibold text-white shadow-lg shadow-blue-950/25 transition hover:bg-blue-500"
              >
                <FiCalendar className="text-xl" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
