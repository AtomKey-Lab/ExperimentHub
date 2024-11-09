import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for contacting us!");

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='bgbody'>
    <div className="contact-page">
    <h2 className='header'>Contact Us</h2>
      {/* Contact Us Form Section */}
      <div className='contact-Box'>
      <div className="contact-form">
      
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message:</label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      </div>

      {/* Get in Touch Section with Separate Boxes in a Row */}

      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <div className='get-Box'>
        <div className="contact-info">
          <div className="contact-box">
            <h3>Address</h3>
            <p>123 Main Street, Cityville, ST 12345</p>
          </div>
          <div className="contact-box">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-box">
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
