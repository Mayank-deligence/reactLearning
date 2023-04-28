

import React from "react";
import logo from "../../images/logo.jpg"
import "./header.css"
function Header() {
  return (
    <div className="col-md-12 col-lg-3 m-0 p-0">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <img alt="Pro Spine" src={logo} />
        </a>
      </div>
    </div>
  );
}

export default Header;








