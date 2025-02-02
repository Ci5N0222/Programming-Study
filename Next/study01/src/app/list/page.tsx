import styles from './page.module.css';

export default function List() {

  let products = [
    { title : "Tomatoes", price : 3 },
    { title : "Pasta", price : 5 },
    { title : "Coconut", price : 5 }
  ];

  return (
    <div>
      <h2 className={styles.title}>Products</h2>
      {
        products.map(item => {
          return (
            <div className={styles.food}>
              <div className={ styles.image }>
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