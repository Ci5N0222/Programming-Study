export interface CartItemType {
    id : number,
    title : string,
    price : number,
    amount : number
}

export let products: CartItemType[] = [
    { id : 0, title : "Tomatoes", price : 3, amount : 2},
    { id : 1, title : "Pasta", price : 5, amount : 4},
    { id : 2, title : "Coconut", price : 5, amount : 1}
]