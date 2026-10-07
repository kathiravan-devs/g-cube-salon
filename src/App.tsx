// import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './pages/home/Hero'
import { InfoStrip } from './pages/home/InfoStrip'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <InfoStrip />
    </>
  )
}

export default App
