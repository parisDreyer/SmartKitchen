import axios from 'axios';
import { receiveErrors } from '../actions/errors_actions';
import { receiveUser } from '../actions/user_actions';


export const fetchCurrentUser = () => dispatch => {
    axios
        .get('/api/users/current')
        .then(res => dispatch(receiveUser(res))
            .catch(err => dispatch(receiveErrors(Object.values(err.response.data)))))
} 