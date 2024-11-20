import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Elevate Your Style
          <br />
          <span className="accent-text">Luxury Handbags</span>
        </h1>
        
        <p className="hero-subtitle">
          Discover our latest collection of designer handbags. 
          Crafted with precision, designed for elegance.
        </p>
        
        <div className="hero-buttons">
          <button className="primary-btn">
            Shop Now
            <i className="icon-shopping-bag"></i>
          </button>
          
          <button className="secondary-btn">
            View Collection
            <i className="icon-arrow-right"></i>
          </button>
        </div>
      </div>
      
      <div className="hero-image">
        <img src="/placeholder-handbag.jpg" alt="Luxury Handbag" />
      </div>
    </div>
  );
};

export default HeroSection;