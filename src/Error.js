import React from "react";
import pig from "./pig.jpg";
const Home = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <img src={pig} alt="pig" className="img-responsive" />
    </div>
  );
};

export default Home;
