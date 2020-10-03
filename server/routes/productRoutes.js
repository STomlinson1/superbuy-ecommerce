import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

router.get('/:id', (req, res) => {
	const product = products.find((product) => product._id === req.params.id);
	res.json(product);
});
