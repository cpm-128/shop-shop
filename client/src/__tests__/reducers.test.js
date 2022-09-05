// import the actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

// import the reducer
import { reducer } from '../utils/reducers';

// create a sample of what the global state should look like
const initialState = {
    products: [],
    categories: [ { name: 'Food' } ],
    currentCategory: '1' // this refers to the index in the categories array
};

// *tip: tests include both newState and initialState to confirm the original state is unchanged

// test for updating the products list
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [ {}, {} ]
    });
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

// test for updating categories
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [ { name: 'Food' } , { name: 'Toys' } ]
    });
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

// test for updating current category
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
})