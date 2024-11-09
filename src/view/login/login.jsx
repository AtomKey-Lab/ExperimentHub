import React, { useState } from 'react';
import './login.css';
import logo from '../../Assets/logo.jpg';
import { FcGoogle } from 'react-icons/fc';
import PasswordToggle from '../hooks/PasswordToggle';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const initialData = {
    email: "",
    password: ""
  };

  const [passwordInputType, toggleIcon] = PasswordToggle();
  const [inputData, setInputData] = useState(initialData);
  const [msg, setMsg] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!inputData.email || !inputData.password) {
      setErrorMessage("Credentials not found");
    } else if (!emailPattern.test(inputData.email)) {
      setErrorMessage("Enter email in correct format");
    } else if (!passwordPattern.test(inputData.password)) {
      setErrorMessage("Password must contain 1 uppercase, 1 lowercase, 1 digit, 1 special character, and be exactly 8 characters long.");
    } else {
      setErrorMessage("");
      setMsg(true);
      alert(`${inputData.email} logged in successfully!`);
      setTimeout(() => {
        setMsg(false);
      }, 2000);

      navigate("/");
    }
  };

  return (
    <div>
      <form className="App-login">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="BeatVibe Logo" className="logo" />
            <h1 className='Title-Login'>Virtual Lab</h1>
          </div>
        </header>

        <div className='container-login'>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          
          <div className='inputs'>
            <input
              type='email'
              placeholder='Username or Email'
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
            />
            <div className='password-container'>
              <input
                className="passwordinput"
                type={passwordInputType}
                placeholder='Password'
                name="password"
                maxLength={12}
                value={inputData.password}
                onChange={handleInputChange}
              />
              <span className="password-toggle-icon">
                {toggleIcon}
              </span>
            </div>
          </div>

          <div className='links'>
            <a href="/forgot" className="navigating-link">Forgot Password?</a>
            <h4 className='or1'>or</h4>
            <a href="/SignUp" className="create-account">Create Account</a>
          </div>
        </div>

        <button className='submit-button' onClick={handleSubmit}>Log In</button>
        <h4 className='or'>or</h4>
        <button className='google-button'>
          <FcGoogle className="google-icon" />
          Log In with Google
        </button>
      </form>
    </div>
  );
};

export default LogIn;
