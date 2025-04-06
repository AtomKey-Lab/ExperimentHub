import React from 'react';
import './theory.css';
import { gravitationTheory, chemistryTheory, AcidBase } from '../../config/theory';

function Theory() {
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
        </div>
      )}

      {path.includes('AcidBase') && (
        <div className="section cation-section">
          <h1 className="title">Cation Analysis</h1>
          <p className="description">{cationAnalysis.overview}</p>
          <h3 className="subtitle">General Procedure:</h3>
          <ul className="list">
            {cationAnalysis.generalProcedure.map((step, idx) => (
              <li key={idx} className="list-item">{step}</li>
            ))}
          </ul>
          {cationAnalysis.analysisGroups.map((group, idx) => (
            <div key={idx} className="cation-group">
              <h2 className="subtitle">{group.group}</h2>
              <p><strong>Reagent:</strong> {group.reagent}</p>
              {group.cations.map((cation, index) => (
                <div key={index}>
                  <p><strong>Cation:</strong> {cation.name}</p>
                  <p><strong>Precipitate:</strong> {cation.precipitate}</p>
                  <p><strong>Confirmatory Test:</strong> {cation.confirmatoryTest}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {!path.includes('chemistry') && !path.includes('gravitation') && !path.includes('AcidBase') && (
        <p className="fallback-text">This is the main content of the Procedure component.</p>
      )}
    </div>
  );
}

export default Theory;
