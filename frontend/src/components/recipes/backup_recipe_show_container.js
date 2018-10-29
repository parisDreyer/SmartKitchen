import { connect } from "react-redux";

import BackupRecipeShow from './backup_recipe_show';


const mapStateToProps = ({entities}) => {
  let recipeId = window.location.toString().match(/recipes\/(.*)/)[1]
  return ({
    recipe: recipeId ? entities.recipes[recipeId] : "404 Not Found"
  });
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackupRecipeShow);
