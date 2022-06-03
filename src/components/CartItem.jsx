import { Fragment } from "react";
import "../index.scss";

const CartItem = function (props) {
    const item = props.item;

    //const { price, product, quantity, photo } = props?.item || {};
    return (
        <div className="card__content-item">
            <img
                src={item.photo}
                alt="sneaker"
                className="gallery__picture-small"
            />
            <div className="card__content-item-text">
                <div className="text-small-margin">{item.product}</div>
                <div className="price__group">
                    <span className="text">
                        €{item.price} x {item.quantity}
                    </span>
                    <span className="text-bold">
                        €{item.price * item.quantity}
                    </span>
                </div>
            </div>
            <img
                className="card__content-item-delete"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-delete_o70eii.svg"
                alt="trash"
            />
        </div>
    );
};

export default CartItem;
