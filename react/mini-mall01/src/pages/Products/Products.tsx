import { useEffect, useState } from "react"
import { shoesData } from "../../assets/data/shoes"
import { Card } from "../../components/Card";
import { getReq } from "../../assets/api/api";
import { shoesType } from "../../types/types";

export const Products = () => {
  const [shoes, setShoes] = useState<shoesType[]>([]);
  const [count, setCount] = useState<number>(2);

  const getData = async() => {
    if(count > 3) return alert("상품이 더이상 없습니다.");
    
    const data :shoesType[] = await getReq(`https://codingapple1.github.io/shop/data${count}.json`);
    if(data === null) return;
    else {
      setShoes(prev => [ ...prev, ...data ] );
      setCount(prev => prev = prev+1);
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