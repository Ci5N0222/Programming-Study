import { useEffect, useState } from "react"
import { shoesType, shoesData } from "../../assets/data/shoes"
import { Card } from "../../components/Card";


export const Products = () => {
  const [shoes, setShoes] = useState<shoesType[]>([]);

  useEffect(() => {
    setShoes([ ...shoesData ]);
  }, [])

  return (
    <>
      <div className="products-category">
        <p>BEST ITEMS</p>
        <hr />
      </div>
      <div className='products'>
        <div className='row'>
          {
            shoes.map((item :shoesType) => {
              return(
                  <Card item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
    </>
    
  )
}