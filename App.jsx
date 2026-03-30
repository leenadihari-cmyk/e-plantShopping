import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true); // Show the product list
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      {!showProducts && (
        <button onClick={handleGetStarted}>Get Started</button>
      )}

      {/* Show ProductList only when button clicked */}
      {showProducts && <ProductList />}

      {/* About Us section can remain visible */}
      <AboutUs />
    </div>
  );
};

export default App;
