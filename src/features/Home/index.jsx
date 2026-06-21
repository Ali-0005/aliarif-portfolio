import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustedTechnologies from './components/TrustedTechnologies'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import TechStackSection from './components/TechStackSection'

function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <HeroSection />
      <TrustedTechnologies />
      <AboutSection />
      <ExpertiseSection />
      <TechStackSection />
    </main>
  )
}

export default Home
