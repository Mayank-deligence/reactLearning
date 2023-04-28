import React ,{useState}from "react";
import { Link  } from "react-router-dom";
import Login from "./loginForm";
function TwoFactorAuthentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");



  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setCodeError("");
  };
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (!code) {
          setCodeError("Please enter authentication code here.");
          return;
        }

        setIsLoggedIn(false);
    }
    if (!isLoggedIn) {
      return <Login />;
    }
  return (
      <div className="main-div login-form">
        <div className="panel">
          <h2>Two-factor authentication</h2>
          <p>Check email for code.</p>
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              required
              name="code"
              placeholder="Enter code found in new email"
              type="text"
              id="code"
              className="form-control"
              onChange={handleCodeChange}
            />
            {codeError && (
            <span style={{ color: "red" }} className="error-message">
              {codeError}
            </span>
          )}
          </div>
          <div className="forgot">
            <Link >Get new code?</Link>
            <br />
            <Link onClick={() => setIsLoggedIn(false)}>Sign in again?</Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn btn-primary-default"
          >
            Submit
          </button>
        </form>
      </div>
  );
}

export default TwoFactorAuthentication;
