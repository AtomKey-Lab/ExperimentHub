import React from 'react';
import './experiment.css';
import Chemistry from './chemestry';
import Gravitation from './gravitation';
import Background from '../../components/background/Background'; 

function Experiment() {
  const path = window.location.pathname;

  return (
    <div className="experiment-container">
      <Background /> {/* Background component with dynamic canvas */}
      <div className="experiment-content">
        {path === '/chemestry' && <Chemistry />}
        {path === '/gravitation' && <Gravitation />}
        {!['/chemestry', '/gravitation'].includes(path) && (
          <div>Please select a valid experiment.</div>
        )}
      </div>
    </div>
  );
}

export default Experiment;