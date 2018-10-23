import * as APIUtil from '../util/recipes_util';
export const FETCH_RECIPES = 'FETCH_RECIPES';
;




export const fetchRecipes = (ingredient) => dispatch => (
  APIUtil.fetchRecipes(ingredient).then(recipes => (dispatch(receiveRecipes(recipes)))
));



export const receiveRecipes = (recipes) => ({
    type: FETCH_RECIPES,
    recipes: recipes.hits
});
