import React, { useState , useContext} from "react";
import "./forgotPassword.css";
import AuthContext from "../../../authContext/authContext";
import { Link } from "react-router-dom";
function ForgotPasswordForm({ onSubmit, onCancel }) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const myContext = useContext(AuthContext);
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError("");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email) {
        setEmailError("Need an email address here.");
        return;
      }
      if ( !email.includes("@")) {
        setEmailError("is this email address correct ?");
        return;
      }
      onSubmit(email);
    };
  
    const handleCancel = (e) => {
      e.preventDefault();
      onCancel();
    };
  
    return (
      <div className="forgot-password-form-container">
        <div className="page-header">
          <h4>Recover Password</h4>
        </div>
        <div className="panel">
          <p>
            Enter your email address below to receive a link to reset your
            password.
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="control-label">Email Address</label>
            <input
              name="emailAddress"
              placeholder="Email Address"
              type="email"
              id="emailAddress"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <button type="submit" className="recover-password">
            Recover Password
          </button>
          <div className="cancel">
            <Link to="/">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    );
  }

  export default ForgotPasswordForm;