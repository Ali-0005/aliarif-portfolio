import { useRef } from 'react'
import { FaAws, FaPython } from 'react-icons/fa'
import {
  SiCelery,
  SiDjango,
  SiDocker,
  SiOpenai,
  SiPostgresql,
  SiReact,
} from 'react-icons/si'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import pineconeLogo from '../../../assets/Pinecone-Icon--Streamline-Svg-Logos.svg'
import rabbitmqLogo from '../../../assets/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg'
import redisLogo from '../../../assets/Redis.svg'

const trustedTechnologies = [
  { name: 'Python', icon: FaPython, className: 'text-yellow-300' },
  { name: 'django', icon: SiDjango, className: 'text-white' },
  { name: 'DRF', className: 'text-red-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, className: 'text-sky-300' },
  { name: 'PostGIS', icon: SiPostgresql, className: 'text-sky-300' },
  { name: 'Redis', image: redisLogo },
  { name: 'Celery', icon: SiCelery, className: 'text-lime-400' },
  { name: 'RabbitMQ', image: rabbitmqLogo },
  { name: 'AWS', icon: FaAws, className: 'text-orange-300' },
  { name: 'Docker', icon: SiDocker, className: 'text-sky-400' },
  { name: 'React', icon: SiReact, className: 'text-cyan-400' },
  { name: 'OpenAI', icon: SiOpenai, className: 'text-emerald-300' },
  { name: 'Pinecone', image: pineconeLogo, imageClassName: 'rounded bg-white p-1' },
]

function TrustedTechnologies() {
  const scrollRef = useRef(null)

  const scrollTechnologies = (direction) => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction * 240,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-[#020817] px-5 pb-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0b1424]/70 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-wide text-slate-300">
          Trusted Technologies
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Scroll technologies left"
            onClick={() => scrollTechnologies(-1)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex min-w-0 flex-1 items-center gap-4 overflow-x-auto scroll-smooth sm:gap-5 lg:gap-6"
          >
            {trustedTechnologies.map((tech) => {
              const Icon = tech.icon

              return (
                <div
                  key={tech.name}
                  className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white"
                >
                  {Icon ? (
                    <>
                      <Icon className={`text-2xl ${tech.className}`} />
                      <span>{tech.name}</span>
                    </>
                  ) : tech.image ? (
                    <>
                      <img
                        src={tech.image}
                        alt=""
                        className={`h-6 w-6 object-contain ${tech.imageClassName || ''}`}
                      />
                      <span>{tech.name}</span>
                    </>
                  ) : (
                    <span className={`text-lg font-black ${tech.className}`}>
                      {tech.name}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          <button
            type="button"
            aria-label="Scroll technologies right"
            onClick={() => scrollTechnologies(1)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrustedTechnologies
