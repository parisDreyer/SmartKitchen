import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import { login, registerUser, fetchCurrentUser } from "../../actions/session_actions";
import { receiveErrors } from "../../actions/errors_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors ? errors.session || [] : [],
    formType: "signup",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  const demo = { email: "user@user.com", password: "starwars" };
  return {
    registerUser: (user) => dispatch(registerUser(user)),
    loginUser: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login(demo)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
