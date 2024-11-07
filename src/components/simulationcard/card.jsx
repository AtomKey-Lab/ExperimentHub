import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import {cardData} from "../../config/simulationCardData";

function Card() {
  return (
    <div className='card-container'>
      {cardData.map((item, index) => (
        <div className='card-body' key={index}>
          <img src={item.image} alt={item.title} className='card-image' />
          <div className='card-text'>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <button className='card-button'><Link className='card-link' to={item.link }>{item.buttonText}</Link></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
