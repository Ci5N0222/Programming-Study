import { useEffect, useState } from "react"
import { addComma } from "../../../assets/common/common"
import { shoesType, shoesData } from "../../../assets/data/shoes"
import { useParams } from "react-router-dom"
import { Error } from "../../Error/Error"
import { Nav } from 'react-bootstrap'

export const Detail = () => {
  // useParams : 현재 url의 파리미터를 받아온다.
  const { id } = useParams<{ id :string }>();
  const [ product, setProduct ] = useState<shoesType | undefined>();
  const [ tab, setTab ] = useState<number>(0);

  const handlerTabChange = (number :number) => {
    setTab(number);
  }

  useEffect(() => {
    if(!id) return;
    const productFound :shoesType|undefined = shoesData.find(item => item.id === Number(id));
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
          <TabContent tab={ tab }/>
        </div>
      </div>
    </>
  )
}

const TabContent = (props: { tab :number }) :JSX.Element => {

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
      { [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.tab] }
    </div>
  )
  
}