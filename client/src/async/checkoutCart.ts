import axios from "axios";
import {Dispatch} from "redux";
import {buyProductsAC} from "../store/cartReducer/cartReducer";
import {message} from "antd";

export const checkoutCart = (): any => {
    return (dispatch: Dispatch) => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(() => {
                dispatch(buyProductsAC())
                message.success('Your order has been registered!')
            })
            .catch((err) => {
                message.error('Something went wrong while placing your order. Please try again')
                console.error(err)
            })
    }
}