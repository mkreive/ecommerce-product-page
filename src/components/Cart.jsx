import "../index.scss";
import CartItem from "./CartItem";

const Cart = function (props) {
    const userCart = props.cart;

    return (
        <div className="card">
            <h3 className="header-small-black">Cart</h3>
            <hr className="card__line" />
            <div className="card__content">
                {Object.values(userCart).map((item) => (
                    <CartItem key={item} item={item} />
                ))}
            </div>
            <button className="btn btn-popup">Checkout</button>
        </div>
    );
};
export default Cart;
