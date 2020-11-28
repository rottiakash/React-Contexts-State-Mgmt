import React, { FC, useContext } from "react";
import { counterContext } from "../Contexts/counter";

const Buttons: FC = () => {
  const { increment, decrement } = useContext(counterContext);
  return (
    <div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Buttons;
