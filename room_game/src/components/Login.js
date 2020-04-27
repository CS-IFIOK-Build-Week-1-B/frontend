import React, { useState } from "react";
import { withRouter } from "react-router-dom";

////////////// Utils
import { axiosWithAuth } from "../utils/Auth/axiosAuth";

//////////////  Styling
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { LoginDiv, FormDiv, NaviLink } from "../styling/LogAndRegister";

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
      .catch((err) => err);
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

        <NaviLink exact to="/register">
          Don't have an account ? Register now.
        </NaviLink>
      </FormDiv>
    </LoginDiv>
  );
};

export default withRouter(Login);
