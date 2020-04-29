import React, { useState } from "react";
import styled from "styled-components";
import player from "../utils/images/player.jpeg";
import { HandleMovement } from "./Movement";
const Player = (props) => {
  const [horizontal, sethorizontal] = useState(0);
  const [vertical, setvertical] = useState(0);
  const PlayerDiv = styled.img`
  position: absolute;
  top: ${vertical * 40}px;
  left: ${horizontal * 40}px;
  /* background-image: url(${player}); */
  /* src:url(${player}); */
  background-position: 0 0;
  background-color:blue;
  /* filter:hue-rotate(200deg) */
  width: 40px;
  height: 40px;
`;
  const HandleMovement = (e) => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return sethorizontal(horizontal - 1), console.log("west");
      case 38:
        return setvertical(vertical - 1), console.log("north");
      case 39:
        return sethorizontal(horizontal + 1), console.log("east");
      case 40:
        return setvertical(vertical + 1), console.log("south");

      default:
        return horizontal, vertical;
    }
  };

  console.log("vertical", vertical);
  console.log("horizontal", horizontal);

  window.onkeydown = HandleMovement;

  return <PlayerDiv src={player} />;
};

export default Player;
