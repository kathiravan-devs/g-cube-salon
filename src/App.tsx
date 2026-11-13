// import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { Home } from './pages/home/Home';
import { Services } from './pages/services/Services';
import { ContactPage } from './pages/contact/ContactPage';
import { Gallery } from './pages/gallery/GalleryPage';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
