import React from 'react';
import './chemistry.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Navbar2 from '../../components/navbar/navbar2'; 


function Gravitation() {
  return (
    <div className="gravitation-container">
      <Navbar />
      

      <div className="content-area">
        <Navbar2 
        link="https://chemistry-experiment-kappa.vercel.app/"
        title="Experiment"
        />
        
      </div>

      <Footer />
      
    </div>
  );
}

export default Gravitation;
