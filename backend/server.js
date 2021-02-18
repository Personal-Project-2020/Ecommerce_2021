const express = require('express');
const products = require('./data/products.js');
const connectDB = require('./config/db.js');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('app send');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((index) => index._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log(`app is listening at ${PORT}`));
