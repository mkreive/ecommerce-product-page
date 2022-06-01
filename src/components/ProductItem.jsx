const ProductItem = function () {
    return (
        <div className="gallery__shop-product">
            <img
                className="gallery__picture-big"
                src="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-3-thumbnail_drkel7.jpg"
                alt="product"
            ></img>

            <h1 className="header-small">Fall limited edition sneakers</h1>

            <div className="prices">
                <div className="price">
                    <span className="header-medium price-now">$125.00</span>
                    <span className="price-discount">50%</span>
                </div>
                <div className="price-before">$250.00</div>
            </div>
        </div>
    );
};

export default ProductItem;
