import React from 'react';
import './App.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { imagesData } from '../../config/appimages';
import Background from '../../components/background/Background';  // Import Background component

function App() {
  return (
    <div>
      <Navbar />
      <div className='App-body'>
     
      <div className="app-body-container">
        
      <div className="app-body-div1">
      <h1 className='home-header'>Welcome To Our Lab</h1>
        <p className='home-para'>
          "Explore science like never before! Dive into interactive simulations, conduct experiments, and understand complex concepts with ease. 
          Our virtual lab offers a hands-on experience in physics and chemistry, designed to enhance your learning journey."
        </p>
      </div>
    </div>
        {/* Add Background Component */}
        <Background />
      </div>

      

      <Footer />
    </div>
  );
}

export default App;