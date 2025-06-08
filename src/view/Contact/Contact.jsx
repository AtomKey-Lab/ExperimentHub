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

  useEffect(() => {
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

    createParticles();

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

  const createParticles = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.querySelector('.body').appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
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

    setTimeout(() => {
      console.log('Message sent:', formData);
      setIsSubmitting(false);
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000
      });

      const form = document.querySelector('.contact-form');
      form.classList.add('form-submitted');
      setTimeout(() => {
        form.classList.remove('form-submitted');
      }, 1500);

      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const getParallaxStyle = (depth) => {
    if (!contactContainerRef.current) return {};
    const containerWidth = contactContainerRef.current.offsetWidth;
    const containerHeight = contactContainerRef.current.offsetHeight;
    const moveX = (mousePosition.x - containerWidth / 2) / containerWidth * depth;
    const moveY = (mousePosition.y - containerHeight / 2) / containerHeight * depth;
    return { transform: `translate(${moveX}px, ${moveY}px)` };
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="body">
        <div className="background-wrapper">
          <Background />
        </div>
        <div className="contact-container" ref={contactContainerRef}>
          <div className="contact-content">
            <div className="contact-form animate-on-load">
              <h2 className="animate-text reveal-text">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            <div className="contact-image animate-on-load" style={getParallaxStyle(15)}>
              <img src={contactImage} alt="Contact illustration" />
            </div>
          </div>
        </div>
        <div className="get-in-touch-section">
  <h2>Get in Touch</h2>
  <div className="get-in-touch-boxes">
    <div className="touch-box">
      <h3>📞 Phone</h3>
      <p>+91 9876543210</p>
    </div>
    <div className="touch-box">
      <h3>📧 Email</h3>
      <p>support@AtomKey.com</p>
    </div>
    <div className="touch-box">
      <h3>📍 Address</h3>
      <p>Pune, Maharashtra, India</p>
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
