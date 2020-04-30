import React, { useEffect, useContext } from "react";
import { PlayerContext } from "./PlayerContext";
import { TimerContext } from "./TimerContext";
import { HorizontalContext } from "./HorizontalContext";
import { VerticalContext } from "./VerticalContext";
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

library.add(
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faComment,
  faSignOutAlt
);

const Welcome = (props) => {
  const [position, setPosition] = useContext(PlayerContext);
  const rooms = [
    {
      id: 1,
      title: "Starting Point",
      description: "Your journey begins here",
      vertical: 0,
      horizontal: 0,
    },
    {
      id: 2,
      title: "Wall",
      description: "Partition",
      vertical: 0,
      horizontal: 1,
    },
    {
      id: 3,
      title: "Treasure Room",
      description:
        "Hey! You've found a piece of wood ! You haven't found the treasure yet, keep searching !",
      vertical: 0,
      horizontal: 2,
      treasures: [],
    },
    {
      id: 4,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 3,
    },
    {
      id: 5,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 4,
    },
    {
      id: 6,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 5,
    },
    {
      id: 7,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 6,
    },
    {
      id: 8,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 7,
    },
    {
      id: 9,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 8,
    },
    {
      id: 10,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 0,
      horizontal: 9,
    },
    {
      id: 11,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 1,
      horizontal: 0,
    },
    {
      id: 12,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 1,
      horizontal: 1,
    },
    {
      id: 13,
      title: "Wall",
      description: "Use these paths to move around",
      vertical: 1,
      horizontal: 2,
    },
    {
      id: 14,
      title: "Wall",
      description: "Partition",
      vertical: 1,
      horizontal: 3,
    },
    {
      id: 15,
      title: "Wall",
      description: "Partition",
      vertical: 1,
      horizontal: 4,
    },
    {
      id: 16,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 1,
      horizontal: 5,
    },
    {
      id: 17,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 1,
      horizontal: 6,
    },
    {
      id: 18,
      title: "Wall",
      description: "Partition",
      vertical: 1,
      horizontal: 7,
    },
    {
      id: 19,
      title: "Treasure Room",
      description:
        "Hey! You've found a piece of wood ! You haven't found the treasure yet, keep searching !",
      vertical: 1,
      horizontal: 8,
    },
    {
      id: 20,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 1,
      horizontal: 9,
    },
    {
      id: 21,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 2,
      horizontal: 0,
    },
    {
      id: 22,
      title: "Wall",
      description: "Partition",
      vertical: 2,
      horizontal: 1,
    },
    {
      id: 23,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 2,
      horizontal: 2,
    },
    {
      id: 24,
      title: "Treasure Room",
      description:
        "Hey! You've found a piece of wood ! You haven't found the treasure yet, keep searching !",
      vertical: 2,
      horizontal: 3,
    },
    {
      id: 25,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 2,
      horizontal: 4,
    },
    {
      id: 26,
      title: "Wall",
      description: "Partition",
      vertical: 2,
      horizontal: 5,
    },
    {
      id: 27,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 2,
      horizontal: 6,
    },
    {
      id: 28,
      title: "Wall",
      description: "Partition",
      vertical: 2,
      horizontal: 7,
    },
    {
      id: 29,
      title: "Wall",
      description: "Partition",
      vertical: 2,
      horizontal: 8,
    },
    {
      id: 30,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 2,
      horizontal: 9,
    },
    {
      id: 31,
      title: "Treasure Room",
      description:
        "Hey! You've found a piece of wood ! You haven't found the treasure yet, keep searching !",
      vertical: 3,
      horizontal: 0,
    },
    {
      id: 32,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 1,
    },
    {
      id: 33,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 2,
    },
    {
      id: 34,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 3,
    },
    {
      id: 35,
      title: "Wall",
      description: "Partition",
      vertical: 3,
      horizontal: 4,
    },
    {
      id: 36,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 5,
    },
    {
      id: 37,
      title: "Wall",
      description: "Partition",
      vertical: 3,
      horizontal: 6,
    },
    {
      id: 38,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 7,
    },
    {
      id: 39,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 8,
    },
    {
      id: 40,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 3,
      horizontal: 9,
    },
    {
      id: 41,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 4,
      horizontal: 0,
    },
    {
      id: 42,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 4,
      horizontal: 1,
    },
    {
      id: 43,
      title: "Wall",
      description: "Partition",
      vertical: 4,
      horizontal: 2,
    },
    {
      id: 44,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 4,
      horizontal: 3,
    },
    {
      id: 45,
      title: "Wall",
      description: "Use these paths to move around",
      vertical: 4,
      horizontal: 4,
    },
    {
      id: 46,
      title: "Fire",
      description: "You have fallen into the fire and died!",
      vertical: 4,
      horizontal: 5,
    },
    {
      id: 47,
      title: "Wall",
      description: "Partition",
      vertical: 4,
      horizontal: 6,
    },
    {
      id: 48,
      title: "Wall",
      description: "Partition",
      vertical: 4,
      horizontal: 7,
    },
    {
      id: 49,
      title: "Fire",
      description: "Use these paths to move around",
      vertical: 4,
      horizontal: 8,
    },
    {
      id: 50,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 4,
      horizontal: 9,
    },
    {
      id: 51,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 0,
    },
    {
      id: 52,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 1,
    },
    {
      id: 53,
      title: "Wall",
      description: "Partition",
      vertical: 5,
      horizontal: 2,
    },
    {
      id: 54,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 3,
    },
    {
      id: 55,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 4,
    },
    {
      id: 56,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 5,
    },
    {
      id: 57,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 6,
    },
    {
      id: 58,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 7,
    },
    {
      id: 59,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 8,
    },
    {
      id: 60,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 5,
      horizontal: 9,
    },
    {
      id: 61,
      title: "Wall",
      description: "Partition",
      vertical: 6,
      horizontal: 0,
    },
    {
      id: 62,
      title: "Wall",
      description: "Partition",
      vertical: 6,
      horizontal: 1,
    },
    {
      id: 63,
      title: "Wall",
      description: "Partition",
      vertical: 6,
      horizontal: 2,
    },
    {
      id: 64,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 6,
      horizontal: 3,
    },
    {
      id: 65,
      title: "Wall",
      description: "Partition",
      vertical: 6,
      horizontal: 4,
    },
    {
      id: 66,
      title: "Wall",
      description: "Partition",
      vertical: 6,
      horizontal: 5,
    },
    {
      id: 67,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 6,
      horizontal: 6,
    },
    {
      id: 68,
      title: "Fire",
      description: "You have fallen into the fire and died!",
      vertical: 6,
      horizontal: 7,
    },
    {
      id: 69,
      title: "Wall",
      description: "Use these paths to move around",
      vertical: 6,
      horizontal: 8,
    },
    {
      id: 70,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 6,
      horizontal: 9,
    },
    {
      id: 71,
      title: "Wall",
      description: "Partition",
      vertical: 7,
      horizontal: 0,
    },
    {
      id: 72,
      title: "Treasure Room",
      description: "Hey ! You just found a big pot of gold !",

      vertical: 7,
      horizontal: 1,
    },
    {
      id: 73,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 2,
    },
    {
      id: 74,
      title: "Wall",
      description: "Partition",
      vertical: 7,
      horizontal: 3,
    },
    {
      id: 75,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 4,
    },
    {
      id: 76,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 5,
    },
    {
      id: 77,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 6,
    },
    {
      id: 78,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 7,
    },
    {
      id: 79,
      title: "Wall",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 8,
    },
    {
      id: 80,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 7,
      horizontal: 9,
    },
    {
      id: 81,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 0,
    },
    {
      id: 82,
      title: "Wall",
      description: "Partition",
      vertical: 8,
      horizontal: 1,
    },
    {
      id: 83,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 2,
    },
    {
      id: 84,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 3,
    },
    {
      id: 85,
      title: "Wall",
      description: "Partition",
      vertical: 8,
      horizontal: 4,
    },
    {
      id: 86,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 5,
    },
    {
      id: 87,
      title: "Wall",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 6,
    },
    {
      id: 88,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 7,
    },
    {
      id: 89,
      title: "Wall",
      description: "Partition",
      vertical: 8,
      horizontal: 8,
    },
    {
      id: 90,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 8,
      horizontal: 9,
    },
    {
      id: 91,
      title: "Wall",
      description: "Partition",
      vertical: 9,
      horizontal: 0,
    },
    {
      id: 92,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 9,
      horizontal: 1,
    },
    {
      id: 93,
      title: "Wall",
      description: "Partition",
      vertical: 9,
      horizontal: 2,
    },
    {
      id: 94,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 9,
      horizontal: 3,
    },
    {
      id: 95,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 9,
      horizontal: 4,
    },
    {
      id: 96,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 9,
      horizontal: 5,
    },
    {
      id: 97,
      title: "Walkway",
      description: "Use these paths to move around",
      vertical: 9,
      horizontal: 6,
    },
    {
      id: 98,
      title: "Treasure room",
      description:
        "Hey! You've found a piece of wood ! You haven't found the treasure yet, keep searching !",
      vertical: 9,
      horizontal: 7,
    },
    {
      id: 99,
      title: "Wall",
      description: "Partition",
      vertical: 9,
      horizontal: 8,
    },
    {
      id: 100,
      title: "Treasure Room",
      description:
        "Hey! You've found a piece of wood ! You haven't found the treasure yet, keep searching !",
      vertical: 9,
      horizontal: 9,
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

  const logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const [seconds, setSeconds] = useContext(TimerContext);
  const [horizontal, sethorizontal] = useContext(HorizontalContext);
  const [vertical, setvertical] = useContext(VerticalContext);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      alert("Too late, the treasure has been stolen,you lost !");
    }
  });

  const repeatGame = () => {
    sethorizontal(0);
    setvertical(0);
    setPosition(1);
    setSeconds(8);
  };

  return (
    <Container>
      <Game>
        <Left>
          <Map sortedRooms={sortedRooms} />
          {seconds == 0 ? (
            <button onClick={() => repeatGame()}>Repeat</button>
          ) : null}

          {/* <ReplayModal>modal </ReplayModal> */}
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
            <p>{seconds}</p>
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
  padding:20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
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
  padding-left:20px;
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

const ReplayModal = styled.div`
  height: 500px;
  width: 500px;
  z-index: 100;
  background: blue;
`;
