import React, { useContext } from "react";
import { PlayerContext } from "./PlayerContext";
import { HorizontalContext } from "./HorizontalContext";
import { VerticalContext } from "./VerticalContext";
import styled from "styled-components";
import player from "../utils/images/player.jpeg";
import { walls, treasure, fires } from "../utils/Data/MapComponentsIds";
const Player = (props) => {
  const [horizontal, sethorizontal] = useContext(HorizontalContext);
  const [vertical, setvertical] = useContext(VerticalContext);

  const [position, setPosition] = useContext(PlayerContext);
  // const [seconds, setSeconds] = useContext(TimerContext);

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
