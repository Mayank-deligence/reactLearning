import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import FooterContent from "./components/footer/footerContent";
import Header from "./components/header/header";
import ContentImage from "./components/mainContent/contentImage/contentImage";
// import LoginForm from "./components/mainContent/loginForm/loginForm";
function App() {
  return (
    <div className="App">
        <Header />
       <ContentImage />
      <FooterContent />
    </div>
  );
}

export default App;
