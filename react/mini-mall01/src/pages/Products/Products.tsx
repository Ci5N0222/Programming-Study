import { useEffect, useState } from "react"
import { shoesType, shoesData } from "../../assets/data/shoes"
import { Card } from "../../components/Card";
import { getReq } from "../../assets/api/api";


export const Products = () => {
  const [shoes, setShoes] = useState<shoesType[]>([]);

  const getData = async() => {
    const data :shoesType[] = await getReq('https://codingapple1.github.io/shop/data2.json');
    if(data === null) return;
    else {
      setShoes(prev => [ ...prev, ...data ] );
    }
  }

  useEffect(() => {
    setShoes([ ...shoesData ]);
  }, [])

  return (
    <>
      <div className="products-category">
        <p>BEST ITEMS</p>
      </div>
      <div className='products'>
        <div className='row'>
          {
            shoes.map((item :shoesType) => {
              return(
                  <Card item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
      <div className="products-category">
        <span>
          <button onClick={() => getData()}>더보기</button>
        </span>
      </div>
    </>
    
  )
}