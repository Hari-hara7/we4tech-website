import './Footer.css'; // Importing styles
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(`Email submitted: ${email}`);
    // Here you can add code to send the email to your backend or service.
    e.target.reset(); // Reset the form after submission
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>We4Tech Agency</h2>
          <p>We provide top-notch web development with PWA and SEO, graphic design, video editing, and UI/UX design services. Helping businesses grow with modern digital solutions.</p>
        </div>

        {/* Quick Links */}
        <nav className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay updated with the latest news and special offers from We4Tech Agency.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletter-email">Enter your email:</label>
            <input type="email" id="newsletter-email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/we4tech_?igsh=MWs5aG5jdWZmc2FhZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/we4_tech?t=LGeWVSWE36YGbQgU7W2yEQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/we4tech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} We4Tech Agency. All Rights Reserved.</p>
        <div className="footer-links">
          {/* Use Link for internal navigation */}
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
