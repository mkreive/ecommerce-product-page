import { Link } from 'react-router-dom';
import React from 'react';

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
};

const ProductItem = function (props) {
    const sneaker = props.product;

    return (
        <div className='gallery__shop-product'>
            <Link style={linkStyle} to={`/product/${sneaker.id}`}>
                <img className='gallery__picture-big' src={sneaker.photo} alt='product'></img>

                <h1 className='header-small'>{sneaker.title}</h1>

                <div className='prices'>
                    <div className='price'>
                        <span className='header-medium price-now'>
                            €
                            {sneaker.discount > 0
                                ? sneaker.price - (sneaker.price * sneaker.discount) / 100
                                : sneaker.price}
                        </span>
                        {sneaker.discount > 0 ? <span className='price-discount'>{sneaker.discount}%</span> : ''}
                    </div>
                    {sneaker.discount > 0 ? <div className='price-before'>€{sneaker.price}</div> : ''}
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;
