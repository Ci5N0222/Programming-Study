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

    // Clean up function
    return () => {
      // unmount 시 실행됨( mount 시 실행 X )
      // 기존 데이터 요청은 제거

    }
  }, [id]);

  if(!product) return <Error />
  
  return (
    <div className="container detail">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${product.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 detail-col">
          <div className="detail-info">
            <h4>{ product.title }</h4>
            <p>{ product.content }</p>
            <p>{ addComma(product.price) }원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div>
    </div> 
  )
}