import React from "react";

const Navbar=()=>{
    return (
        <div className="admin-tollbar-wrapper">
        <ul className="nav nav-pills admin-tollbar">
          <li>
            <a className="nav-link nav-item" href="">
              <i className="fas fa-users-cog"></i> User Manager
            </a>
          </li>
          <li>
            <a className="nav-link nav-item" href="">
              Patients
            </a>
          </li>
          <li>
            <a className="nav-link nav-item" href="">
              Reminder Schedule
            </a>
          </li>
          <li>
            <a className="nav-link nav-item" href="">
              Reminder
            </a>
          </li>
          <li>
            <a className="nav-link nav-item" href="">
              Notifications
            </a>
          </li>
          <li>
            <a className="nav-link nav-item" href="">
              Reports
            </a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
              Logs
            </a>
            <ul className="dropdown-menu" x-placement="bottom-start" style={{ position: "absolute", transform: "translate3d(0px, 40px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
              <li>
                <a className="nav-link nav-item" href="">
                  DICOM
                </a>
              </li>
              <li>
                <a className="nav-link nav-item" href="">
                  Directory
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
              Email
            </a>
            <ul className="dropdown-menu emailDropDown">
              <li>
                <span className="nav-link nav-item">Patient Creation Notification</span>
              </li>
              <li>
                <span className="nav-link nav-item">On Form Submission</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
}
export default Navbar;