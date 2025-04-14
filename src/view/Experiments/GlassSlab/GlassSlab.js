import React from 'react'
import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';
import Navbar2 from '../../../components/navbar/navbar2'; 


function GlassSlab() {
  return (
    <div className="gravitation-container">
      <Navbar />
      

      <div className="content-area">
        <Navbar2 
        link="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html"
        title="Experiment "
        />
        
      </div>

      <Footer />
      
    </div>
  )
}

export default GlassSlab
