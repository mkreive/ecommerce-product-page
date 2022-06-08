import React, { useContext, useState } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../index.scss";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import { removeLocalStorage } from "./helperFunctions";

const AccountPopUp = function (props) {
    const [prevOrder, setPrevOrder] = useState(null);
    const userName = props.user.name.toUpperCase();
    const userId = props.user.id;

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const logoutHandler = function () {
        removeLocalStorage("userId", userId);
    };

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className="card">
                    <h3 className="header-small-black">Hello, {userName} </h3>
                    <hr className="card__line"></hr>
                    <div className="text">
                        You have {numberOfCartItems} items in your cart!
                    </div>

                    <div className="btn-group">
                        {/* <button
                            className="btn btn-popup"
                            onClick={prevOrderHandler}
                        >
                            Previous Order
                        </button> */}
                        <button
                            className="btn btn-popup"
                            onClick={logoutHandler}
                        >
                            Log Out
                        </button>
                    </div>
                </div>,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
};

export default AccountPopUp;
