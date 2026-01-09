import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Section from './pages/Section'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
