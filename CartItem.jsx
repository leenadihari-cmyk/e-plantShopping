import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    const item = cartItems.find(i => i.id === id);
    dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!'); // Simple checkout implementation
    // Optionally, you could clear the cart here
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container" style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item" style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}

          <h3>Total Amount: ${totalAmount}</h3>

          {/* Checkout and Continue Shopping Buttons */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={onContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
