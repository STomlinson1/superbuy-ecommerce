import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // allows async request
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	productListReducer,
	productDetailReducer
} from './reducers/productReducers';

// combine multiple reducers for the application
// productList is the state that appears in the application
const reducer = combineReducers({
	productList   : productListReducer,
	productDetail : productDetailReducer
});

const initialState = {}; // the initial state of the application

const middleware = [ thunk ]; // an array of middlewares

// initialize the store with a reducer, initial state, and middlewares
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
