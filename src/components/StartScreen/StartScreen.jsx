import React from "react";
import { StyledLink } from "../Styled";
import "./StartScreen.scss";

export const StartScreen = () => {
  return (
    <div className="App">
      <StyledLink to="/player" content="Start" />
    </div>
  );
};
