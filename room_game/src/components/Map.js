import React from "react";
import styled from "styled-components";
import rock from "../utils/images/rock.jpeg";
import walkway from "../utils/images/walkway.jpg";
import treasure from "../utils/images/treasure.jpg";
import fire from "../utils/images/fire.jpg"
import Player from "./Player";

const Map = (props) => {
  return (
    <GamingContainer>
      <GamingMap>
        <Player sortedRooms={props.sortedRooms} />
        {props.sortedRooms.map((room) => {
          if (room.title === "Walkway" || room.title === "Starting Point") {
            return <Walkway />;
          } else if (room.title === "Wall") {
            return <Wall />;
          } else if (room.title === "Fire") {
            return <Fire />;
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

const Fire = styled(Tile)`
  background-image: url(${fire});
  background-size: cover;
`;

const Treasure = styled(Tile)`
  background-image: url(${treasure});
  background-size: cover;
`;

export default Map;
