import {productsReducer} from "./productsReducer/productsReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cartReducer/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    productsReducer,
    cartReducer
})
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})