import React from "react";
import "./App.css";
import CounterContextProvider from "./Contexts/counter";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import Center from "./HOC/Center";

function App() {
  return (
    <Center>
      <CounterContextProvider>
        <Display />
        <Buttons />
      </CounterContextProvider>
    </Center>
  );
}

export default App;
