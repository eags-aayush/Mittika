import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Vases from './pages/Vases'
import Lamps from './pages/Lamps'
import WallArt from './pages/WallArt'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="vases" element={<Vases />} />
        <Route path="lamps" element={<Lamps />} />
        <Route path="wallart" element={<WallArt />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
