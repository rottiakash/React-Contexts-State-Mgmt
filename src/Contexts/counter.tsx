import React, { createContext, FC, useState } from "react";

interface context {
  counter: number;
  increment: any;
  decrement: any;
}

export const counterContext = createContext({} as context);

interface CounterContextProviderProps {
  children: any;
}

const CounterContextProvider: FC<CounterContextProviderProps> = ({
  children,
}) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);
  return (
    <counterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
