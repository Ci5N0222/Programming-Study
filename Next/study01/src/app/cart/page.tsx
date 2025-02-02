import { CartItemType, products } from './data'
import styles from './page.module.css'

export default function Cart() {

  return (
    <div>
      <h4 className={ styles.title }>Cart</h4>
      {
        products.map(item => {
          return (
            <CartItem product={ item }/>
          )
        })
      }
    </div>
  )
}

function CartItem(props: {product : CartItemType}) {
  return (
    <div className={ styles.cart_item }>
      <p>{ props.product.title }</p>
      <p>${ props.product.price * props.product.amount }</p>
      <p>{ props.product.amount }개</p>
    </div>
  )
}