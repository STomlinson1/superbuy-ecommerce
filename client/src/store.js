import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // allows async request
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({}); // combine multiple reducers for the application

const initialState = {}; // the initial state of the application

const middleware = [ thunk ]; // an array of middlewares

// initialize the store with a reducer, initial state, and middlewares
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
