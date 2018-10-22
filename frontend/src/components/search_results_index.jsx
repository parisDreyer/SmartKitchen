import React from 'react';
import { Route } from "react-router-dom";

class SearchResultsIndex extends React.Component {
    componentDidMount() {

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