import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../Assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    school: "",
    role: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    if (!inputData.name || !inputData.email || !inputData.password || !inputData.school || !inputData.role) {
      setErrorMessage("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some(
      user => user.email.toLowerCase().trim() === inputData.email.toLowerCase().trim()
    );

    if (emailExists) {
      toast.warning("Email already registered. Redirecting to Login...");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    const newUser = {
      name: inputData.name,
      email: inputData.email.toLowerCase().trim(),
      password: inputData.password,
      school: inputData.school,
      role: inputData.role,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Account created successfully! Redirecting to Login...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div>
      <form className="App-login">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="Title-Login">AtomKey Lab</h1>
          </div>
        </header>

        <div className="container-login">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="inputs">
            <input type="text" placeholder="Full Name" name="name" value={inputData.name} onChange={handleInputChange} required />
            <input type="email" placeholder="Email" name="email" value={inputData.email} onChange={handleInputChange} required />
            <input type="password" placeholder="Password (min 6 chars)" name="password" value={inputData.password} onChange={handleInputChange} minLength="6" required />
            <input type="text" placeholder="School Name" name="school" value={inputData.school} onChange={handleInputChange} required />
            <select name="role" value={inputData.role} onChange={handleInputChange} required>
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <h4 className="or">or</h4>
          <a href="/login" className="navigating-link">Already have an account? Log In</a>
        </div>
        <button className="submit-button" onClick={handleSignUp}>Sign Up</button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default SignUp;
