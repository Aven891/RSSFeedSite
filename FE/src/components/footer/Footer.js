import React from "react";
import "./Footer.css";

// Component AboutSection
const AboutSection = () => (
  <div className="footer-section">
    <h3>About Us</h3>
    <p>Diễn đàn tin tức Việt Nam cung cấp thông tin về Việt Nam và thế giới.</p>
  </div>
);

// Component LinksSection
const LinksSection = () => (
  <div className="footer-section">
    <h3>Quick Links</h3>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#contact">Contact Us</a>
      </li>
    </ul>
  </div>
);

// Component SocialSection
const SocialSection = () => (
  <div className="footer-section">
    <h3>Follow Us</h3>
    <a href="#facebook" className="social-icon">
      Facebook
    </a>
    <a href="#instagram" className="social-icon">
      Instagram
    </a>
  </div>
);

// Component FooterBottom
const FooterBottom = () => (
  <div className="footer-bottom">
    <p>© 2024 Diễn đàn tin tức Việt Nam. All rights reserved.</p>
  </div>
);

// Component chính Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <AboutSection />
        <LinksSection />
        <SocialSection />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;