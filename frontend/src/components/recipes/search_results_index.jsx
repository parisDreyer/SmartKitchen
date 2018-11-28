import React from 'react';

import SearchResultsIndexItem from './search_results_index_item';
import '../../css/search_results_index.css';

class SearchResultsIndex extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        recipes: this.props.recipes,
        ingredients: this.props.ingredients
      };
      sessionStorage['canUpdateFromSession'] = true;
    }
    
    componentWillUpdate(nextProps){
      if (nextProps.recipes && nextProps.recipes.length > 0) sessionStorage["recipe_results"] = JSON.stringify(nextProps.recipes);
      if (nextProps.ingredients && nextProps.ingredients.length > 0) sessionStorage["recipe_ingredients"] = JSON.stringify(nextProps.ingredients);

      if (nextProps.recipes && this.props.recipes != nextProps.recipes) {
        this.setState({["recipes"]: nextProps.recipes});
      }
    }

    readStateFromSessionStorage(doso){
      if (doso && sessionStorage["canUpdateFromSession"]) {
        sessionStorage["canUpdateFromSession"] = false;
        this.setState({
          ["recipes"]: JSON.parse(sessionStorage["recipe_results"])
        });
        this.setState({
          ["ingredients"]: JSON.parse(
            sessionStorage["recipe_ingredients"]
          )
        });
      }
    }

    matchesForRecipes(){
      let matchedRecipes = null;

      if (this.state.recipes) {
        matchedRecipes = this.state.recipes.filter(recipe => {
          let matchCount = 0;
          const recipeIngredients = recipe.recipe ? recipe.recipe.ingredients : recipe.ingredients ? recipe.ingredients : [];

          this.state.ingredients.forEach(ingredient => {
            recipeIngredients.forEach(recipeIngredient => {
              if (recipeIngredient.text ? recipeIngredient.text.includes(ingredient) : recipeIngredient.includes(ingredient)) {
                matchCount += 1;
              }
            });
          });

          if (this.state.ingredients.length > 2) {
            // if user input is 3 ingredients or more, recipes will be filtered to show
            // only those for which the user has input at least 60% of the listed ingredients
            return matchCount / recipeIngredients.length >= 0.6;
          } else {
            // if user input is 1 to 2 ingredients, recipes will be filtered to show
            // only those for which the user has input at least 30% of the listed ingredients
            return matchCount / recipeIngredients.length >= 0.3;
          }
        });
      }

      return matchedRecipes;
    }

    recipeList(matchedRecipes){
      return matchedRecipes.length > 0 ? <section className="recipe-list-page">
          <h1 className="favorite-recipe">
            Choose your favorite recipe and get cooking!
          </h1>
          <ul className="recipe-list">
            {matchedRecipes.map((recipe, idx) => (
              <SearchResultsIndexItem
                key={idx}
                recipe={recipe.recipe || recipe}
              />
            ))}
          </ul>
        </section> : <section className="recipe-list-page">
          <h1 className="favorite-recipe">
            Looks like your search didn't return any recipes
          </h1>
          <div className="search-try-box">
            Did you try:
            <ul className="search-try-list">
              <li>a search with fewer words</li>
              <li>a search with only food words</li>
              <li>
                If you still don't see it, email us and we'll add the
                recipe!
              </li>
              <li>lukepdreyer@gmail.com</li>
            </ul>
          </div>
        </section>;
    }
    render() {

      this.readStateFromSessionStorage(this.state.recipes.length === 0 && sessionStorage["recipe_results"]);

      let matchedRecipes = this.matchesForRecipes();

      if (matchedRecipes) return this.recipeList(matchedRecipes);
      else return <section className="recipe-list-page">Fetching recipes!</section>
    }
  }
  
  export default SearchResultsIndex;