import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo"><span className='cls'>MIE</span>LLA</Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/produits" className="nav-link">Produits</Link>
          </li>
          <li className="nav-item">
          
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
