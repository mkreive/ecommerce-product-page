import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import './index.scss';

import Header from './components/Header';
import Collections from './components/Collections';
import Men from './components/Men';
import Women from './components/Women';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import AccountPopUp from './components/AccountPopUp';
import CartProvider from './store/CartProvider';
import Checkout from './components/Checkout';
import CartContext from './store/cart-context';
import GalleryPortal from './components/GalleryPortal';

const App = function () {
    const [user, setUser] = useState({});
    const [cartIsShown, setCartIsShown] = useState(false);
    const [accountIsShown, setAccountIsShown] = useState(false);
    const [checkoutIsShown, setCheckoutIsShown] = useState(false);
    const [galleryIsShown, setGalleryIsShown] = useState(false);
    const cartCtx = useContext(CartContext);
    const [mainProduct, setMainProduct] = useState({});

    const showCartHandler = function (props) {
        if (!cartIsShown) {
            setCartIsShown(true);
            setAccountIsShown(false);
        } else if (cartIsShown) {
            setCartIsShown(false);
        }
        setUser(props);
    };
    const showAccountHandler = function (props) {
        if (!accountIsShown) {
            setAccountIsShown(true);
            setCartIsShown(false);
        } else if (accountIsShown) {
            setAccountIsShown(false);
        }
        setUser(props);
    };
    const showCheckoutHandler = function (props) {
        if (!checkoutIsShown) {
            setCheckoutIsShown(true);
            setCartIsShown(false);
        } else if (checkoutIsShown) {
            setCheckoutIsShown(false);
        }
    };
    const placeOrderHandler = function () {
        console.log('placing order');
        cartCtx.order(user);
    };
    const closeCheckoutHandler = function () {
        setCheckoutIsShown(false);
    };

    const showGalleryHandler = function (props) {
        setGalleryIsShown(true);
        setMainProduct(props);
    };

    const cancelGalleryHandler = function () {
        setGalleryIsShown(false);
    };
    return (
        <CartProvider>
            <div className='App'>
                {galleryIsShown && <GalleryPortal product={mainProduct} onCancel={cancelGalleryHandler} />}
                {cartIsShown && <Cart onCheckout={showCheckoutHandler} onClose={showCheckoutHandler} />}
                {accountIsShown && <AccountPopUp user={user} />}
                {checkoutIsShown && <Checkout user={user} onOrder={placeOrderHandler} onClose={closeCheckoutHandler} />}
                <Header onShowCart={showCartHandler} onShowAccount={showAccountHandler} />
                <Routes>
                    <Route path='/' element={<Navigate to={'/collections'} />} />
                    <Route path='/collections/*' element={<Collections />} />
                    <Route path='/men/*' element={<Men />} />
                    <Route path='/women/*' element={<Women />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/product/:productId' element={<Product onShowGallery={showGalleryHandler} />} />
                </Routes>
            </div>
        </CartProvider>
    );
};

export default App;
