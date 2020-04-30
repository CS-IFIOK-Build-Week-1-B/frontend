import React, { useState, useContext } from "react";
import { TimerContext } from "./TimerContext";
import { PlayerContext } from "./PlayerContext";
import { HorizontalContext } from "./HorizontalContext";
import { VerticalContext } from "./VerticalContext";
import styled from "styled-components";
import player from "../utils/images/player.jpeg";

const Player = (props) => {
  const [horizontal, sethorizontal] = useContext(HorizontalContext);
  const [vertical, setvertical] = useContext(VerticalContext);

  const [position, setPosition] = useContext(PlayerContext);
  const [seconds, setSeconds] = useContext(TimerContext);

  const fires = [68, 46, 49];

  const treasure = [72];

  const walls = [
    2,
    13,
    14,
    15,
    18,
    22,
    26,
    28,
    29,
    35,
    37,
    43,
    45,
    47,
    48,
    53,
    61,
    62,
    63,
    65,
    66,
    69,
    71,
    74,
    79,
    82,
    85,
    87,
    89,
    91,
    93,
    99,
  ];

  const HandleMovement = (e) => {
    e.preventDefault();
    
    switch (e.keyCode) {
      case 37:
        if (fires.includes(position)) {
          return sethorizontal(0), setvertical(0), setPosition(1);
        } else if (treasure.includes(position)) {
          return (
            alert("Congratulation! You've found the treasure!"),
            sethorizontal(0),
            setvertical(0),
            setPosition(1)
          );
        } else if (walls.includes(position - 1)) {
          return (
            sethorizontal(horizontal),
            setvertical(vertical),
            setPosition(position)
          );
        } else {
          return (
            console.log("west"),
            horizontal - 1 < 0
              ? sethorizontal(0)
              : sethorizontal(horizontal - 1),
            horizontal - 1 < 0
              ? setPosition(position)
              : setPosition(position - 1)
          );
        }
      case 38:
        if (fires.includes(position)) {
          return sethorizontal(0), setvertical(0), setPosition(1);
        } else if (treasure.includes(position)) {
          return (
            alert("Congratulation! You've found the treasure!"),
            sethorizontal(0),
            setvertical(0),
            setPosition(1)
          );
        } else if (walls.includes(position - 10)) {
          return (
            sethorizontal(horizontal),
            setvertical(vertical),
            setPosition(position)
          );
        } else {
          return (
            console.log("north"),
            vertical - 1 < 0 ? setvertical(0) : setvertical(vertical - 1),
            vertical - 1 < 0
              ? setPosition(position)
              : setPosition(position - 10)
          );
        }
      case 39:
        if (fires.includes(position)) {
          return sethorizontal(0), setvertical(0), setPosition(1);
        } else if (treasure.includes(position)) {
          return (
            alert("Congratulation! You've found the treasure!"),
            sethorizontal(0),
            setvertical(0),
            setPosition(1)
          );
        } else if (walls.includes(position + 1)) {
          return (
            sethorizontal(horizontal),
            setvertical(vertical),
            setPosition(position)
          );
        } else {
          return (
            console.log("east"),
            horizontal + 1 > 9
              ? sethorizontal(9)
              : sethorizontal(horizontal + 1),
            horizontal + 1 > 9
              ? setPosition(position)
              : setPosition(position + 1)
          );
        }
      case 40:
        if (fires.includes(position)) {
          return sethorizontal(0), setvertical(0), setPosition(1);
        } else if (treasure.includes(position)) {
          return (
            alert("Congratulation! You've found the treasure!"),
            sethorizontal(0),
            setvertical(0),
            setPosition(1)
          );
        } else if (walls.includes(position + 10)) {
          return (
            sethorizontal(horizontal),
            setvertical(vertical),
            setPosition(position)
          );
        } else {
          return (
            console.log("south"),
            vertical + 1 > 9 ? setvertical(9) : setvertical(vertical + 1),
            vertical + 1 > 9
              ? setPosition(position)
              : setPosition(position + 10)
          );
        }

      default:
        return;
    }
  };

  

  console.log("vertical", vertical);
  console.log("horizontal", horizontal);
  console.log("position", position);

  window.onkeydown = HandleMovement;
  const PlayerDiv = styled.img`
    position: absolute;
    top: ${vertical * 40}px;
    left: ${horizontal * 40}px;
    background-position: 0 0;
    background-color: blue;
    width: 40px;
    height: 40px;
  `;
  return <PlayerDiv src={player} />;
};

export default Player;
