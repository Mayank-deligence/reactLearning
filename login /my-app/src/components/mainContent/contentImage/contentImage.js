import contentImage from "../../../images/banner-1.jpg";
import ForgotPasswordForm from "../loginForm/forgotPassword";
import LoginForm from "../loginForm/loginForm";
const ContentImage = () => {
  return (
    <div>
      ? <ForgotPasswordForm /> : 
      {
        <div className="content-container">
          <div className="image-container">
            <img src={contentImage} alt="another " />
          </div>
          <LoginForm />
        </div>
      }
    </div>
  );
};
export default ContentImage;

// import React from "react";
// // import "./contentImage.css";
// import LoginForm from "../loginForm/loginForm";
// import contentImage from "../../../images/banner-1.jpg";

// const ContentImage = ({ showContentImage }) => {
//   return (
//     <div className="content-container">
//       {showContentImage && (
//         <div className="image-container">
//           <img src={contentImage} alt="another " />
//         </div>
//       )}
//       <LoginForm />
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
