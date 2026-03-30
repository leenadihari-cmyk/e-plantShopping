import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1> {/* Updated header */}
      {!showProducts && <button onClick={handleGetStarted}>Get Started</button>}
      {showProducts && <ProductList />}
      <AboutUs />
    </div>
  );
};

export default App;
