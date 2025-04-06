import React from 'react';
import {
  gravitationProcedureData,
  chemistryprocedureData,
  acidBaseProcedureData
} from '../../config/procedureData';
import './procedure.css';

function Procedure() {
  const path = window.location.pathname;

  let experimentData;

  if (path.includes('chemistry')) {
    experimentData = chemistryprocedureData;
  } else if (path.includes('gravitation')) {
    experimentData = gravitationProcedureData;
  } else if (path.includes('acidbase')) {
    experimentData = acidBaseProcedureData;
  }

  return (
    <div className="procedure-container">
      {path.includes('chemistry') && <h1 className="procedure-title">Chemistry - Procedure</h1>}
      {path.includes('gravitation') && <h1 className="procedure-title">Gravitation - Procedure</h1>}
      {path.includes('acidbase') && <h1 className="procedure-title">Acid-Base - Procedure</h1>}

      {experimentData ? (
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
      ) : (
        <p>This is the main content of the Procedure component.</p>
      )}
    </div>
  );
}

export default Procedure;
