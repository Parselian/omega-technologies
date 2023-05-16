import {Button, List} from "antd";
import React from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {IProductInfo} from "../../../store/productsReducer/productsReducer.props";
import {deleteProductFromCartAC} from "../../../store/cartReducer/cartReducer";
import {useDispatch} from "react-redux";


export const CartItem = (data: IProductInfo): JSX.Element => {
    const dispatch = useDispatch()

    return (
        <List.Item
            className="cart__item"
            key={data.id}
            extra={
                <img className="cart__item-img"
                     alt="logo"
                     src="https://mtscdn.ru/upload/iblock/672/1.png"/>
            }
        >
            <List.Item.Meta title={data.name} description={data.price}/>
            <Button type="primary" danger onClick={() => {dispatch(deleteProductFromCartAC(data))}}>
                <DeleteOutlined/>
            </Button>
        </List.Item>
    )
}