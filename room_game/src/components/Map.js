import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/Auth/axiosAuth";
import styled from "styled-components";
import rock from "../utils/images/rock.jpeg";
import walkway from "../utils/images/walkway.jpg";
import treasure from "../utils/images/treasure.jpg";
import Player from "./Player";
const Map = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/adv/getrooms/")
      .then((res) => {
        setRooms(res.data.rooms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const sortRooms = (a, b) => {
    const tileA = a.id;
    const tileB = b.id;

    let comparison = 0;

    if (tileA > tileB) {
      comparison = 1;
    } else if (tileA < tileB) {
      comparison = -1;
    }
    return comparison;
  };

  const sortedRooms = rooms.sort(sortRooms);

  console.log(sortedRooms);

  return (
    <GamingContainer>
      <GamingMap>
        <Player />
        {sortedRooms.map((room) => {
          if (room.title === "Walkway" || room.title === "Starting Point") {
            return <Walkway />;
          } else if (room.title === "Wall") {
            return <Wall />;
          } else {
            return <Treasure />;
          }
        })}
      </GamingMap>
    </GamingContainer>
  );
};

const GamingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const GamingMap = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
`;

const Tile = styled.div`
  width: 10%;
  height: 10%;
`;

const Walkway = styled(Tile)`
  background-image: url(${walkway});
  background-size: cover;
`;

const Wall = styled(Tile)`
  background-image: url(${rock});
  background-size: cover;
`;

const Treasure = styled(Tile)`
  background-image: url(${treasure});
  background-size: cover;
`;

export default Map;
