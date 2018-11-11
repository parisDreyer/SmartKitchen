import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './errors_actions';

export const END_SESSION = 'END_SESSION';
export const RECEIVE_USER = "RECEIVE_USER";


const quitSession = res => ({
    type: END_SESSION,
    res
});


export const login = user => dispatch =>
    SessionAPIUtil.loginUser(user).then(
        res => dispatch(receiveUser(res)),
        err => dispatch(receiveErrors(Object.values(err.response.data)))
    );

export const logout = () => dispatch => {
    SessionAPIUtil.logoutUser();
    dispatch(quitSession());
}

export const receiveUser = (res, token) => ({
    type: RECEIVE_USER,
    res,
    token
});

export const fetchCurrentUser = decoded => dispatch =>
    SessionAPIUtil.fetchUser(decoded).then(
        res => dispatch(receiveUser(res)),
        err => dispatch(receiveErrors(Object.values(err.response.data)))
    );

export const registerUser = newUser => dispatch =>
    SessionAPIUtil.registerUser(newUser).then(
        res => dispatch(receiveUser(res)),
        err => dispatch(receiveErrors(Object.values(err.response.data)))
    );
