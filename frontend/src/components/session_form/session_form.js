import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
import "../../css/sessionform.css";
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(e, field) {
      this.setState({
        [field]: e.target.value
      });
  }

  handleLogin() {
    this.props.loginUser(this.state);
    this.props.history.push("/");
  }

  handleSignup() { 
    this.props.registerUser(this.state);
    this.props.history.push("/");
  }

  handleDemo() {
      this.props.demoLogin();
    this.props.history.push("/");
  }

  componentWillUnmount() {
    // this.props.clearError();
  }

  render() {
    // const { loginUser, registerUser, errors } = this.props;

    return <div className="session-form-outer">
        <div className="loginFormContainer">
          <label className="loginlabel">Email:</label>
          <input type="text" id="email" placeholder="email" onChange={(e) => this.update(e, "email")} />

          <label className="loginlabel">Password:</label>
        <input type="text" secureTextEntry id="password" placeholder="password" onChange={(e) => this.update(e, 'password')} />

          <div className="session-submit">
            <button className="session-button" onClick={this.handleLogin}>
              Login
            </button>
            <button className="session-button" onClick={this.handleSignup}>
              Sign Up
            </button>
            <span className="session-button session-demo" onClick={this.handleDemo}>
              Demo
            </span>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(SessionForm);
