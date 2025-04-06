import React from 'react';
import './theory.css';
import { useLocation } from 'react-router-dom';
import { gravitationTheory, chemistryTheory, AcidBase } from '../../config/theory';

function Theory() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  return (
    <div className="app-container">

      {/* Chemistry Section */}
      {path.includes('chemistry') && (
        <div className="section chemistry-section">
          <div className="resin">
            <h1 className="title">Phenol Formaldehyde Resin</h1>
            <p className="description">
              {chemistryTheory.phenolFormaldehydeResin.description}
            </p>

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

      {/* Gravitation Section */}
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

      {/* Acid-Base Section */}
      {path.includes('acid') && (
        <div className="section cation-section">
          <h1 className="title">Acid-Base pH Test Theory</h1>
          <p className="description">{AcidBase.overview}</p>

          <h3 className="subtitle">General Procedure:</h3>
          <ul className="list">
            {AcidBase.generalProcedure.map((step, idx) => (
              <li key={idx} className="list-item">{step}</li>
            ))}
          </ul>

          {AcidBase.analysisGroups.map((group, idx) => (
            <div key={idx} className="cation-group">
              <h2 className="subtitle">{group.group}</h2>
              <p><strong>Reagent:</strong> {group.reagent}</p>
              {group.cations.map((cation, index) => (
                <div key={index}>
                  <p><strong>Cation:</strong> {cation.name}</p>
                  <p><strong>Color Change:</strong> {cation.precipitate}</p>
                  <p><strong>Confirmatory Test:</strong> {cation.confirmatoryTest}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Fallback Message */}
      {!path.includes('chemistry') &&
        !path.includes('gravitation') &&
        !path.includes('acid') && (
        <p className="fallback-text">Please select a valid theory section from the menu.</p>
      )}
    </div>
  );
}

export default Theory;
