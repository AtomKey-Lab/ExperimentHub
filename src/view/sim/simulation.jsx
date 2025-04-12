import React, { useState, useEffect } from 'react';
import './simulation.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Loading from '../../components/loading/loading';
import Card from '../../components/simulationcard/card';
import ChatBot from '../../components/ChatBot/ChatBot';

function Simulation() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Chemistry");
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [chatOpen, setChatOpen] = useState(false);
  
    const toggleChat = () => {
      setChatOpen(!chatOpen);
    };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />

      {/* Category Buttons */}
      <div className="category-buttons">
        <button
          onClick={() => setSelectedCategory("Chemistry")}
          className={selectedCategory === "Chemistry" ? "active" : ""}
        >
          Chemistry
        </button>
        <button
          onClick={() => setSelectedCategory("Physics")}
          className={selectedCategory === "Physics" ? "active" : ""}
        >
          Physics
        </button>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search simulations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pass category and searchTerm to Card */}
      <Card category={selectedCategory} searchTerm={searchTerm} />

      <Footer />
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

export default Simulation;
