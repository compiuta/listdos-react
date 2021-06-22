import React, { useState } from "react";
import { Link } from "react-router-dom";
import bird from "./bird.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (e) => {
    console.log(e.currentTarget.getAttribute("data-pagename"));

    setActiveLink(e.currentTarget.getAttribute("data-pagename"));
  };
  return (
    <header className="main-header">
      <span className="logo">
        <img src={bird} alt="" className="img-responsive" />
      </span>
      <Link
        onClick={handleClick}
        to="/"
        data-pagename="home"
        className={
          activeLink === "home" ? "header-category active" : "header-category"
        }
      >
        Tasks
      </Link>
      <Link
        onClick={handleClick}
        data-pagename="completed"
        to="/completed"
        className={
          activeLink === "completed"
            ? "header-category active"
            : "header-category"
        }
      >
        Completed
      </Link>
    </header>
  );
};

export default Header;
