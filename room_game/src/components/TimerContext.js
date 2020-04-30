import React, { useState, createContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = (props) => {

  const [seconds, setSeconds] = useState(5);

  return (
    <TimerContext.Provider value={[seconds, setSeconds]}>
      {props.children}
    </TimerContext.Provider>
  );
};