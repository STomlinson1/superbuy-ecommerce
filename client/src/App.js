import React, { Fragment } from 'react';

import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
	return (
		<Fragment>
			<Header />
			<Container>
				<main>
					<HomeScreen />
				</main>
			</Container>
			<Footer />
		</Fragment>
	);
};

export default App;
