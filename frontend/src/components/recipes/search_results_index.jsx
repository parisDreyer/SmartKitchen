import React from 'react';

import SearchResultsIndexItem from './search_results_index_item';
import '../../css/search_results_index.css';

class SearchResultsIndex extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        recipes: this.props.recipes
      };
    }

    componentWillUpdate(nextProps){
      if (this.props.recipes != nextProps.recipes){
        this.setState({ ['recipes']: nextProps.recipes});
      }
    }

    render() {
      let matchedRecipes = null;
      if (this.state.recipes) {
        matchedRecipes = this.state.recipes.filter(recipe => {
          let matchCount = 0;
          const recipeIngredients = recipe.recipe ? recipe.recipe.ingredients : recipe.ingredients ? recipe.ingredients : [];

        this.props.ingredients.forEach(ingredient => {
            recipeIngredients.forEach(recipeIngredient => {
              if (recipeIngredient.text ? recipeIngredient.text.includes(ingredient) : recipeIngredient.includes(ingredient)) {
                matchCount += 1;
              }
            });
          });

          if (this.props.ingredients.length > 2) {
            return matchCount / (recipeIngredients.length) >= 0.6;
          } else {
            return matchCount / (recipeIngredients.length) >= 0.3;
          }
        });
      }

      if (matchedRecipes) {
        return <section className="recipe-list-page">
          <h1 className="favorite-recipe">
            Choose your favorite recipe and get cooking!
          </h1>
          <ul className="recipe-list">
            {matchedRecipes.map((recipe, idx) => (
              <SearchResultsIndexItem key={idx} recipe={recipe.recipe || recipe} />
            ))}
          </ul>
        </section>;
      } else {
        return <section className="recipe-list-page">Fetching recipes!</section>
      }
    }
  }
  
  export default SearchResultsIndex;