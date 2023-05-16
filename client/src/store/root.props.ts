import {IProductsReducer} from "./productsReducer/productsReducer.props";
import {ICartReducer} from "./cartReducer/cartReducer.props";

export interface IRootStore {
    productsReducer: IProductsReducer,
    cartReducer: ICartReducer
}

export interface IAction {
    type: string,
    payload: Record<string, unknown>
}