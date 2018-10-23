import React from 'react';
import { Route } from "react-router-dom";

import SearchResultsIndexItem from './search_results_index_item';

class SearchResultsIndex extends React.Component {
    componentDidMount() {
      this.props.fetchRecipes();
    }

    render() {
      const { recipes } = this.props;

      return (
        <section>
          <ul>
            {recipes.map(recipe => <SearchResultsIndexItem key={recipe.id} recipe={recipe} />)}
          </ul>
        </section>
      );
    }
}

export default SearchResultsIndex;
