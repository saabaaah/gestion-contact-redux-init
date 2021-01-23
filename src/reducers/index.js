import { combineReducers } from 'redux';
import ContactReducer from './contactReducer';

// redirection vers les reducers
export default combineReducers({
    contact:ContactReducer
});