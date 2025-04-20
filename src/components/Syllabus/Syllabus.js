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
      // For production, ensure the link is absolute
      const absoluteLink = link.startsWith('http') ? link : window.location.origin + link;
      const linkElement = document.createElement('a');
      linkElement.href = absoluteLink;
      linkElement.download = link.split('/').pop();
      linkElement.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } else {
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
                    onClick={() => handleDownload(sim.link || sim.pdf)}
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