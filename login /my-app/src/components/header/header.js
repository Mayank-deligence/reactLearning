import "./header.css";
import logo from "../../images/logo.jpg"
const Header = () => {
  return (
    <header className="App-header">
      <div className="header-container">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h3 className="header-text">Pre-Clinical Assessment Program</h3>
      </div>
    </header>
  );
};

export default Header;



