import React, { useState, createContext } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = (props) => {

  const [position, setPosition] = useState(1);

  return (
    <PlayerContext.Provider value={[position, setPosition]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
