import React from 'react';
import './footer.css';
import Facebook from '../../Assets/facebook (2).png'
import Instagram from '../../Assets/instagram (1).png'
import Twitter from '../../Assets/twitter.png'


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4 className='footer-section-h4'>About AtomKey Lab</h4>
                    <p className='footer-section-p'>AtomKey lab providing interactive simulations for Physics and Chemistry, making science more accessible and fun for students.</p>
                </div>

                <div className="footer-section">
                    <h4 className='footer-section-h4'>Need to Study</h4>
                    <ul className='footer-section-ul'>
                        <li><a href="/Instrument" className='social-icons-a '>Chemistry Instruments</a></li>
                        <li><a href="/physics" className='social-icons-a '>Physics Instruments</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className='footer-section-h4'>Quick Links</h4>
                    <ul className='footer-section-ul'>
                        <li><a href="/" className='social-icons-a '>Home</a></li>
                        <li><a href="/simulation" className='social-icons-a '>Simulations</a></li>
                        <li><a href="/logbook" className='social-icons-a '>Logbook</a></li>
                        <li><a href="/contact" className='social-icons-a '>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className='footer-section-h4'>Contact Us</h4>
                    <p className='footer-section-p'>Email: info@AtomKey.com</p>
                    <p className='footer-section-p'>Phone: +1 (555) 123-4567</p>
                </div>

                <div className="footer-section">
                    <h4 className='footer-section-h4'>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" className='social-icons-a '><img src={Facebook} alt="Facebook" /></a>
                        <a href="#" className='social-icons-a '><img src={Instagram} alt="Twitter" /></a>
                        <a href="#" className='social-icons-a '><img src={Twitter} alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className='footer-section'>&copy; 2024 Virtual Lab. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
