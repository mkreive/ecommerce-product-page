import { Fragment, useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Checkout = function (props) {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const user = props.user;

    const removeItemHandler = function (id) {
        cartCtx.removeItem(id);
    };

    const placeOrderHandler = function () {
        setOrderPlaced(true);
        cartCtx.order(user);
    };

    return (
        <div className="card checkout">
            <h3 className="header-medium">Your Cart</h3>
            <hr className="card__line" />
            {hasItems ? (
                <div className="card__content">
                    {cartCtx.items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={removeItemHandler.bind(null, item.id)}
                        />
                    ))}
                </div>
            ) : (
                <p className="text">Cart is empty.</p>
            )}
            {orderPlaced && (
                <Fragment>
                    <hr className="card__line" />
                    <p className="text">
                        THANK YOU! Order placed successfully!
                    </p>
                </Fragment>
            )}
            <hr className="card__line" />
            <h3 className="header-small">Total:</h3>
            <p className="header-medium">
                € {cartCtx.totalAmount.toFixed(2)}{" "}
                <span className="text">(including Taxes)</span>
            </p>
            <hr className="card__line" />
            {hasItems && (
                <button className="btn btn-popup" onClick={placeOrderHandler}>
                    Place Order
                </button>
            )}
            <p className="text"></p>
            <button className="btn btn-popup" onClick={props.onClose}>
                Continue Shopping
            </button>
        </div>
    );
};

export default Checkout;
