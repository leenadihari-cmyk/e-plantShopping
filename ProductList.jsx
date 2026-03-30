import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateQuantity } from './CartSlice';

// Plants categorized by type
const plantsArray = [
  {
    category: 'Indoor Plants',
    plants: [
      { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: './images/fiddle_leaf.jpg' },
      { id: 2, name: 'Snake Plant', price: 15, image: './images/snake_plant.jpg' }
    ]
  },
  {
    category: 'Outdoor Plants',
    plants: [
      { id: 3, name: 'Monstera Deliciosa', price: 30, image: './images/monstera.jpg' },
      { id: 4, name: 'Rose Bush', price: 20, image: './images/rose_bush.jpg' }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  // Check if item is already in cart
  const isInCart = (id) => cartItems.find(item => item.id === id);

  const handleAddToCart = (plant) => {
    const existingItem = isInCart(plant.id);
    if (existingItem) {
      dispatch(updateQuantity({ id: plant.id, quantity: existingItem.quantity + 1 }));
    } else {
      dispatch(addItem({ ...plant, quantity: 1 }));
    }
  };

  return (
    <div className="product-list-container" style={{ padding: '20px' }}>
      {plantsArray.map((category) => (
        <div key={category.category} className="plant-category">
          <h2>{category.category}</h2>
          <div className="plants-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card" style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                />
                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>
                <button 
                  onClick={() => handleAddToCart(plant)} 
                  disabled={!!isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
