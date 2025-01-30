import { useState } from 'react'
import './App.css'
import Header from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App
