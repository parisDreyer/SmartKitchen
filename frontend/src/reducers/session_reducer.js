import {
    START_SESSION,
    END_SESSION
} from '../actions/session_actions';

const nullUser = {
    currentUser: null,
    loggedIn: false
};


const sessionReducer = (oldState = nullUser, action) => {
    Object.freeze(oldState);
    const newState = {};
    switch (action.type) {
        case RECEIVE_CURRENT_USER: {
            const userId = action.res.data.id;
            const token = action.token ? action.token.Authorization : action.res.data.token;
            setAuthToken(token);
            return merge(newState, oldState, {
                currentUser: userId,
                loggedIn: true
            });
        }
        case END_SESSION:
            destroyAuthToken();
            return merge(newState, oldState, nullUser);
        default:
            return oldState;
    }
};

export default sessionReducer;