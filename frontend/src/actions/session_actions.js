import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './errors_actions';

// export const START_SESSION = 'START_SESSION';
export const END_SESSION = 'END_SESSION';
export const RECEIVE_USER = "RECEIVE_USER";

// export const startSession = (res, token) => ({
//     type: START_SESSION,
//     res,
//     token
// });

const quitSession = res => ({
    type: END_SESSION,
    res
});


//this is unnecessary/wrong
export const login = user => dispatch =>
    SessionAPIUtil.loginUser(user).then(
        res => //{
            dispatch(receiveUser(res)), //;
            // dispatch(startSession(res));
        //},
        err => dispatch(receiveErrors(Object.values(err.response.data)))
    );

export const logout = () => dispatch => SessionAPIUtil.logoutUser()
    .then(res => dispatch(quitSession(res)))
    .catch(err => console.log(err));

export const receiveUser = (res, token) => ({
    type: RECEIVE_USER,
    res,
    token
});

export const fetchCurrentUser = decoded => dispatch =>
    SessionAPIUtil.fetchUser(decoded).then(
        res => //{
            dispatch(receiveUser(res)),
        //},
        err => dispatch(receiveErrors(Object.values(err.response.data)))
    );

export const registerUser = newUser => dispatch =>
    SessionAPIUtil.registerUser(newUser).then(
        res => //{
            dispatch(receiveUser(res)),
        //dispatch(startSession(res));
        //},
        err => dispatch(receiveErrors(Object.values(err.response.data)))
    );
