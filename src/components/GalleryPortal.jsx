import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

const GalleryPortal = function (props) {
    const product = props.product;
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <div className='gallery__lightbox '>
                        <div className='gallery__arrows'>
                            {/* <button className='gallery__arrows-left' onClick={prevPhotoHandler}></button>
                            <button className='gallery__arrows-right' onClick={nextPhotoHandler}></button> */}
                        </div>
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
                </Fragment>,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default GalleryPortal;
