import ReactDOM from "react-dom";
import { Fragment } from "react";
import "../index.scss";
import CartItem from "./CartItem";

const Cart = function (props) {
    const cartArr = Object.values(props.cart);
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className="card">
                    <h3 className="header-small-black">Cart</h3>
                    <hr className="card__line" />
                    <div className="card__content">
                        {cartArr.length > 0 ? (
                            cartArr.map((item) => (
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
