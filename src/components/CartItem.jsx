import { Fragment } from "react";
import "../index.scss";

const CartItem = function (props) {
    const cart = props.cart;

    for (const item in cart) {
        return (
            <Fragment>
                <img
                    src={cart[item].photo}
                    alt="sneaker"
                    className="gallery__picture-small"
                />
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
                <img
                    className="delete"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-delete_o70eii.svg"
                    alt="trash"
                />
            </Fragment>
        );
    }
};

export default CartItem;
