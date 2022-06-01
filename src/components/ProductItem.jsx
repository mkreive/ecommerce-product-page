import { useEffect } from "react";
import { fetchProducts } from "./helperFunctions";

const ProductItem = function (props) {
    const product = props.product;

    return (
        <div className="gallery__shop-product">
            <img
                className="gallery__picture-big"
                src={product.photo}
                alt="product"
            ></img>

            <h1 className="header-small">{product.title}</h1>

            <div className="prices">
                <div className="price">
                    <span className="header-medium price-now">
                        $
                        {product.price -
                            (product.price * product.discount) / 100}
                    </span>
                    <span className="price-discount">{product.discount}%</span>
                </div>
                <div className="price-before">${product.price}</div>
            </div>
        </div>
    );
};

export default ProductItem;
