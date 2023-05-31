const express = require('express');
const products = require('../data/products');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params._id);
  res.json(product);
});

module.exports = router;
