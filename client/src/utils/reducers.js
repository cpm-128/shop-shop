// the actual functional that carries out the emitted action to update state, after a specific action was taken

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

// Hook that will take in state and update through reducer()
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {

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

        // if none of these actions, do not update state at all and keep things as-is
        default:
            return state;
    }
};

// export to use Hook
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
};