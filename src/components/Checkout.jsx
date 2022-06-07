import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Checkout = function (props) {
    const cartCtx = useContext(CartContext);

    const buyHandler = function () {};
    const cancelHandler = function () {};

    return (
        <Fragment>
            <div className="card checkout">
                <h3 className="header-medium">Your Cart</h3>
                <hr className="card__line" />
                <div className="card__content">
                    {cartCtx.items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <hr className="card__line" />
                <h3 className="header-small">Total:</h3>
                <p className="header-medium">
                    € {cartCtx.totalAmount}{" "}
                    <spamn className="text">(including Taxes)</spamn>
                </p>
                <hr className="card__line" />
                <button className="btn btn-popup" onClick={buyHandler}>
                    Place Order
                </button>
                <p className="text"></p>
                <button className="btn btn-popup" onClick={cancelHandler}>
                    Continue Shopping
                </button>
            </div>
        </Fragment>
    );
};

export default Checkout;
