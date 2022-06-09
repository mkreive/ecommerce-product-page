import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

const GalleryPortal = function (props) {
    const product = props.product;

    const prevPhotoHandler = function () {};
    const nextPhotoHandler = function () {};
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <div className='gallery__lightbox'>
                        <img
                            src='https://res.cloudinary.com/kreiva/image/upload/v1653033614/FrontendMentor/EcommerceProductPage/icon-close_o5p63g.svg'
                            alt='cancel'
                            className='gallery__cancel'
                            onClick={props.onCancel}
                        />
                        <div className='gallery '>
                            <div className='gallery__arrows'>
                                <div className='gallery__arrows-container'>
                                    <button className='gallery__arrows-left' onClick={prevPhotoHandler}></button>
                                    <button className='gallery__arrows-right' onClick={nextPhotoHandler}></button>
                                </div>
                                <img
                                    className='gallery__picture-big'
                                    src={product.photo}
                                    alt='product'
                                    onClick={props.onShowGallery}
                                ></img>
                            </div>
                            <div className='gallery__thumbnails'>
                                <img className='gallery__picture-small' src={product.photo} alt='product'></img>

                                <img className='gallery__picture-small' src={product.photo} alt='product'></img>
                                <img className='gallery__picture-small' src={product.photo} alt='product'></img>
                                <img className='gallery__picture-small' src={product.photo} alt='product'></img>
                            </div>
                        </div>
                    </div>
                </Fragment>,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default GalleryPortal;
