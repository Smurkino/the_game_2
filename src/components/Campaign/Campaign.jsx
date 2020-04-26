import React, { useContext } from "react";
import PlayersContext from "../../context/PlayersContext";

import "./Campaign.scss";

export const Campaign = () => {
  const [players, updatePlayers] = useContext(PlayersContext);

  console.log(players);
  return <div>WALKA!</div>;
};
