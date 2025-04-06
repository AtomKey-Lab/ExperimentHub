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
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    if (!inputData.name || !inputData.email || !inputData.password || !inputData.school || !inputData.role) {
      setErrorMessage("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail === inputData.email.toLowerCase().trim()) {
      toast.warning("You already have an account. Redirecting to Log In...");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      localStorage.setItem("userName", inputData.name);
      localStorage.setItem("userEmail", inputData.email.toLowerCase().trim()); // Lowercase for consistency
      localStorage.setItem("userPassword", inputData.password);
      localStorage.setItem("userSchool", inputData.school);
      localStorage.setItem("userRole", inputData.role);
      localStorage.setItem("userExists", "true");

      toast.success("Account created successfully! Redirecting to Log In...");
      setTimeout(() => navigate("/login"), 2000);
    }
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
            <input type="text" placeholder="Full Name" name="name" value={inputData.name} onChange={handleInputChange} />
            <input type="email" placeholder="Email" name="email" value={inputData.email} onChange={handleInputChange} />
            <input type="password" placeholder="Password" name="password" value={inputData.password} onChange={handleInputChange} />
            <input type="text" placeholder="School Name" name="school" value={inputData.school} onChange={handleInputChange} />
            <select name="role" value={inputData.role} onChange={handleInputChange}>
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

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default SignUp;
