import React from "react";
import bird from "./bird.png";

const Header = () => {
  return (
    <header className="main-header">
      <span className="logo">
        <img src={bird} alt="" className="img-responsive" />
      </span>
      <span className="header-category active">Tasks</span>
    </header>
  );
};

export default Header;
