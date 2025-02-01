import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsType } from "../../types/types";

export const products = createSlice({
    name : 'products',
    initialState : [] as productsType[],
    reducers : {
        productsList(state, action : PayloadAction<{ products : productsType[] }>) {
            return [ ...action.payload.products ];
        }
    }
});

export let { productsList } = products.actions;
