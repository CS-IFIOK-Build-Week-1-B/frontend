import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Welcome from "./components/Welcome";
import "./App.css";
import PrivateRoute from "./utils/Auth/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/welcome" component={Welcome} />
    </div>
  );
}

export default App;

// usergaming, gaming111
