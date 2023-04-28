import React, { useState } from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";
import TwoFactorAuthentication from "./twoFactorAuthentication";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (email && !emailRegex.test(email) && !password.includes("@") ) {
    //   setEmailError("Please enter a valid email address.");
    //   setPasswordError("Please enter a password.");
    //   return;
    // }
    // if (!email && !password ) {
    //   setEmailError("Please enter an email address.");
    //   setPasswordError("Please enter a password.");
    //   return;
    // }
    // if (!email && password ) {
    //   setEmailError("Please enter an email address.");
    //   return;
    // }
    // if(!password){
    //      setPasswordError("Please enter a password.");
    //   return;
    // }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setEmailError(email ? "" : "Please enter an email address.");
      setPasswordError(password ? "" : "Please enter a password.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setPasswordError("");

    // code for handling form submission

    // set isLoggedIn to true if form submission is successful
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <TwoFactorAuthentication />;
  }
  return (
    <div className="main-div login-form">
      <div className="panel">
        <h2>User Login</h2>
        <p>Please enter your email / username and password</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input
            name="emailAddress"
            placeholder="Email Address / Username"
            type="text"
            id="emailAddress"
            className="form-control"
            onChange={handleEmailChange}
          />
          {emailError && (
            <span style={{ color: "red" }} className="error-message">
              {emailError}
            </span>
          )}
        </div>
        <div className="form-group">
          <input
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            className="form-control"
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <span style={{ color: "white" }} className="error-message">
              {passwordError}
            </span>
          )}
        </div>
        <div className="forgot">
          <Link to="/forgotPassword" style={{ height: "20px" }}>
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn btn-primary-default"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;



