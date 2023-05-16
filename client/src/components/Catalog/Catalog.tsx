import React from "react"
import {List} from "antd";
import {IRootStore} from "../../store/root.props";
import {useSelector} from "react-redux";
import {CatalogCard} from "./CatalogCard/CatalogCard";

export const Catalog = (): JSX.Element => {
    const products = useSelector((state: IRootStore) => state.productsReducer.products);

    const catalogSettings = {
        grid: {
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 3,
        },
        pagination: {
            pageSize: 9,
        },
        dataSource: products
    }

    return <>
        <List {...catalogSettings}
              renderItem={(item) => (
                  <CatalogCard {...item}/>
              )}
        />
    </>
}
