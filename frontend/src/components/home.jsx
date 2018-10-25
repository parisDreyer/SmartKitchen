import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

export default () => (
  <div className="home-container">
    <div className="home-main">
      <h2 className="h2text"> Smart Kitchen: A Cooking App for Smart People</h2>
      <marquee behavior="alternate" className="slide">
        What's in your kitchen?
      </marquee>
      <p className="noneed">
        No need to go shopping!
        <br /> Let Smart Kitchen know what you've got on hand,
        <br />
        and we'll show you delicious recipes you can make.
      </p>
      <Link to="/search" className="start">Get started now!</Link>
    </div>
  </div>
);