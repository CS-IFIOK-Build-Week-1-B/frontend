import React, { useState, createContext } from "react";

export const VerticalContext = createContext();

export const VerticalProvider = (props) => {

  const [vertical, setvertical] = useState(0);

  return (
    <VerticalContext.Provider value={[vertical, setvertical]}>
      {props.children}
    </VerticalContext.Provider>
  );
};