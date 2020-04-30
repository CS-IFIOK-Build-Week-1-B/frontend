import React, { useState } from "react";
import styled from "styled-components";
import player from "../utils/images/player.jpeg";

const Player = (props) => {

  const [horizontal, sethorizontal] = useState(0);
  const [vertical, setvertical] = useState(0);

  const [position, setPosition] = useState(1)

  const PlayerDiv = styled.img`

  position: absolute;
  top: ${vertical * 40}px;
  left: ${horizontal * 40}px;
  background-position: 0 0;
  background-color:blue;
  width: 40px;
  height: 40px;
`;

  const HandleMovement = (e) => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return (
          console.log("west"),
          horizontal - 1 < 0 ? sethorizontal(0) : sethorizontal(horizontal - 1),
          horizontal - 1 < 0 ? setPosition(position) : setPosition(position -1)
        );

      case 38:
        return (
          console.log("north"),
          vertical - 1 < 0 ? setvertical(0) : setvertical(vertical - 1),
          vertical - 1 < 0 ? setPosition(position) : setPosition(position - 10)
        );
      case 39:
        return (
          console.log("east"),
          horizontal + 1 > 9 ? sethorizontal(9) : sethorizontal(horizontal + 1),
          horizontal + 1 > 9? setPosition(position) : setPosition(position + 1)
        );

      case 40:
        return (
          console.log("south"),
          vertical + 1 > 9 ? setvertical(9) : setvertical(vertical + 1),
          vertical + 1 > 9 ? setPosition(position) : setPosition(position + 10)
        );

      default:
        return;
    }
  };

  console.log("vertical", vertical);
  console.log("horizontal", horizontal);
  console.log("position", position);

  window.onkeydown = HandleMovement;

  return <PlayerDiv src={player} />;
};

export default Player;
