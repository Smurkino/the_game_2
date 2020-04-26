import React from "react";
import "./Button.scss";

export const Button = ({ type = "primary", content }) => {
  return <button className={`button button-${type}`}>{content}</button>;
};
