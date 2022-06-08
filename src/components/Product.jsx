import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import "../index.scss";
import { fetchProductById } from "./helperFunctions";
import CartContext from "../store/cart-context";
import Gallery from "./Gallery";

const Product = function () {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const productId = useParams().productId;
    const amountInputRef = useRef();
    const [amountIsVadid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);
    const [productCount, setProductCount] = useState(1);

    useEffect(() => {
        const getProduct = async function () {
            setIsLoading(true);
            const fetchedProduct = await fetchProductById(productId);
            setProduct(fetchedProduct);
            setIsLoading(false);
        };
        getProduct();
    }, []);

    const addToCartHandler = function (event) {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNum < 1 ||
            enteredAmountNum > 10
        ) {
            setAmountIsValid(false);
            return;
        }
        cartCtx.addItem({
            id: productId,
            title: product.title,
            amount: enteredAmountNum,
            photo: product.photo,
            price: product.price - (product.price * product.discount) / 100,
        });
    };

    const onAddHandler = function () {
        setProductCount(productCount + 1);
        amountInputRef.current.value = productCount;
    };
    const onRemoveHandler = function () {
        setProductCount(productCount - 1);
        amountInputRef.current.value = productCount;
    };

    const galleryClickHandler = function () {
        props.onShowGallery(product);
        console.log("clicked");
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
            <div
                className="gallery"
                product={product}
                onClick={galleryClickHandler}
            >
                <img
                    className="gallery__picture-big"
                    src={product.photo}
                    alt="product"
                    onClick={galleryClickHandler}
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
                            {product.discount
                                ? product.price -
                                  (product.price * product.discount) / 100
                                : product.price}
                        </span>
                        {product.discount && (
                            <span className="price-discount">
                                {product.discount}%
                            </span>
                        )}
                    </div>
                    {product.discount && (
                        <div className="price-before">€{product.price}</div>
                    )}
                </div>
                <div className="addtocart">
                    <div className="addtocart__quantity">
                        <span
                            className="addtocart__quantity-minus"
                            onClick={onRemoveHandler}
                        ></span>
                        <input
                            className="addtocart__quantity-count"
                            ref={amountInputRef}
                            type="number"
                            min={1}
                            max={10}
                            step={1}
                            defaultValue={1}
                        ></input>
                        <span
                            className="addtocart__quantity-add"
                            onClick={onAddHandler}
                        ></span>
                    </div>
                    <button
                        className="btn addtocart__btn"
                        onClick={addToCartHandler}
                    >
                        Add to cart
                    </button>
                    {!amountIsVadid && (
                        <p className="text">Please enter a valid amount.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Product;
