import React from "react";
// import { Link } from "react-router-dom";


function recipeContents(recipe){
  return recipe.directions ? (
      <button
        onClick={() => window.location = window.location.toString().replace("/index", recipe.url)}
        style={{ display: "table-cell" }} target="_blank">
        <img className="recipe-img" src={recipe.image} alt={recipe.label} />
        <span className="recipe-label">{recipe.label}</span>
      </button>
    ) : (
      <a href={`${recipe.url}`} style={{ display: "table-cell" }} target="_blank">
        <img className="recipe-img" src={recipe.image} alt={recipe.label} />
        <span className="recipe-label">{recipe.label}</span>
      </a>
    );
}


const SearchResultsIndexItem = ({ recipe }) => (
  <li className="search-results-index-item">
    {recipeContents(recipe)}
  </li>
);


export default SearchResultsIndexItem;
