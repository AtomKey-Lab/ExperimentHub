// ExperimentLoading.js
import React from 'react';
import './loading.css';

const ExperimentLoading = () => {
  return (
    <div className="experiment-loading-container">
      <div className="beaker">
        <div className="bubbles">
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
          <span className="bubble"></span>
        </div>
      </div>
      <p className='bubble-p'>Experiment in Progress...</p>
    </div>
  );
};

export default ExperimentLoading;