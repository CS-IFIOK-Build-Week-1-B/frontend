import React, { useState, useEffect, useContext } from "react";
import { PlayerContext } from "./PlayerContext";
import { TimerContext } from "./TimerContext";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import img from "../utils/images/city.jpg";
import Map from "./Map";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { rooms } from "../utils/Data/Rooms";

library.add(
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faComment,
  faSignOutAlt
);

const Welcome = (props) => {
  const [game, setGame] = useState(false);
  const [position] = useContext(PlayerContext);

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

  const startGame = () => {
    setGame(true);
  };

  const logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const [seconds, setSeconds] = useContext(TimerContext);

  useEffect(() => {
    if (position == 72) {
      return;
    } else if (seconds > 0 && game == true) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });

  return (
    <Container>
      <Game>
        <Left>
          <Play>
            <Instructions>
              Welcome to our little Dungeon Game! To win, you have to find the
              treasure within 8 seconds. But there is more than just one
              treasure box on the map, so find out which one contains the
              treasure and makes you rich! Oh! And don't step inside the fire
              unless you want to die!
            </Instructions>
            <Start onClick={() => startGame()}>Start</Start>
            <Counter>Counter: {seconds}sec</Counter>
            <Map sortedRooms={sortedRooms} game={game} setGame={setGame} />
          </Play>
          <Control>
            <ControlText>
              <p>
                Use the arrow keys on your keyboard to navigate through the map.
                "Say" something to other players with the input box below.
              </p>
            </ControlText>
            <ControlDirections>
              <Icons>
                <ArrowUp icon={faArrowUp} />
                <ArrowRight icon={faArrowRight} />
                <ArrowDown icon={faArrowDown} />
                <ArrowLeft icon={faArrowLeft} />
              </Icons>
              <Letters>
                <Letter>N</Letter>
                <Letter>E</Letter>
                <Letter>S</Letter>
                <Letter>W</Letter>
              </Letters>
            </ControlDirections>
          </Control>
          <Chat>
            <Input placeholder="Type a message" type="text" />
            <SendButton icon={faComment} />
          </Chat>
        </Left>
        <Right>
          <SignOutContainer>
            <SignOut icon={faSignOutAlt} onClick={() => logout()} />
          </SignOutContainer>
          <RoomDescription>
            {sortedRooms[position - 1] ? (
              <span>
                <p>You're at: {sortedRooms[position - 1].title}</p>
                <br />
                <p>{sortedRooms[position - 1].description}</p>
              </span>
            ) : (
              <p>Loading...</p>
            )}
          </RoomDescription>
          <ChatBox>
            <p>KingLouie94: Hey, what's up???</p>
          </ChatBox>
        </Right>
      </Game>
    </Container>
  );
};

export default withRouter(Welcome);

// Styling

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
`;

const Game = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  background-color: black;
  color: white;
  opacity: 0.8;
  padding: 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  justify-content: space-around;
`;

const Instructions = styled.p`
  font-size: 1.2rem;
  width: 20%;
`;

const Play = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Start = styled.button`
  width: 80px;
  height: 80px;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  background-color: black;
  margin-left: 50px;
`;

const Counter = styled.h2`
  margin-left: 50px;
  font-size: 18px;
`;

const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid white;
`;

const Control = styled.div`
  height: 30%;
  display: flex;
`;

const Chat = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  margin: 5px;
  height: 75%;
  padding-left: 10px;
  font-size: 20px;
  letter-spacing: 3px;
  background-color: black;
  color: white;
  font-size: 20px;
  ::placeholder {
    font-size: 20px;
    padding-left: 10px;
    color: white;
  }
`;

const SendButton = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

const ControlText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  font-size: 28px;
  letter-spacing: 1px;
  padding: 5px;
  padding-left: 20px;
`;

const ControlDirections = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Icons = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Letters = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
`;

const Letter = styled.span`
  text-shadow: 2px 4px grey;
`;

const ArrowUp = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

const ArrowRight = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

const ArrowDown = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

const ArrowLeft = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

const SignOut = styled(FontAwesomeIcon)`
  font-size: 40px;
  display: flex;
  padding-right: 5%;
  :hover {
    color: red;
  }
`;

const SignOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
`;

const RoomDescription = styled.div`
  height: 50%;
  box-sizing: border-box;
  font-size: 30px;
  text-align: center;
  padding-top: 20%;
`;

const ChatBox = styled.div`
  height: 40%;
  font-size: 22px;
  padding-left: 2.5%;
`;
