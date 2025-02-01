import { configureStore, createSlice } from "@reduxjs/toolkit";
import { shoesType } from "../types/types";

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

let shoes = createSlice({
    name: 'shoes',
    initialState: {} as shoesType,
    reducers: {}
})

let shoesList = createSlice({
    name: 'shoesList',
    initialState: [] as shoesType[],
    reducers: {}
})

export const store = configureStore(({
    reducer : {
        user: user.reducer,
        stock: stock.reducer,
        shoes: shoes.reducer,
        shoesList : shoesList.reducer
    }
}));

export type RootState = ReturnType<typeof store.getState>;