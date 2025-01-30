import bannerImage from '../assets/img/main-bg.png'
import {shoesData, shoes} from '../assets/data/shoes';
import { useEffect, useState } from 'react';
import { Card } from './Card';

const Home = () => {
  const [shoes, useShoes] = useState<shoes[]>([]);

  useEffect(() => {
    // 메인 페이지에서 필요한 상품 데이터 가져오는 API
    useShoes([ ...shoesData ]);
  }, [])
  return (
    <>
      {/* Banner */}
      <div className="main-bg" style={{ backgroundImage: 'url(' + bannerImage + ')' }}></div>

      {/* Products */}
      <div className='main-products'>
        <div className='row'>
          {
            shoes.map((item :shoes, i :number) => {
              return(
                <Card item={item} key={i} />
              )
            })
          }
        </div>
      </div>

    </>

  )
}

export default Home;