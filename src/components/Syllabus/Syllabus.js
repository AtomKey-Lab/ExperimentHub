import React, { useState, useEffect } from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import chemistrySimulations from '../../config/syllabuschemi';
import physicsSimulations from '../../config/syllabusphy';
import ChatBot from '../ChatBot/ChatBot';
import './Syllabus.css';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
);

export default function Syllabus() {
  const [selectedCategory, setSelectedCategory] = useState('chemistry');
  const [filteredSimulations, setFilteredSimulations] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(!chatOpen);

  const manualSimulations = [
    { 
      name: 'CBSC Manual', 
      description: 'Comprehensive guide for CBSC Board curriculum with detailed explanations and practice materials', 
      pdf: `${process.env.PUBLIC_URL}/pdf/CBSC Board Manual.pdf`,
      sub: 'PDF' 
    },
    { 
      name: 'ICSE Manual', 
      description: 'Complete reference manual for ICSE Board students with curriculum highlights and examples', 
      pdf: `${process.env.PUBLIC_URL}/pdf/ICSE Board Manual.pdf`,
      sub: 'PDF' 
    },
    { 
      name: 'Maharashtra Manual', 
      description: 'Official curriculum guide for Maharashtra Board with chapter-wise resources and guidelines', 
      pdf: `${process.env.PUBLIC_URL}/pdf/Maharashtra Board Manual.pdf`,
      sub: 'PDF'
    },
  ];

  useEffect(() => {
    if (selectedCategory === 'chemistry') {
      setFilteredSimulations(chemistrySimulations);
    } else if (selectedCategory === 'physics') {
      setFilteredSimulations(physicsSimulations);
    } else if (selectedCategory === 'manual') {
      setFilteredSimulations(manualSimulations);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDownload = (link) => {
    if (selectedCategory === 'manual') {
      // Download behavior for Manuals (PDF files)
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.download = link.split('/').pop(); // Extracts file name for download
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } else {
      // Explore behavior for other categories (opens in new tab)
      window.open(link, '_blank');
    }
  };

  return (
    <div className="syllabus-page">
      <Background />
      <Navbar />

      <div className="syllabus-container">
        <div className="category-tabs">
          <button 
            className={`category-tab ${selectedCategory === 'chemistry' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('chemistry')}
          >
            <span className="tab-icon chemistry-icon">⚗️</span>
            Chemistry
          </button>
          <button 
            className={`category-tab ${selectedCategory === 'physics' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('physics')}
          >
            <span className="tab-icon physics-icon">🔭</span>
            Physics
          </button>
          <button 
            className={`category-tab ${selectedCategory === 'manual' ? 'active' : ''}`} 
            onClick={() => handleCategoryChange('manual')}
          >
            <span className="tab-icon manual-icon">📘</span>
            Manuals
          </button>
        </div>

        <div className="simulation-grid">
          {filteredSimulations && filteredSimulations.length > 0 ? (
            filteredSimulations.map((sim, index) => (
              <div className="simulation-card" key={index}>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{sim.name}</h3>
                    <div className="card-number">{index + 1}</div>
                  </div>
                  
                  <p className="card-description">{sim.description}</p>
                  
                  {(sim.sub || sim.sub2 || sim.sub3) && (
                    <div className="tag-container">
                      {sim.sub && <span className="subject-tag">{sim.sub}</span>}
                      {sim.sub2 && <span className="subject-tag">{sim.sub2}</span>}
                      {sim.sub3 && <span className="subject-tag">{sim.sub3}</span>}
                    </div>
                  )}
                  
                  <button 
                    className="action-button" 
                    onClick={() => handleDownload(sim.link || sim.pdf)} // Check if it's a link or PDF
                  >
                    <span>{selectedCategory === 'manual' ? 'Download' : 'Explore'}</span>
                    <ArrowIcon />
                  </button>
                </div>
                <div className="card-accent"></div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <h3>No resources found</h3>
              <p>Please select a different category</p>
            </div>
          )}
        </div>
      </div>

      <Footer />

      {/* ChatBot toggle button */}
      <button 
        className={`chat-button ${chatOpen ? 'active' : ''}`} 
        onClick={toggleChat}
        aria-label={chatOpen ? "Close chat" : "Open chat"}
      >
        {chatOpen ? 
          <svg className="close-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg> :
          <svg className="chat-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16v12H5.17L4 17.17V4z" />
          </svg>
        }
      </button>

      {chatOpen && <ChatBot />}
    </div>
  );
}
