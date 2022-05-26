import React, { useState } from "react";

import "../index.scss";
import Account from "./Account";
import AccountPopUp from "./AccountPopUp";
import Cart from "./Cart";
import Collections from "./Collections";

const Header = (props) => {
    const [popup, setPopup] = useState("");

    const navigationClickHandler = function (e) {
        const clickedLink = e.target.innerHTML;
        props.onNavigationClick(clickedLink);
    };
    const accountPopupHandler = function (account) {
        setPopup(<AccountPopUp name={account.name} cart={account.cart} />);
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
                className="cart"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-cart_tpxhw0.svg"
                alt="cart"
            ></img>
            <Account onAccountClick={accountPopupHandler}></Account>
            {popup}
        </header>
    );
};
export default Header;
