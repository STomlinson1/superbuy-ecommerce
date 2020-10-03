import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider wraps the application

// The redux store
import store from './store';

// CSS files
import './bootstrap.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
	// Pass store into the Provider
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
