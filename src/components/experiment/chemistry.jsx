import React, { useState } from 'react';
import './experiment.css';

function Experiment() {
  const [temperature, setTemperature] = useState(25);
  const [catalyst, setCatalyst] = useState('neutral');
  const [reactionState, setReactionState] = useState('None');
  const [experimentStep, setExperimentStep] = useState(1);
  const [resinType, setResinType] = useState('Phenol-formaldehyde');
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [instrumentAnimation, setInstrumentAnimation] = useState('');

  const instruments = [
    { name: 'Beaker', animation: 'picking-up' },
    { name: 'Dropper', animation: 'pouring' },
    { name: 'Heater', animation: '' },
    { name: 'Thermometer', animation: '' }
  ];

  const handleInstrumentSelect = (instrument) => {
    setSelectedInstrument(instrument.name);
    setInstrumentAnimation(instrument.animation);
  };

  const handleNextStep = () => {
    if (!selectedInstrument) {
      alert("Please select an instrument to proceed!");
      return;
    }

    if (experimentStep === 1 && selectedInstrument === 'Beaker') {
      setInstrumentAnimation('picking-up');
    } else if (experimentStep === 2 && selectedInstrument === 'Dropper') {
      setInstrumentAnimation('pouring');
    }

    setExperimentStep(experimentStep + 1);
    setTimeout(() => setInstrumentAnimation(''), 2000); // Reset animation
  };

  return (
    <div className="experiment">
      <h1>Virtual Chemistry Experiment</h1>
      
      {/* Instrument Selection */}
      <div className="instrument-panel">
        <h2>Instruments</h2>
        {instruments.map((instrument) => (
          <button
            key={instrument.name}
            onClick={() => handleInstrumentSelect(instrument)}
            className={selectedInstrument === instrument.name ? "selected" : ""}
          >
            {instrument.name}
          </button>
        ))}
        {selectedInstrument && <p>Selected Instrument: {selectedInstrument}</p>}
      </div>

      {/* Reaction Container with Animation */}
      <div className="reaction-container">
        <div
          className={`reaction ${selectedInstrument === 'Beaker' && instrumentAnimation === 'picking-up' ? 'beaker picking-up' : ''} 
          ${selectedInstrument === 'Dropper' && instrumentAnimation === 'pouring' ? 'beaker pouring' : ''}`}
          style={{ backgroundColor: experimentStep >= 3 ? '#ff66b2' : '#bbb' }}
        >
          <span>{reactionState}</span>
        </div>
      </div>

      {/* Experiment Steps */}
      <div className="experiment-steps">
        <h2>Steps for {resinType} Experiment</h2>
        <ul>
          {experimentStep === 1 && <li>Step 1: Take 2 grams of phenol and 10 ml of glacial acetic acid.</li>}
          {experimentStep === 2 && <li>Step 2: Add 5 ml of 40% formaldehyde solution.</li>}
          {experimentStep === 3 && <li>Step 3: Add 2 ml of concentrated HCl slowly while heating.</li>}
          {experimentStep === 4 && <li>Step 4: Heat and observe the reaction.</li>}
        </ul>
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default Experiment;
