import React from 'react';
import { gravitationProcedureData, chemestryprocedureData } from '../../config/procedureData';
import './procedure.css';

function Procedure() {
  // Get the current path from the URL
  const path = window.location.pathname;
  
  // Define variables to store experiment data based on the path
  let experimentData;

  if (path.includes('chemestry')) {
    experimentData = chemestryprocedureData;
  } else if (path.includes('gravitation')) {
    experimentData = gravitationProcedureData;
  }

  return (
    <div className="procedure-container">
      {/* Conditional rendering based on the URL */}
      {path.includes('chemestry') && <h1 className="procedure-title">Chemistry - Procedure</h1>}
      {path.includes('gravitation') && <h1 className="procedure-title">Gravitation - Procedure</h1>}

      {experimentData && (
        <>
          {Object.values(experimentData).map((experiment, idx) => (
            <div key={idx} className="experiment-section">
              <h2 className="experiment-name">{experiment.name}</h2>
              <p className="experiment-color">Color: {experiment.color}</p>
              <h3 className="experiment-steps-title">Steps:</h3>
              <ul className="experiment-steps">
                {experiment.steps.map((step, index) => (
                  <li key={index} className="step-item">{step}</li>
                ))}
              </ul>
              <p className="experiment-result"><strong>Result:</strong> {experiment.result}</p>
            </div>
          ))}
        </>
      )}

      {!experimentData && <p>This is the main content of the Procedure component.</p>}
    </div>
  );
}

export default Procedure;
