const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Create new cart
router.post('/', async (req, res) => {
  const cart = new Cart(req.body)};
  
