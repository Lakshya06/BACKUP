import React from "react";
import Header from "./Components/Header";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App(){
  return (
    <div>

      <Header />
      {/* <Certificates /> */}
      <Login />
      <Footer />
    </div>
  )
}

export default App