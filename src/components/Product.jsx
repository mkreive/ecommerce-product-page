import "../index.scss";

function Product() {
    return (
        <main className="main">
            <div className="gallery">
                <div className="gallery__arrows">
                    <button className="gallery__arrows-left"></button>
                    <button className="gallery__arrows-right"></button>
                </div>
                <img
                    className="gallery__picture-big"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-1_ra55jy.jpg"
                    alt="product"
                ></img>
                <div className="gallery-thumbnails">
                    <img
                        className="gallery__picture-small selected"
                        src="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-1-thumbnail_qfqqjm.jpg"
                        alt="product"
                    ></img>

                    <img
                        className="gallery__picture-small"
                        src="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-3-thumbnail_drkel7.jpg"
                        alt="product"
                    ></img>
                    <img
                        className="gallery__picture-small"
                        src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/image-product-4-thumbnail_qcdzs1.jpg"
                        alt="product"
                    ></img>
                    <img
                        className="gallery__picture-small"
                        src="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/image-product-2-thumbnail_bbmf5h.jpg"
                        alt="product"
                    ></img>
                </div>
            </div>
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
        </main>
    );
}

export default Product;
