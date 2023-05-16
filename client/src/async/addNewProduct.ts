import {message} from "antd";
import axios from "axios";
import {IProductInfo} from "../store/productsReducer/productsReducer.props";
import {createProductAC} from "../store/productsReducer/productsReducer";

export const addNewProduct = (data: IProductInfo): any => {
    return (dispatch: any) => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(() => {
                message.success('New product has been placed!')
                dispatch(createProductAC(data))
            })
            .catch((err) => {
                message.error('Something went wrong while placing your order. Please try again')
                console.error(err)
            })
    }
}