import styles from './page.module.css';

export default function List() {

  let products = [
    { id: 0, title : "Tomatoes", image : "img/food0.png", price : 3 },
    { id: 1, title : "Pasta", image : "img/food1.png", price : 5 },
    { id: 2, title : "Coconut", image : "img/food2.png", price : 5 }
  ];

  return (
    <div>
      <h2 className={styles.title}>Products</h2>
      {
        products.map((item, i) => {
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