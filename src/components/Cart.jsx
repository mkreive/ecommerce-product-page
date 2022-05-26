import "../index.scss";
import CartItem from "./CartItem";

const Cart = function (props) {
    const userCart = props.cart;

    return (
        <div className="card">
            <h3 className="header-small-black">Cart</h3>

            <div className="card__content">
                <img
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-7-thumbnail_yylxgp.jpg"
                    alt="sneaker"
                    className="gallery__picture-small"
                />

                <CartItem cart={userCart}></CartItem>
                <img
                    className="delete"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-delete_o70eii.svg"
                    alt="trash"
                />
            </div>
            <button className="btn btn-popup">Checkout</button>
        </div>
    );
};
export default Cart;
