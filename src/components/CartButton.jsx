const CartButton = function (props) {
    const cart = props.cart;
    const count = Object.keys(cart).length;

    return (
        <button className="cart__btn" onClick={props.onCartClick}>
            <div className="cart__btn-icon">
                <span className="cart__btn-count">{count}</span>
            </div>
        </button>
    );
};

export default CartButton;
