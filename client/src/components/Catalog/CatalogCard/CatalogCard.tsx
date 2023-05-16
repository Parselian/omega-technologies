import React from "react";
import {Button, Card, List, message} from "antd";
import './catalog-card.scss'
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";

import {IProductInfo} from "../../../store/productsReducer/productsReducer.props";
import {addProductToCartAC} from "../../../store/cartReducer/cartReducer";

const {Meta} = Card
export const CatalogCard = (data: IProductInfo): JSX.Element => {
    const dispatch = useDispatch()

    const addToCart = (data: IProductInfo) => {
        dispatch(addProductToCartAC(data))
        message.success('The product has been added to cart')
    }

    return (
        <List.Item key={data.id}>
            <Card className="catalog__card" hoverable
                  cover={<img alt="img" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                <Meta title={data.name} description={data.description}/>
                <span>{data.price}{process.env.HOSTNAME}</span>
                <div className="product-card__buttons">
                    <Button onClick={() => {
                        addToCart(data)
                    }}>
                        <ShoppingCartOutlined/>
                    </Button>
                </div>
            </Card>
        </List.Item>
    );
}