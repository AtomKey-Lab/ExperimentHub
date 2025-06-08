import React from 'react';
import './gravitation.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Navbar2 from '../../components/navbar/navbar2'; 


function Gravitation() {
  return (
    <div className="gravitation-container">
      <Navbar />
      
      <div className="content-area">
      <Navbar2 
        link="/https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_all.html"
        title="Experiment"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Gravitation;
