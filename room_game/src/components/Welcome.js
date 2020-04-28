// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/Auth/axiosAuth";
import styled from "styled-components";

const Welcome = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("/api/adv/getrooms/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Game>
        <Left>
          <Map>Map</Map>
          <Controll>
            <ControllText>
              <p>
                Click the arrow keys to navigate through the map. "Say"
                something to other players with the input box below.
              </p>
            </ControllText>
          </Controll>
          <Chat>Chat</Chat>
        </Left>
        <Right>Right</Right>
      </Game>
    </Container>
  );
};

export default Welcome;

// Styling

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Game = styled.div`
  width: 75%;
  height: 75%;
  border: 2px solid red;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border: 2px solid blue;
`;

const Right = styled.div`
  border: 2px solid green;
  width: 30%;
`;

const Map = styled.div`
  height: 60%;
  border: 2px solid orange;
`;

const Controll = styled.div`
  height: 30%;
  border: 2px solid purple;
`;

const Chat = styled.div`
  height: 10%;
  border: 2px solid yellow;
`;

const ControllText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  font-size: 26px;
  padding: 5px;
`;

