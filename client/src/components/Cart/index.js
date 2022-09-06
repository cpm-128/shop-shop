import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

// import global store
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';

const Cart = () => {

    const [state, dispatch] = useStoreContext();

    // change TOGGLE_CART value from true/false
    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    // change UI when toggleCart()
    if (!state.cartOpen) {
        return (
            <div className='cart-closed' onClick={toggleCart}>
                <span role='img' aria-label='shopping-cart'>
                    🛒
                </span>
            </div>
        )
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    // confirm functional comopnent is receive state updates
    console.log('>> Cart component state >> ', state);

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>[close]</div>
            <h2>Shopping Cart</h2>

            {state.cart.length ? (
                <div>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className='flex-row space-between'>
                        <strong>Total: ${calculateTotal()}</strong>
                        {
                            Auth.loggedIn() ?
                                <button>Checkout</button>
                                :
                                <span>(log in to check out)</span>
                        }
                    </div>
                </div>
            ) : (
                <h3>
                    <span role='img' aria-label='scream-face'>
                        😱
                    </span>
                    You haven't added anything to yoru cart yet!
                </h3>
            )
            }
        </div>
    );
};

export default Cart;