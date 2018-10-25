import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
import "../../css/sessionform.css";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin() {
    this.props.login(this.state);
  }

  handleSignup() {
    this.props.createUser(this.state);
  }

  handleDemo() {
    return (e) => {
      e.preventDefault();
      this.props.demoLogin();
    };
  }

  render() {
    const { login, createUser, errors } = this.props;
    
    return (
      <div className="session-form-outer">
        <div className="loginFormContainer">
          <label className="loginlabel">Email:</label>
          <input type="text" placeholder="email" onChange={email => this.setState(
                { email }
              )} />

          <label className="loginlabel">Password:</label>
          <input type="text" secureTextEntry placeholder="password" onChange={password => this.setState(
                { password }
              )} />

          <div className="submit">
            <button onPress={() => login(this.state)}>Login</button>
            <button onPress={() => createUser(this.state)}>
              Sign Up
            </button>
            <span className="demo" onPress={this.handleDemo()}>
              Demo
            </span>
          </div>
        </div>
      </div>
    );
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
