import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

       <div className="footer-brand">
  <h2 className="footer-logo">
    <span className="logo-tech">Tech</span>
    <span className="logo-nova">Nova</span>
  </h2>

  <p>
    Building innovative digital solutions for modern businesses.
  </p>
</div> 

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: info@technova.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 TechNova. All rights reserved.</p>

        <div className="footer-legal">
          <span>Terms</span>
          <span>|</span>
          <span>Privacy</span>
          <span>|</span>
          <span>Sitemap</span>
        </div>
      </div>

    </footer>
  );
} 