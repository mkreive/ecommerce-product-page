import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { getLocalStorage, fetchUserData } from "./helperFunctions";

import "../index.scss";
import Navigation from "./Navigation";
import CartButton from "./CartButton";
import Cart from "./Cart";
import Account from "./Account";
import AccountPopUp from "./AccountPopUp";

const Header = (props) => {
    const [user, setUser] = useState({});
    const [overlayCart, setOverlayCart] = useState();
    const [overlayAccount, setOverlayAccount] = useState();

    const CartOverlay = function (props) {
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <Cart cart={props.cart} />,
                    document.getElementById("overlay-root")
                )}
            </Fragment>
        );
    };

    const AccountOverlay = function (props) {
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <AccountPopUp
                        name={props.userName}
                        cart={props.cart}
                        id={props.userId}
                    />,
                    document.getElementById("overlay-root")
                )}
            </Fragment>
        );
    };

    useEffect(() => {
        const getUser = async function () {
            let loggedUserId = getLocalStorage("userId");
            if (!loggedUserId) {
                loggedUserId = "u0";
            }
            const userData = await fetchUserData(loggedUserId);
            setUser(userData);
        };
        getUser();
    }, []);

    const cartClickHandler = function () {
        if (overlayCart) {
            setOverlayCart(null);
        } else if (overlayAccount) {
            setOverlayAccount(null);
            setOverlayCart(true);
        } else {
            setOverlayCart(true);
        }
    };

    const accountClickHandler = function () {
        if (overlayAccount) {
            setOverlayAccount(null);
        } else if (overlayCart) {
            setOverlayCart(null);
            setOverlayAccount(true);
        } else {
            setOverlayAccount(true);
        }
    };

    return (
        <Fragment>
            {overlayCart && <CartOverlay cart={user.cart} />}
            {overlayAccount && (
                <AccountOverlay
                    userName={user.name}
                    cart={user.cart}
                    userId={user.id}
                />
            )}
            <header className="header">
                <img
                    className="logo"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/logo_d2dxhh.svg"
                    alt="logo"
                ></img>
                <Navigation />
                {user.cart && (
                    <CartButton
                        cart={user.cart}
                        onCartClick={cartClickHandler}
                    />
                )}
                {user.photo && (
                    <Account user={user} onAccountClick={accountClickHandler} />
                )}
            </header>
        </Fragment>
    );
};
export default Header;
