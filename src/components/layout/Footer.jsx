import React from 'react';
import '../../all-css-files/Footer.css'; // Assuming we'll create a CSS file for styling


const Footer = () => {

     return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Naksh Sports</h3>
            <p>Your one-stop shop for all sports equipment and gear.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#add-product">Create Registion Form</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@nakshsports.com</p>
            <p>Phone: +91 7249280912</p>
            <p>Address: Navi Mumbai 402120</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Naksh Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
