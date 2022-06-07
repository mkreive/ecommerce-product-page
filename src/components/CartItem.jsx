import { Fragment } from "react";
import "../index.scss";

const CartItem = function (props) {
    const item = props.item;

    const removeItemHandler = function () {
        props.onRemove(item.id);
    };

    //const { price, product, quantity, photo } = props?.item || {};
    return (
        <div className="card__content-item">
            <img
                src={item.photo}
                alt="sneaker"
                className="gallery__picture-small"
            />
            <div className="card__content-item-text">
                <div className="text-small-margin">{item.title}</div>
                <div className="price__group">
                    <span className="text">
                        €{item.price} x {item.amount}
                    </span>
                    <span className="text-bold">
                        €{item.price * item.amount}
                    </span>
                </div>
            </div>
            <img
                className="card__content-item-delete"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-delete_o70eii.svg"
                alt="trash"
                onClick={removeItemHandler}
            />
        </div>
    );
};

export default CartItem;
