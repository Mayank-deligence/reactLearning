import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./page/loginPage";
// import ForgotPasswordForm from  "./components/mainContent/loginForm/forgotPassword"
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import ContentImage from "./components/mainContent/contentImage/contentImage";
import ForgotPasswordPage from "./page/forgotPasswordPage";
// import LoginForm from "./components/mainContent/loginForm/loginForm";
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
