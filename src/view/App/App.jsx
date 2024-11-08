import React from 'react'
import './App.css'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import {imagesData} from '../../config/appimages'

function App() {
  return (
    <div>
      <Navbar />
      <div className='App-body'>
        <div className='app-body-div1'>
          <h1>Explore interactive science experiments in our Virtual Lab!</h1>

        </div>
        <div>
          <div className="App-background">
          </div>
        </div>
      </div>

      <h1 className='App-h1'>What is virtual lab ?</h1>
      <div className='App-images'>
        {
          imagesData.map((item, index) => (
            <div key={index} className='App-div-container'>
              <img src={item.img} alt="" className='App-img' />
              <p>{item.description}</p>
            </div>
          ))
        }
      
      </div>
      <Footer />
    </div>
  )
}

export default App
