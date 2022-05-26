import "../index.scss";

const Cart = function (props) {
    const userCart = props.cart;

    return (
        <div className="card">
            <h3 className="header-small-black">Cart</h3>
            <hr className="card__line" />
            <div className="card__content">
                <img
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-7-thumbnail_yylxgp.jpg"
                    alt="sneaker"
                    className="gallery__picture-small"
                />
                <div className="card__content-text">
                    <div className="text-small-margin">
                        Fall Limited Edition Sneakers
                    </div>
                    <div className="price__group">
                        <span className="text">$125.00 x 3 </span>
                        <span className="text-bold">$375.00</span>
                    </div>
                </div>
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
