import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
import "../../css/sessionform.css";


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
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleLogin() {
    this.props.loginUser(this.state);
  }

  handleSignup() {
    console.log(this.state);
    this.props.registerUser(this.state);
  }

  handleDemo() {
    return e => {
      e.preventDefault();
      this.props.demoLogin();
    };
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
    const { loginUser, registerUser, errors } = this.props;

    return <div className="session-form-outer">
        <div className="loginFormContainer">
          <label className="loginlabel">Email:</label>
          <input type="text" id="email" placeholder="email" onChange={this.update("email")} />

          <label className="loginlabel">Password:</label>
        <input type="text" secureTextEntry id="password" placeholder="password" onChange={this.update('password')} />

          <div className="session-submit">
            <button className="session-button" onClick={() => loginUser(this.state)}>
              Login
            </button>
            <button className="session-button" onClick={() => registerUser(this.state)}>
              Sign Up
            </button>
            <span className="session-button session-demo" onClick={this.handleDemo()}>
              Demo
            </span>
          </div>
        </div>
      </div>;
  }
}
{/* <div>
    <input
      type="text"
      placeholder="email"
      onChange={email => this.setState({ email })}
      />
  <input
        type="password"
        placeholder="password"
        onChange={password => this.setState({ password })}
        />

  <div>
        <button title="Log In" onClick={this.handleLogin}>Log In</button>
        <button title="Sign Up" onClick={this.handleSignup}>Sign Up</button>
    </div>

    <div>
        {errors.length ? <div>{errors.join(' ')}</div> : null}
    </div>
        </div> */}

export default SessionForm;
