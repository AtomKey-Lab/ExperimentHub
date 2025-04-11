import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { cardData } from "../../config/simulationCardData";
import Background from '../../components/background/Background';

function Card({ category, searchTerm }) {
  // Filter the card data based on selected category and searchTerm
  const filteredData = cardData.filter((item) => {
    const matchesCategory = item.category === category;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Background />
      <div className='card-container'>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className='card-body' key={index}>
              <img src={item.image} alt={item.title} className='card-image' />
              <div className='card-text'>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <button className='card-button'>
                  <Link className='card-link' to={item.link}>{item.buttonText}</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}>
            No simulations found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
