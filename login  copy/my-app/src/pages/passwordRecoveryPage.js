import "./page.css";
import "bootstrap/dist/css/bootstrap.css";
import FooterContent from "../components/footer/footerContent";
import ForgotPasswordForm from "../components/mainContent/loginForm/forgotPassword";
import Title from "../components/header/title";
import Header from "../components/header/header";
function PasswordRecoveryPage() {

  return (
    <div className="main-second-container container">
    <nav className="navbar-default p-0" id="header">
      <div className="row m-0 p-0">
        <Header />
        <Title />
        <div className="col-sm-12 col-lg-3 m-0 p-0 d-flex align-items-center justify-content-end ">
          <div
            className="btn-group d-flex align-items-center justify-content-end trigger_button"
            role="group"
          ></div>
        </div>
        </div>
    </nav>
    <div></div>
    <div className="main-content">
      <div className="row">
        <ForgotPasswordForm />
      </div>
    </div>
    <FooterContent />
  </div>

  );
}

export default PasswordRecoveryPage;