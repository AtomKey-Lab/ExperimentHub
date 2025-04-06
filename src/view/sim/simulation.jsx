import React, { useState, useEffect } from 'react';
import './simulation.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Loading from "./../../components/loading/loading";
import Card from "./../../components/simulationcard/card";

function Simulation() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Chemistry"); // Default category

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

      {/* Category Buttons */}
      <div className="category-buttons">
  <button onClick={() => setSelectedCategory("Chemistry")}>Chemistry</button>
  <button onClick={() => setSelectedCategory("Physics")}>Physics</button>
</div>


      {/* Pass the selected category to Card component */}
      <Card category={selectedCategory} />

      <Footer />
    </div>
  );
}

export default Simulation;
