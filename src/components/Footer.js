import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lorem 2025</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@matholymp.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Facebook | Twitter | Instagram</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MathOlymp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
