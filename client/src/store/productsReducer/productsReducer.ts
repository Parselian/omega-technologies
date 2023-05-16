import {IProductInfo, IProductsReducer} from "./productsReducer.props";
import {IAction} from "../root.props";

const CREATE_PRODUCT = "CREATE_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT";

const defaultState: IProductsReducer = {
    products: [
        {
            id: 100,
            name: 'iPhone',
            price: 19000,
            imgPath: './logo.svg',
            description: 'iPhone 14 Pro Max (refubrished)'
        },
        {
            id: 101,
            name: 'iPad Pro 11',
            price: 78000,
            imgPath: ''
        }
    ]
};

export const productsReducer = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {...state, products: [...state.products, {id: state.products[state.products.length - 1].id + 1, ...action.payload}]};
        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(product => product.id === action.payload.id)};
        default:
            return state;
    }
}

export const createProductAC = (payload: IProductInfo) => ({type: CREATE_PRODUCT, payload: payload})

/*
For an extra admin overlay that will help easily toggle products state
(remove product from catalog or add it, by toggling a personal switch)*/
export const deleteProductAC = (payload: IProductInfo) => ({type: DELETE_PRODUCT, payload: payload})

