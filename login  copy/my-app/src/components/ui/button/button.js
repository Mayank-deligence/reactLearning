import React from "react";
import "./button.css"
function UserDropdown({ username, onLogout }) {
  return (
    <div className="btn-group d-flex align-items-center justify-content-end trigger_button" role="group">
      <button
        id="btnGroupUser"
        type="button"
        className="btn btn-default dropdown dropdown-toggle navbar-btn navbar-right showbtn mb-3 mb-lg-0"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-user"></i>mayank
        {/* {username} */}
      </button>
      <div className="dropdown-menu" aria-labelledby="btnGroupUser">
        <div className="dropdown-item logoutbtn" onClick={onLogout}>
          Log Out
        </div>
      </div>
    </div>
  );
}

export default UserDropdown;
