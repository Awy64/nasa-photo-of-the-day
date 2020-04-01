import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NavBar from "./components/navBar";
import Img from "./components/img";
import Information from './components/information';







function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=eiDWTagkz26yWrq2Z9MZtYdYpVcdvutD4lvsoHoe')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <NavBar text={data.title} date={data.date}/>

      <Img img={data.url} />

      <Information info={data.explanation}/>

    </div>
  );
}

export default App;
