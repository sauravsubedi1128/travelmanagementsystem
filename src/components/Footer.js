import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@travelnepal.com">support@travelnepal.com</a></p>
          <p>Phone: +977-123456789</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i> Instagram
          </a>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Nepal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
