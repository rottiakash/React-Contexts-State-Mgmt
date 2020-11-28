import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContextProvider from "./Contexts/counter";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <CounterContextProvider>
      <Display />
      <Buttons />
    </CounterContextProvider>
  );
}

export default App;
