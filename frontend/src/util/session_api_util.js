import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import { fetchCurrentUser } from './user_api_util';

// const $ = window.$;
// export const GET_ERRORS = 'GET_ERRORS';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';
// export const RECEIVE_USER = 'RECEIVE_USER';

// We can use axios to set a default header
export const setAuthToken = token => {

    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};


export const registerUser = (userData, history) => //dispatch => {
    axios.post('/api/users/register', userData);
//     .then(res => {
//             // Save to localStorage
//             const { token } = res.data;
//             // Set token to ls
//             localStorage.setItem('jwtToken', token);
//             // Set token to Auth header
//             setAuthToken(token);
//             // Decode token to get user data
//             const decoded = jwt_decode(token);
//             // Set current user
//             dispatch(setCurrentUser(decoded));
//         })
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err ? err.response ? err.response.data : err.response : ''//err.response.data
//             })
//         );
// };

export const loginUser = userData =>// dispatch => {
    axios.post('/api/users/login', userData);
//         .then(res => {
//             // Save to localStorage
//             const { token } = res.data;
//             // Set token to ls
//             localStorage.setItem('jwtToken', token);
//             // Set token to Auth header
//             setAuthToken(token);
//             // Decode token to get user data
//             const decoded = jwt_decode(token);
//             // Set current user
//             dispatch(setCurrentUser(decoded));
//         })
//         .catch(err => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         }
//         );
// };
//window.loginUser = loginUser;

// Set logged in user
// export const setCurrentUser = decoded => {
//     return {
//         type: RECEIVE_CURRENT_USER,
//         payload: decoded
//     };
// };

export const logoutUser = () => {//dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    //dispatch(setCurrentUser({}));
};

window.logoutUser = logoutUser;

// export const receiveCurrentUser = user => {
//     return {
//         type: RECEIVE_CURRENT_USER,
//         payload: user
//     }
// };

export const fetchUser = () => //dispatch => {
    axios.get('/api/users/current');//.then(res => {
//         dispatch(receiveCurrentUser(res.data))
//     }).catch(err => {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         });
//     }
//     );;
// };
//window.fetchCurrentUser = fetchCurrentUser;
// export const startSession = user =>
//     axios.post('/api/session/login', user);

// export const endSession = () =>
// import axios from 'axios';
// import { receiveErrors } from '../actions/errors_actions';
// import { receiveUser } from '../actions/user_actions';


// export const fetchCurrentUser = () => //dispatch => {
    // axios.get('/api/users/current');
//         .then(res => dispatch(receiveUser(res))
//             .catch(err => dispatch(receiveErrors(Object.values(err.response.data)))))
// } 