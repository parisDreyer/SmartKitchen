import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="home-container">
    <div className="home-main">
      <h2>Smart Kitchen: A Cooking App for Smart People</h2>
      <h3>What's in your kitchen?</h3>
      <p>No need to go shopping! Let Smart Kitchen know what you've got on hand, and we'll show you delicious recipes you can make.</p>
      <Link to="/search" >Get started now!</Link>
    </div>
  </div>
);