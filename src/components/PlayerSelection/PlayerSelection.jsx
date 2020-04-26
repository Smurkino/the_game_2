import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../Styled";
import { Player } from "./";
import { playersData } from "./playersData";
import PlayersContext from "../../context/PlayersContext";

import "./PlayerSelection.scss";

export const PlayerSelection = () => {
  const [state, setState] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useContext(PlayersContext);

  const { push } = useHistory();

  const handleClick = (player) => {
    if (state === 2 && player.selected) {
      player.selected = !player.selected;
      setState(state - 1);
    }
    if (state > 1) {
      return;
    } else {
      player.selected = !player.selected;
      if (player.selected) {
        setState(state + 1);
      } else {
        setState(state - 1);
      }
    }
  };

  const startGame = () => {
    if (state === 2) {
      let selectedPlayers = {};
      playersData.map((player) => {
        if (player.selected) {
          console.log("wybrany: ", player.name);
          selectedPlayers[`${player.id}`] = player;
        }
      });
      setSelectedPlayers(selectedPlayers);
      push("/campaign");
    }
  };

  return (
    <div className="selection">
      <h1>Wybierz zawodnikow</h1>
      <div className="selection-grid">
        {playersData.map((player) => (
          <div key={player.id} onClick={() => handleClick(player)}>
            <Player props={player} />
          </div>
        ))}
      </div>
      <div onClick={startGame}>
        <Button content={"Begin!"} />
      </div>
    </div>
  );
};
