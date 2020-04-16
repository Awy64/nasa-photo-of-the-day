import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NavBar from "./components/navBar";
import styled from 'styled-components';
import NasaCard from './components/card'


const WraperDiv = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  margin: auto;
  flex-direction: column;
`;




function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=eiDWTagkz26yWrq2Z9MZtYdYpVcdvutD4lvsoHoe')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <WraperDiv className="App">
      <NavBar text={data.title} date={data.date}/>

      {/* <Img img={data.url} /> */}

      {/* <Information info={data.explanation}/> */}

      <NasaCard data={data}/>

    </WraperDiv>
  );
}

export default App;
