import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import { Products } from './pages/Products/Products'
import { About } from './pages/About/About'

function App() {
  return (
    <>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
