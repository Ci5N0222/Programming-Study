import { addComma } from "../assets/common/common"
import { useNavigate } from "react-router-dom";
import { productsType } from "../types/types";

export const Card = (props :{item :productsType, key :number}) => {

  const navi = useNavigate();

  return (
    <div onClick={() => navi(`/products/${props.item.id}`)} className="col-md-4 product" key={props.key}>
      <img src={ `https://codingapple1.github.io/shop/shoes${props.item.id+1}.jpg` } width="80%" alt={props.item.title}/>
      <h4>{ props.item.title }</h4>
      <p>{ addComma(props.item.price) }원</p>
    </div>
  )
}

