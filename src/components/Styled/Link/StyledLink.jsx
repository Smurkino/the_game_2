import React from "react";
import { Link } from "react-router-dom";
import "./StyledLink.scss";

export const StyledLink = ({ type = "", content, to }) => {
  return (
    <div>
      <Link className={`link link-${type}`} to={to}>
        {content}
      </Link>
    </div>
  );
};
