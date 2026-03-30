import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25 },
  { id: 2, name: 'Snake Plant', price: 15 },
  { id: 3, name: 'Monstera Deliciosa', price: 30 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
