import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import "../index.scss";
import { fetchProductById } from "./helperFunctions";
import CartContext from "../store/cart-context";

const Product = function () {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const productId = useParams().productId;
    const amountInputRef = useRef();
    const [amountIsVadid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);

    useEffect(() => {
        const getProduct = async function () {
            setIsLoading(true);
            const fetchedProduct = await fetchProductById(productId);
            setProduct(fetchedProduct);
            setIsLoading(false);
        };
        getProduct();
    }, []);

    const quantityReduceHandler = function () {};
    const quantityAddHandler = function () {};

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
        console.log(enteredAmountNum);
        console.log(cartCtx);
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
                        <input
                            className="addtocart__quantity-count"
                            ref={amountInputRef}
                            type="number"
                            min={1}
                            max={10}
                            step={1}
                            placeholder="1"
                        ></input>
                        <span
                            className="addtocart__quantity-add"
                            onClick={quantityAddHandler}
                        ></span>
                    </div>
                    <button
                        className="btn addtocart__btn"
                        onSubmit={addToCartHandler}
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
