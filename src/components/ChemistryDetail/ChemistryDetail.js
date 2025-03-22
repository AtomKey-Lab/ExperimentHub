import React from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Navbar2 from '../../components/navbar/navbar2';
import { chemistrycart } from "../../config/chemistrycart"; 



function ChemistryDetail() {
  const { id } = useParams(); // Get ID from URL
  const experiment = chemistrycart.find(item => item.id === Number(id)); // Ensure ID is a number

  if (!experiment) {
    return <h1>Experiment Not Found!</h1>;
  }

  return (
    <div className="gravitation-container">
      <Navbar />

      <div className="content-area">
        <h1>{experiment.title}</h1>
       

        <Navbar2 
          link="https://chemistry-experiment-kappa.vercel.app/"
          title="Experiment"
        />
      </div>

      <Footer />
    </div>
  );
}

export default ChemistryDetail;
