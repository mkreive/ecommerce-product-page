import "../index.scss";

function Gallery() {
    return (
        <div className="gallery">
            <img
                className="gallery__picture gallery__picture-big"
                scr="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-1_ra55jy.jpg"
                alt="product_image"
            ></img>
            <div className="gallery-thumbnails">
                <img
                    className="gallery__picture gallery__picture-small"
                    scr="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-1-thumbnail_qfqqjm.jpg"
                    alt="product_image"
                ></img>
                <img
                    className="gallery__picture gallery__picture-small"
                    scr="https://res.cloudinary.com/kreiva/image/upload/v1653033616/FrontendMentor/EcommerceProductPage/image-product-3-thumbnail_drkel7.jpg"
                    alt="product_image"
                ></img>
                <img
                    className="gallery__picture gallery__picture-small"
                    scr="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/image-product-4-thumbnail_qcdzs1.jpg"
                    alt="product_image"
                ></img>
                <img
                    className="gallery__picture gallery__picture-small"
                    scr="https://res.cloudinary.com/kreiva/image/upload/v1653033617/FrontendMentor/EcommerceProductPage/image-product-2-thumbnail_bbmf5h.jpg"
                    alt="product_image"
                ></img>
            </div>
        </div>
    );
}

export default Gallery;
