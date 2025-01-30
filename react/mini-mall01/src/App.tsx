import { useState } from 'react'
import './App.css'
import Header from './components/Navbar'
import Home from './components/Home'

function App() {
  const [shoes, setShoes] = useState();

  return (
    <>
      <div>
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
