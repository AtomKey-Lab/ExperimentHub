import React from 'react';
import {
  gravitationProcedureData,
  chemistryprocedureData,
  acidBaseProcedureData,
  balloonStaticProcedureData,
  molarityProcedureData,
  waveOnStringProcedureData,
  densityProcedureData,
  energyFormChangeProcedureData,
  concentrationProcedureData,
  pHProcedureData,
  electrolysisProcedureData,
  wavesProcedureData,
  massSpringsProcedureData,
  statesOfMatterProcedureData,
  hookesLawProcedureData,
  balancingActProcedureData,
  forceProcedureData,
  soundWavesProcedureData,
  glassSlabProcedureData,
  resistanceProcedureData,
  opticsProcedureData
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
  } else if (path.includes('balloanelectricity')) {
    experimentData = balloonStaticProcedureData;
  } else if (path.includes('molarity')) {
    experimentData = molarityProcedureData;
  } else if (path.includes('wavestring')) {
    experimentData = waveOnStringProcedureData;
  } else if (path.includes('density')) {
    experimentData = densityProcedureData;
  } else if (path.includes('energyform')) {
    experimentData = energyFormChangeProcedureData;
  } else if (path.includes('concentration')) {
    experimentData = concentrationProcedureData;
  } else if (path.includes('ph')) {
    experimentData = pHProcedureData;
  } else if (path.includes('electrolysis')) {
    experimentData = electrolysisProcedureData;
  } else if (path.includes('wave')) {
    experimentData = wavesProcedureData;
  } else if (path.includes('springs')) {
    experimentData = massSpringsProcedureData;
  } else if (path.includes('statematter')) {
    experimentData = statesOfMatterProcedureData;
  } else if (path.includes('hookslaw')) {
    experimentData = hookesLawProcedureData;
  } else if (path.includes('balancing')) {
    experimentData = balancingActProcedureData;
  } else if (path.includes('force')) {
    experimentData = forceProcedureData;
  } else if (path.includes('sound')) {
    experimentData = soundWavesProcedureData;
  } else if (path.includes('glass')) {
    experimentData = glassSlabProcedureData;
  } else if (path.includes('resistance')) {
    experimentData = resistanceProcedureData;
  } else if (path.includes('convexconcave')) {
    experimentData = opticsProcedureData;
  }

  return (
    <div className="procedure-container">
      {/* Physics Simulations */}
      {path.includes('gravitation') && <h1 className="procedure-title">Gravitation - Procedure</h1>}
      {path.includes('balloanelectricity') && <h1 className="procedure-title">Balloon and Static Electricity - Procedure</h1>}
      {path.includes('wavestring') && <h1 className="procedure-title">Wave on String - Procedure</h1>}
      {path.includes('density') && <h1 className="procedure-title">Density - Procedure</h1>}
      {path.includes('energyform') && <h1 className="procedure-title">Energy Form and Change - Procedure</h1>}
      {path.includes('waves') && <h1 className="procedure-title">Waves - Procedure</h1>}
      {path.includes('masssprings') && <h1 className="procedure-title">Mass and Springs - Procedure</h1>}
      {path.includes('states') && <h1 className="procedure-title">States of Matter - Procedure</h1>}
      {path.includes('hooke') && <h1 className="procedure-title">Hooke's Law - Procedure</h1>}
      {path.includes('balancing') && <h1 className="procedure-title">Balancing Act - Procedure</h1>}
      {path.includes('force') && <h1 className="procedure-title">Force - Procedure</h1>}
      {path.includes('sound') && <h1 className="procedure-title">Sound Waves - Procedure</h1>}
      {path.includes('glass') && <h1 className="procedure-title">Glass Slab - Procedure</h1>}
      {path.includes('resistance') && <h1 className="procedure-title">Resistance in Circuits - Procedure</h1>}
      {path.includes('optics') && <h1 className="procedure-title">Optics - Procedure</h1>}

      {/* Chemistry Simulations */}
      {path.includes('chemistry') && <h1 className="procedure-title">Chemistry - Procedure</h1>}
      {path.includes('acidbase') && <h1 className="procedure-title">Acid-Base - Procedure</h1>}
      {path.includes('molarity') && <h1 className="procedure-title">Molarity - Procedure</h1>}
      {path.includes('concentration') && <h1 className="procedure-title">Concentration - Procedure</h1>}
      {path.includes('ph') && <h1 className="procedure-title">pH - Procedure</h1>}
      {path.includes('electrolysis') && <h1 className="procedure-title">Electrolysis - Procedure</h1>}

      {/* Display Procedure Content */}
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
        <p>No procedure data available for this simulation.</p>
      )}
    </div>
  );
}

export default Procedure;
