import { combineReducers } from 'redux';
import entities from './entities_reducer';
import sessions from './session_reducer';


const rootReducer = combineReducers({
    entities,
    sessions
});

export default rootReducer;