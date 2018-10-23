import React from 'react';
import { Link } from "react-router-dom";
import "../../css/nav.css";

export default () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        <span>Home</span>
      </Link>
      <Link to="/signup" className="nav-link">
        <span>Sign Up</span>
      </Link>
    </nav>
  )
};
