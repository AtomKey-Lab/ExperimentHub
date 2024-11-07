import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li className="footer-link-item">
            <a href="#" className="footer-link">
              About
            </a>
          </li>
          <li className="footer-link-item">
            <a href="#" className="footer-link">
              Contact
            </a>
          </li>
          <li className="footer-link-item">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </li>
          <li className="footer-link-item">
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </li>
        </ul>
        <p className="footer-text">
          Copyright 2024 experimenthub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
