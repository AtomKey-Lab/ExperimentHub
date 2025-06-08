import React from 'react';
import './theory.css';
import { useLocation } from 'react-router-dom';
import { gravitationTheory, chemistryTheory, AcidBase, BalloonElectricity, MolarityTheory ,DensityTheory,EnergyForms,
  ConcentrationTheory,pHTheory,ElectrolysisTheory,WaveOnStringTheory,springTheory,stateMatterTheory,hookeLawTheory,balanceActTheory
,forceTheory,glassSlabTheory,resistanceTheory,convexConcaveTheory} from '../../config/theory';



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
{/* Balloon Electricity Section */}
{/* Balloon Electricity Section */}
{path.includes('balloanelectricity') && (
  <div className="section balloon-section">
    <h1 className="title">Balloon Electricity (Static Electricity) Theory</h1>
    <p className="description">{BalloonElectricity.overview}</p>

    <h3 className="subtitle">General Procedure:</h3>
    <ul className="list">
      {BalloonElectricity.generalProcedure.map((step, idx) => (
        <li key={idx} className="list-item">{step}</li>
      ))}
    </ul>

    {BalloonElectricity.analysisGroups.map((group, idx) => (
      <div key={idx} className="cation-group">
        <h2 className="subtitle">{group.group}</h2>
        <p><strong>Reagent:</strong> {group.reagent}</p>
        {group.observations.map((obs, index) => (
          <div key={index}>
            <p><strong>Condition:</strong> {obs.name}</p>
            <p><strong>Effect:</strong> {obs.effect}</p>
            <p><strong>Confirmatory Test:</strong> {obs.confirmatoryTest}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
)}
{/* Molarity Section */}
{path.includes('molarity') && (
  <div className="section molarity-section">
    <h1 className="title">Molarity Theory</h1>
    <p className="description">{MolarityTheory.overview}</p>

    <h3 className="subtitle">Formula:</h3>
    <p className="formula"><strong>{MolarityTheory.formula}</strong></p>
    <p className="description">{MolarityTheory.explanation}</p>

    <h3 className="subtitle">General Procedure:</h3>
    <ul className="list">
      {MolarityTheory.generalProcedure.map((step, idx) => (
        <li key={idx} className="list-item">{step}</li>
      ))}
    </ul>

    <h3 className="subtitle">Example Problem:</h3>
    {MolarityTheory.examples.map((example, idx) => (
      <div key={idx}>
        <p><strong>Problem:</strong> {example.problem}</p>
        <ul>
          {example.solution.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}
{/* Density Section */}
{path.includes('density') && (
  <div className="section density-section">
    <h1 className="title">Density Theory</h1>
    <p className="description">{DensityTheory.overview}</p>

    <h3 className="subtitle">Formula:</h3>
    <p className="formula"><strong>{DensityTheory.formula}</strong></p>
    <p className="description">{DensityTheory.explanation}</p>

    <h3 className="subtitle">General Procedure:</h3>
    <ul className="list">
      {DensityTheory.generalProcedure.map((step, idx) => (
        step.includes("Note:") ? (
          <li key={idx} className="note-box">{step.replace("Note:", "")}</li>
        ) : (
          <li key={idx} className="list-item">{step}</li>
        )
      ))}
    </ul>

    <h3 className="subtitle">Example Problem:</h3>
    {DensityTheory.examples.map((example, idx) => (
      <div key={idx}>
        <p><strong>Problem:</strong> {example.problem}</p>
        <ul>
          {example.solution.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}
{/* Energy Forms and Changes Section */}
{path.includes('energyform') && (
  <div className="section energy-section">
    <h1 className="title">Energy Forms and Changes</h1>
    <p className="description">{EnergyForms.overview}</p>

    <h3 className="subtitle">Common Forms of Energy:</h3>
    <ul className="list">
      {EnergyForms.commonForms.map((form, idx) => (
        <li key={idx} className="list-item">{form}</li>
      ))}
    </ul>

    <h3 className="subtitle">Energy Changes:</h3>
    <ul className="list">
      {EnergyForms.energyChanges.map((change, idx) => (
        <li key={idx} className="list-item">{change}</li>
      ))}
    </ul>

    <h3 className="subtitle">Law of Conservation of Energy:</h3>
    <p className="description">{EnergyForms.lawOfConservation}</p>
  </div>
)}
{/* Concentration Section */}
{path.includes('concentration') && (
  <div className="section concentration-section">
    <h1 className="title">Concentration Theory</h1>
    <p className="description">{ConcentrationTheory.overview}</p>

    <h3 className="subtitle">Common Units of Concentration:</h3>
    <ul className="list">
      {ConcentrationTheory.commonUnits.map((unit, idx) => (
        <li key={idx} className="list-item">{unit}</li>
      ))}
    </ul>

    <h3 className="subtitle">Formula:</h3>
    <p className="formula">{ConcentrationTheory.formula}</p>

    <h3 className="subtitle">General Procedure:</h3>
    <ul className="list">
      {ConcentrationTheory.procedure.map((step, idx) => (
        <li key={idx} className="list-item">{step}</li>
      ))}
    </ul>

    <h3 className="subtitle">Example Problem:</h3>
    {ConcentrationTheory.examples.map((example, idx) => (
      <div key={idx}>
        <p><strong>Problem:</strong> {example.problem}</p>
        <ul>
          {example.solution.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

)}
{/* pH Section */}
{path.includes('ph') && (
  <div className="section ph-section">
    <h1 className="title">pH Theory</h1>
    <p className="description">{pHTheory.overview}</p>

    <h3 className="subtitle">pH Scale:</h3>
    <p className="description">{pHTheory.scaleDescription}</p>

    <h3 className="subtitle">Formula:</h3>
    <p className="formula">{pHTheory.formula}</p>

    <h3 className="subtitle">General Procedure:</h3>
    <ul className="list">
      {pHTheory.procedure.map((step, idx) => (
        <li key={idx} className="list-item">{step}</li>
      ))}
    </ul>

    <h3 className="subtitle">Common Indicators:</h3>
    <table className="indicator-table">
      <thead>
        <tr>
          <th>Indicator</th>
          <th>Acidic</th>
          <th>Basic</th>
          <th>Neutral</th>
        </tr>
      </thead>
      <tbody>
        {pHTheory.indicators.map((item, idx) => (
          <tr key={idx}>
            <td>{item.indicator}</td>
            <td>{item.acidic}</td>
            <td>{item.basic}</td>
            <td>{item.neutral}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3 className="subtitle">Example:</h3>
    <p><strong>Problem:</strong> {pHTheory.example.problem}</p>
    <p><strong>Solution:</strong> {pHTheory.example.solution}</p>
  </div>
)}

{/* Electrolysis Section */}
{path.includes('electrolysis') && (
  <div className="section electrolysis-section">
    <h1 className="title">Electrolysis Theory</h1>
    <p className="description">{ElectrolysisTheory.overview}</p>

    <h3 className="subtitle">Definition:</h3>
    <p className="description">{ElectrolysisTheory.definition}</p>

    <h3 className="subtitle">Basic Setup:</h3>
    <ul className="list">
      {ElectrolysisTheory.basicSetup.map((item, idx) => (
        <li key={idx} className="list-item">{item}</li>
      ))}
    </ul>

    <h3 className="subtitle">{ElectrolysisTheory.example.title}:</h3>
    <ul className="list">
      {ElectrolysisTheory.example.steps.map((step, idx) => (
        <li key={idx} className="list-item">{step}</li>
      ))}
    </ul>

    <h3 className="subtitle">Electrode Reactions:</h3>
    <table className="reaction-table">
      <thead>
        <tr>
          <th>Electrode</th>
          <th>Reaction</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {ElectrolysisTheory.reactions.map((rxn, idx) => (
          <tr key={idx}>
            <td>{rxn.location}</td>
            <td>{rxn.reaction}</td>
            <td>{rxn.type}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3 className="subtitle">Applications:</h3>
    <ul className="list">
      {ElectrolysisTheory.applications.map((app, idx) => (
        <li key={idx} className="list-item">{app}</li>
      ))}
    </ul>
  </div>
)}
{/* Wave on String Section */}
{path.includes('wave') && (
  <div className="section wave-section">
    <h1 className="title">Wave on a String Theory</h1>
    <p className="description">{WaveOnStringTheory.overview}</p>

    <h3 className="subtitle">Types of Waves:</h3>
    <ul className="list">
      {WaveOnStringTheory.types.map((type, idx) => (
        <li key={idx} className="list-item">{type}</li>
      ))}
    </ul>

    <h3 className="subtitle">Key Terms:</h3>
    <ul className="list">
      {Object.entries(WaveOnStringTheory.keyTerms).map(([term, desc], idx) => (
        <li key={idx} className="list-item">
          <strong>{term.charAt(0).toUpperCase() + term.slice(1)}:</strong> {desc}
        </li>
      ))}
    </ul>

    <h3 className="subtitle">Formula:</h3>
    <p className="formula">{WaveOnStringTheory.formula}</p>
    <p className="description">{WaveOnStringTheory.formulaExplanation}</p>

    <h3 className="subtitle">Experimental Steps:</h3>
    <ul className="list">
      {WaveOnStringTheory.experimentSteps.map((step, idx) => (
        <li key={idx} className="list-item">{step}</li>
      ))}
    </ul>

    <h3 className="subtitle">Applications:</h3>
    <ul className="list">
      {WaveOnStringTheory.applications.map((app, idx) => (
        <li key={idx} className="list-item">{app}</li>
      ))}
    </ul>
  </div>
)}
{path.includes('spring') && (
  <div className="section spring-section">
    <h1 className="title">Spring Theory</h1>
    <p className="description">{springTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {springTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}
{/* States of Matter Section */}
{path.includes('state') && (
  <div className="section state-section">
    <h1 className="title">States of Matter Theory</h1>
    <p className="description">{stateMatterTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {stateMatterTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}
{/* Hooke's Law Section */}
{path.includes('hookslaw') && (
  <div className="section hooke-section">
    <h1 className="title">Hooke’s Law Theory</h1>
    <p className="description">{hookeLawTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {hookeLawTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}
{/* Balance Act Section */}
{path.includes('balancing') && (
  <div className="section balance-section">
    <h1 className="title">Balancing Act Theory</h1>
    <p className="description">{balanceActTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {balanceActTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}
{/* Force Section */}
{path.includes('force') && (
  <div className="section force-section">
    <h1 className="title">Force Theory</h1>
    <p className="description">{forceTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {forceTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}

{/* Glass Slab Section */}
{path.includes('glassslab') && (
  <div className="section glass-section">
    <h1 className="title">Glass Slab Theory</h1>
    <p className="description">{glassSlabTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {glassSlabTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}
{/* Resistance Section */}
{path.includes('resistance') && (
  <div className="section resistance-section">
    <h1 className="title">Resistance Theory</h1>
    <p className="description">{resistanceTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {resistanceTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}
{/* Convex & Concave Section */}
{path.includes('convexconcave') && (
  <div className="section convex-section">
    <h1 className="title">Convex & Concave Theory</h1>
    <p className="description">{convexConcaveTheory.description}</p>

    <h3 className="subtitle">Laws:</h3>
    <ul className="list">
      {convexConcaveTheory.laws.map((law, idx) => (
        <li key={idx} className="list-item">
          <strong>{law.lawName}: </strong>
          {law.description} <br />
          <em>Formula:</em> {law.formula}
        </li>
      ))}
    </ul>
  </div>
)}





      {/* Fallback Message */}
      {/* Fallback Message */}
{!path.includes('chemistry') &&
 !path.includes('gravitation') &&
 !path.includes('acid') &&
 !path.includes('balloanelectricity') && 
 !path.includes('molarity') &&
 !path.includes('density') &&
 !path.includes('energyform') &&
 !path.includes('concentration') &&
!path.includes('pH') &&
  !path.includes('wavestring') &&
!path.includes('springs') &&
!path.includes('statematter') &&
 !path.includes('hookslaw') &&
  !path.includes('balancing') &&
  !path.includes('force') &&
  !path.includes('glassslab') &&
   !path.includes('resistance') &&
    !path.includes('convexconcave') &&(
  <p className="fallback-text">Please select a valid theory section from the menu.</p>
)}

    </div>
  );
}

export default Theory;
