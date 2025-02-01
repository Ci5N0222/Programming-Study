import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cart } from '../pages/Cart/cartSlice.ts';
import { products } from "../pages/Products/ProductsSlice.ts";


let user = createSlice({
    name: 'user1',
    initialState: 'kim' as string,
    reducers: {}
})

let stock = createSlice({
    name: 'stock',
    initialState: [10, 20, 30] as number[],
    reducers: {}
})

export const store = configureStore(({
    reducer : {
        user: user.reducer,
        stock: stock.reducer,
        products : products.reducer,
        cart: cart.reducer
    }
}));

export type RootState = ReturnType<typeof store.getState>;