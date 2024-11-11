import React, { useState } from 'react';
import './logbook.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Background from '../../components/background/Background'; // Add this import

function App() {
  const [logEntries, setLogEntries] = useState([]);

  const addLogEntry = (entry) => {
    setLogEntries([...logEntries, entry]);
  };
  
  return (
    <div className="App">
      <Background /> {/* Add Background component here */}
      <Navbar />
   
      <LogEntryForm onAddEntry={addLogEntry} />
      <LogEntryList entries={logEntries} />
      <Footer />
    </div>
  );
}

const LogEntryForm = ({ onAddEntry }) => {
  const [title, setTitle] = useState('');
  const [objective, setObjective] = useState('');
  const [materials, setMaterials] = useState('');
  const [setup, setSetup] = useState('');
  const [steps, setSteps] = useState('');
  const [observations, setObservations] = useState('');
  const [data, setData] = useState('');
  const [calculations, setCalculations] = useState('');
  const [summary, setSummary] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry({
      title,
      date: new Date().toLocaleString(),
      objective,
      materials,
      setup,
      steps,
      observations,
      data,
      calculations,
      summary,
      conclusion,
      reflection,
    });
    setTitle('');
    setObjective('');
    setMaterials('');
    setSetup('');
    setSteps('');
    setObservations('');
    setData('');
    setCalculations('');
    setSummary('');
    setConclusion('');
    setReflection('');
  };

  return (
    <div className="logBook-body">
      <div className="log-container">
        <form onSubmit={handleSubmit} className="log-form">
        <h1 className='Logbook-title'>Virtual Lab Log Book</h1>
          <h3>Experiment Details</h3>
          <input type="text" placeholder="Experiment Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea placeholder="Objective" value={objective} onChange={(e) => setObjective(e.target.value)} required />
          
          <h3>Materials and Setup</h3>
          <textarea placeholder="List of Materials" value={materials} onChange={(e) => setMaterials(e.target.value)} />
          <textarea placeholder="Setup Description" value={setup} onChange={(e) => setSetup(e.target.value)} />

          <h3>Procedure</h3>
          <textarea placeholder="Step-by-Step Instructions" value={steps} onChange={(e) => setSteps(e.target.value)} />

          <h3>Observation and Data Collection</h3>
          <textarea placeholder="Observations" value={observations} onChange={(e) => setObservations(e.target.value)} />
          <textarea placeholder="Data Table / Measurements" value={data} onChange={(e) => setData(e.target.value)} />

          <h3>Analysis</h3>
          <textarea placeholder="Calculations" value={calculations} onChange={(e) => setCalculations(e.target.value)} />
          <textarea placeholder="Summary of Findings" value={summary} onChange={(e) => setSummary(e.target.value)} />

          <h3>Conclusion and Reflection</h3>
          <textarea placeholder="Result Summary" value={conclusion} onChange={(e) => setConclusion(e.target.value)} />
          <textarea placeholder="Reflection and Improvements" value={reflection} onChange={(e) => setReflection(e.target.value)} />

          <button type="submit" className="button-logBook">Save Log Entry</button>
        </form>
      </div>
    </div>
  );
};

const LogEntryList = ({ entries }) => (
  <div className="log-entries">
    <h3>Saved Log Entries</h3>
    {entries.map((entry, index) => (
      <LogEntry key={index} entry={entry} />
    ))}
  </div>
);

const LogEntry = ({ entry }) => (
  <div className="log-container">
    <div className="log-entry">
      <h4>{entry.title} <span>({entry.date})</span></h4>
      <p><strong>Objective:</strong> {entry.objective}</p>
      <p><strong>Materials:</strong> {entry.materials}</p>
      <p><strong>Setup:</strong> {entry.setup}</p>
      <p><strong>Steps:</strong> {entry.steps}</p>
      <p><strong>Observations:</strong> {entry.observations}</p>
      <p><strong>Data:</strong> {entry.data}</p>
      <p><strong>Calculations:</strong> {entry.calculations}</p>
      <p><strong>Summary of Findings:</strong> {entry.summary}</p>
      <p><strong>Conclusion:</strong> {entry.conclusion}</p>
      <p><strong>Reflection:</strong> {entry.reflection}</p>
    </div>
  </div>
);

export default App;