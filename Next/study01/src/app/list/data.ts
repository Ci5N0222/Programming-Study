export interface ProductsType {
    id : number,
    title : string,
    image : string,
    price : number
}

export let products: ProductsType[] = [
    { id: 0, title : "Tomatoes", image : "img/food0.png", price : 3 },
    { id: 1, title : "Pasta", image : "img/food1.png", price : 5 },
    { id: 2, title : "Coconut", image : "img/food2.png", price : 5 }
];