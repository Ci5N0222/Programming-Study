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
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cartList } from './pages/Cart/cartSlice'
import { cartData } from './assets/data/cart'
import { productsList } from './pages/Products/ProductsSlice'
import { productsData } from './assets/data/products'
import axios from 'axios'
import { useQuery } from 'react-query'

function App() {

  const dispatch = useDispatch();

  /**
   * React-query
   *  장점
   *    1. 성공 / 실패 / 로딩중 쉽게 파악 가능
   *    2. 알아서 ajax 재요청 함
   *    3. 실패시 재요청 함
   *    4. ajax로 가져온 결과는 state 공유 필요없음 
   */
  const apiResult = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then(res => {
      return res.data;
    });
  });

  useEffect(() => {
    dispatch(productsList({products : productsData}));
    dispatch(cartList({cart : cartData}));
  }, []);

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
