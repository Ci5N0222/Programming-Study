import bannerImage from '../assets/img/home-banner.jpg'

const Main = () => {
  return (
    <>
      {/* Banner */}
      <div className="main-bg" style={{ backgroundImage: 'url(' + bannerImage + ')' }}></div>

      {/* Products */}
      <div className='main-products'>
        <div className='row'>
          <div className="col-md-4 product">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg"  width="80%" alt="상품 이미지1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>


          <div className="col-md-4 product">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg"  width="80%" alt="상품 이미지1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4 product">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg"  width="80%" alt="상품 이미지1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Main;