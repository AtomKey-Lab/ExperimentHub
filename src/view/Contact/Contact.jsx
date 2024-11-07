import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>
        <h1>Contact Us</h1>
        <form>
            <label>First Name-</label>
            <input type='text' required placeholder='Enter Your Name'></input>
            <input type='email' placeholder='Enter your email'></input>
            <input type='number' placeholder='Enter your number'></input>
            <input type='text' placeholder='Enter your message'></input>
        </form>
      
    </div>
  )
}

export default Contact
