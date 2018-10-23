import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../../styles/styles";

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
      <View>
        <TextInput
          style={styles.input}
          placeholder="ingredient"
          onChangeText={ingredient => this.setState({ ingredient })}
        />

        <View style={styles.row}>
         <Button title="Search" onPress={() => this.props.fetchRecipes(this.state.ingredient)} />
        </View>

        <View style={styles.error}>
          {errors.length ? <Text>{errors.join(" ")}</Text> : null}
        </View>

      </View>
    );
}
}

export default Auth;
