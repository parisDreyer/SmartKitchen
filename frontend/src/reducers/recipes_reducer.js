import {
  FETCH_RECIPES,
  FETCH_BACKUP_RECIPES
} from "../actions/recipes_actions";
import merge from 'lodash/merge';

function customRecipeMerge(newState, additionalState){
    let length = Object.keys(newState).length;
    for (let i = 0; i < additionalState.length; ++i) {
        [newState[i + length], newState[i]] = [newState[i], additionalState[i]];
    }
    return newState;
}

const recipesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case FETCH_RECIPES:
            let newState = Object.assign({}, state); // merge the backup with the api results
            return customRecipeMerge(newState, action.recipes);
        case FETCH_BACKUP_RECIPES:
            let oldState = Object.assign({}, state); // merge the backup with the api results
            return customRecipeMerge(oldState, action.recipes);//merge(oldState, backupState);
        default:
            return state;
    }
};

export default recipesReducer;
