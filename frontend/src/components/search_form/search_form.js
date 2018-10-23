import React from "react";
// import { View, Text, TextInput, Button } from "react-native";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      ingredient: ""
    };
  }

  render() {
    const { errors } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="ingredient"
          onChange={ingredient => this.setState({ ingredient })}
        />

      <div>
         <button title="Search" onPress={() => this.props.fetchRecipes(this.state.ingredient)} />
        </div>

        <div>
          {errors && errors.length ? <div>{errors.join(" ")}</div> : null}
        </div>

      </div>
    );
}
}

export default Auth;
