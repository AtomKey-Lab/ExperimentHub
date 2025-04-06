import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgot.css';
import logo from '../../Assets/logo.jpg';

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = (event) => {
    event.preventDefault();

    if (!email) {
      setMessage("Please enter your registered email.");
      return;
    }

    // Simulating email reset process (No actual email is sent)
    setMessage("Reset link sent! Check your email.");
    
    setTimeout(() => {
      navigate("/login"); // Redirect to login after showing message
    }, 3000);
  };

  return (
    <div>
      <form className="App-login">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className='Title-Login'>AtomKey Lab</h1>
          </div>
        </header>

        <div className='container-login'>
          {message && <p className="error-message">{message}</p>}

          <div className='inputs'>
            <input
              type='email'
              placeholder='Enter registered email'
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className='submit-button' onClick={handleReset}>Reset Password</button>
          <h4 className='or'>or</h4>
          <a href="/login" className="navigating-link">Back to Log In</a>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
