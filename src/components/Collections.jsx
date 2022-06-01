import { Link } from "react-router-dom";
import "../index.scss";

const linkStyle = {
    textDecoration: "none",
};

function Collections() {
    return (
        <div className="main">
            <div className="gallery gallery__collection">
                <Link to="/men" style={linkStyle}>
                    <h1 className="header-big gallery__collection-btn">Men</h1>
                </Link>
                <img
                    className="gallery__picture-big"
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-11_jid4zr.jpg"
                    alt="shoe"
                />
            </div>
            <div className="gallery gallery__collection">
                <Link to="/women" style={linkStyle}>
                    <h1 className="header-big gallery__collection-btn">
                        Women
                    </h1>
                </Link>
                <img
                    className="gallery__picture-big "
                    src="https://res.cloudinary.com/kreiva/image/upload/v1653392390/FrontendMentor/EcommerceProductPage/image-product-8_mrpszr.jpg"
                    alt="shoe"
                />
            </div>
        </div>
    );
}

export default Collections;
