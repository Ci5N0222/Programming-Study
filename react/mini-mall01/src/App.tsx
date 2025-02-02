import './App.css'
import { lazy, Suspense, useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Products } from './pages/Products/Products'
import { useDispatch } from 'react-redux'
import { cartList } from './pages/Cart/cartSlice'
import { cartData } from './assets/data/cart'
import { productsList } from './pages/Products/ProductsSlice'
import { productsData } from './assets/data/products'
import axios from 'axios'
import { useQuery } from 'react-query'

// lazy() : 필요해질 때 임포트를 진행
// 메인페이지에서 먼저 로드할 필요 없는 컴포넌트( 자원 절약 )
const Detail = lazy(() => import('./pages/Products/Detail/Detail'));
const Event = lazy(() => import('./pages/Event/Event'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const About = lazy(() => import('./pages/About/About'));
const Error = lazy(() => import('./pages/Error/Error'));

function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  const dispatch = useDispatch();

  /**
   * React-query
   *  - 실시간 데이터가 필요한 곳에서 유용
   *  장점
   *    1. 성공 / 실패 / 로딩중 쉽게 파악 가능
   *    2. 알아서 ajax 재요청 함
   *    3. 실패시 재요청 함
   *    4. ajax로 가져온 결과는 state 공유 필요없음 
   */
  const login = useQuery('login', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then(res => {
      if(res.data.name !== undefined || res.data.name !== null) setIsLogin(true);
      else setIsLogin(false);
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
        <Header isLogin={ isLogin } login={ login } />
        <Routes>
          <Suspense fallback={ <div> Loading ... </div> }>
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
          </Suspense>
        </Routes>
      </div>
    </>
  )
}

export default App
