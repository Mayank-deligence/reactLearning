import { useState } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.css";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessage("Need an email address here.");
    } if (email && !email.includes("@")) {
      setErrorMessage("Is this email address correct.");
    }else {
      // send password reset link
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h4 className="page-header">Recover Password</h4>
        <div role="alert" className="alert alert-info">
          Enter your email address below to receive a link to reset your password.
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="control-label">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
            />
            {errorMessage && <p style={{color:'red'}} className="error">{errorMessage}</p>}
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Recover Password
          </button>
          <div>
            <Link to="/">
              <p>Back to Login.</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
