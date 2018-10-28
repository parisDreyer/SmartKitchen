import React from 'react';
import { Route } from "react-router-dom";

import SearchResultsIndexItem from './search_results_index_item';
import '../../css/search_results_index.css';

class SearchResultsIndex extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        recipes: this.props.recipes
      };
    }
    componentDidMount() {
      // this.props.fetchRecipes();
    }

    componentWillUpdate(nextProps){
      if (this.props.recipes != nextProps.recipes){
        console.log("recipes!", nextProps.recipes);
        this.setState({ ['recipes']: nextProps.recipes});
      }
    }

    render() {
      // const { recipes } = this.props;
      return (
        <section className="recipe-list-page">
          <h1 className="favorite-recipe">Choose your favorite recipe and get cooking!</h1>
          <ul className="recipe-list">
            {this.state.recipes.map((recipe, idx) => <SearchResultsIndexItem key={idx} recipe={recipe.recipe} />)}
          </ul>
          <button onClick={() =>this.props.fetchBackupRecipes()}>Fetch All</button>
        </section>
      );
    }
}

export default SearchResultsIndex;
