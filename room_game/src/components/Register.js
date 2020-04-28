import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

////////////// Utils
import { axiosWithAuth } from "../utils/Auth/axiosAuth";

//////////////  Styling
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import { LoginDiv, RegisterForm, NaviLink } from "../styling/LogAndRegister";

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
        props.history.push("/welcome");
        setUserDetails(initialUserDetails);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <LoginDiv>
      <RegisterForm>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={RegisterNewUser}
        >
          <TextField
            style={{ paddingBottom: "20px" }}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            name="username"
            value={userDetails.username}
            onChange={onRegister}
            type="text"
          />

          <TextField
            style={{ paddingBottom: "20px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password1"
            value={userDetails.password1}
            onChange={onRegister}
            type="password"
          />

          <TextField
            style={{ paddingBottom: "20px" }}
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            name="password2"
            value={userDetails.password2}
            onChange={onRegister}
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
            Register
          </Button>
        </form>
        <NaviLink exact to="/">
          Already have an account? Login here!
        </NaviLink>
      </RegisterForm>
    </LoginDiv>
  );
};

export default withRouter(Register);
