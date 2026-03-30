import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

const App = () => {
  const handleGetStarted = () => {
    alert('Welcome to Paradise Nursery!');
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <button onClick={handleGetStarted}>Get Started</button>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default App;
