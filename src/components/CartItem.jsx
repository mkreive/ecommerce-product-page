import "../index.scss";

const CartItem = function (props) {
    console.log(props.cart);
    props.cart.map((product) => {
        console.log(product[0]);
        // return (
        //     <div className="card__content-text">
        //         <div className="text-small-margin">{product.product}</div>
        //         <div className="price__group">
        //             <span className="text">
        //                 ${product.price} x {product.quantity}
        //             </span>
        //             <span className="text-bold">
        //                 ${product.price * product.quantity}
        //             </span>
        //         </div>
        //     </div>
        // );
    });
};

export default CartItem;
