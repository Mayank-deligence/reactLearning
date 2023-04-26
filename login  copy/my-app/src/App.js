// import React from "react";
// import Header from "./components/header/header";
// import Title from "./components/header/title";
// import BannerImage from "./components/mainContent/contentImage/bannerImage";
// import LoginForm from "./components/mainContent/loginForm/loginForm";
// import FooterContent from "./components/footer/footerContent";

// const App = () => {
//   return (
//     <div class="container">
//       <div class="row">
//       <Header />
//       <Title />
//       </div>
//       <div class="row">
//           <BannerImage />
//           <LoginForm />
//       </div>
//       <div class="row">
//       <FooterContent />
//       </div>
//     </div>
//   );
// };

// export default App;



import React from "react";
import Header from "./components/header/header";
import Title from "./components/header/title";
import logo from "./images/banner-1.jpg"
import LoginForm from "./components/mainContent/loginForm/loginForm";
import FooterContent from "./components/footer/footerContent";

function App() {
  return (
    <div id="react-root">
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
            <div className="col-md-7">
              <div className="home-banner h-100 d-flex align-items-center justify-content-center">
                <img src={logo} />
              </div>
            </div>
            <div className="col-md-5">
              <LoginForm />
            </div>
          </div>
        </div>
        <FooterContent />
      </div>
    </div>
);
}

export default App;










// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import FooterContent from "./components/footer/footerContent";
// import Header from "./components/header/header";
// import ContentImage from "./components/mainContent/contentImage/contentImage";
// // import LoginForm from "./components/mainContent/loginForm/loginForm";
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <ContentImage />
//       <FooterContent />
//     </div>
//   );
// }

// export default App;
