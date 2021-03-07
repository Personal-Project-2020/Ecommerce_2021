const express = require('express');
const products = require('./data/products.js');
const connectDB = require('./config/db.js');
const productHandler = require('./Routers/productRouter.js');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

connectDB();

app.use('/api/products', productHandler);

app.listen(PORT, console.log(`app is listening at ${PORT}`));
