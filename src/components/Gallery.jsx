import React, { Fragment } from 'react';

const Gallery = function (props) {
    const product = props.product;
    return (
        <Fragment>
            <div className='gallery '>
                <img
                    className='gallery__picture-big'
                    src={product.photo}
                    alt='product'
                    onClick={props.onShowGallery}
                ></img>
                <div className='gallery__thumbnails'>
                    <img className='gallery__picture-small' src={product.photo} alt='product'></img>

                    <img className='gallery__picture-small' src={product.photo} alt='product'></img>
                    <img className='gallery__picture-small' src={product.photo} alt='product'></img>
                    <img className='gallery__picture-small' src={product.photo} alt='product'></img>
                </div>
            </div>
        </Fragment>
    );
};

export default Gallery;
