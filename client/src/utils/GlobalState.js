// native react features bc imoprting Redux would be over engineering many applications

import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

export const StoreProvider = ({ value = [], ... props}) => {

    // initial state properties
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        categories: [],
        cartOpen: false,
        currentCategory: ''
    });

    // confirm it works
    console.log('>>> state >>> ', state);

    return <Provider value={[state, dispatch]} {...props} />;
};

// use the global state object
export const useStoreContext = () => {
    return useContext(StoreContext);
};