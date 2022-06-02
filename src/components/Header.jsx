import React, { useState, useEffect } from "react";
import { getLocalStorage, fetchUserData } from "./helperFunctions";

import "../index.scss";
import Navigation from "./Navigation";
import CartButton from "./CartButton";
import Account from "./Account";

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
    }, [user]);

    return (
        <header className="header">
            <img
                className="logo"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/logo_d2dxhh.svg"
                alt="logo"
            ></img>
            <Navigation />
            <CartButton cart={user.cart} />
            <Account user={user}></Account>
        </header>
    );
};
export default Header;
