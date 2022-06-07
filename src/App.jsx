import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

import Header from "./components/Header";
import Collections from "./components/Collections";
import Men from "./components/Men";
import Women from "./components/Women";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import AccountPopUp from "./components/AccountPopUp";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout";

const App = function () {
    const [user, setUser] = useState({});
    const [cartIsShown, setCartIsShown] = useState(false);
    const [accountIsShown, setAccountIsShown] = useState(false);
    const [checkoutIsShown, setCheckoutIsShown] = useState(false);

    const showCartHandler = function (props) {
        if (!cartIsShown) {
            setCartIsShown(true);
        } else if (cartIsShown) {
            setCartIsShown(false);
        }
        setUser(props);
    };
    const showAccountHandler = function (props) {
        if (!accountIsShown) {
            setAccountIsShown(true);
        } else if (accountIsShown) {
            setAccountIsShown(false);
        }
        setUser(props);
    };
    const showCheckoutHandler = function (props) {
        if (!checkoutIsShown) {
            setCheckoutIsShown(true);
        } else if (checkoutIsShown) {
            setCheckoutIsShown(false);
        }
    };

    return (
        <CartProvider>
            <div className="App">
                {cartIsShown && (
                    <Cart onCheckout={showCheckoutHandler} cart={user.cart} />
                )}
                {accountIsShown && <AccountPopUp user={user} />}
                {checkoutIsShown && <Checkout user={user} />}
                <Header
                    onShowCart={showCartHandler}
                    onShowAccount={showAccountHandler}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to={"/collections"} />}
                    />
                    <Route path="/collections/*" element={<Collections />} />
                    <Route path="/men/*" element={<Men />} />
                    <Route path="/women/*" element={<Women />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:productId" element={<Product />} />
                </Routes>
            </div>
        </CartProvider>
    );
};

export default App;
