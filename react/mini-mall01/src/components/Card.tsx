import { shoes } from "../assets/data/shoes"

export const Card = (props :{item :shoes, key :number}) => {
  return (
    <div className="col-md-4 product" key={props.key}>
      <img src={ props.item.image }  width="80%" alt="상품 이미지1" />
      <h4>{ props.item.title }</h4>
      <p>{ props.item.content }</p>
    </div>
  )
}

