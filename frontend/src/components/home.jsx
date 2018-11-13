import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

export default () => (
  <div>
    <div className="home-container">
      <div className="home-main">
        <h2 className="tagline">A Cooking App for Smart People</h2>
        <div className="slide">What's in your kitchen?</div>
        <p className="noneed">
          Let Smart Kitchen know what you've got on hand,
          <br />
          and we'll show delicious recipes you can make.
        </p>
        <br />
        <br />
        <Link to="/search" className="start">
          Get started now!
        </Link>
      </div>
    </div>
  </div>
);



