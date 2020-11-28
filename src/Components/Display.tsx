import React, { FC, useContext } from "react";
import { counterContext } from "../Contexts/counter";

const Display: FC = () => {
  const { counter } = useContext(counterContext);
  return <h1>The Value of Counter is {counter}</h1>;
};

export default Display;
