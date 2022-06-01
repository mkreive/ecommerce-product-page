import React, { useState, useEffect } from "react";
import { getLocalStorage, fetchUserData } from "./helperFunctions";

import "../index.scss";
import Account from "./Account";
import AccountPopUp from "./AccountPopUp";
import Cart from "./Cart";
import Collections from "./Collections";

const Header = (props) => {
    const [user, setUser] = useState([]);
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

    const navigationClickHandler = function (e) {
        const clickedLink = e.target.innerHTML;
        props.onNavigationClick(clickedLink);
    };

    const [popup, setPopup] = useState("");
    const accountIconClickHandler = function () {
        setPopup(
            <AccountPopUp name={user.name} cart={user.cart} id={user.id} />
        );
    };

    const cartPopupHandler = function () {
        setPopup(<Cart cart={user.cart} />);
    };

    return (
        <header className="header">
            <img
                className="logo"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/logo_d2dxhh.svg"
                alt="logo"
            ></img>
            <nav className="navigation">
                <ul className="navigation__links">
                    <li>
                        <a
                            className="navigation__links-link"
                            href="/collections"
                            onClick={navigationClickHandler}
                        >
                            Collections
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="/men"
                            onClick={navigationClickHandler}
                        >
                            Men
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="/women"
                            onClick={navigationClickHandler}
                        >
                            Women
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="/about"
                            onClick={navigationClickHandler}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="/contact"
                            onClick={navigationClickHandler}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <img
                onClick={cartPopupHandler}
                className="cart"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-cart_tpxhw0.svg"
                alt="cart"
            ></img>
            <Account
                user={user}
                onAccountClick={accountIconClickHandler}
            ></Account>
            {popup}
        </header>
    );
};
export default Header;
