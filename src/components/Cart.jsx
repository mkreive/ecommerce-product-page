import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import "../index.scss";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

const Cart = function (props) {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className="card">
                    <h3 className="header-small-black">Cart</h3>
                    <hr className="card__line" />
                    <div className="card__content">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="text">Cart is empty...</p>
                        )}
                    </div>
                    <button className="btn btn-popup">Checkout</button>
                </div>,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
};
export default Cart;
