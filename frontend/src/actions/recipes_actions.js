import * as APIUtil from '../util/recipes_util';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_INGREDIENTS = "SAVE_INGREDIENTS";

export const fetchRecipes = (ingredients) => dispatch => (
  APIUtil.fetchRecipes(ingredients).then(recipes => (dispatch(receiveRecipes(recipes)))
));

export const receiveRecipes = (recipes) => ({
  type: FETCH_RECIPES,
  recipes: JSON.parse(recipes.request.response).hits
});

export const saveIngredients = (ingredients) => ({
  type: SAVE_INGREDIENTS,
  ingredients
});
