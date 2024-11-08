import React from 'react';
import './experiment.css';
import Chemistry from './chemestry';
import Gravitation from './gravitation';

function Experiment() {
  // Check the current path directly
  const path = window.location.pathname;

  return (
    <div className="experiment-container">
      {path === '/chemestry' && <Chemistry />}
      {path === '/gravitation' && <Gravitation />}
      {!['/chemestry', '/gravitation'].includes(path) && (
        <div>Please select a valid experiment.</div>
      )}
    </div>
  );
}

export default Experiment;
