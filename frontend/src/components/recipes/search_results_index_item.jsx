import React from "react";
import { Link } from "react-router-dom";

const SearchResultsIndexItem = ({ recipe }) => (
  <li className="search-results-index-item">
    <a href={`${recipe.url}`} style={{ display: "table-cell" }} target="_blank">
      <img className="recipe-img" src={recipe.image} alt={recipe.label} />
      <span className="recipe-label">{recipe.label}</span>
    </a>
  </li>
);


export default SearchResultsIndexItem;
