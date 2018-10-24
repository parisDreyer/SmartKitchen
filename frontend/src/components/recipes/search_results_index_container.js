import { connect } from "react-redux";

import SearchResultsIndex from './search_results_index';
import { fetchRecipes } from '../../actions/recipes_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  const recipes = state.entities.recipes || []
  return { recipes: Object.values(recipes) };//asArray(state.entities) };
};

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsIndex);
