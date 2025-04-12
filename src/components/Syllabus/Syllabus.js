import React, { useState, useEffect } from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './Syllabus.css';
import chemistrySimulations from '../../config/syllabuschemi';
import physicsSimulations from '../../config/syllabusphy';
import ChatBot from '../ChatBot/ChatBot';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
);

export default function Syllabus() {
  const [selectedCategory, setSelectedCategory] = useState('chemistry');
  const [isAnimating, setIsAnimating] = useState(false);
  const [filteredSimulations, setFilteredSimulations] = useState([]);
    const [chatOpen, setChatOpen] = useState(false);
  
    const toggleChat = () => {
      setChatOpen(!chatOpen);
    };
  

  // Manual simulations using public folder paths
  const manualSimulations = [
    { 
      name: 'CBSC Manual', 
      description: 'Download CBSC Board Manual', 
      pdf: `${process.env.PUBLIC_URL}/pdf/CBSC Board Manual.pdf` 
    },
    { 
      name: 'ICSE Manual', 
      description: 'Download ICSE Board Manual', 
      pdf: `${process.env.PUBLIC_URL}/pdf/ICSE Board Manual.pdf` 
    },
    { 
      name: 'Maharashtra Manual', 
      description: 'Download Maharashtra Board Manual', 
      pdf: `${process.env.PUBLIC_URL}/pdf/Maharashtra Board Manual.pdf` 
    },
  ];

  const currentSimulations = selectedCategory === 'chemistry' 
    ? chemistrySimulations 
    : selectedCategory === 'physics' 
    ? physicsSimulations 
    : manualSimulations;

  useEffect(() => {
    setFilteredSimulations(currentSimulations);
    
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentSimulations]);

  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedCategory(category);
      }, 300);
    }
  };

  const handleDownload = (filePath) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Background />
      <Navbar />
      
      <div className="syllabus-container">
        <div className="button-group">
          <button 
            className={selectedCategory === 'chemistry' ? 'active' : ''} 
            onClick={() => handleCategoryChange('chemistry')}
          >
            Chemistry
          </button>
          <button 
            className={selectedCategory === 'physics' ? 'active' : ''} 
            onClick={() => handleCategoryChange('physics')}
          >
            Physics
          </button>
          <button 
            className={selectedCategory === 'manual' ? 'active' : ''} 
            onClick={() => handleCategoryChange('manual')}
          >
            Manual Download
          </button>
        </div>
        
        <div className={`simulation-list ${isAnimating ? 'animating' : ''}`}>
          {filteredSimulations.length > 0 ? (
            filteredSimulations.map((sim, index) => (
              <div className="simulation-item" key={index}>
                <div className="simulation-number">{index + 1}</div>
                <div className="simulation-content">
                  <h3 className="simulation-title">{sim.name}</h3>
                  <p className="simulation-description">{sim.description}</p>
                  
                  <div className="action-row">
                    <button 
                      className="explore-btn" 
                      onClick={() => handleDownload(sim.pdf)} 
                    >
                      {selectedCategory === 'manual' ? 'Download' : 'Explore'}
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <h3>No simulations found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
      
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