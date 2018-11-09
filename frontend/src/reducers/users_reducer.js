import { receiveUser } from "../actions/user_actions";
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case receiveUser:
            let newState = merge({}, state)
            return newState;
        default:
            return state;
    }

};

export default usersReducer;