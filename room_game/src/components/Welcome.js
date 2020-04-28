// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/Auth/axiosAuth";
import styled from "styled-components";
import img from "../utils/images/city.jpg";
import mapimage from "../utils/images/filler.jpg";
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

  const logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <Container>
      <Game>
        <Left>
          <Map></Map>
          <Control>
            <ControlText>
              <p>
                Click the arrow keys to navigate through the map. "Say"
                something to other players with the input box below.
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
            {rooms[10] ? (
              <span>
                <p>Welcome to {rooms[10].title}</p>
                <br />
                <p>{rooms[10].description}</p>
              </span>
            ) : (
              <p>No</p>
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

const Map = styled.div`
  height: 60%;
  background-image: url(${mapimage});
  background-size: cover;
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
  letter-spacing:3px;
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
  font-size: 32px;
  letter-spacing: 1px;
  padding: 5px;
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
