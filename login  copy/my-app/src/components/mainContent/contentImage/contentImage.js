// import contentImage from "../../../images/banner-1.jpg";

// import LoginForm from "../loginForm/loginForm";
// const ContentImage = () => {
//   return (
//     <div>

//       {
//         <div className="content-container">
//           <div className="image-container">
//             <img src={contentImage} alt="another " />
//           </div>
//           <LoginForm />
//         </div>
//       }
//     </div>
//   );
// };
// export default ContentImage;

// import React from "react";
// import contentImage from "../../../images/banner-1.jpg";
// import LoginForm from "../loginForm/loginForm";
// import ForgotPasswordForm from "../loginForm/forgotPassword";
// import "./contentImage.css";

// const ContentImage = () => {
//   const [showForgotPasswordForm, setShowForgotPasswordForm] = React.useState(false);

//   const handleForgotPasswordClick = (e) => {
//     e.preventDefault();
//     setShowForgotPasswordForm(true);
//   };

//   const handleCancelForgotPassword = () => {
//     setShowForgotPasswordForm(false);
//   };

//   return (
//     <div>
//       <div className="content-container">
//         <div className="image-container">
//           <img src={contentImage} alt="another " />
//         </div>
//         {!showForgotPasswordForm ? (
//           <LoginForm onForgotPasswordClick={handleForgotPasswordClick} />
//         ) : (
//           <ForgotPasswordForm onCancel={handleCancelForgotPassword} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContentImage;

// import React from "react";
// import LoginForm from "../loginForm/loginForm";
// import contentImage from "../../../images/banner-1.jpg";

// const ContentImage = ({ showContentImage }) => {
//   return (
//     <div className="content-container">
//       {showContentImage ? <LoginForm /> : <div className="image-container">
//         <img src={contentImage} alt="another " />
//       </div>}
//     </div>
//   );
// };

// export default ContentImage;


