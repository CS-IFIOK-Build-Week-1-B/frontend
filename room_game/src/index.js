import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlayerProvider } from "./components/PlayerContext";
import { TimerProvider } from "./components/TimerContext";
import { HorizontalProvider } from "./components/HorizontalContext";
import { VerticalProvider } from "./components/VerticalContext";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VerticalProvider>
        <HorizontalProvider>
          <TimerProvider>
            <PlayerProvider>
              <App />
            </PlayerProvider>
          </TimerProvider>
        </HorizontalProvider>
      </VerticalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
