// interface shoes {
//     id :number,
//     title :string,
//     content :string,
//     price :number,
// }

export type shoesType = {
    readonly id :number,    // readonly 수정 불가능
    title :string,
    content :string,
    image :string,
    price :number,
    discount? :number       // 선택적 속성
}

export const shoesData :shoesType[] = [
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      image: "https://codingapple1.github.io/shop/shoes1.jpg",
      price : 120000
    },
  
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      image: "https://codingapple1.github.io/shop/shoes2.jpg",
      price : 110000
    },
  
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      image: "https://codingapple1.github.io/shop/shoes3.jpg",
      price : 130000
    }
] 