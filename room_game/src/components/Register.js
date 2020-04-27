import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
////////////// Components
// import Login from "./Login";
////////////// Utils
import { axiosWithAuth } from "../Utils/axiosAuth";
// import Axios from "axios";
//////////////  Styling
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { withRouter } from "react-router-dom";

const Register = (props) => {
  const initialUserDetails = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
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
      .post("auth/register", userDetails)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        alert(res.data.message);
        props.history.push("/list-of-todos");
        setUserDetails(initialUserDetails);
      })
      .catch((err) => console.log(err));
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
          id="outlined-basicc"
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
          name="password"
          value={userDetails.password}
          onChange={onRegister}
          type="password"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
          value={userDetails.firstName}
          onChange={onRegister}
          type="text"
        />

        <TextField
          style={{ color: "white", paddingRight: "40px" }}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={userDetails.lastName}
          onChange={onRegister}
          type="text"
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









