import {
  FETCH_RECIPES,
  FETCH_BACKUP_RECIPES
} from "../actions/recipes_actions";
import merge from 'lodash/merge';

function customRecipeMerge(newState, additionalState, adjustURL = false){
    let length = Object.keys(newState).length;

    for (let i = 0; i < additionalState.length; ++i) {
        let new_pos = i + length;

        [newState[new_pos], newState[i]] = [newState[i], additionalState[i]];
        if(adjustURL) newState[new_pos].url = `/recipes/${new_pos}`; // swap the local website url to the new idx for finding in the state
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
            return customRecipeMerge(oldState, action.recipes, true);//merge(oldState, backupState);
        default:
            return state;
    }
};

export default recipesReducer;
