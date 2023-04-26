import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import FooterContent from "../components/footer/footerContent";
import ForgotPasswordForm from "../components/mainContent/loginForm/forgotPassword";
import Header from "../components/header/header";
import ContentImage from "../components/mainContent/contentImage/contentImage";
// import { useState } from "react";
import AuthContext from "../authContext/authContext";
// import LoginForm from "./components/mainContent/loginForm/loginForm";
function ForgotPasswordPage() {
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   const updateHandler = () => {

//     setShowForgotPassword((state)=>state=true);
//   };
//   const cancelUpdateHandler = () => {

//     setShowForgotPassword((state)=>state=false);
//   };
//   const stateUpdater={
//     showForgotPassword,
//     updateHandler,
//     cancelUpdateHandler
//   }
  return (

   
    <div className="App">
      <Header />
      <div className="content-container">
      <ForgotPasswordForm />
      </div>
      <FooterContent />
    </div>
  );
}

export default ForgotPasswordPage;