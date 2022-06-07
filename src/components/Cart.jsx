import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import "../index.scss";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

const Cart = function (props) {
    const cartCtx = useContext(CartContext);

    const checkoutHandler = function () {
        props.onCheckout(cartCtx);
    };
    const removeItemHandler = function (id) {
        cartCtx.removeItem(id);
    };

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className="card">
                    <h3 className="header-small-black">Cart</h3>
                    <hr className="card__line" />
                    <div className="card__content">
                        {cartCtx.items.length > 0 ? (
                            cartCtx.items.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={removeItemHandler.bind(
                                        null,
                                        item.id
                                    )}
                                />
                            ))
                        ) : (
                            <p className="text">Cart is empty...</p>
                        )}
                    </div>
                    <button className="btn btn-popup" onClick={checkoutHandler}>
                        Checkout
                    </button>
                </div>,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
};
export default Cart;
