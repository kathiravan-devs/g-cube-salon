// import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { Home } from './pages/home/Home';
import { Services } from './pages/services/Services';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
