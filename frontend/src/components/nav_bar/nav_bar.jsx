import React from 'react';
import { Link } from "react-router-dom";
import "../../css/nav.css";
import logo from "../../images/logo3.jpg";
import { logout } from '../../actions/session_actions';
import { connect} from 'react-redux';
import SearchBar from '../search_form/searchbar';

const mapStateToProps = ({ sessions }) => ({
  currentUser: sessions ? sessions.currentUser : false
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


class NavBar extends React.Component{
  constructor(props, ownProps) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout();
  }
  render(){
    const opt = this.props.currentUser ?
      <Link to="/signup" onClick={this.handleLogout}>Sign Out</Link> : (< Link to="/signup" > Sign Up</Link>);
    return <div className="nav-bar">
      <div className="firstpart">
        <img src={logo} alt={"logo"} className="logo" />
        <Link to="/" className="nav-link2">
          SMART KITCHEN
        </Link>
      </div>
      <div className="midpart">
        <SearchBar/>
      </div>
      <div className="secondpart">
        <div className="nav-link">{opt}</div>
        </div>
        </div>
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
