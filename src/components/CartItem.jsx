import { Fragment } from "react";
import "../index.scss";

const CartItem = function (props) {
    const cart = props.cart;

    for (const item in cart) {
        return (
            <Fragment>
                <hr className="card__line" />
                <div className="card__content-text">
                    <div className="text-small-margin">
                        {cart[item].product}
                    </div>
                    <div className="price__group">
                        <span className="text">
                            ${cart[item].price} x {cart[item].quantity}
                        </span>
                        <span className="text-bold">
                            ${cart[item].price * cart[item].quantity}
                        </span>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default CartItem;
