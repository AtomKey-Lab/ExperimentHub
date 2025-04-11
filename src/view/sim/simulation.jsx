import React, { useState, useEffect } from 'react';
import './simulation.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Loading from '../../components/loading/loading';
import Card from '../../components/simulationcard/card';

function Simulation() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Chemistry");
  const [searchTerm, setSearchTerm] = useState(""); // Search input

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
        <button
          onClick={() => setSelectedCategory("Chemistry")}
          className={selectedCategory === "Chemistry" ? "active" : ""}
        >
          Chemistry
        </button>
        <button
          onClick={() => setSelectedCategory("Physics")}
          className={selectedCategory === "Physics" ? "active" : ""}
        >
          Physics
        </button>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search simulations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pass category and searchTerm to Card */}
      <Card category={selectedCategory} searchTerm={searchTerm} />

      <Footer />
    </div>
  );
}

export default Simulation;
