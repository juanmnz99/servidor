const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// List all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Get product by id
router.get('/:pid', async (req, res) => {
  const product = await Product.findById(req.params.pid);
  res.send(product);
});

// Add new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

// Update product
router.put('/:pid', async (req, res) => {
  const product = await Product.findById(req.params.pid);
  product.title = req.body.title;
  product.description = req.body.description;
  product.code = req.body.code;
  product.price = req.body.price;
  product.status = req.body.status;
  product.stock = req.body.stock;
  product.category = req.body.category;
  product.thumbnails = req.body.thumbnails;
  await product.save();
  res.send(product);
});

// Delete product
router.delete('/:pid', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.pid);
  res.send(product);
});

module.exports = router;
