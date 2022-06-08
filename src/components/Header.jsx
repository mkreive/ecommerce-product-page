import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { getLocalStorage, fetchUserData } from "./helperFunctions";

import "../index.scss";
import Navigation from "./Navigation";
import CartButton from "./CartButton";

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

    const accountClickHandler = function () {
        props.onShowAccount(user);
    };
    const cardBtnClickHandler = function () {
        props.onShowCart(user);
    };

    return (
        <Fragment>
            <header className="header">
                <img
                    className="logo"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/logo_d2dxhh.svg"
                    alt="logo"
                ></img>
                <Navigation />

                <CartButton onCartBtnClick={cardBtnClickHandler} />

                {user.photo && (
                    <Account user={user} onAccountClick={accountClickHandler} />
                )}
            </header>
        </Fragment>
    );
};
export default Header;
