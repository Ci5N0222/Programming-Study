import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { insCart, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { cartData } from "../../assets/data/cart";
import { cartType } from "../../types/types";
import { addComma } from "../../assets/common/common";

export const Cart = () => {

  const redux = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

  const [ cart, setCart ] = useState<cartType[]>();

  useEffect(() => {
    if(redux.cart.length === 0) dispatch(insCart({cart : cartData}));
    else setCart([ ...redux.cart ]);
  }, []);

  if(cart === undefined) return <div>장바구니에 상품이 없습니다.</div>
  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item :cartType, i :number) => {
              return (
                <tr>
                  <td>{ i+1 }</td>
                  <td>{ item.title }</td>
                  <td>{ item.amount }</td>
                  <td>{ addComma(item.amount*item.price) }</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </Table> 
    </div>
  )
}