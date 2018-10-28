import { connect } from "react-redux";

import BackupRecipeShow from './backup_recipe_show';


const mapStateToProps = ({entities}, {recipeId}) => ({
    recipe: entities.recipes[recipeId]
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackupRecipeShow);
