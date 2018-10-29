import {
  FETCH_RECIPES,
  FETCH_BACKUP_RECIPES
} from "../actions/recipes_actions";
import merge from 'lodash/merge';

function customRecipeMerge(toModState, additionalState){
    let newState = {};
    let addLen = Object.keys(additionalState).length;
    let newLength = Object.keys(toModState).length + addLen;
    for (let i = 0; i < newLength; ++i) {
        if (i >= addLen) {
            newState[i] = toModState[i - addLen];
            if(newState[i].directions) newState[i].url = `/recipes/${i}`; // swap the local website url to the new idx for finding in the state
        }
        else newState[i] = additionalState[i];
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
