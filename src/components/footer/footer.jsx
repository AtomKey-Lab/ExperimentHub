import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Virtual Lab</h4>
                    <p>Providing interactive simulations for Physics and Chemistry, making science more accessible and fun for students.</p>
                </div>

                <div className="footer-section">
                    <h4>Need to Study</h4>
                    <ul>
                        <li><a href='/chemistry'>Chemistry Instruments</a></li>
                        <li><a href='/physic'>Physics Instruments</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/simulations">Simulations</a></li>
                        <li><a href="/logbook">Logbook</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@virtuallab.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
                        <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
                        <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Virtual Lab. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
