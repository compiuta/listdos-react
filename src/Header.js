import React from "react";
import { NavLink } from "react-router-dom";
import bird from "./bird.png";

const Header = () => {
  return (
    <header className="main-header">
      <span className="logo">
        <img src={bird} alt="" className="img-responsive" />
      </span>
      <NavLink
        to="/"
        exact
        activeClassName="active"
        className="header-category"
      >
        Tasks
      </NavLink>
      <NavLink
        to="/completed"
        activeClassName="active"
        className="header-category"
      >
        Completed
      </NavLink>
    </header>
  );
};

export default Header;
