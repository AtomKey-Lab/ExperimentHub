import React, { useState } from 'react';
import './login.css';
import logo from '../../Assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import PasswordToggle from '../hooks/PasswordToggle';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  const [passwordInputType, toggleIcon] = PasswordToggle();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      user => user.email.toLowerCase().trim() === inputData.email.toLowerCase().trim()
    );

    if (!inputData.email || !inputData.password) {
      setErrorMessage("Credentials not found");
      toast.error("Credentials not found");
    } else if (!emailPattern.test(inputData.email)) {
      setErrorMessage("Enter email in correct format");
      toast.error("Enter email in correct format");
    } else if (inputData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
    } else if (!foundUser) {
      setErrorMessage("Email not found");
      toast.error("Email not found");
    } else if (foundUser.password !== inputData.password) {
      setErrorMessage("Incorrect password");
      toast.error("Incorrect password");
    } else {
      setErrorMessage("");
      toast.success(`${foundUser.name} logged in successfully!`);

      // ✅ Store login info
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", foundUser.email);
      localStorage.setItem("userName", foundUser.name || "User");

      // ✅ Dispatch custom event so Header can update
      window.dispatchEvent(new Event("loginStatusChanged"));

      // ✅ Redirect after short delay
      setTimeout(() => navigate("/"), 2000);
    }
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
                value={inputData.password}
                onChange={handleInputChange}
              />
              <span className="password-toggle-icon">{toggleIcon}</span>
            </div>
          </div>

          <div className='links'>
            <a href="/forgot" className="navigating-link">Forgot Password?</a>
            <h4 className='or1'>or</h4>
            <a href="/SignUp" className="create-account">Create Account</a>
          </div>
        </div>

        <button className='submit-button' onClick={handleSubmit}>Log In</button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default LogIn;
