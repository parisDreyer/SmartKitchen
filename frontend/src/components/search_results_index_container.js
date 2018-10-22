import { connect } from "react-redux";
import SearchResultsIndex from './search_results_index';

const mapStateToProps = state => ({
  recipes: state.entities.recipes,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsIndex);
