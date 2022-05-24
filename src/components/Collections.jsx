function Collections() {
    return (
        <main className="main">
            <div className="gallery gallery__collection">
                <h1 className="header-big gallery__collection-btn">Men</h1>
                <img
                    className="gallery__picture-big"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-11_jid4zr.jpg"
                    alt="shoe"
                />
            </div>
            <div className="gallery gallery__collection">
                <h1 className="header-big gallery__collection-btn">Women</h1>
                <img
                    className="gallery__picture-big "
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-8_mrpszr.jpg"
                    alt="shoe"
                />
            </div>
        </main>
    );
}

export default Collections;
