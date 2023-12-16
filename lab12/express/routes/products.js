const express = require('express');
const router = express.Router();


let products = [
  { id: 1174, name: 'phone', price: 850, quantity:5 },
  { id: 4521, name: 'laptop', price: 700, quantity:10 },
  { id: 8796, name: 'watch', price: 150, quantity:20 }
];

// GET request for /products - Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST request for /products - Add a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name:name, price:price};
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
