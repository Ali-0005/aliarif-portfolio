import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './features/Home'
import RealEstateProject from './features/Projects'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/real-estate" element={<RealEstateProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
