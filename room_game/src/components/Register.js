import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
////////////// Components
// import Login from "./Login";
////////////// Utils
import { axiosWithAuth } from "../utils/Auth/axiosAuth";
// import Axios from "axios";
//////////////  Styling
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { withRouter } from "react-router-dom";

const Register = (props) => {
  const initialUserDetails = {
    username: "",
    password1: "",
    password2: "",
  };

  const [userDetails, setUserDetails] = useState(initialUserDetails);

  const onRegister = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  });
  const classes = useStyles();
  const RegisterNewUser = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/registration/", userDetails)
      .then((res) => {
        window.localStorage.setItem("token", res.data.key);
        alert(res.data.message);
        console.log(res);
        console.log(res.data);
        // props.history.push("/list-of-todos");
        setUserDetails(initialUserDetails);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={RegisterNewUser}
      >
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          name="username"
          value={userDetails.username}
          onChange={onRegister}
          type="text"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password1"
          value={userDetails.password1}
          onChange={onRegister}
          type="password"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          name="password2"
          value={userDetails.password2}
          onChange={onRegister}
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
    </div>
  );
};

export default withRouter(Register);
