import React from 'react';
import { Route } from "react-router-dom";

import SearchResultsIndexItem from './search_results_index_item';

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
        <section>
          <h1>Choose a yummy recipe and get cooking!</h1>
          <ul>
            {this.state.recipes.map((recipe, idx) => <SearchResultsIndexItem key={idx} recipe={recipe.recipe} />)}
          </ul>
        </section>
      );
    }
}

export default SearchResultsIndex;
