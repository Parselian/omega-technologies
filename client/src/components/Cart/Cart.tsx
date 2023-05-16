import React from "react";
import {Button, List, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {IRootStore} from "../../store/root.props";
import "./cart.scss";
import {CartItem} from "./CartItem/CartItem";
import {emptyCartAC} from "../../store/cartReducer/cartReducer";
import {checkoutCart} from "../../async/checkoutCart";

export const Cart = (): JSX.Element => {
    const dispatch = useDispatch(),
        cartGoods = useSelector((state: IRootStore) => state.cartReducer.products)

    const emptyCart = () => {
        dispatch(emptyCartAC())
        message.success('Your cart has been cleared!')
    }

    return (
        <>
            <List itemLayout="horizontal"
                  dataSource={cartGoods}
                  className="cart"
                  renderItem={item => (
                      <CartItem name={item.name} imgPath={item.imgPath} price={item.price} id={item.id}
                                description={item.description}/>
                  )}
            />

            {
              cartGoods.length > 0 &&

              <div className="cart__buttons">
                <Button danger onClick={() => emptyCart()}>
                  Empty cart
                </Button>
                <Button type="primary" onClick={() => dispatch(checkoutCart())}>
                  Checkout
                </Button>
              </div>
            }
        </>
    )
}
