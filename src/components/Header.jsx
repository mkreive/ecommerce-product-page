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
        console.log("cart btn clicked");
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <Cart cart={user.cart} />,
                    document.getElementById("overlay-root")
                )}
            </Fragment>
        );
    };
    const accountClickHandler = function () {
        console.log("account btn clicked");
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <AccountPopUp
                        cart={user.cart}
                        user={user.name}
                        id={user.id}
                    />,
                    document.getElementById("overlay-root")
                )}
            </Fragment>
        );
    };

    return (
        <header className="header">
            <img
                className="logo"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/logo_d2dxhh.svg"
                alt="logo"
            ></img>
            <Navigation />
            {user.cart && (
                <CartButton cart={user.cart} onCartClick={cartClickHandler} />
            )}
            {user.photo && (
                <Account user={user} onAccountClick={accountClickHandler} />
            )}
        </header>
    );
};
export default Header;
