import { FiAward, FiGithub, FiMail, FiMapPin } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../../../data/profile'

function Footer() {
  return (
    <footer className="border-t border-blue-400/20 bg-[#020817] px-5 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 py-6 md:grid-cols-[1fr_3fr] md:items-center">
          <div>
            <p className="text-2xl font-extrabold uppercase tracking-wide">
              {profile.firstName}{' '}
              <span className="text-blue-400">{profile.lastName}</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">{profile.title}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
              <FiMapPin className="text-blue-400" />
              {profile.location}
            </p>
          </div>

          <div className="grid gap-4 border-blue-400/15 md:grid-cols-4 md:border-l">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 md:border-r md:border-blue-400/15 md:px-6"
            >
              <FiMail className="text-2xl text-blue-400" />
              <span className="text-sm text-slate-300">{profile.email}</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 md:border-r md:border-blue-400/15 md:px-6"
            >
              <FaLinkedinIn className="text-2xl text-slate-300" />
              <span className="text-sm text-slate-300">{profile.linkedin}</span>
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 md:border-r md:border-blue-400/15 md:px-6"
            >
              <FiGithub className="text-2xl text-slate-300" />
              <span className="text-sm text-slate-300">{profile.github}</span>
            </a>
            <a
              href={profile.credlyUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 md:px-6"
            >
              <FiAward className="text-2xl text-slate-300" />
              <span className="text-sm text-slate-300">{profile.credly}</span>
            </a>
          </div>
        </div>

        <p className="border-t border-blue-400/15 py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
