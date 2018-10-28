import { connect } from "react-redux";

import SearchResultsIndex from "./search_results_index";
import {
  fetchRecipes,
  fetchBackupRecipes
} from "../../actions/recipes_actions";

const mapStateToProps = state => {
  const recipes = state.entities.recipes || [];
  const ingredients = state.entities.ingredients;
  return {
    recipes: Object.values(recipes),
    ingredients
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRecipes: ingredients => dispatch(fetchRecipes(ingredients)),
  fetchBackupRecipes: () => dispatch(fetchBackupRecipes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsIndex);
