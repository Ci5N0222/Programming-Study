import { useEffect, useState } from "react"
import { productsData } from "../../assets/data/products"
import { Card } from "../../components/Card";
import { getReq } from "../../assets/api/api";
import { productsType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { productsList } from "./ProductsSlice";

export const Products = () => {
  const [products, setProducts] = useState<productsType[]>([]);
  const [count, setCount] = useState<number>(2);

  const store = useSelector((state : RootState) => state);
  const dispatch = useDispatch();

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
    if(store.products.length === 0 || store.products === undefined) {
      setProducts([ ...productsData ]);
      dispatch(productsList({ products : productsData }));
    }
    else setProducts([ ...store.products ]); 
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