import React, { useState } from 'react';
import './App.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { imagesData } from '../../config/appimages';
import Background from '../../components/background/Background';
import ChatBot from '../../components/ChatBot/ChatBot'; // Import your ChatBot component

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className='App-body'>
        <div className="app-body-container">
          <div className="app-body-div1">
            <h1 className='home-header'>Welcome To Our Lab</h1>
            <p className='home-para'>
              "Explore science like never before! Dive into interactive simulations, conduct experiments, and understand complex concepts with ease.
              Our virtual lab offers a hands-on experience in physics and chemistry, designed to enhance your learning journey."
            </p>
          </div>
        </div>
        <Background />
      </div>
      <Footer />

      {/* ChatBot Button */}
      <div 
        className={`chat-button ${chatOpen ? 'active' : ''}`} 
        onClick={toggleChat}
      >
        {chatOpen ? 
          <svg className="close-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          :
          <svg className="chat-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
          </svg>
        }
      </div>

      {/* ChatBot Sidebar */}
      <div className={`chat-sidebar ${chatOpen ? 'open' : ''}`}>
        <ChatBot />
      </div>
    </div>
  );
}

export default App;