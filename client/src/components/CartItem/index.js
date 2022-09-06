import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

// expects an 'item' object as a prop
const CartItem = ({ item }) => {

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
      dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
    };

    return (
        <div className="flex-row">

            <div>
                <img
                src={`/images/${item.image}`}
                alt=""
                />
            </div>

            <div>
                <div>{item.name}, ${item.price}</div>
                <div>
                <span>Qty:</span>
                <input
                    type="number"
                    placeholder="1"
                    value={item.purchaseQuantity}
                />
                <span
                    role="img"
                    aria-label="trash"
                    onClick={() => removeFromCart(item)}
                >
                    🗑️
                </span>
                </div>
            </div>

        </div>
  );
}

export default CartItem;