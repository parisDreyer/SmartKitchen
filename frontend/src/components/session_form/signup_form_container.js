import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../actions/user_actions";
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
  return {
    // processForm: user => dispatch(registerUser(user))
    signup: (user) => dispatch(createUser(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
