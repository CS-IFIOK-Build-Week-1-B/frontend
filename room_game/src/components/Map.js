import React, { useContext } from "react";
import styled from "styled-components";
import rock from "../utils/images/rock.jpeg";
import walkway from "../utils/images/walkway.jpg";
import treasure from "../utils/images/treasure.jpg";
import fire from "../utils/images/fire.jpg";
import Player from "./Player";
import winning from "../utils/images/youwon.jpg";
import replay from "../utils/images/replay.jpg";
import { PlayerContext } from "./PlayerContext";
import { TimerContext } from "./TimerContext";
import { HorizontalContext } from "./HorizontalContext";
import { VerticalContext } from "./VerticalContext";

const Map = (props) => {
  const [position, setPosition] = useContext(PlayerContext);
  const [seconds, setSeconds] = useContext(TimerContext);
  const [horizontal, sethorizontal] = useContext(HorizontalContext);
  const [vertical, setvertical] = useContext(VerticalContext);

  const repeatGame = () => {
    sethorizontal(0);
    setvertical(0);
    setPosition(1);
    setSeconds(8);
    props.setGame(false);
  };

  if (seconds > 0 && position == 72) {
    props.setGame(false);
  }

  return (
    <GamingContainer>
      {seconds === 0 ? (
        <ReplayModal>
          <ReplayModalTextButtonDiv>
            <ReplayText>
              <div>
                Too late, you lost.<p>The treasure has been stolen.</p> Click
                replay to start again
              </div>
            </ReplayText>
            <ReplayButton onClick={() => repeatGame()}>Replay</ReplayButton>
          </ReplayModalTextButtonDiv>
        </ReplayModal>
      ) : position === 72 && seconds > 0 ? (
        <Winner>
          <ReplayModalTextButtonDiv>
            <ReplayText>You won within {8 - seconds} seconds </ReplayText>
            <ReplayButton onClick={() => repeatGame()}>Replay</ReplayButton>
          </ReplayModalTextButtonDiv>
        </Winner>
      ) : (
        <GamingMap>
          <Player
            sortedRooms={props.sortedRooms}
            game={props.game}
            setGame={props.setGame}
          />
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
      )}
    </GamingContainer>
  );
};

const GamingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* width: auto; */
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
const ReplayModal = styled.div`
  background-image: url(${replay});
  background-size: cover;
  text-align: center;
  z-index: 2000;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-size: cover;
  display: flex;
  font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
  flex-direction: column;
  align-items: center;
`;

const Winner = styled(ReplayModal)`
  background-image: url(${winning});
  background-size: cover;
  text-shadow:2px 2px black;
`;
const ReplayModalTextButtonDiv = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 20%;
  text-align: center;
`;

const ReplayButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: black;
  color: white;
  border-radius: 20px;
  opacity: 0.8;
  margin-top: 30px;
  font-size: 22px;

  :hover& {
    color: red;
    -moz-box-shadow: 0 0 20px #ccc;
    -webkit-box-shadow: 0 0 20px #ccc;
    box-shadow: 0 0 20px #ccc;
  }
`;

const ReplayText = styled.p`
  color: white;
  font-size: 20px;
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
