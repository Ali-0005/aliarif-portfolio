import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustedTechnologies from './components/TrustedTechnologies'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'

function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <HeroSection />
      <TrustedTechnologies />
      <AboutSection />
      <ExpertiseSection />
    </main>
  )
}

export default Home
