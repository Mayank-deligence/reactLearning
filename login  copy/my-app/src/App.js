
// import "./App.css";
import LoginPage from "./pages/loginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PasswordRecoveryPage from "./pages/passwordRecoveryPage";
import MainPage from "./pages/mainPage";
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="/forgotPassword" element={<PasswordRecoveryPage />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;




