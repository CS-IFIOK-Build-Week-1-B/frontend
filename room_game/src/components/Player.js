import React, { useState } from "react";
import styled from "styled-components";
import player from "../utils/images/player.jpeg";
import { HandleMovement } from "./Movement";
const Player = (props) => {
  const [playerPosition, setPlayerPosition] = useState([0, 0]);

  const PlayerDiv = styled.img`
  position: absolute;
  top: ${playerPosition[0]};
  left: ${playerPosition[1]};
  /* background-image: url(${player}); */
  /* src:url(${player}); */
  background-position: 0 0;
  background-color:blue;
  /* filter:hue-rotate(200deg) */
  width: 40px;
  height: 40px;
`;
  console.log(playerPosition);
  const HandleMovement = (e) => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return setPlayerPosition(playerPosition[1] - 1);
      case 38:
        return setPlayerPosition(playerPosition[0] + 1);
      case 39:
        return setPlayerPosition(playerPosition[1] + 1);
      case 40:
        return setPlayerPosition(playerPosition[0] - 1);

      default:
    }
  };

  window.onkeydown = HandleMovement;

  return <PlayerDiv src={player} />;
};

export default Player;
