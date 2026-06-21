import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustedTechnologies from './components/TrustedTechnologies'
import AboutSection from './components/AboutSection'

function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <HeroSection />
      <TrustedTechnologies />
      <AboutSection />
    </main>
  )
}

export default Home
