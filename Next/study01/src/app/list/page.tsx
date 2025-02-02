import { products, ProductsType } from './data';
import styles from './page.module.css';

export default function List() {

  return (
    <div>
      <h2 className={styles.title}>Products</h2>
      {
        products.map((item: ProductsType) => {
          return (
            <div className={styles.food} key={ item.id }>
              <div className={ styles.image }>
                <img src={ item.image } alt={ item.title } />
              </div>
              <div className={ styles.info }>
                <h4>{ item.title } </h4>
                <p>${ item.price }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}