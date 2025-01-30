import { useState } from 'react'
import './App.css'
import Header from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
