import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import FooterContent from "../components/footer/footerContent";
import Header from "../components/header/header";
import ContentImage from "../components/mainContent/contentImage/contentImage";
import { useState } from "react";
import AuthContext from "../authContext/authContext";
// import LoginForm from "./components/mainContent/loginForm/loginForm";
function LoginPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const updateHandler = () => {

    setShowForgotPassword((state)=>state=true);
  };
  const cancelUpdateHandler = () => {

    setShowForgotPassword((state)=>state=false);
  };
  const stateUpdater={
    showForgotPassword,
    updateHandler,
    cancelUpdateHandler
  }
  return (

    <AuthContext.Provider value={stateUpdater}>
    <div className="App">
      <Header />
      <ContentImage />
      <FooterContent />
    </div>
    </AuthContext.Provider>
  );
}

export default LoginPage;