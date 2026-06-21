import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './features/Home'
import RealEstateProject from './features/Projects'
import SocifiyProject from './features/Projects/components/SocifiyProject'
import OmnichannelProject from './features/Projects/components/OmnichannelProject'
import RagProject from './features/Projects/components/RagProject'
import BillingProject from './features/Projects/components/BillingProject'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/real-estate" element={<RealEstateProject />} />
        <Route path="/projects/socifiy" element={<SocifiyProject />} />
        <Route path="/projects/omnichannel-ai-chatbot" element={<OmnichannelProject />} />
        <Route path="/projects/rag-ai-chatbot" element={<RagProject />} />
        <Route path="/projects/billing-bi" element={<BillingProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
