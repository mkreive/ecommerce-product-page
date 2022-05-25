import "../index.scss";

const Cart = function () {
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
                <div>
                    <div className="text">Fall Limited Edition Sneakers</div>
                    <div className="price-group">
                        <span>$125.00 x 3</span>
                        <span>$375.00</span>
                    </div>
                    <img
                        src="https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-delete_o70eii.svg"
                        alt="trash"
                    />
                </div>
            </div>
            <button className="btn btn-popup">Checkout</button>
        </div>
    );
};
export default Cart;
