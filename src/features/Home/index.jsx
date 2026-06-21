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
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

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
      <ContactCTA />
      <Footer />
    </main>
  )
}

export default Home
