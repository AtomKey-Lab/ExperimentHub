import React, { useState, useEffect } from 'react';
import './simulation.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Loading from "./../../components/loading/loading"
import Card from "./../../components/simulationcard/card"
function Simulation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Card/>

      <div className='simulation-body'>
      </div>
      <Footer />
    </div>
  );
}

export default Simulation;
