import CartContext from './cart-context';
import React, { useReducer } from 'react';
import { fetchOrder, reduceStock } from '../components/helperFunctions';

const defaultCartState = { items: [], totalAmount: 0 };
const cartReducer = function (state, action) {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price * existingCartItem.amount;
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'ORDER') {
        const userId = action.user.id;
        const orderedProducts = state.items;

        fetchOrder(userId, orderedProducts);

        orderedProducts.forEach((product) => {
            reduceStock(product.id, product.amount);
        });
        return defaultCartState;
    }

    return defaultCartState;
};

const CartProvider = function (props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = function (item) {
        dispatchCartAction({ type: 'ADD', item });
    };
    const removeItemFromCartHandler = function (id) {
        dispatchCartAction({ type: 'REMOVE', id });
    };
    const placeOrderHandler = function (user) {
        dispatchCartAction({ type: 'ORDER', user });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        order: placeOrderHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
