import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../utils/Auth/axiosAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../utils/images/finalfantasy.jpg";
// import { BrowserRouter as NavLink } from "react-router-dom";
// import Register from "./Register";
// import Home from "./Home";

const Login = (props) => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  const initialUserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onHandleChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const onLogin = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login/", userCredentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.key);
        alert("cool");
        setUserCredentials(initialUserCredentials);
        props.history.push("/welcome");
      })
      .catch((err) => ("serverstuff", err));
  };

  return (
    <LoginDiv>
      <FormDiv>
        {/* <p>{userCredentials.username}</p> */}

        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={onLogin}
        >
          <TextField
            style={{ paddingBottom: "20px" }}
            id="outlined-basicc"
            label="UserName"
            variant="outlined"
            name="username"
            value={userCredentials.username}
            onChange={onHandleChange}
            type="text"
          />

          <TextField
            style={{ paddingBottom: "20px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={userCredentials.password}
            onChange={onHandleChange}
            type="password"
          />
          <Button
            style={{ marginBottom: "20px" }}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<VpnKeyOutlinedIcon />}
            type="submit"
          >
            LogIn
          </Button>
        </form>

        <NavLink exact to="/Register">
          Don't have an account ? Register now.
        </NavLink>
      </FormDiv>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid red;
  background-image: url(${img});
  background-size: cover;
`;

const FormDiv = styled.div`
  height: 250px;
  width: 250px;
  border: 5px solid blue;
  padding: 30px;
`;

export default withRouter(Login);
