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

    render() {
        const { login, createUser, errors } = this.props;
        return <div className="loginContainer">
            <div className="loginFormContainer">
              <label className="loginlabel">
                Email:
                <input type="text" placeholder="email" onChange={email => this.setState(
                      { email }
                    )} className="logininput" />
              </label>

              <label className="loginlabel">
                Password:
                <input type="text" secureTextEntry placeholder="password" onChange={password => this.setState(
                      { password }
                    )} className="logininput" />
              </label>

              <div className="submit">
                <button onPress={() => login(this.state)} className="loginbutton">
                  Login
                </button>
                <button onPress={() => createUser(this.state)} className="loginbutton" > Sign Up
                </button>
              </div>

              <div>
                {errors.length ? <div>{errors.join(" ")}</div> : null}
              </div>
            </div>
          </div>;
    }
}

export default Auth;
