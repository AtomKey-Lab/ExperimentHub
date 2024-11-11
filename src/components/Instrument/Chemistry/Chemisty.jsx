import React from 'react'
import './Chemistry.css'
import Navbar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'


function Chemisty() {
  return (
    <div>
      <div>
      <Navbar/>
      

      {/* Three cart items outside the container */}
      <h1>Chemistry<span className='Inst'> Instrument </span>Lab</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/Bunsen-Burner-diagram-768x473.png" 
            alt="Item 1" 
            className="lab-image" 
          />
           <h3 className='cart-item-h3 '>Bunsen Burner</h3>
          <p className='cart-item-p'>A Bunsen burner is a common piece of laboratory equipment that produces a single open gas flame, which is used for heating, sterilizing, and combustion. The burner consists of a metal tube connected to a gas source with adjustable airflow through the tube, which allows control of the flame’s size, shape, and intensity.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/Erlenmeyer-Flask-diagram-768x473.png" 
            alt="Item 2" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '>Erlenmeyer Flask </h3>
          <p className='cart-item-p'>An Erlenmeyer flask is a conical shaped container with a flat bottom and a cylindrical neck. The narrow neck of the flask helps to prevent the escape of fumes and vapors, while the wide base helps in stability. The flask is used for mixing, heating, and holding liquids.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/Graduated-Cylinder-diagram-768x473.png" 
            alt="Item 3" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '> Graduated Cylinder</h3>
          <p className='cart-item-p'>A graduated cylinder is a common piece of laboratory glassware used to measure the volume of liquids. It has a cylindrical shape with a narrow neck, and it comes in different sizes, from small to large. Graduated cylinders are usually made of glass or plastic, and they have precise measurements marked on their surfaces.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/Test-Tubes-diagram-768x473.png" 
            alt="Item 4" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '> Test Tubes</h3>
          <p className='cart-item-p'>Test tubes are cylindrical, thin-walled glass or plastic containers with one open end and one rounded or conical end. They are used to hold, mix, and heat small quantities of liquid or solid samples. Test tubes come in different sizes, and they can be used with a variety of accessories, such as rubber stoppers or test tube racks.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/thermometer-diagram-768x473.png" 
            alt="Item 5" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '>Thermometer</h3>
          <p className='cart-item-p'>A thermometer is an instrument used to measure temperature. In the laboratory, thermometers are usually used to measure the temperature of liquids or gases. There are different types of thermometers, including digital and mercury thermometers, and they come in various sizes.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/Hot-Plate-diagram-768x473.png"
            alt="Item 6" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '>Hot Plate</h3>
          <p className='cart-item-p'>A hot plate is a piece of laboratory equipment that is used to heat substances in the laboratory. It is a flat, electrically powered metal plate that is capable of reaching high temperatures. Hot plates are used to heat liquids, solids, and gases, and they can be used in combination with various types of containers.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/02/The-Separatory-Funnel-diagram-768x473.png"
            alt="Item 7" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '>Separatory Funnel</h3>
          <p className='cart-item-p'>A separatory funnel, also known as a separation funnel, is a laboratory apparatus used to separate immiscible liquids. It consists of a funnel with a stopcock valve at the bottom and is used to separate liquids based on their densities. Separatory funnels are commonly used in organic chemistry for extractions and purifications.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://microbenotes.com/wp-content/uploads/2022/11/Pipette-Principle-Parts-Types-Procedure-Uses-Examples.jpg"
            alt="Item 8" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '>Pipette</h3>
          <p className='cart-item-p'>A pipette is a laboratory tool used to measure and transfer small volumes of liquid. It is a narrow tube made of glass or plastic with a bulbous end. The pipette’s bulb is used to draw liquid up into the tube, and the narrow tip is used to dispense precise amounts of liquid.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://themasterchemistry.com/wp-content/uploads/2023/03/calorimeter-diagram-768x473.png"
            alt="Item 6" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3 '>Hot Plate</h3>
          <p className='cart-item-p'>The instrument that are used to measure the heat absorbed or released during a chemical reaction is called calorimeter.</p>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Chemisty
