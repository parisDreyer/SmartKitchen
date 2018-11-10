import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
// import users from "./users_reducer";
import ingredients from './ingredients_reducer';

export default combineReducers({
    recipes,
    // users,
    ingredients
});
