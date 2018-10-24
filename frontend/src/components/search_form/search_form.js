import React from "react";
// import { View, Text, TextInput, Button } from "react-native";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      ingredient: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    this.props.processForm(this.state.ingredient);
  }

  render() {
    const { errors } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="ingredient"
          onChange={e => this.setState({ ["ingredient"]: e.target.value })}
        />

      <div>
         <button onClick={this.handleClick}>Search</button>
        </div>

        <div>
          {errors && errors.length ? <div>{errors.join(" ")}</div> : null}
        </div>

      </div>
    );
}
}

export default SearchForm;
