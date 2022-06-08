import CartContext from '../store/cart-context';
import React, { useContext } from 'react';

const CartButton = function (props) {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className='cart__btn' onClick={props.onCartBtnClick}>
            <div className='cart__btn-icon'>
                <span className='cart__btn-count'>{numberOfCartItems}</span>
            </div>
        </button>
    );
};

export default CartButton;
