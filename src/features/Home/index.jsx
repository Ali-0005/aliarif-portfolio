import Navbar from './components/Navbar'

function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <section
        id="home"
        className="flex min-h-screen items-center justify-center pt-24"
      >
        <h1 className="text-4xl font-bold">
          Hero Section Coming Next
        </h1>
      </section>
    </main>
  )
}

export default Home