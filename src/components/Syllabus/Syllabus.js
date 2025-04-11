import React, { useState, useEffect } from 'react';
import Background from '../../components/background/Background';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './Syllabus.css';
import chemistrySimulations from '../../config/syllabuschemi';
import physicsSimulations from '../../config/syllabusphy';

// Example difficulty mapping - you can adjust these based on your actual data
const getDifficulty = (index) => {
  const options = ['easy', 'medium', 'hard'];
  return options[index % options.length];
};

// Arrow icon component for the button
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

  const currentSimulations = selectedCategory === 'chemistry' ? chemistrySimulations : physicsSimulations;
  
  useEffect(() => {
    // Set the filtered simulations, could add more filtering logic here if needed
    setFilteredSimulations(currentSimulations);
    
    // Animation effect
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
          {/* You could add more categories here */}
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
                    <span className={`difficulty ${getDifficulty(index)}`}>
                      {getDifficulty(index).charAt(0).toUpperCase() + getDifficulty(index).slice(1)}
                    </span>
                    <a className="explore-btn" href={sim.link}>
                      Explore
                      <ArrowIcon />
                    </a>
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
    </div>
  );
}