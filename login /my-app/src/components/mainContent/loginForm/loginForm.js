// import React, { useState } from "react";
// import "./loginForm.css";
// import ForgotPasswordForm from "./forgotPassword";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email && !email.includes("@") && !password) {
//       setEmailError("Please enter an email address.");
//       setPasswordError("Please enter a password.");
//       return;
//     }

//     if (!email || !email.includes("@")) {
//       setEmailError("Please enter a valid email address.");
//       return;
//     }

//     if (!password) {
//       setPasswordError("Please enter a password.");
//       return;
//     }

//     // code for handling form submission

//     // set isLoggedIn to true if form submission is successful
//     setIsLoggedIn(true);
//   };

//   const handleForgotPasswordClick = (e) => {
//     e.preventDefault();
//     setShowForgotPasswordForm(true);
//   };

//   const handleCancelForgotPassword = () => {
//     setShowForgotPasswordForm(false);
//   };

//   return (
//     <div className="login-form-container">
//       {!showForgotPasswordForm && !isLoggedIn && (
//         <div className="panel">
//           <h2>USER LOGIN</h2>
//           <p>Please enter your email / username and password</p>
//         </div>
//       )}
//       {!showForgotPasswordForm && !isLoggedIn ? (
//         <form onSubmit={handleSubmit} noValidate>
//           <div className="form-group">
//             <input
//               name="emailAddress"
//               placeholder="Email Address / Username"
//               type="text"
//               id="emailAddress"
//               className="form-control"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             {emailError && <span className="error-message">{emailError}</span>}
//           </div>
//           <div className="form-group">
//             <input
//               name="password"
//               placeholder="Password"
//               type="password"
//               id="password"
//               className="form-control"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             {passwordError && (
//               <span className="error-message">{passwordError}</span>
//             )}
//           </div>
//           <div className="forgot">
//             <a href="#" onClick={handleForgotPasswordClick}>
//               Forgot password?
//             </a>
//           </div>
//           <button type="submit" className="login">
//             LOGIN
//           </button>
//         </form>
//       ) : showForgotPasswordForm ? (
//         <ForgotPasswordForm onCancel={handleCancelForgotPassword} />
//       ) : (
//         <div className="panel">
//           <h2>TWO-FACTOR AUTHENTICATION</h2>
//           <p>Check email for code</p>
//           <div className="form-group">
//             <input
//               name="emailAddress"
//               placeholder="Enter code found in new email"
//               type="text"
//               id="emailAddress"
//               className="form-control"
//               // value={email}
//               onChange={handleEmailChange}
//             />
//             {emailError && <span className="error-message">{emailError}</span>}
//           </div>
//           <div className="getCode">
//             <a href="#">Get new Code?</a>
//           </div>
//           <div className="signIn">
//             <a href="#">Sign in again?</a>
//           </div>
//           <button type="submit" className="submit">
//             SUBMIT
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginForm;



import React, { useState } from "react";
import "./loginForm.css";
import ForgotPasswordForm from "./forgotPassword";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

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

    if (!email && !email.includes("@") && !password) {
      setEmailError("Please enter an email address.");
      setPasswordError("Please enter a password.");
      return;
    }

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      return;
    }

    // code for handling form submission
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPasswordForm(true);
  };

  const handleCancelForgotPassword = () => {
    setShowForgotPasswordForm(false);
  };

  return (
    <div className="login-form-container">
      {!showForgotPasswordForm && (
        <div className="panel">
          <h2>USER LOGIN</h2>
          <p>Please enter your email / username and password</p>
        </div>
      )}
      {!showForgotPasswordForm ? (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              name="emailAddress"
              placeholder="Email Address / Username"
              type="text"
              id="emailAddress"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="form-group">
            <input
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <span className="error-message">{passwordError}</span>
            )}
          </div>
          <div className="forgot">
            <a href="#" onClick={handleForgotPasswordClick}>
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login">
            LOGIN
          </button>
        </form>
      ) : (
        <ForgotPasswordForm onCancel={handleCancelForgotPassword} />
      )}
    </div>
  );
}
export default LoginForm;
