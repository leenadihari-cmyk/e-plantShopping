import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, e) => {
    dispatch(updateQuantity({ id, quantity: Number(e.target.value) }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <input 
              type="number" 
              value={item.quantity} 
              min="1"
              onChange={(e) => handleQuantityChange(item.id, e)}
            />
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;
