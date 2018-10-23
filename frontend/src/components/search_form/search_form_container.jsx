import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../../util/recipes_util";
import SearchForm from "./search_form";

const mapStateToProps = ({ errors }) => {
    return {
        formType: "search"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: ingredient => dispatch(fetchRecipes(ingredient))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
