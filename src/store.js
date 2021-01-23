import {createStore} from 'redux';
import rootReducer from './reducers';

// le state initial
const initialState = {};

// créer un store 
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;