import React from "react";
import { Link } from "react-router-dom";

const SearchResultsIndexItem = ({ recipe }) => (
  <li className="search-results-index-item">
    <Link to={`/recipes/${recipe.id}`}>
      <img src={recipe.image} alt={recipe.label} />
      <span>{recipe.label}</span>
    </Link>
  </li>
);

export default SearchResultsIndexItem;
