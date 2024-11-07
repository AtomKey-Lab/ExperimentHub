import React from "react";
import footerConfig from "../../config/footer";
import "./footer.css"; 

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul className="footer-links">
        {footerConfig.links.map((link, index) => (
          <li key={index} className="footer-link-item">
            <a href={link.href} className="footer-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-text">{footerConfig.text}</p>
    </div>
  </footer>
);

export default Footer;
