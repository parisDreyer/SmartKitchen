import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { receiveErrors } from "../../actions/errors_actions";
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {

    return {
        errors: errors.session[0],
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {

    const demo = { username: "guest", password: "password" };
    return {

        login: (user) => dispatch(login(user)),
        demoLogin: () => dispatch(login(demo)),
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
