import React from 'react';
import './Contact.css';
import contactImage from '../../Assets/contact3.jpg';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Background from '../../components/background/Background'; // Import Background component

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Background /> {/* Add Background Component */}
        <div className="contact-container">
          <div className="contact-content">
            {/* Contact Form Section */}
            <div className="contact-form">
              <h2>Contact Us</h2>
              <div className="input-field">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <textarea placeholder="Message" rows="4"></textarea>
              </div>
              <button className="send-button">Send Message</button>
            </div>

            {/* Contact Image */}
            <div className="contact-image">
              <img src={contactImage} alt="Contact illustration" />
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="get-in-touch">
            <h2 className="get-in-touch-h2">Get in Touch</h2>
            <div className="contact-info">
              <div className="contact-box">
                <h3 className="contact-box-h3">Address</h3>
                <p className="contact-box-p">123 Main Street, Cityville, ST 12345</p>
              </div>
              <div className="contact-box">
                <h3 className="contact-box-h3">Phone</h3>
                <p className="contact-box-p">+1 (555) 123-4567</p>
              </div>
              <div className="contact-box">
                <h3 className="contact-box-h3">Email</h3>
                <p className="contact-box-p">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
