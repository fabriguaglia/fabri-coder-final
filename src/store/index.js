import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../shop/shop/shopSlice";
import cartReducer from "../shop/cart/cartSlice"
import { shopApi } from "../services/shop/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../shop/user/userSlice";
import { authApi } from "../services/auth/authApi";

const store = configureStore({
    reducer:{
        shopReducer,
        cartReducer,
        userReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>(
        getDefaultMiddleware()
            .concat(shopApi.middleware))
            .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store