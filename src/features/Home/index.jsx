import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />
      <HeroSection />
    </main>
  )
}

export default Home