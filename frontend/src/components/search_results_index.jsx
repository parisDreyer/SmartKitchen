import React from 'react';
import { Route } from "react-router-dom";

class SearchResultsIndex extends React.Component {
    componentDidMount() {

    }

    render() {
      const { recipes } this.props;

      return (
        <section>
          <Route
            path="/results/:recipeId"
            component={SearchResultsIndexItem}
          />
        </section>
      );
    }
}

export default SearchResultsIndex;