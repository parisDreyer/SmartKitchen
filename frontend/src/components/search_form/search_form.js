import React from "react";
import isStopWord from "../../util/stop_words";
import SamplerResIndex from '../recipes/search_results_index_container';

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
      this.handleVoiceInput(window.speechRecogTranscript) : null, 100);
    this.props.backupRecipes("mushroom");
  }

  handleClick() {
    sessionStorage.clear();
    let searchCriteria = this.state.ingredient.split(',').join(' ').split(' ').filter((w) => !isStopWord(w));
    let searchStr = searchCriteria.join(", ");
    this.props.processForm(searchStr); // get the recipes from the api
    this.props.backupRecipes(searchStr); // get the extra recipes from our local database
    this.props.saveIngredients(searchCriteria);
    window.clearInterval(this.voiceChangeInputHandle);


    // reset the stored state of the speech transcript
    let trnscrptstate = document.getElementById("switch-render-util-btn");
    if (window.isRenderingSpeechInput) trnscrptstate.click();

    this.props.history.push('index');
  }

  handleVoiceInput(ingredient){
    this.setState({ ['ingredient']: ingredient });
    const inputfield = document.getElementById("search-input-field");
    if (inputfield) inputfield.value = ingredient;

  }

  render() {

    const { errors } = this.props;

    return <div className="search-form">
        <textarea id="search-input-field"
         type="text" placeholder="search by ingredient"
         onChange={e => this.setState({ ["ingredient"]: e.target.value })}
         
        />

        <div className="search-button">
          <button onClick={this.handleClick}>Search</button>
        </div>

        <div>
          {errors && errors.length ? <div>{errors.join(" ")}</div> : null}
        </div>

        <div className="palette-sampler">
          <SamplerResIndex doMatchCheck={false} headerText={"Trending Recipes"}/>
        </div>
      </div>;
}
}

export default SearchForm;
