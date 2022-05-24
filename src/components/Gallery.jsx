import "../index.scss";

function Gallery() {
    return (
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
    );
}

export default Gallery;
