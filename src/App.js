import React from "react";
import "./App.css";
import NavBar from "./components/navBar"
import Img from "./components/img"
import Information from './components/information'

function App() {
  return (
    <div className="App">
      <NavBar text="NavBar"/>

      <Img img="img"/>

      <Information info="info"/>

    </div>
  );
}

export default App;
