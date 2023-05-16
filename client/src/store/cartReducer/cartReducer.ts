import {IAction} from "../root.props";
import {ICartReducer} from "./cartReducer.props";
import {IProductInfo} from "../productsReducer/productsReducer.props";

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
    BUY_PRODUCTS = "BUY_PRODUCTS",
    DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART",
    EMPTY_CART = "EMPTY_CART"

const defaultState: ICartReducer = {
    products: []
}
export const cartReducer = (state = defaultState, action: IAction) => {
    switch(action.type) {
        case BUY_PRODUCTS:
            return {...state, products: []}
        case ADD_PRODUCT_TO_CART:
            return {...state, products: [...state.products, action.payload]};
        case DELETE_PRODUCT_FROM_CART:
            return {...state, products: state.products.filter(p => p.id !== action.payload.id)}
        case EMPTY_CART:
            return {...state, products: []}
        default:
            return state
    }
}

export const addProductToCartAC = (payload: IProductInfo) => ({type: ADD_PRODUCT_TO_CART, payload: payload})
export const deleteProductFromCartAC = (payload: IProductInfo) => ({type: DELETE_PRODUCT_FROM_CART, payload: payload})
export const emptyCartAC = () => ({type: EMPTY_CART})
export const buyProductsAC = () => ({type: BUY_PRODUCTS})
