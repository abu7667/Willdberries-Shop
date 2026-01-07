import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
     <Footer />
    </>
  )
}

export default App
