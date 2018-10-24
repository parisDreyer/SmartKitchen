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
        this.handleDemo = this.handleDemo.bind(this);
    }


    handleLogin(){
      this.props.login(this.state);
    }

    handleSignup(){
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
        <div className="loginFormContainer">
            <label>Email:</label>
            <input type="text" placeholder="email" onChange={email => this.setState(
                  { email }
                )} />

            <label>Password:</label>
            <input type="text" secureTextEntry placeholder="password" onChange={password => this.setState(
                  { password }
                )} />

            <div className="submit">
              <button onClick={this.handleLogin}>Login</button>
              <button onClick={this.handleSignup}>Sign Up</button>
              <span className="demo" onPress={this.handleDemo()}>
                Demo
              </span>
            </div>

        
          </div>
          );
    }
}

export default SessionForm;
