import {
    RECEIVE_USER,
    // START_SESSION,
    END_SESSION
} from '../actions/session_actions';
import merge from "lodash/merge";
const nullUser = {
    currentUser: null,
    loggedIn: false
};


const sessionReducer = (oldState = nullUser, action) => {
    console.log('in session reducer', action);
    Object.freeze(oldState);
    const newState = {};
    console.log('session', action);
    switch (action.type) {
        case RECEIVE_USER: {
            const user = {
                email: action.res.data.email, id: action.res.data.userId
            };
            const token = action.token ? action.token.Authorization : action.res.data.token;
            // setAuthToken(token);
            return merge(newState, oldState, {
                currentUser: user,
                loggedIn: true
            });
        }
        case END_SESSION:
            // destroyAuthToken();
            return merge(newState, oldState, nullUser);
        default:
            return oldState;
    }
};

export default sessionReducer;