import React, { Fragment, useEffect } from 'react';
import {
	useDispatch, // Used to call an action
	useSelector // Used to select parts of the state
} from 'react-redux';
import { listProducts } from '../actions/productActions';

import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
	const dispatch = useDispatch(); //define dispatch

	// Get the productList state from the Redux store
	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;

	useEffect(
		() => {
			dispatch(listProducts()); //dispatch the listProducts action
		},
		[ dispatch ]
	);

	return (
		<Fragment>
			<h1>Latest Products</h1>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</Fragment>
	);
};

export default HomeScreen;
