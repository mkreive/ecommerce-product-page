import "../index.scss";

function Product() {
    return (
        <div className="product">
            <h3 className="header-small">Sneaker company</h3>
            <h1 className="header-big">Fall limited edition sneakers</h1>
            <p className="text">
                These low profile sneakersare your perfect casual wear
                companion. Featuring adurable rubberouter sole they'll
                withstandeverything theweather can offer.
            </p>
            <div className="prices">
                <div className="price">
                    <span className="header-medium price-now">$125.00</span>
                    <span className="price-discount">50%</span>
                </div>
                <div className="price-before">$250.00</div>
            </div>
            <div className="addtocart">
                <div className="addtocart__quantity">
                    <span className="addtocart__quantity-minus"></span>
                    <span className="addtocart__quantity-count">0</span>
                    <span className="addtocart__quantity-add"></span>
                </div>
                <button className="btn addtocart__btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Product;
