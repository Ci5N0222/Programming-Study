import styles from './page.module.css'

export default function Cart() {
  return (
    <div>
      <h4 className={ styles.title }>Cart</h4>
      <div className={ styles.cart_item }>
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className={ styles.cart_item }>
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  )
}