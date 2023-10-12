import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import CheckoutPage from '../pages/CheckoutPage';
import Terms from '../pages/Terms';
import Condition from '../pages/Condition';
import Faq from '../pages/Faq';
const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/CheckoutPage" element={<CheckoutPage/>} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="/Terms" element={<Terms/>}></Route>
                <Route path="/Conditions" element={<Condition/>}></Route>
                <Route path="/Faq" element={<Faq/>}></Route>
            </Routes>
        </>
    );
};

export default RouterRoutes;
{/* <Route path="*" element={<ErrorPage />} /> */}