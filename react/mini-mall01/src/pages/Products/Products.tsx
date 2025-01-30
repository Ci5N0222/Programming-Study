import { useEffect, useState } from "react"
import { shoesType, shoesData } from "../../assets/data/shoes"
import { Card } from "../../components/Card";


export const Products = () => {

  const [shoes, setShoes] = useState<shoesType[]>([]);

  useEffect(() => {
    setShoes([ ...shoesData ]);
  }, [])

  return (
    <div className='main-products'>
      <div className='row'>
        {
          shoes.map((item :shoesType, i :number) => {
            return(
              <Card item={item} key={i} />
            )
          })
        }
      </div>
    </div>
  )
}