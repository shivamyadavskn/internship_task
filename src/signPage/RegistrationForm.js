import React, { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate=useNavigate();

const handleBack = () => {
    navigate("/");
  };

  const handleGetProjectClick = () => {
    navigate("/congratPage");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    handleGetProjectClick();
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail && !validateEmail(newEmail)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const isFormValid = name.trim() !== "" && email.trim() !== "" && !emailError;

  return (
    <>
    <div className="navContainer">
      <div className="navlogo">
        <img src='./uploads/logo.png' alt="not found" className="imgRotate"/>
      </div>
      <div className="subcontainer">
      <i class="fa-regular fa-circle-xmark fontst" onClick={handleBack}/>
      </div>
    </div>
    <div className="registration-container">
      <div className="registration-form">
        <div className="regForm">Registration Form</div>
        <div className="regTitle">Start your success Journey here!</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            className="nameInput"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="nameInput"
            onChange={handleEmailChange}
          />
          {emailError && (
            <div className="error-message"> 
              <i class="fa-sharp fa-solid fa-circle-exclamation icons"></i>
              {" " + emailError}
            </div>
          )}
          <button type="submit" disabled={!isFormValid} className="subBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default RegistrationForm;
