import React from 'react';
import './theory.css';
import { gravitationTheory, chemistryTheory } from '../../config/theory';

function App() {
  const path = window.location.pathname;

  return (
    <div className="app-container">
      {path.includes('chemistry') && (
        <div className="section chemistry-section">
          <div className="resin">
            <h1 className="title">Phenol Formaldehyde Resin</h1>
            <p className="description">{chemistryTheory.phenolFormaldehydeResin.description}</p>
            <h3 className="subtitle">Properties:</h3>
            <ul className="list">
              {chemistryTheory.phenolFormaldehydeResin.properties.map((prop, idx) => (
                <li key={idx} className="list-item">{prop}</li>
              ))}
            </ul>
            <h3 className="subtitle">Uses:</h3>
            <ul className="list">
              {chemistryTheory.phenolFormaldehydeResin.uses.map((use, idx) => (
                <li key={idx} className="list-item">{use}</li>
              ))}
            </ul>
            <p className="description">
              <strong>Preparation:</strong> {chemistryTheory.phenolFormaldehydeResin.preparation}
            </p>
          </div>

          <div className="resin">
            <h1 className="title">Urea Formaldehyde Resin</h1>
            <p className="description">{chemistryTheory.ureaFormaldehydeResin.description}</p>
            <h3 className="subtitle">Production Steps:</h3>
            <ul className="list">
              <li className="list-item">{chemistryTheory.ureaFormaldehydeResin.productionSteps.stageOne}</li>
              <li className="list-item">{chemistryTheory.ureaFormaldehydeResin.productionSteps.stageTwo}</li>
            </ul>
            <h3 className="subtitle">Uses:</h3>
            <ul className="list">
              {chemistryTheory.ureaFormaldehydeResin.uses.map((use, idx) => (
                <li key={idx} className="list-item">{use}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {path.includes('gravitation') && (
        <div className="section gravitation-section">
          <h1 className="title">Gravitation Theory</h1>
          <p className="description">{gravitationTheory.description}</p>
          <h3 className="subtitle">Laws:</h3>
          <ul className="list">
            {gravitationTheory.laws.map((law, idx) => (
              <li key={idx} className="list-item">
                <strong>{law.lawName}: </strong>
                {law.description} <br />
                <em>Formula:</em> {law.formula}
              </li>
            ))}
          </ul>
          <h3 className="subtitle">Properties:</h3>
          <ul className="list">
            {gravitationTheory.properties.map((prop, idx) => (
              <li key={idx} className="list-item">{prop}</li>
            ))}
          </ul>
          <h3 className="subtitle">Uses:</h3>
          <ul className="list">
            {gravitationTheory.uses.map((use, idx) => (
              <li key={idx} className="list-item">{use}</li>
            ))}
          </ul>
          <h3 className="subtitle">Applications:</h3>
          <ul className="list">
            {gravitationTheory.applications.map((app, idx) => (
              <li key={idx} className="list-item">{app}</li>
            ))}
          </ul>
          <p className="description">
            <strong>Future Research:</strong> {gravitationTheory.futureResearch}
          </p>
        </div>
      )}

      {!path.includes('chemistry') && !path.includes('gravitation') && (
        <p className="fallback-text">This is the main content of the Procedure component.</p>
      )}
    </div>
  );
}

export default App;
