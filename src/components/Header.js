import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Lorem 2025</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#home" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#rules">Rules</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
