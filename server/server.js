const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const products = require('./data/products');

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

app.listen(5000, console.log('Server running on port 5000'));
