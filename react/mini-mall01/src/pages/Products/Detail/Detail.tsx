import { useEffect, useState } from "react"
import { addComma } from "../../../assets/common/common"
import { productsData } from "../../../assets/data/products"
import { useNavigate, useParams } from "react-router-dom"
import { Error } from "../../Error/Error"
import { Nav } from 'react-bootstrap'
import { cartType, productsType } from "../../../types/types"
import { useDispatch } from "react-redux"
import { addCart } from "../../Cart/cartSlice"

export const Detail = () => {
  // useParams : 현재 url의 파리미터를 받아온다.
  const { id } = useParams<{ id :string }>();
  const [ product, setProduct ] = useState<productsType | undefined>();
  const [ tab, setTab ] = useState<number>(0);
  const [ amount, setAmount ] = useState<number>(1);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const handleAmount = (count :number) => {
    if(count <= 0) return;
    setAmount(count);
  }

  const addProduct = () => {
    if(!product) return;

    // 해당 상품이 장바구니에 이미 있는지 확인하고 없으면 상품 추가, 있으면 수량 변경하도록 짜야함

    // 해당 상품 장바구니에 있는지 확인

    // 있으면 수량 추가

    // 없으면 해당 상품 추가
    const cart :cartType= {
      id : product.id,
      title : product.title,
      amount,
      price : product.price
    };
    
    dispatch(addCart({cart : cart}));

    const addProduct = confirm("장바구니에 상품이 추가되었습니다.\n장바구니로 이동하시겠습니까?")
    if(addProduct) navi("/cart");
  }

  const handlerTabChange = (number :number) => setTab(number);

  useEffect(() => {
    if(!id) return;
    const productFound :productsType|undefined = productsData.find(item => item.id === Number(id));
    setProduct(productFound);
  }, [id]);

  if(!product) return <Error />
  
  return (
    <>
      <div className="container detail">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${product.id+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 detail-col">
            <div className="detail-info">
              <h4>{ product.title }</h4>
              <p>{ product.content }</p>
              <p>{ addComma(product.price) }원</p>
              <div className="detail-cartBox">
                <div className="detail-cart-amount">
                  <button onClick={() => handleAmount(amount - 1)}>-</button>
                  <p>{ amount }</p>
                  <button onClick={() => handleAmount(amount + 1)}>+</button>
                </div>
                <button onClick={() => addProduct()}>장바구니</button>
              </div>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div>
      </div> 
      <div className="container">
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => handlerTabChange(0)}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => handlerTabChange(1)}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => handlerTabChange(2)}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="detail-tab">
          <TabContent tab={ tab } shoes={ product }/>
        </div>
      </div>
    </>
  )
}

const TabContent = (props: { tab :number, shoes: productsType }) :JSX.Element => {

  let [ fade, setFade ] = useState<string>("");

  useEffect(() => {
    let setTime = setTimeout(() => {
      setFade("end");
    }, 50);

    return () => {
      clearTimeout(setTime);
      setFade("");
    }

  }, [props.tab]);

  return (
    <div className={ `start  ${fade}` }>
      { [ <div>{ props.shoes.title }</div>, <div>내용1</div>, <div>내용2</div> ][props.tab] }
    </div>
  )
  
}