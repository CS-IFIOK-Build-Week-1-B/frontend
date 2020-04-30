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
        return (
          console.log("west"),
          horizontal - 1 < 0 ? sethorizontal(0) : sethorizontal(horizontal - 1)
        );

      case 38:
        return (
          console.log("north"),
          vertical - 1 < 0 ? setvertical(0) : setvertical(vertical - 1)
        );
      case 39:
        return (
          console.log("east"),
          horizontal + 1 > 9 ? sethorizontal(9) : sethorizontal(horizontal + 1)
        );

      case 40:
        return (
          console.log("south"),
          vertical + 1 > 9 ? setvertical(9) : setvertical(vertical + 1)
        );

      default:
        return horizontal, vertical;
    }
  };

  console.log("vertical", vertical);
  console.log("horizontal", horizontal);

  window.onkeydown = HandleMovement;

  return <PlayerDiv src={player} />;
};

  const roomDetails = [
    {
      id: 1,
      vertical: 0,
      horizontal: 1,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 2,
      vertical: 1,
      horizontal: 9,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 3,
      vertical: 2,
      horizontal: 4,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 4,
      vertical: 2,
      horizontal: 5,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 5,
      vertical: 3,
      horizontal: 5,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 6,
      vertical: 3,
      horizontal: 8,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 7,
      vertical: 4,
      horizontal: 5,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 8,
      vertical: 5,
      horizontal: 0,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 9,
      vertical: 6,
      horizontal: 1,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 10,
      vertical: 6,
      horizontal: 4,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 11,
      vertical: 6,
      horizontal: 6,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 12,
      vertical: 6,
      horizontal: 7,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 13,
      vertical: 6,
      horizontal: 8,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 14,
      vertical: 7,
      horizontal: 8,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 15,
      vertical: 8,
      horizontal: 2,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 16,
      vertical: 8,
      horizontal: 4,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 17,
      vertical: 8,
      horizontal: 7,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 18,
      vertical: 9,
      horizontal: 2,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 19,
      vertical: 8,
      horizontal: 9,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 20,
      vertical: 9,
      horizontal: 7,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 21,
      vertical: 9,
      horizontal: 8,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 22,
      vertical: 9,
      horizontal: 9,
      title: "Wall",
      description:
        "Partition, this is a boulder wall,it's impossible to go through.",
    },
    {
      id: 23,
      vertical: 0,
      horizontal: 2,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 24,
      vertical: 1,
      horizontal: 7,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 25,
      vertical: 2,
      horizontal: 3,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 26,
      vertical: 3,
      horizontal: 0,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 27,
      vertical: 4,
      horizontal: 6,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 28,
      vertical: 5,
      horizontal: 4,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 29,
      vertical: 6,
      horizontal: 2,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 30,
      vertical: 7,
      horizontal: 9,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 31,
      vertical: 9,
      horizontal: 1,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
    {
      id: 32,
      vertical: 9,
      horizontal: 5,
      title: "Treasure room",
      description:
        "This room must contain a lot of valuable items,perhaps even the treasure.",
    },
  ];


export default Player;
