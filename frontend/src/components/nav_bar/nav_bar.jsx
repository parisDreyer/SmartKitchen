import React from 'react';
import { Link } from "react-router-dom";
import "../../css/nav.css";
import logo from "../../images/logo3.jpg";
import { logout } from '../../actions/session_actions';

export default ({store}) => {
  console.log('current user', store.getState().sessions.currentUser);
  const opt = store.getState().sessions.currentUser ?
    <Link to="/signup" onClick={() => store.dispatch(logout())}>Sign Out</Link> : (< Link to="/signup" > Sign Up</Link>);

  return <div className="nav-bar">
      
        <img src={logo} alt={"logo"} className="logo" />
        <Link to="/" className="nav-link2">
          SMART KITCHEN
        </Link>
    
      
      <div className="nav-link">
        {opt}
      </div>
    </div>;
};
