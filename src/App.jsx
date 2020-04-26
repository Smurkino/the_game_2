import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PlayersContext from "./context/PlayersContext";
import { StartScreen, PlayerSelection, Campaign } from "./components";

import "./App.scss";

const App = () => {
  const players = useState({});

  return (
    <div className="app">
      <PlayersContext.Provider value={players}>
        <Router>
          <Switch>
            <Route exact path="/">
              <StartScreen />
            </Route>
            <Route exact path="/player">
              <PlayerSelection />
            </Route>
            <Route exact path="/campaign">
              <Campaign />
            </Route>
          </Switch>
        </Router>
      </PlayersContext.Provider>
    </div>
  );
};

export default App;
