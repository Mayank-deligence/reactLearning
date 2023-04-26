import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();













// may be useful

// import React, { useState } from "react";
// import "./loginForm.css";
// import ForgotPasswordForm from "./forgotPassword";
// import contentImage from "../../../images/banner-1.jpg";

// function LoginForm({ showContentImage, onForgotPassword }) {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

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

//     if(!email && !email.includes("@") && !password){
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
//   };

//   const handleForgotPasswordClick = (e) => {
//     e.preventDefault();
//     setShowForgotPasswordForm(true);
//     onForgotPassword();
//   };

//   const handleCancelForgotPassword = () => {
//     setShowForgotPasswordForm(false);
//   };

//   return (
//     <div className="login-form-container">
//       {!showForgotPasswordForm && (
//         <div className="panel">
//           <h2>User Login</h2>
//           <p>Please enter your email / username and password</p>
//         </div>
//       )}
//       {!showForgotPasswordForm ? (
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
//              {passwordError && <span className="error-message">{passwordError}</span>}
//           </div>
//           <div className="forgot">
//             <a href="#" onClick={handleForgotPasswordClick}>
//               Forgot password?
//             </a>
//           </div>
//           <button type="submit" className="login">
//             Login
//           </button>
//         </form>
//       ) : (
//         <ForgotPasswordForm onCancel={handleCancelForgotPassword} />
//       )}
//       {showContentImage && (
//         <div className="content-container">
//           <div className="image-container">
//             <img src={contentImage} alt="another " />
//           </div>
//           <LoginForm showContentImage={false} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginForm;


// import React, { useState } from "react";
// import "./loginForm.css";
// import ForgotPasswordForm from "./forgotPassword";
// import contentImage from "../../../images/banner-1.jpg";


// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

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
//   };

//   const handleForgotPasswordClick = (e) => {
//     e.preventDefault();
//     setShowForgotPasswordForm(true);
//   };

//   const handleCancelForgotPassword = () => {
//     setShowForgotPasswordForm(false);
//   };

//   return (
//     <div className="main-content">
//       <div className="row">
//         <div className="col-md-7">
//           <div className="home-banner h-100 d-flex align-items-center justify-content-center">
//             <img src={contentImage} alt="Banner" />
//           </div>
//         </div>
//         <div className="col-md-5">
//           <div className="main-div login-form">
//             {!showForgotPasswordForm && (
//               <div className="panel">
//                 <h2>User Login</h2>
//                 <p>Please enter your email / username and password</p>
//               </div>
//             )}
//             {!showForgotPasswordForm ? (
//               <form onSubmit={handleSubmit} noValidate>
//                 <div className="form-group">
//                   <input
//                     name="emailAddress"
//                     placeholder="Email Address / Username"
//                     type="text"
//                     id="emailAddress"
//                     className="form-control"
//                     value={email}
//                     onChange={handleEmailChange}
//                   />
//                   {emailError && (
//                     <span className="error-message">{emailError}</span>
//                   )}
//                 </div>
//                 <div className="form-group">
//                   <input
//                     name="password"
//                     placeholder="Password"
//                     type="password"
//                     id="password"
//                     className="form-control"
//                     value={password}
//                     onChange={handlePasswordChange}
//                   />
//                   {passwordError && (
//                     <span className="error-message">{passwordError}</span>
//                   )}
//                 </div>
//                 <div className="forgot">
//                   <a href="#" onClick={handleForgotPasswordClick}>
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button type="submit" className="btn btn-primary btn btn-primary-default">
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <ForgotPasswordForm onCancel={handleCancelForgotPassword} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;