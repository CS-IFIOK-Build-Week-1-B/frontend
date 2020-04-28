import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import PrivateRoute from "./utils/Auth/PrivateRoute";
import { GlobalStyles } from "./styling/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/welcome" component={Welcome} />
    </Container>
  );
}

export default App;

// usergaming, gaming111

const Container = styled.div`
  /* @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap"); */
  /* font-family: "Roboto Condensed", sans-serif !important; */
`;
