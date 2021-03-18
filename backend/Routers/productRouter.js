const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// GET all products
// GET:ID get products by id
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.send(product);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product Not Found');
    }
  })
);
module.exports = router;
