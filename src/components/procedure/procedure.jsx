import React from 'react';

function Procedure() {
  // Get the current path from the URL
  const path = window.location.pathname;

  return (
    <div>
      {/* Conditional rendering based on the URL */}
      {path.includes('chemistry') && <h1>Chemistry</h1>}
      {path.includes('gravitation') && <h1>Gravitation</h1>}
      
      <p>This is the main content of the Procedure component.</p>
    </div>
  );
}

export default Procedure;
