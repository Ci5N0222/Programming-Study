import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { cartData } from "../../assets/data/cart";
import { cartType } from "../../types/types";
import { addComma } from "../../assets/common/common";
import { RootState } from "../../store/store";
import { changeAmount, cartList } from "./cartSlice";

export const Cart = () => {

  const redux = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

  const [ cart, setCart ] = useState<cartType[]>();

  const handleAmount = (id :number, amount :number) => {
    // 컨펌으로 바꿔야됨
    if(amount === 0 ) return alert("해당 상품을 삭제하시겠습니까?");

    // 복제한 상태 변경
    setCart(prev => 
      prev? prev.map(item => 
        item.id === id ? { ...item, amount: amount } : item
      ): []
    );
    
    // Redux store 값 변경
    dispatch(changeAmount({id, amount}));
  }

  useEffect(() => {
    if(redux.cart.length === 0 || redux.cart === undefined) {
      dispatch(cartList({cart : cartData}));
      setCart([ ...cartData ]);
    }
    else setCart([ ...redux.cart ]);
  }, []);

  if(cart === undefined) return 
  return (
    <>
      <div className="cart-banner">
        <h1> My Cart </h1>
      </div>
      <div className="container">
        {
          cart === undefined || cart.length == 0 ?
          <div>장바구니에 상품이 없습니다.</div>
          :
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
                      <td>
                        <button className="cart-amount-btn" onClick={() => handleAmount(item.id, item.amount - 1)}>-</button>
                        { item.amount }
                        <button className="cart-amount-btn" onClick={() => handleAmount(item.id, item.amount + 1)}>+</button>
                      </td>
                      <td>{ addComma(item.amount*item.price) }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table> 
        }
      </div>
    </>
  )
}