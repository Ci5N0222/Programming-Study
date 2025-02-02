export interface ProductsType {
    id : number,
    title : string,
    image : string,
    price : number,
    likes : number
}

export let products: ProductsType[] = [
    { id: 0, title : "Tomatoes", image : "img/food0.png", price : 3, likes : 9 },
    { id: 1, title : "Pasta", image : "img/food1.png", price : 5, likes : 5 },
    { id: 2, title : "Coconut", image : "img/food2.png", price : 5, likes : 11 }
];