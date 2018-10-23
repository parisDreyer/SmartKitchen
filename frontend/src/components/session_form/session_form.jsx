import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';


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
        return (
            <div>
                <input
                  type="text"
                    placeholder="email"
                    onChange={email => this.setState({ email })}
                />
              <input
                    type="text"
                    secureTextEntry
                    placeholder="password"
                    onChange={password => this.setState({ password })}
                />

              <div>
                    <button title="Log In" onPress={() => login(this.state)} />
                    <button title="Sign Up" onPress={() => createUser(this.state)} />
                </div>

                <div>
                    {errors.length ? <div>{errors.join(' ')}</div> : null}
                </div>
            </div>
        );
    }
}

export default Auth;
