import axios from 'axios';

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


export const registerUser = (userData, history) => axios.post('/api/users/register', userData);

export const loginUser = userData => axios.post('/api/users/login', userData);


export const logoutUser = () => {//dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
};

window.logoutUser = logoutUser;

export const fetchUser = () => axios.get('/api/users/current');