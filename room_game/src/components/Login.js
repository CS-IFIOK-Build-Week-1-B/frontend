import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../utils/axiosAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { withRouter, NavLink } from "react-router-dom";

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
    <div>
      <p>{userCredentials.username}</p>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onLogin}
      >
        <TextField
          id="outlined-basicc"
          label="UserName"
          variant="outlined"
          name="username"
          value={userCredentials.username}
          onChange={onHandleChange}
          type="text"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          value={userCredentials.password}
          onChange={onHandleChange}
          type="password"
        />
        <Button
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
    </div>
  );
};

export default withRouter(Login);
