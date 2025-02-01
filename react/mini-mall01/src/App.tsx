import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Products } from './pages/Products/Products'
import { About } from './pages/About/About'
import { Error } from './pages/Error/Error'
import { Detail } from './pages/Products/Detail/Detail'
import { Event } from './pages/Event/Event'
import { Cart } from './pages/Cart/Cart'

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/products" element={ <Products /> } />
          <Route path='/products/:id' element={<Detail />} />
          <Route path="/about" element={ <About /> } />

          {/* 
              Nested Routes 
                - 태그 안에 태그( 라우트 안에 라우트 )
                - 내부 어디에 보여줄지 작성해야 함
          */}
          <Route path="/event" element={ <Event /> } >
            <Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> } />
            <Route path="two" element={ <p>생일기념 쿠폰 받기</p> } />
          </Route>

          <Route path="cart" element={ <Cart /> } />

          {/* Error Page */}
          <Route path="*" element={ <Error /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
