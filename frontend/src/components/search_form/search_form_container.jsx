import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { fetchRecipes, fetchBackupRecipes } from "../../actions/recipes_actions";
import { saveIngredients } from "../../actions/recipes_actions";
import SearchForm from "./search_form";

const mapStateToProps = ({ errors }) => ({
  formType: "search"
});

const mapDispatchToProps = dispatch => ({
  processForm: ingredient => dispatch(fetchRecipes(ingredient)),
  backupRecipes: ingredient => dispatch(fetchBackupRecipes(ingredient)),
  saveIngredients: ingredients => dispatch(saveIngredients(ingredients))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
