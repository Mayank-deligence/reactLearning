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



// import "./header.css";
// import logo from "../../images/logo.jpg";

// const Header = () => {
//   return (
//     <header className="App-header">
//       <div className="row m-0 p-0">
//         <div className="col-md-12 col-lg-3 m-0 p-0">
//           <div className="navbar-header">
//             <a className="navbar-brand" href="#">
//               <img alt="Pro Spine" src={logo} />
//             </a>
//           </div>
//         </div>
//         <div className="col-sm-12 col-lg-6 m-0 p-0 d-flex align-items-center justify-content-center">
//           <div className="headTitle d-flex align-items-center justify-content-center">
//             <h3>Pre-Clinical Assessment Program</h3>
//           </div>
//         </div>
//         <div className="col-sm-12 col-lg-3 m-0 p-0 d-flex align-items-center justify-content-end ">
//           <div className="btn-group d-flex align-items-center justify-content-end trigger_button" role="group"></div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
