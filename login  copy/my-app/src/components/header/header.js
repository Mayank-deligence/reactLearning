
// import React from "react";
// import logo from "../../images/logo.jpg"
// const Header = () => {
//   return (
//     <div class="col-md-12 col-lg-3">
//       <a>
//         <img
//           src={logo}
//           alt="proSpine"
//         />
//       </a>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import logo from "../../images/logo.jpg"
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







// import "./header.css";
// import logo from "../../images/logo.jpg"
// const Header = () => {
//   return (
//     <header className="App-header">
//       <div className="header-container">
//         <img
//           src={logo}
//           className="App-logo"
//           alt="logo"
//         />
//         <h3 className="header-text">Pre-Clinical Assessment Program</h3>
//       </div>
//     </header>
//   );
// };

// export default Header;



