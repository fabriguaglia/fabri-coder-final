import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../shop/shop/shopSlice";
import cartReducer from "../shop/cart/cartSlice"

const store = configureStore({
    reducer:{
        shopReducer,
        cartReducer
    }
})

export default store