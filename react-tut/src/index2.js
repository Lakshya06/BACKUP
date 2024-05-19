// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

const Header = () => {
  return (
    <header>
    <nav>
      <img src="./reactLogo.png" alt="react-logo" className="nav-logo"></img>
      <ul className="nav-items">

        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>

      </ul>
    </nav>
  </header>
  )
}

const MainContent = () => {
  return (
    <div className="main-content">

    {/* <img src="./reactLogo.png" alt="reatc-logo" width="40px"></img> */}
      <h1>Fun Facts about react</h1>
  
      <ul>
        <li>
          Was first released in 2013
        </li>
        <li>
          Was originally created by Jordan Walke
        </li>
        <li>
          Has well over 100K stars on Github
        </li>
        <li>
          Is maintained by Facebook
        </li>
        <li>
          Powers thousands of enterprise apps, including mobile apps
        </li>
  
      </ul>
  
    </div>
  )
}

const Footer = () => {

  return (
    <footer>
      <small>Copyright 2023, All rights reserved.</small>
    </footer>
  )
}

const App = () => {
  return (
    <div>   
    <Header />
    <MainContent />
    <Footer />
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(page);
root.render(<App />);