import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { fetchRecipes, fetchBackupRecipes } from "../../actions/recipes_actions";
import { saveIngredients } from "../../actions/recipes_actions";
import isStopWord from "../../util/stop_words";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            ingredient: "",
            gotoIndex: false
        };
        this.handleClick = this.handleClick.bind(this);
        // this.handleVoiceInput = this.handleVoiceInput.bind(this);
        // this.voiceChangeInputHandle = window.setInterval(() => window.isRenderingSpeechInput && window.speechRecogTranscript != this.state.ingredient ?
        //     this.handleVoiceInput(window.speechRecogTranscript) : null, 1000);
    }

    handleClick() {
        sessionStorage.clear();
        let searchCriteria = this.state.ingredient.split(',').join(' ').split(' ').filter((w) => !isStopWord(w));
        let searchStr = searchCriteria.join(", ");
        this.props.processForm(searchStr); // get the recipes from the api
        this.props.backupRecipes(searchStr); // get the extra recipes from our local database
        this.props.saveIngredients(searchCriteria);
        // window.clearInterval(this.voiceChangeInputHandle);
        // this.props.history.push('index');
        window.location = "#/index"
    }

    // handleVoiceInput(ingredient) {
    //     this.setState({ ['ingredient']: ingredient });
    //     const inputfield = document.getElementById("search-input-field");
    //     inputfield.value = ingredient;

    // }

    render() {

        const { errors } = this.props;

        return <div className="search-bar">
            <input id="search-input-field" type="text" placeholder="Find a recipe" onChange={e => this.setState(
                  { ["ingredient"]: e.target.value }
                )} />

            <div className="search-bar-button">
              <button onClick={this.handleClick}>
                <i className="fas fa-search" />
              </button>
            </div>

            <div>
              {errors && errors.length ? (
                <div>{errors.join(" ")}</div>
              ) : null}
            </div>
          </div>;
    }
}

const mapStateToProps = ({ errors }) => ({
  formType: "search"
});

const mapDispatchToProps = dispatch => ({
  processForm: ingredient => dispatch(fetchRecipes(ingredient)),
  backupRecipes: ingredient => dispatch(fetchBackupRecipes(ingredient)),
  saveIngredients: ingredients => dispatch(saveIngredients(ingredients))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);