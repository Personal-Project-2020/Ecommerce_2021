const express = require('express');
const products = require('./data/products.js');
const connectDB = require('./config/db.js');
const productHandler = require('./Routers/productRouter.js');
const { notFound, errorHandler } = require('./middleware/errorMiddleWare.js');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

connectDB();

app.use('/api/products', productHandler);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`app is listening at ${PORT}`));
