import React, { useState, useEffect } from "react";

import "../index.scss";
import Account from "./Account";
import AccountPopUp from "./AccountPopUp";
import Cart from "./Cart";
import Collections from "./Collections";

// local storage
const getLocalStorage = function (key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};
const setLocalStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
setLocalStorage("userId", "u1");

const Header = (props) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchUserData = async function () {
            let loggedUserId = getLocalStorage("userId");
            if (!loggedUserId) {
                loggedUserId = "u0";
            }
            const response = await fetch(
                `https://to-do-list-app-10ca0-default-rtdb.europe-west1.firebasedatabase.app/users.json?orderBy=%22id%22&equalTo=%22${loggedUserId}%22`
            );
            const responseData = await response.json();
            let userData;

            for (const key in responseData) {
                userData = {
                    id: key,
                    name: responseData[key].name,
                    photo: responseData[key].photo,
                    cart: responseData[key].cart,
                };
            }
            setUser(userData);
            return user;
        };
        fetchUserData();
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
                            href="#collections"
                            onClick={navigationClickHandler}
                        >
                            Collections
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="#Men"
                            onClick={navigationClickHandler}
                        >
                            Men
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="#Women"
                            onClick={navigationClickHandler}
                        >
                            Women
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="#About"
                            onClick={navigationClickHandler}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="navigation__links-link"
                            href="#Contact"
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
