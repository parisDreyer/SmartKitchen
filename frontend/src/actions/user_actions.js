import * as SessionAPIUtil from "../util/session_api_util";
import * as UsersAPIUtil from "../util/user_api_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = res => ({
  type: RECEIVE_USER,
  res
});

// This is repeated here to prevent dependency cycle
// Current login pattern might need rethinking
const START_SESSION = "START_SESSION";
const startSession = (res, token) => ({
  type: START_SESSION,
  res,
  token
});

export const fetchCurrentUser = decoded => dispatch =>
  UsersAPIUtil.fetchCurrentUser(decoded).then(
    res => {
      dispatch(receiveUser(res));
    },
    err => dispatch(receiveErrors(Object.values(err.response.data)))
  );

export const registerUser = newUser => dispatch =>
  SessionAPIUtil.registerUser(newUser).then(
    res => {
      dispatch(receiveUser(res));
      dispatch(startSession(res));
    },
    err => dispatch(receiveErrors(Object.values(err.response.data)))
  );
