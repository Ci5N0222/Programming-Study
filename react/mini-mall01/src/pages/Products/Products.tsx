import { useEffect, useState } from "react"
import { productsData } from "../../assets/data/products"
import { Card } from "../../components/Card";
import { getReq } from "../../assets/api/api";
import { productsType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Products = () => {
  const [products, setProducts] = useState<productsType[]>([]);
  const [count, setCount] = useState<number>(2);

  const store = useSelector((state : RootState) => state);

  const getData = async() => {
    if(count > 3) return alert("상품이 더이상 없습니다.");
    
    const data :productsType[] = await getReq(`https://codingapple1.github.io/shop/data${count}.json`);
    if(data === null) return;
    else {
      setProducts(prev => [ ...prev, ...data ] );
      setCount(prev => prev = prev+1);
    }
  }

  useEffect(() => {
    if(store.products) setProducts([ ...store.products ])
    else setProducts([ ...productsData ]);
  }, [])

  return (
    <>
      <div className="products-category">
        <p>BEST ITEMS</p>
      </div>
      <div className='products'>
        <div className='row'>
          {
            products.map((item :productsType) => {
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