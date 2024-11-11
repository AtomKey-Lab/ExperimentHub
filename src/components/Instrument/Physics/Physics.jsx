import React from 'react'
import './Physics.css'
import Navbar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'


function Physics() {
  return (
    <div>
      <div>
      <Navbar/>
      

      {/* Three cart items outside the container */}
      <h1>Physics<span className='Inst'> Instrument </span>Lab</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img 
            src="https://studiousguy.com/wp-content/uploads/2021/08/Vernier-caliper-e1669110716561.jpg" 
            alt="Item 1" 
            className="lab-image" 
          />
           <h3 className='cart-item-h3'>Vernier caliper</h3>
          <p>Vernier caliper is an amazing measurement tool that can measure length accurately up to 1/10th or 1/100th of a millimeter. For instance, if someone needs to measure the diameter of a wire or the inside and outside dimensions of a hollow tube, it can easily be done with a vernier caliper rather than a meter scale.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://studiousguy.com/wp-content/uploads/2021/08/Screw-gauze.jpg" 
            alt="Item 2" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'>Screw Gauze </h3>
          <p>Screw Gauze, also known as a micrometer screw gauze, is a P-shaped device in a physics lab that is calibrated to measure the thickness of sheets and the diameter of wires or spherical objects with extremely high accuracy. </p>
        </div>
        <div className="cart-item">
          <img 
            src="https://studiousguy.com/wp-content/uploads/2021/08/Concave-lens.jpg" 
            alt="Item 3" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'> Concave Lens</h3>
          <p>A concave lens is a lens that diverges the beam of light which has been passed through it. It is characterized by inside curved lenses either on both or one side of the lens. The images formed from concave lenses are sharp, upright, diminished, and virtual.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://studiousguy.com/wp-content/uploads/2021/08/convex-lens.jpg" 
            alt="Item 4" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'> Convex lenses</h3>
          <p>Convex lenses are the type of lenses that converges the ray of light to form sharp images of the object. Convex lenses are thicker at the center and thin at the edges. When parallel rays of light pass through such lenses, the rays converge and meet at a common point behind them This point is known as a focal point.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://studiousguy.com/wp-content/uploads/2021/08/Prism.jpg" 
            alt="Item 5" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'>Prim</h3>
          <p>A prism is a triangular, 3-dimensional piece of glass or transparent material which is used in a physics laboratory for analyzing and studying the concepts of refraction. When a white ray of light is passed through a prism it refracts and splits into its spectrum of colors (violet, indigo, blue, green, yellow, orange, and red). .</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://studiousguy.com/wp-content/uploads/2021/08/Glass-slab.jpg"
            alt="Item 6" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'>Glass Slab</h3>
          <p>A glass slab is a cuboidal-shaped, 3-dimensional material made of glass and is widely used in physics for pin method experiments and understanding refraction phenomena. It is also used for providing refractive law and measuring refractive index..</p>
        </div>
        <div className="cart-item">
          <img 
            src="data:image/png;base64,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"
            alt="Item 7" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'>Ammeter</h3>
          <p>An Ammeter is a measuring instrument used to find the strength of the current flowing around an electrical circuit when connected in series with the part of the circuit being measured. To measure a device’s current, it must be connected in series to that device.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfydSSSVO5iyCPGeMUpSV_6oSpf_uF93pc2A&s"
            alt="Item 8" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'>Multimeter</h3>
          <p>A multimeter is a device that combines several measurement functions in one unit and can be used to check the conductors, the continuity of the circuit, measuring the voltage in the socket or the battery level of the car. A normal multimeter may possess the abilities to measure voltage, current, and resistance.</p>
        </div>
        <div className="cart-item">
          <img 
            src="https://media.tenor.com/cqiA3CpwCMoAAAAM/physics-magnetic-force.gif"
            alt="Item 6" 
            className="lab-image" 
          />
          <h3 className='cart-item-h3'>Bar Magnets</h3>
          <p>Bar magnets are found in physics laboratories for understanding the concepts of magnets. A bar magnet consists of a north pole and a south pole. When two bar magnets are placed together then like poles repel each other and unlike poles attract each other.</p>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Physics;
