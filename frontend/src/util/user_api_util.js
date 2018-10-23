import axios from 'axios';

export const createUser = ({ email, password }) =>
    axios.post('https://www.typedraw.app/api/users/register', {
        email,
        password
    });