import React, { useState, createContext } from "react";

export const HorizontalContext = createContext();

export const HorizontalProvider = (props) => {

  const [horizontal, sethorizontal] = useState(0);

  return (
    <HorizontalContext.Provider value={[horizontal, sethorizontal]}>
      {props.children}
    </HorizontalContext.Provider>
  );
};