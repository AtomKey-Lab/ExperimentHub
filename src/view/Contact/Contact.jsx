import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import contactImage from '../../Assets/contact3.jpg';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Background from '../../components/background/Background';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contactContainerRef = useRef(null);
  
  // Animation effect when component mounts
  useEffect(() => {
    // Ensure Background component is visible
    const backgroundElement = document.querySelector('.background');
    if (backgroundElement) {
      backgroundElement.style.opacity = '0.15';
      backgroundElement.style.zIndex = '-1';
      backgroundElement.style.position = 'absolute';
      backgroundElement.style.width = '100%';
      backgroundElement.style.height = '100%';
      backgroundElement.style.top = '0';
      backgroundElement.style.left = '0';
    }
    
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 200 * index);
    });
    
    // Add particles animation
    createParticles();
    
    // Parallax effect for mouse movement
    const handleMouseMove = (e) => {
      if (contactContainerRef.current) {
        const containerRect = contactContainerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const y = e.clientY - containerRect.top;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Create particles for background effect
  const createParticles = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.querySelector('.body').appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning and timing
      const size = Math.random() * 8 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a message send action
    setTimeout(() => {
      console.log('Message sent:', formData);
      setIsSubmitting(false);

      // Show success toast with animation
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'animated-toast'
      });

      // Add confirmation animation
      const form = document.querySelector('.contact-form');
      form.classList.add('form-submitted');
      
      setTimeout(() => {
        form.classList.remove('form-submitted');
      }, 1500);

      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    }, 2000); // Simulate network request delay
  };

  // Calculate parallax transform values based on mouse position
  const getParallaxStyle = (depth) => {
    if (!contactContainerRef.current) return {};
    
    const containerWidth = contactContainerRef.current.offsetWidth;
    const containerHeight = contactContainerRef.current.offsetHeight;
    const moveX = (mousePosition.x - containerWidth / 2) / containerWidth * depth;
    const moveY = (mousePosition.y - containerHeight / 2) / containerHeight * depth;
    
    return {
      transform: `translate(${moveX}px, ${moveY}px)`
    };
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="body">
        {/* The Background component needs to be properly placed */}
        <div className="background-wrapper">
          <Background />
        </div>
        <div className="glowing-orb"></div>
        <div className="contact-container" ref={contactContainerRef}>
          <div className="contact-content">
            {/* Contact Form Section */}
            <div className="contact-form animate-on-load">
              <h2 className="animate-text reveal-text">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-field animate-on-load">
                  <label className="input-label">Name</label>
                  <input
                    type="text"
                    className="input-animate"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-focus-effect"></span>
                </div>
                <div className="input-field animate-on-load">
                  <label className="input-label">Email</label>
                  <input
                    type="email"
                    className="input-animate"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-focus-effect"></span>
                </div>
                <div className="input-field animate-on-load">
                  <label className="input-label">Message</label>
                  <textarea
                    rows="4"
                    className="input-animate"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <span className="input-focus-effect textarea-effect"></span>
                </div>
                <button
                  type="submit"
                  className="send-button animate-on-load"
                  disabled={isSubmitting}
                >
                  <span className="button-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="button-icon">→</span>
                </button>
              </form>
            </div>

            {/* Contact Image with parallax effect */}
            <div className="contact-image animate-on-load" style={getParallaxStyle(15)}>
              <div className="image-spotlight"></div>
              <img src={contactImage} alt="Contact illustration" className="float-animation" />
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="get-in-touch">
            <h2 className="get-in-touch-h2 animate-on-load reveal-text">Get in Touch</h2>
            <div className="contact-info">
              <div className="contact-box animate-on-load hover-lift" style={getParallaxStyle(5)}>
                <div className="contact-box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="contact-box-h3">Address</h3>
                <p className="contact-box-p">123 Main Street, Cityville, ST 12345</p>
                <div className="box-glow"></div>
              </div>
              <div className="contact-box animate-on-load hover-lift" style={getParallaxStyle(10)}>
                <div className="contact-box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="contact-box-h3">Phone</h3>
                <p className="contact-box-p">+1 (555) 123-4567</p>
                <div className="box-glow"></div>
              </div>
              <div className="contact-box animate-on-load hover-lift" style={getParallaxStyle(15)}>
                <div className="contact-box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="contact-box-h3">Email</h3>
                <p className="contact-box-p">info@example.com</p>
                <div className="box-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Contact;