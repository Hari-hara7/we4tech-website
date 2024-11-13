
import './Footer.css'; // Importing styles
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing icons
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>We4Tech Agency</h2>
          <p>We provide top-notch web development with PWA and SEO, graphic design, video editing, and UI/UX design services. Helping businesses grow with modern digital solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay updated with the latest news and special offers from We4Tech Agency.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/we4tech_?igsh=MWs5aG5jdWZmc2FhZw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/we4_tech?t=LGeWVSWE36YGbQgU7W2yEQ&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566605035360&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 We4Tech Agency. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.freeprivacypolicy.com/live/dc6ca816-5691-40d4-94a7-746b4d25c711">Privacy Policy</a>
          <a href="https://www.freeprivacypolicy.com/live/dc6ca816-5691-40d4-94a7-746b4d25c711">Terms & Conditions</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
