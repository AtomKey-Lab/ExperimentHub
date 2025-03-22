import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../footer/footer';
import { chemistrycart } from "../../config/chemistrycart";
import { Link } from 'react-router-dom';

function ChemistryCard() {
  return (
    <div>
      <Navbar />
      <div className='card-container'>
        {chemistrycart.map((item, index) => (
          <div className='card-body' key={index}>
            <img src={item.image} alt={item.title} className='card-image' />
            <div className='card-text'>
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <button className='card-button'>
                <Link className='card-link' to={`/chemistrydetail/${item.id}`}>
                  {item.buttonText}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ChemistryCard;
