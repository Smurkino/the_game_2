import React from "react";
import "./Player.scss";

export const Player = ({ props }) => {
  const { name, properties, selected } = props;

  return (
    <div className={`player ${selected ? "selected" : ""}`}>
      {name}
      <p className="player_prop">Sila: {properties.strength}</p>
      <p className="player_prop">Zrecznosc: {properties.agility}</p>
      <p className="player_prop">Intelekt: {properties.mind}</p>
    </div>
  );
};
