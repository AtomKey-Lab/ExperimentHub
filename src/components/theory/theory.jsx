import React from 'react';
import { useParams } from 'react-router-dom';

import { gravitationTheory, chemistryTheory } from '../../config/theory';

function App() {
  const path = window.location.pathname;

  return (
    <div>
      {path.includes('chemestry') && <h1>Chemistry</h1>}
      {path.includes('gravitation') && <h1>Gravitation</h1>}
      
      <p>This is the main content of the Procedure component.</p>
    </div>
  );
}

export default App;
