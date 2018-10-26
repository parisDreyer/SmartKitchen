import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      ingredient: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleVoiceInput = this.handleVoiceInput.bind(this);
    this.voiceChangeInputHandle = window.setInterval(() => window.isRenderingSpeechInput && window.speechRecogTranscript != this.state.ingredient ?
    this.handleVoiceInput(window.speechRecogTranscript) : null, 1000);
  }


  handleClick() {

    let ingredientsArray = this.state.ingredients.split(',');
    this.props.processForm(this.state.ingredient);
    this.props.saveIngredients(ingredientsArray);
    window.clearInterval(this.voiceChangeInputHandle);
    this.props.history.push('index');
  }

  handleVoiceInput(ingredient){
    this.setState({ ['ingredient']: ingredient });
    const inputfield = document.getElementById("search-input-field");
    inputfield.value = ingredient;

  }

  render() {

    const { errors } = this.props;

    return <div className="search-form">
        <input id="search-input-field"
         type="text" placeholder="ingredient"
         onChange={e => this.setState({ ["ingredient"]: e.target.value })}
         
        />

        <div className="search-button">
          <button onClick={this.handleClick}>Search</button>
        </div>

        <div>
          {errors && errors.length ? <div>{errors.join(" ")}</div> : null}
        </div>
      </div>;
}
}

export default SearchForm;
