import React from 'react'
import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';
import Navbar2 from '../../../components/navbar/navbar2'; 

function Electrolysis() {
  return (
    <div className="gravitation-container">
      <Navbar />
      

      <div className="content-area">
        <Navbar2 
        link="https://phet.colorado.edu/sims/cheerpj/sugar-and-salt-solutions/latest/sugar-and-salt-solutions.html?simulation=sugar-and-salt-solutions"
        title="Experiment "
        />
        
      </div>

      <Footer />
      
    </div>
  )
}

export default Electrolysis
