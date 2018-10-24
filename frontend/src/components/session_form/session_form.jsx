import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
import "../../css/sessionform.css";


class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            email: '',
            password: ''
        };
    }

    handleDemo() {
        return (e) => {
            e.preventDefault();
            this.props.demoLogin();
        };
    }

    render() {
        const { login, createUser, errors } = this.props;
        return <div className="loginFormContainer">
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

            <div>
              {errors.length ? <div>{errors.join(" ")}</div> : null}
            </div>
          </div>;
    }
}

export default Auth;
