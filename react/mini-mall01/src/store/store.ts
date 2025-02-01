import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartType, shoesType } from "../types/types";

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

let cart = createSlice({
    name: 'cart',
    initialState: [] as cartType[],
    reducers: {
        insCart(state, action: PayloadAction<{ cart :cartType[] }>) {
            return [ ...action.payload.cart ];
        },
        changeAmount(state, action: PayloadAction<{ id :number, amount :number }>){
            // 1번째 파라미터로 들어온 id가 같은 상품의 수량을 2번째 파라미터로 들어온 amount로 변경
            const item = state.find(item => item.id === action.payload.id);

            // Redux Toolkit은 Immer 라이브러리를 사용
            // 참조된 객체의 값을 변경해도 Reduxt 스토에서 자동으로 감지하여 새로운 상태를 생성
            if(item) item.amount = action.payload.amount;       // Redux 스토에서 자동 반영
        }
    }
})

// export state function 
export let { insCart, changeAmount } = cart.actions;

export const store = configureStore(({
    reducer : {
        user: user.reducer,
        stock: stock.reducer,
        shoes: shoes.reducer,
        shoesList: shoesList.reducer,
        cart: cart.reducer
    }
}));

export type RootState = ReturnType<typeof store.getState>;