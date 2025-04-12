import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './logbook.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Background from '../../components/background/Background';
import ChatBot from '../../components/ChatBot/ChatBot';

const App = () => {
    const [chatOpen, setChatOpen] = useState(false);
  
    const toggleChat = () => {
      setChatOpen(!chatOpen);
    };
  
  return (
    <div className="App">
      <Background />
      <Navbar />
      <LogEntryForm />
      <Footer />
      <div 
        className={`chat-button ${chatOpen ? 'active' : ''}`} 
        onClick={toggleChat}
      >
        {chatOpen ? 
          <svg className="close-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          :
          <svg className="chat-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
          </svg>
        }
      </div>

      {/* ChatBot Sidebar */}
      <div className={`chat-sidebar ${chatOpen ? 'open' : ''}`}>
        <ChatBot />
      </div>
 
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

const LogEntryForm = () => {
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

    const newEntry = {
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
    };

    // Retrieve existing entries from localStorage
    const savedEntries = JSON.parse(localStorage.getItem("logEntries")) || [];
    
    // Add the new entry to the list
    savedEntries.push(newEntry);

    // Save updated list back to localStorage
    localStorage.setItem("logEntries", JSON.stringify(savedEntries));

    // Show toast notification
    toast.success("Log entry saved successfully!");

    // Clear form fields
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
          <h1 className="Logbook-title">Virtual Lab Log Book</h1>
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

export default App;
