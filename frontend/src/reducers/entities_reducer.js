import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import ingredients from './ingredients_reducer';


export default combineReducers({
    recipes,
    ingredients
});

