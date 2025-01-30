import { useEffect, useState } from "react"
import { addComma } from "../assets/common/common"
import { shoesType, shoesData } from "../assets/data/shoes"
import { useParams } from "react-router-dom"
import { Error } from "../pages/Error/Error"

export const Detail = () => {
  // useParams : 현재 url의 파리미터를 받아온다.
  const { id } = useParams<{ id :string }>();
  const [product, setProduct] = useState<shoesType | undefined>();

  useEffect(() => {
    if(!id) return;

    const productFound :shoesType|undefined = shoesData.find(item => item.id === Number(id));
    setProduct(productFound);

  }, [id]);

  if(!product) return <Error />
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ product.title }</h4>
          <p>{ product.content }</p>
          <p>{ addComma(product.price) }원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}