'use client'

import { useEffect, useState } from 'react';
import { products, ProductsType } from './data';
import styles from './page.module.css';

export default function List() {

  const [ items, setItems ] = useState<ProductsType[]>([]);

  const handleLikes = (id :number) => {
    setItems(prev => {
      return prev.map(item => item.id === id? { ... item , likes : item.likes + 1 }: item);
    });
  }

  useEffect(() => {
    setItems( [ ...products ] );
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Products</h2>
      {
        items.map((item: ProductsType) => {
          return (
            <div className={styles.food} key={ item.id }>
              <div className={ styles.image }>
                <img src={ item.image } alt={ item.title } />
              </div>
              <div className={ styles.info }>
                <h4>{ item.title } </h4>
                <p>${ item.price }</p>
                <div className={ styles.likes }>
                  <span>{ item.likes }</span>
                  <button onClick={ () => handleLikes(item.id) }> + </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}