// the actual functional that carries out the emitted action to update state, after a specific action was taken

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';

// Hook that will take in state and update through reducer()
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {

        // ===================
        // SHOPPING MENU CASES
        // ===================

        // if action type value is 'UPDATE_PRODUCTS', return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };

        // if action type value is 'UPDATE_CATEGORIES', return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        // if action type value is 'UPDATE_CURRENT_CATEGORY', return a new state object with an updated currentCategory index
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // ==========
        // CART CASES
        // ==========

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products]
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                // only keep the items that do NOT match the provided id value
                return product._id !== action._id;
            });
            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    };
                    return product;
                })
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };

        // =======
        // DEFAULT
        // =======

        // if none of these actions, do not update state at all and keep things as-is
        default:
            return state;
    }
};

// export to use Hook
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
};