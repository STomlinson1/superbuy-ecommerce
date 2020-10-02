import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.send('Server is running');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((product) => product._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
