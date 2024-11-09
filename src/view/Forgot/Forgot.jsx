import React, { useState } from 'react';
import '../login/login.css';
import logo from '../../Assets/logo.jpg';
import { FcGoogle } from 'react-icons/fc';
import PasswordToggle from '../hooks/PasswordToggle';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const initialData = {
    email: "",
    password: ""
  };

 
  const [inputData, setInputData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState("");


  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData(prevState => ({ ...prevState, [name]: value }));
  };
  console.log(inputData);

  const handleSubmit = (event) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    event.preventDefault();
    if (!inputData.email) {
      setErrorMessage("Credentials not found");
    }else if(!emailPattern.test(inputData.email)){
      setErrorMessage("Enter email in correct format")
    }
  };

  
  return (
      <form className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="BeatVibe Logo" className="logo" />
            <h1 className='Title-Login'>Virtual Lab</h1>
          </div>
        </header>

        <div className='container'>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className='inputs'>
            <input
              type='email'
              placeholder='Username or Email'
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
            />
        </div>
        <div className='links'>
          <a href="/logIn" className="navigating-link">Get back to login page</a>
        </div>
      </div>

        <button className='submit-button' onClick={handleSubmit}>Send otp</button>
    </form>
  );
};

export default Forgot;
