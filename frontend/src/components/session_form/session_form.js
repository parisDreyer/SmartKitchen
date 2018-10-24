import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';


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

    handleLogin(){
      this.props.login(this.state);
    }

    handleSignup(){
      this.props.createUser(this.state);
    }
    render() {
        const { login, createUser, errors } = this.props;
        return (
            <div>
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
            </div>
        );
    }
}

export default SessionForm;
