import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustedTechnologies from './components/TrustedTechnologies'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import ServicesStrip from './components/ServicesStrip'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import ExperienceSection from './components/ExperienceSection'

function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <HeroSection />
      <TrustedTechnologies />
      <AboutSection />
      <ExpertiseSection />
      <TechStackSection />
      <ProjectsSection />
      <ServicesStrip />
      <WhyWorkWithMe />
      <ExperienceSection />
    </main>
  )
}

export default Home
