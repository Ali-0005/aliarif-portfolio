import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './features/Home'
import RealEstateProject from './features/Projects'
import SocifiyProject from './features/Projects/components/SocifiyProject'
import OmnichannelProject from './features/Projects/components/OmnichannelProject'
import RagProject from './features/Projects/components/RagProject'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/real-estate" element={<RealEstateProject />} />
        <Route path="/projects/socifiy" element={<SocifiyProject />} />
        <Route path="/projects/omnichannel-ai-chatbot" element={<OmnichannelProject />} />
        <Route path="/projects/rag-ai-chatbot" element={<RagProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
