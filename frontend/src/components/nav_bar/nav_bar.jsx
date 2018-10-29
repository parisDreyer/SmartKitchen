import React from 'react';
import { Link } from "react-router-dom";
import "../../css/nav.css";
import logo from "../../images/logo3.jpg";

export default () => {

  return <div className="nav-bar">
      
        <img src={logo} alt={"logo"} className="logo" />
        <Link to="/" className="nav-link2">
          SMART KITCHEN
        </Link>
    
      
      <div className="nav-link">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>;
};




