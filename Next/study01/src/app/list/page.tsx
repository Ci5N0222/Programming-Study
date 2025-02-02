import styles from './page.module.css';

export default function List(){
    return (
        <div>
            <h2 className={ styles.title }>Products</h2>
            <div className={ styles.food }>
                <h4>상품명 $40</h4>
            </div>
            <div className={ styles.food }>
                <h4>상품명 $40</h4>
            </div>
        </div>
    )
}