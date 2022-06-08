import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useRef, useContext } from 'react';
import '../index.scss';
import { fetchProductById } from './helperFunctions';
import CartContext from '../store/cart-context';
import Gallery from './Gallery';

const Product = function (props) {
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
        const enteredAmount = productCount;
        if (enteredAmount < 1 || enteredAmount > 10) {
            setAmountIsValid(false);
            return;
        }
        cartCtx.addItem({
            id: productId,
            title: product.title,
            amount: enteredAmount,
            photo: product.photo,
            price: product.price - (product.price * product.discount) / 100,
        });
    };

    const onAddHandler = function () {
        setProductCount(productCount + 1);
    };
    const onProductCountChange = function (e) {
        const currentValue = amountInputRef.current.value;
        if (currentValue.trim().length > 0) {
            setProductCount(parseInt(currentValue));
        }
    };
    const onRemoveHandler = function () {
        setProductCount(productCount - 1);
    };

    const showGalleryHandler = function () {
        props.onShowGallery(product);
        console.log('clicked');
    };

    if (isLoading) {
        return (
            <main className='main'>
                <div className='gallery__shop'>
                    <h1 className='header-small'>Loading... </h1>
                </div>
            </main>
        );
    }

    return (
        <main className='main'>
            <Gallery product={product} onShowGallery={showGalleryHandler}></Gallery>

            <div className='product'>
                <h3 className='header-small'>{product.company}</h3>
                <h1 className='header-big'>{product.title}</h1>
                <p className='text'>{product.description}</p>
                <div className='prices'>
                    <div className='price'>
                        <span className='header-medium price-now'>
                            €
                            {product.discount
                                ? product.price - (product.price * product.discount) / 100
                                : product.price}
                        </span>
                        {product.discount && <span className='price-discount'>{product.discount}%</span>}
                    </div>
                    {product.discount && <div className='price-before'>€{product.price}</div>}
                </div>
                <div className='addtocart'>
                    <div className='addtocart__quantity'>
                        <span className='addtocart__quantity-minus' onClick={onRemoveHandler}></span>
                        <input
                            className='addtocart__quantity-count'
                            ref={amountInputRef}
                            type='number'
                            onChange={onProductCountChange}
                            min={1}
                            max={10}
                            step={1}
                            value={productCount}
                        ></input>
                        <span className='addtocart__quantity-add' onClick={onAddHandler}></span>
                    </div>
                    <button className='btn addtocart__btn' onClick={addToCartHandler}>
                        Add to cart
                    </button>
                    {!amountIsVadid && <p className='text'>Please enter a valid amount.</p>}
                </div>
            </div>
        </main>
    );
};

export default Product;
