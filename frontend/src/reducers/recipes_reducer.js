import { FETCH_RECIPES } from "../actions/recipes_actions";
import merge from 'lodash/merge';

const recipesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case FETCH_RECIPES:
            let newState = Object.assign({}, action.recipes);
            return merge({}, newState);
        default:
            return state;
    }
};

export default recipesReducer;
