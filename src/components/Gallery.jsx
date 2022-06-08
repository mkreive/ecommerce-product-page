import ReactDOM from "react-dom";
import { Fragment } from "react";

const Gallery = function (props) {
    const product = props.product;

    const prevPhotoHandler = function () {
        props.onPrev(product);
    };
    const nextPhotoHandler = function () {
        props.onNext(product);
    };
    return (
        <Fragment>
            <div className="gallery">
                {/* <div className="gallery__arrows">
                    <button
                        className="gallery__arrows-left"
                        onClick={prevPhotoHandler}
                    ></button>
                    <button
                        className="gallery__arrows-right"
                        onClick={nextPhotoHandler}
                    ></button>
                </div> */}
                <img
                    className="gallery__picture-big"
                    src={product.photo}
                    alt="product"
                    onClick={props.onShowGallery}
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
        </Fragment>
    );
};

export default Gallery;
