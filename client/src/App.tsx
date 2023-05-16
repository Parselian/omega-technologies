import React from 'react';
import withLayout from "./layout/Layout";
import {Route, Routes} from "react-router-dom";
import {CatalogPage} from "./routes/catalog";
import {AdminPage} from "./routes/admin-page";
import {CartPage} from "./routes/cart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CatalogPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </>
    );
}

export default withLayout(App);
