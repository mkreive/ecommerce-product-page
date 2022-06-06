import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.scss";
import { fetchProductById } from "./helperFunctions";

const Product = function () {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let [productQuantity, setProductQuantity] = useState(0);
    const productId = useParams().productId;

    useEffect(() => {
        const getProduct = async function () {
            setIsLoading(true);
            const fetchedProduct = await fetchProductById(productId);
            setProduct(fetchedProduct);
            setIsLoading(false);
        };
        getProduct();
    }, []);

    const quantityReduceHandler = function () {
        // setProductQuantity(productQuantity--);
    };
    const quantityAddHandler = function () {
        // setProductQuantity(productQuantity++);
    };

    if (isLoading) {
        return (
            <main className="main">
                <div className="gallery__shop">
                    <h1 className="header-small">Loading... </h1>
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <div className="gallery">
                <div className="gallery__arrows">
                    <button className="gallery__arrows-left"></button>
                    <button className="gallery__arrows-right"></button>
                </div>
                <img
                    className="gallery__picture-big"
                    src={product.photo}
                    alt="product"
                ></img>
                <div className="gallery__thumbnails">
                    <img
                        className="gallery__picture-small"
                        src={product.photo}
                        alt="product"
                    ></img>

                    <img
                        className="gallery__picture-small"
                        src={product.photo}
                        alt="product"
                    ></img>
                    <img
                        className="gallery__picture-small"
                        src={product.photo}
                        alt="product"
                    ></img>
                    <img
                        className="gallery__picture-small"
                        src={product.photo}
                        alt="product"
                    ></img>
                </div>
            </div>
            <div className="product">
                <h3 className="header-small">{product.company}</h3>
                <h1 className="header-big">{product.title}</h1>
                <p className="text">{product.description}</p>
                <div className="prices">
                    <div className="price">
                        <span className="header-medium price-now">
                            €
                            {product.price -
                                (product.price * product.discount) / 100}
                        </span>
                        <span className="price-discount">
                            {product.discount}%
                        </span>
                    </div>
                    <div className="price-before">€{product.price}</div>
                </div>
                <div className="addtocart">
                    <div className="addtocart__quantity">
                        <span
                            className="addtocart__quantity-minus"
                            onClick={quantityReduceHandler}
                        ></span>
                        <span className="addtocart__quantity-count">
                            {productQuantity}
                        </span>
                        <span
                            className="addtocart__quantity-add"
                            onClick={quantityAddHandler}
                        ></span>
                    </div>
                    <button className="btn addtocart__btn">Add to cart</button>
                </div>
            </div>
        </main>
    );
};

export default Product;
