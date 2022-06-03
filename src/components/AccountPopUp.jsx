import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../index.scss";
import { removeLocalStorage } from "./helperFunctions";

const AccountPopUp = function (props) {
    const userName = props.user.name.toUpperCase();
    const productCount = Object.keys(props.user.cart).length;
    const userId = props.user.id;

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
                        You have {productCount} items in your cart!
                    </div>
                    <div className="btn-group">
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
