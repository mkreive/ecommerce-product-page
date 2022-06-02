const CartButton = function (props) {
    const cart = props.cart;
    console.log(Object.keys(cart).length);

    return (
        <button className="cart__btn">
            <div className="cart__btn-icon">
                <span className="cart__btn-count">2</span>
            </div>
        </button>
    );
};

export default CartButton;
