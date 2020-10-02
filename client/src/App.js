import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<main>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/product/:id" component={ProductScreen} />
				</main>
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
