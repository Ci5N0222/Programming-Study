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
    price :number,
    discount? :number       // 선택적 속성
}

export type cartType = {
    id :number,
    title :string,
    amount :number,
    price :number
}